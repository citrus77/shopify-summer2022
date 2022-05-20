import React, { useLayoutEffect, useState } from 'react';
import './css/App.css';

import {
    Form,
    Header,
    Responses,
} from '.';

const App = () => {
    const [responses, setResponses] = useState([]);
    const [toggle, setToggle] = useState(false);    
    const [engine, setEngine] = useState('text-davinci-002');

    useLayoutEffect(() => {
        const storedResponses = localStorage.getItem('responses');
        if (storedResponses) {
            setResponses(JSON.parse(storedResponses));
        } // end if
    }, [toggle]);
    
    return (
        <div id='app-container'>
            <Header />
            <Form
                engine={ engine }            
                responses={ responses }
                setResponses={ setResponses }
                toggle={ toggle }
            />
            <Responses responses={ responses } />
        </div>
    ); // end return
}; // App

export default App;
