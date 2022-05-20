import React, { useState } from 'react';
import './css/Form.css';
import { callApi } from '.';

const Form = ({ engine, responses, setResponses }) => {
    const [newQuery, setNewQuery] = useState('');

    const _handleQuery = async (e) => {
        e.preventDefault();
        const response = await callApi(newQuery, engine);
        if (response) {
            const respObj = {
                prompt: newQuery,
                resp: response,
                date: new Date().toLocaleString(),
            } // respObj
            setResponses((responses) => [...responses, respObj]);
            localStorage.setItem('responses', JSON.stringify(responses));
            setNewQuery('');
        } // end if
    }; // _handleQuery

    return (
        <>
            <form id='query-form' onSubmit={_handleQuery}>
                <fieldset id='query'>
                    <label className='label' htmlFor='query'>Prompt:</label>
                    <input className='query-entry' type='text' placeholder='type your query' onChange = {(e) => setNewQuery(e.target.value)} value={ newQuery } />
                </fieldset>
                <button id='query-submit' type='submit'>Submit</button>
            </form>
        </>
    ); // end return
}; //Form

export default Form;