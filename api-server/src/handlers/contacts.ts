import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import path from 'path';
import secrets from '../secrets.json';

const { google } = require('googleapis');
const people = google.people('v1');
const { authenticate } = require('@google-cloud/local-auth');

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




export const fetchContacts = async (req: Request, res: Response, next: NextFunction) => {
    // Return user info (name, email, imageUrl) and contacts
    // Get acessToken
    // Pass it to contacts api
    // Save contacts to db
    // send contacts

    const accessToken = "ya29.a0AfH6SMAoxxWIjEqOYS7ANx91VJoP4SYHhb5v3gOHPabjC0BuPrQZxobe9BvHqclO1PA2DBFGSGZkiWv49S8xlb821dA5xUeHoKvhBa1YvpCZtr_pQDp4TeaS2QliLpazXy-dHxtNKJIDW251GKvNJJTKM5whR_TOzgs";
    const { data } = await axios({
        url: 'https://www.googleapis.com/oauth2/v2/userinfo',
        method: 'get',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    console.log('data', data);
    const email = data.email;
    try {
        const contacts = await axios({
            url: `https://www.google.com/m8/feeds/contacts/default/thin?alt=json&access_token=${accessToken}&max-results=700&v=3.0`,
            method: 'get',
            // headers: {
            //     Authorization: `Bearer ${accessToken}`,
            // },
        });
        // const {
        //     data: { connections },
        // } = await people.people.connections.list({
        //     personFields: ['names', 'emailAddresses'],
        //     resourceName: 'people/me',
        //     pageSize: 10,
        // });
        console.log('contacts', contacts);
        return res.status(200).json({
            data
        });
    } catch (e) {
        console.log('Error', e);
    }

}

export const deleteContacts = (req: Request, res: Response, next: NextFunction) => {
    // delete contact from db
    // send response
}
