 News-Feedly

News-Feedly is a web application that fetches news from various sources and displays them in a user-friendly manner. It includes features such as user login/signup, a search bar, and source filtering. The backend is built using Node.js, Express.js, and MongoDB, while the frontend is built using React.

## Features

- Fetch news from a news API and display them.
- User authentication with login/signup functionality.
- Search functionality to find specific news.
- Filter news by source.
- Responsive and visually appealing UI.

## Project Structure

```bash
news-api-backend/
├── package-lock.json
├── package.json
├── passport-config.js
├── server.js

news-feedly-frontend/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Filter.js
│   │   ├── Login.css
│   │   ├── Login.js
│   │   ├── NewsList.css
│   │   ├── NewsList.js
│   │   ├── SearchBar.js
│   │   ├── Signup.css
│   │   ├── Signup.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   ├── theme.js
├── package-lock.json
├── package.json
├── .gitignore