import mongoose, { ConnectionOptions, Mongoose } from 'mongoose';

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.3veff.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;
const mongooseOptions: ConnectionOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}

const connect = (): Promise<Mongoose> => {
    return mongoose.connect(uri, mongooseOptions);
}

const disconnect = (): Promise<void> => {
    return mongoose.connection.close();
}

export default { connect, disconnect };
