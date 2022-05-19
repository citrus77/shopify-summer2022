import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import './css/Form.css';

const apiKey = process.env.REACT_APP_OPENAI_KEY;

const Form = ({ response, setResponse }) => {
    const [engine, setEngine] = useState('text-davinci-002');
    const [newQuery, setNewQuery] = useState('');

    const configuration = new Configuration({
        apiKey,
    });
    const openai = new OpenAIApi(configuration);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            prompt: newQuery,
            temperature: 0.9,
            max_tokens: 64,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        } //data

        try {
            const resp = await openai.createCompletion(engine, data);
            if (resp) {
                setResponse(resp.data.choices[0].text);
                console.log(resp.data.choices[0].text);
            } else {
                setResponse('Error')
            }; // end if/else    
        } catch (error) {
            console.error(error);
        }; // end try-catch        
    }; // handleSubmit

    console.log(response)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor='query'>Query:</label>
                    <input id='query-form' type='text' placeholder='type your query' onChange = {(e) => setNewQuery(e.target.value)} />
                </fieldset>
                <button id='query-submit' type='submit'>Submit</button>
            </form>
            <div>
                {response}
            </div>
        </>
    ); // end return
}; //Form

export default Form;