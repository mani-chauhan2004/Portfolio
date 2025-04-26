import express from 'express';
import { db } from './config/db';
import messageRoutes from './routes/messageRoutes'
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
db();

app.use(cors({
    origin: process.env.FRONTEND_BASE_URL,
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.status(200).json({ message:"Running properly" });
})
app.use('/message/api', messageRoutes);

app.listen(process.env.PORT || 8080, () => {
    console.log(`The app is running on port ${process.env.PORT || 8080}`);
});