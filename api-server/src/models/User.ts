import { Document, Model, Schema, model } from 'mongoose';

export interface IUser {
    name: string;
    email: string;
    picture: string;
    contacts: any;
}

type UserDoc = IUser & Document;
type UserModel = Model<UserDoc>

const schema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true},
    picture: { type: String, required: true },
    contacts: { type: Object, required: true }
}, { id: false, strict: 'throw', timestamps: true });

const User: UserModel = model<UserDoc, UserModel>('User', schema);

export default User;
