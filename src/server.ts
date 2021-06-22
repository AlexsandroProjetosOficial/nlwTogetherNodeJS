import express, { urlencoded } from 'express';
import 'reflect-metadata';
import './database';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(router);

app.listen(3000, () => console.log('Server is running'));