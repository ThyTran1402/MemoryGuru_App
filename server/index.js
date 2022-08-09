import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postsRouters from './routes/posts.js';

// https://expressjs.com/en/guide/routing.html

const app = express();
app.use('/posts', postsRouters);

app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

// https://www.mongodb.com/atlas/database

const CONNECTION_url = 'mongodb+srv://thytran_1402:@Ttmt140201@cluster0.h3oscde.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// https://mongoosejs.com/docs/connections.html
mongoose.connect(CONNECTION_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
    .catch((error) => console.log(error.message));
    
mongoose.set('useFindAndModify', false);