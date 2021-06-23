import express, { NextFunction, Request, Response, urlencoded } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import './database';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(router);
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof Error) {
        return res.status(400).json({
            error: error.message
        });
    }

    return res.status(500).json({
        status: 'Error',
        message: 'Internal Server Error.'
    });
});

app.listen(3000, () => console.log('Server is running'));