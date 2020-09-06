import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import { successhandler, errorhandler } from './middlewares';
import router from './router';
import db from './db';

const app = express();

app.set('port', process.env.API_PORT || 4000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

const corsOptions = {
    methods: 'GET,PUT,PATCH,POST,DELETE, OPTIONS',
    allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin', 'Authorization'],
};
app.use(cors(corsOptions));

db.connect().catch(err => {
    console.log('Mongo connection Error', err);
    process.exit(0);
});

process.on('SIGINT', async () => {
    console.log('Gracefully shutting down');
    await db.disconnect();
    process.exit(0);
});

app.use(router);
app.use(successhandler);
app.use(errorhandler);

export default app;