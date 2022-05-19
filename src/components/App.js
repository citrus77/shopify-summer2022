import React, { useState } from 'react';
import './css/App.css';

import {
    Form,
} from '.';

const App = () => {
    
    const [response, setResponse] = useState('');

    return (
        <div>
            <Form response={ response } setResponse={ setResponse } />
        </div>
    ); // end return
}; // App

export default App;
