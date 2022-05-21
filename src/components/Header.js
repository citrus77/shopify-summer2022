import React from 'react';
import './css/Header.css';
import { EngineSelect } from '.';

const Header = ({ setEngine }) => {
    return (
        <div id='header-container'>
            <h1>Chat with your AI Overlord</h1>
            <EngineSelect setEngine={ setEngine } />
        </div>
    );
};

export default Header;