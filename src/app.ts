import express, { NextFunction, Request, Response } from 'express';
import config from 'config';
import connectToDb from './utils/connectToDb';
import log from './utils/logger';

import appRouter from './routes'

const app = express();
app.use(appRouter)
const port = config.get<number>('port')

app.listen(port, () => {
    connectToDb()
    console.log('http://localhost:1333');
    log.info(`http://localhost:${port}`)
})