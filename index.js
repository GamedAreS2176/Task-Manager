import express from 'express';
import { getConnection } from './config/connection.js';
import { router } from './routes/route.js';

const app=express();

getConnection('mongodb://127.0.0.1:27017/express-proj-app-2');
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use('/tasks',router);

app.listen(3000,()=>console.log("Hey there"));
