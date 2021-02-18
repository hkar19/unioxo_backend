import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import defaultRouter ,{ apiRouter } from './routes';
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', defaultRouter);
app.use('/api', apiRouter);


export default app;