import React from 'react';
import { Configuration, OpenAIApi } from 'openai';
// import { Routes, Route } from 'react-router-dom';
import './css/App.css';
// import {
//     Home
// } from '.';
const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
const configuration = new Configuration({
    apiKey,
});

const App = () => {
    return (
        <div id='app'>
            <h1>Hello World!</h1>
        </div>
        // <Routes>
        //     <Route path='/' element={<Home />} />
        // </Routes>
    );
};

export default App;
