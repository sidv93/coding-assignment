import { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import { GeneralError } from '../utils/errors';

interface IRequest extends Request {
    user?: any;
}

const verifyAuthToken = async (req: IRequest, res: Response, next: NextFunction): Promise<void> => {
    try {
        console.log('in verify token');
        const accessToken = req.headers['authorization'];
        console.log('access token', accessToken);
        const { data } = await axios({
            url: 'https://www.googleapis.com/oauth2/v2/userinfo',
            method: 'get',
            headers: {
                Authorization: String(accessToken),
            },
        });
        console.log('data', data);
        req.user = data;
        return next();
    } catch (e) {
        console.log('Error when verifying access token', e);
        return next(new GeneralError('Error when authenticating user'));
    }
}

export default verifyAuthToken;
