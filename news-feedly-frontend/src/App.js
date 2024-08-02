import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import axios from 'axios';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSource, setFilterSource] = useState('');
  const [sources, setSources] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/get-articles');
        setArticles(response.data.articles);
        const uniqueSources = [...new Set(response.data.articles.map(article => article.source))];
        setSources(uniqueSources);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterSource ? article.source === filterSource : true)
  );

  return (
    
      <div className="App">
        {/* <nav>
          <ul className="navlist">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
        </nav> */}
<nav style={{
    backgroundColor: '#f0f8ff', // Light blue background
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin:'20px'
}}>
    <div style={{ display: 'flex', justifyContent: 'flex-start', flex: 1 }}>
        <Link to="/" style={{
            textDecoration: 'none',
            color: '#007bff', // Blue color for links
            fontWeight: 'bold',
            margin: '0'
        }}>Home</Link>
    </div>
    <div style={{ display: 'flex', gap: '15px', justifyContent: 'flex-end', flex: 1 }}>
        <Link to="/login" style={{
            textDecoration: 'none',
            color: '#007bff', // Blue color for links
            fontWeight: 'bold'
        }}>Login</Link>
        <Link to="/signup" style={{
            textDecoration: 'none',
            color: '#007bff', // Blue color for links
            fontWeight: 'bold'
        }}>Signup</Link>
    </div>
</nav>

  
        <Routes>
          <Route path="/" element={
            <>
              <h1>News Feedly</h1>
              <SearchBar onSearch={setSearchTerm} />
              <Filter onFilterChange={setFilterSource} sources={sources} />
              <NewsList articles={filteredArticles} />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    
  );
};

export default App;
