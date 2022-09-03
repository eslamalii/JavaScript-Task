import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import Words from './routes/Words';
import Rank from './routes/Rank';
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/words" element={<Words />} />
            <Route path="/rank" element={<Rank />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
