import './App.css';
import React from "react";
import {Routes, Route, Link} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import GrammarPage from "./pages/GrammarPage";
import VocabularyPage from "./pages/VocabularyPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
        <header>
            <Link to='/'>Home</Link>
            <Link to='/grammar'>Grammar</Link>
            <Link to='/vocabulary'>Vocabulary</Link>
        </header>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/grammar' element={<GrammarPage />} />
            <Route path='/vocabulary' element={<VocabularyPage />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    </div>
  );
}

export default App;
