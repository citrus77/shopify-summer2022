import React, { useState } from 'react';
import './css/App.css';

import {
    Form,
    Header,
    Responses,
} from '.';

const App = () => {    
    const [response, setResponse] = useState({});
    const [responses, setResponses] = useState([]);

    return (
        <div id='app-container'>
            <Header />
            <Form
                responses={ responses }
                setResponse={ setResponse }
                setResponses={ setResponses }
            />
            <Responses responses={ responses } />
        </div>
    ); // end return
}; // App

export default App;
