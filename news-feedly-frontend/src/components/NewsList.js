
import React from 'react';
import './NewsList.css'; 

const NewsList = ({ articles }) => {
  if (articles.length === 0) {
    return <p>No articles available.</p>;
  }

  return (
    <div className="news-list">
      {articles.map((article, index) => (
        <div key={index} className="news-item">
          <h2>{article.title || 'No Title'}</h2>
          <p>{article.description || 'No Description'}</p>
          {article.url ? (
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          ) : (
            <p>No link available</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default NewsList;
