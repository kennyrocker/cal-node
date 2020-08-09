import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from './config/logger';


// CONFIG
const port = process.env.PORT || 6080;
const app = express();
// TODO: fix the CORS for certain origins
const corsOpt = {
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT']
}


// SETUP
app.use(cors(corsOpt));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// SET ROUTES
app.get('/alive', (req: Request, res: Response) => {  res.status(200).json({ status: 'OK' }) });


// INIT
app.listen(port, () => {
    logger.log('info', `Cal Node Server started at port ${port}`);
});

