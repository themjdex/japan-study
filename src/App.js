import './App.css';
import React from "react";
import {Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import GrammarPage from "./pages/GrammarPage/GrammarPage";
import VocabularyPage from "./pages/VocabularyPage/VocabularyPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Layout from "./pages/Layout/Layout";
import BeginnerPage from "./pages/BeginnerPage/BeginnerPage";
import IntermediatePage from "./pages/IntermediatePage/IntermediatePage";
import AdvancedPage from "./pages/AdvancedPage/AdvancedPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='grammar' element={<GrammarPage/>}/>
                <Route path='grammar/beginner' element={<BeginnerPage/>}/>
                <Route path='grammar/intermediate' element={<IntermediatePage/>}/>
                <Route path='grammar/advanced' element={<AdvancedPage/>}/>
                <Route path='vocabulary' element={<VocabularyPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
