// routes/news.js
const express = require('express');
const axios = require('axios');
const News = require('../models/News'); // This is our Mongoose model for storing news

const router = express.Router();

// Define a route to fetch news articles
router.get('/fetch', async (req, res) => {
    try {
        // Make a request to the news API
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                apiKey: process.env.NEWS_API_KEY, // Your API key for the news API
                country: 'in', // Country code for India
            },
        });

        // Get the list of articles from the API response
        const articles = response.data.articles;

        // Loop through each article and save it to the database
        for (const article of articles) {
            const newArticle = new News({
                title: article.title,
                description: article.description,
                url: article.url,
                publishedAt: article.publishedAt,
            });
            await newArticle.save(); // Save the article to the database
        }

        // Send a success message
        res.status(200).json({ message: 'News articles saved to database' });
    } catch (error) {
        // Handle any errors
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

// Export the router so it can be used in other files
module.exports = router;
