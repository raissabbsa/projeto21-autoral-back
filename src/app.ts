import 'reflect-metadata';
import 'express-async-errors';
import express, { Express } from 'express';
import cors from 'cors';
import { connectDb } from './config/database';
import {
  authenticationRouter,
} from '@/routers';

const app = express();

app
  .use(cors())
  .use(express.json())
  .use('/auth', authenticationRouter)
  
export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}
  
export default app;
