import React, { useState } from 'react';
import './css/App.css';

import {
    Form,
    Response,
} from '.';

const App = () => {
    
    const [response, setResponse] = useState('');

    return (
        <div id='app-container'>
            <Form setResponse={ setResponse } />
            <Response response={ response } />
        </div>
    ); // end return
}; // App

export default App;
