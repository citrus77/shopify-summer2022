import React, { useEffect, useLayoutEffect, useState } from 'react';
import './css/App.css';

import {
    Form,
    Header,
    Responses,
} from '.';

const App = () => {
    const [responses, setResponses] = useState([]);
    const [engine, setEngine] = useState('text-davinci-002');

    useEffect(() => {        
        localStorage.setItem('responses', JSON.stringify(responses));
    }, [responses]); // end useEffect

    useLayoutEffect(() => {
        const storedResponses = localStorage.getItem('responses');
        if (storedResponses) {
            setResponses(JSON.parse(storedResponses));
        } // end if
    }, []); // end useLayoutEffect
    
    return (
        <div id='app-container'>
            <Header setEngine={ setEngine } />
            <Form
                engine={ engine }            
                responses={ responses }
                setResponses={ setResponses }
            />
            <Responses responses={ responses } />
        </div>
    ); // end return
}; // App

export default App;
