import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import { successhandler } from './middlewares';
import router from './router';

const app = express();

app.set('port', process.env.API_PORT || 4000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

const corsOptions = {
    methods: 'GET,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type',
};
app.use(cors(corsOptions));

process.on('SIGINT', async () => {
    console.log('Gracefully shutting down');
    process.exit(0);
});

app.use(router);
app.use(successhandler);

export default app;