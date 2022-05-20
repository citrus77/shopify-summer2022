import React from 'react';
import './css/SingleResp.css';

const SingleResp = ({ response }) => {
    const { date, prompt, resp } = response;
    return (
        <div className='resp'>
            <span className='date'>{ date }</span>
            <span className='prompt'><h4>Prompt: </h4>{ prompt }</span>
            <span><h4>Response: </h4>{ resp }</span>
        </div>
    );
}

export default SingleResp;