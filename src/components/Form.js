import React, { useState } from 'react';
import './css/Form.css';
import { callApi } from '.';

const Form = ({ setResponse, setResponses }) => {
    const [engine, setEngine] = useState('text-davinci-002');
    const [newQuery, setNewQuery] = useState('');

    const responses = [];
    console.log(responses)

    const _handleQuery = async (e) => {
        e.preventDefault();
        const response = await callApi(newQuery, engine);
        if (response) {
            setResponse(response);
            const respObj = {
                query: newQuery,
                response,
            } // respObj
            responses.push(respObj);
            setResponses(responses);
            setNewQuery('');
        } else {
            setResponse('Error');
        }; // end if/else
    }; // _handleQuery

    return (
        <>
            <form id='query-form' onSubmit={_handleQuery}>
                <fieldset id='query'>
                    <label className='label' htmlFor='query'>Query:</label>
                    <input className='query-entry' type='text' placeholder='type your query' onChange = {(e) => setNewQuery(e.target.value)} />
                </fieldset>
                <button id='query-submit' type='submit'>Submit</button>
            </form>
        </>
    ); // end return
}; //Form

export default Form;