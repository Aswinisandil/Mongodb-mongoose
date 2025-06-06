import express from 'express'
import connectDB from './db/mongodb.js';
import {singleDoc} from './models/movies.js';

const app = express();
const port = process.env.PORT || 8000;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/movies';

singleDoc();

connectDB(DATABASE_URL);

app.listen(port, ()=>{
    console.log(`Server running in localhost:${port}`)
})