const express = require('express');
const axios = require('axios');
const News = require('../models/News'); 

const router = express.Router();


router.get('/fetch', async (req, res) => {
    try {
        // Make a request to the news API
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                apiKey: process.env.NEWS_API_KEY, 
                country: 'in', 
            },
        });

        
        const articles = response.data.articles;

        
        for (const article of articles) {
            const newArticle = new News({
                title: article.title,
                description: article.description,
                url: article.url,
                publishedAt: article.publishedAt,
            });
            await newArticle.save(); 
        }

        res.status(200).json({ message: 'News articles saved to database' });
    } catch (error) {
        
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

module.exports = router;
