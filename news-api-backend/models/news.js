// Import the mongoose module
const mongoose = require('mongoose');

// Define the schema for news articles
const NewsSchema = new mongoose.Schema({
    title: String,        // Title of the news article
    description: String,  // Description of the news article
    url: String,          // URL to the full news article
    publishedAt: Date,    // Date when the article was published
});

// Create a model based on the schema
module.exports = mongoose.model('News', NewsSchema);
