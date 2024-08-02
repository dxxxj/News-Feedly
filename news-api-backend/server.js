const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cron = require('node-cron');
const mongoose = require('mongoose');
const cors = require('cors');
const newsRouter = require('./routes/news');
const getArticlesRouter = require('./routes/getArticles');
const authRouter = require('./routes/auth'); // Import the auth routes

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1);
    }
};

connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/news', newsRouter);
app.use('/api/get-articles', getArticlesRouter);
app.use('/api/auth', authRouter); // Add the auth routes

// Schedule cron job to fetch news every hour
cron.schedule('0 * * * *', async () => {
    try {
        await axios.get('http://localhost:5000/api/news/fetch');
        console.log('News fetched and saved');
    } catch (error) {
        console.error('Error fetching news:', error);
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
