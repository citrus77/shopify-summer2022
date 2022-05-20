import React from 'react';
import './css/EngineSelect.css';

const EngineSelect = ({ setEngine }) => {
    const _handleChange = (e) => {
        e.preventDefault();
        setEngine(e.target.value);
    }; // end _handleChange

    return (
        <div>
            <label htmlFor='engine-select'>Select your overlord:</label>
            <select id='engine-select' onChange={ _handleChange } >           
                <option value='text-davinci-002'>Davinci</option>
                <option value='text-curie-001'>Curie</option>
                <option value='text-babbage-001'>Babbage</option>
                <option value='text-ada-001'>Ada</option>
            </select>
        </div>
    ); // end return
};// end EngineSelect

export default EngineSelect;