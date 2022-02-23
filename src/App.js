import './App.css';
import React from "react";
import {Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import GrammarPage from "./pages/GrammarPage/GrammarPage";
import VocabularyPage from "./pages/VocabularyPage/VocabularyPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Layout from "./pages/Layout/Layout";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='grammar' element={<GrammarPage/>}/>
                <Route path='vocabulary' element={<VocabularyPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
