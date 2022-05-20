import React from 'react';
import './css/SingleResp.css';

const SingleResp = ({ response }) => {
    const { date, engine, prompt, resp } = response;
    return (
        <div className='resp-card'>
            <div className='resp-card-info'>
                <span>{ date }</span>
                <span>{ engine }</span>
            </div>
            
            <span className='prompt'><h4>Prompt: </h4>{ prompt }</span>
            <span className='resp'><h4>Response: </h4>{ resp }</span>
        </div>
    );
}

export default SingleResp;