import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import session from 'express-session';
import MongoDbStore from 'connect-mongodb-session';
import connectDB from './utils/connectDb.js';
import user from './routes/user.js';
import admin from './routes/admin.js';
import product from './routes/product.js';

const app = express();
const store = MongoDbStore(session);

dotenv.config();
connectDB();

app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new store({
      uri: process.env.MONGO_URI,
      collection: 'sessions',
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

app.use('/admin', admin);
app.use('/user', user);
app.use('/', product)

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});