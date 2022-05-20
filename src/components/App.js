import React, { useState } from 'react';
import './css/App.css';

import {
    Form,
    Response,
} from '.';

const App = () => {
    
    const [response, setResponse] = useState('');
    const [responses, setResponses] = useState([]);

    console.log(responses, 'responses')

    return (
        <div id='app-container'>
            <Form setResponse={ setResponse } setResponses={ setResponses }/>
            <Response response={ response } />
        </div>
    ); // end return
}; // App

export default App;
