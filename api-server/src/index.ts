import dotnev from 'dotenv';
dotnev.config();

import app from './app';

app.listen(app.get('port'), (): void => {
    console.log(`API server running at port ${app.get('port')}`);
});
