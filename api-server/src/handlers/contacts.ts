import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { ApiSuccess } from '../utils';
import { GeneralError, NotFound } from '../utils/errors';
import { User } from '../models';

// const { google } = require('googleapis');
// const people = google.people('v1');
// const { authenticate } = require('@google-cloud/local-auth');

// (async () => {
//     const auth = await authenticate({
//         keyfilePath: path.join(__dirname, '../secrets.json'),
//         scopes: ['https://www.googleapis.com/auth/contacts'],
//     });
//     google.options({ auth });
// })();

// const oauth2Client = new google.auth.OAuth2(
//     "696735942028-gki3oll78lvl22mf6k9bdf0pt9bcoqvg.apps.googleusercontent.com",
//     "G9E_mpRBEhZ4QIRnSDsIkorO",
//     "http://localhost:3000"
// );

// // generate a url that asks permissions for Blogger and Google Calendar scopes
// const scopes = [
//     'https://www.googleapis.com/auth/blogger',
//     'https://www.googleapis.com/auth/calendar',
//     'https://www.googleapis.com/auth/contacts'
// ];

// const url = oauth2Client.generateAuthUrl({
//     // 'online' (default) or 'offline' (gets refresh_token)
//     access_type: 'offline',

//     // If you only need one scope you can pass it as a string
//     scope: scopes
// });

interface IRequest extends Request {
    user?: any;
}

const RANDOM_USERS_API_URL = 'https://randomuser.me/api/?results=100&inc=name,email,phone,picture,id';

interface RandomUsers {
    results: Array<RandomUser>;
    info: any;
}

interface RandomUser {
    name: any;
    email: string;
    picture: any;
    id: string;
    phone: string;
}


export const fetchContacts = async (req: IRequest, res: Response, next: NextFunction): Promise<void> => {
    const { email, name, picture } = req.user;
    try {
        const user = await User.findOne({ email: String(email) }).lean().exec();
        if (user) {
            console.log(`${user.contacts.length} contacts found for ${email}`);
            const payload = {
                name,
                email,
                picture,
                contacts: user.contacts
            };
            return next(new ApiSuccess(`${user.contacts.length} contacts found for ${email}`, payload));
        }
        try {
            const randomUsers = await axios.get<RandomUsers>(RANDOM_USERS_API_URL);
            const contacts = randomUsers.data.results.map((item: any) => {
                item.picture = item.picture.thumbnail;
                item.name = `${item.name.first} ${item.name.last}`;
                item.id = `${item.id.name}${item.id.value}`;
                item.id = item.id === 'null' || uuid();
                return item;
            });
            console.log('first', contacts[0]);
            const payload = {
                email,
                name,
                picture,
                contacts
            };

            const userModel = new User(payload);
            try {
                await userModel.save();
                console.log('User and contacts saved');
                return next(new ApiSuccess(`${contacts.length} contacts found for ${email}`, payload));
            } catch (e) {
                console.log('Error when saving contact', e);
                return next(new GeneralError('Error when fetching contacts'));
            }
        } catch (e) {
            console.log('Error while fetching random users', e);
            return next(new GeneralError('Error when fetching contacts'));
        }
    } catch (e) {
        console.log('Error when fetching contacts', e);
        return next(new GeneralError('Error when fetching contacts'));
    }
}

export const deleteContacts = async (req: IRequest, res: Response, next: NextFunction): Promise<void> => {
    const { email } = req.user;
    const { id } = req.params;

    try {
        const user = await User.findOne({ email: String(email) }).exec();
        if (!user) {
            console.log('User does not exist');
            return next(new NotFound('User does not exist'));
        }
        if (user) {
            const indexOfContact = user.contacts.findIndex((item: RandomUser) => item.id === id);
            if (indexOfContact < 0) {
                console.log('Contact of id does not exist');
                return next(new NotFound(`Contact of id ${id} does not exist`));
            }
            const contacts = [...user.contacts];
            contacts.splice(indexOfContact, 1);
            user.contacts = contacts;
            try {
                user.save()
                return next(new ApiSuccess('Contact deleted successfully', {}));
            } catch (e) {
                console.log('Error when deleting contact', e);
                return next(new GeneralError('Error when deleting contact'));
            }
        }

    } catch (e) {
        console.log('Error while fetching contact information', e);
        return next(new GeneralError('Error while deleting contact'));
    }
}
