import React from 'react';
import './css/SingleResp.css';

const SingleResp = ({ response, responses, setResponses }) => {
    const { date, engine, prompt, resp } = response;

    const _handleDelete = (e) => {
        setResponses((responses) => responses.filter(r => r !== response))
    };

    return (
        <div className='resp-card'>
            <div className='resp-card-info'>
                <span>{ date }</span>
                <span>{ engine }</span>
            </div>
            
            <span className='prompt'><h4>Prompt: </h4>{ prompt }</span>
            <span className='resp'><h4>Response: </h4>{ resp }</span>
            <button className='delete-button' onClick={ _handleDelete }>
                <img src='./images/trash.png' height='32' width='32' alt='Delete' />
            </button>
        </div>
    );
}

export default SingleResp;