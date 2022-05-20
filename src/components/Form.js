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
                engine,
            } 
            setResponses((responses) => [...responses, respObj]);
            setNewQuery('');
        } 
    }; 

    return (
        <>
            <form id='query-form' onSubmit={_handleQuery}>
                <input className='query-entry' type='text' placeholder='type your query' onChange = {(e) => setNewQuery(e.target.value)} value={ newQuery } />
                <button id='query-submit' type='submit' disabled={ !newQuery } text='Submit'>Submit</button>
            </form>
        </>
    ); 
}; 

export default Form;