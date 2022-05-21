import React from 'react';
import { uid } from 'react-uid';
import './css/Responses.css';
import { SingleResp } from '.';

const Responses = ({ responses, setResponses }) => {
    const _handleClearAll = (e) => {
        e.preventDefault();
        setResponses([]);
    };

    if (responses && responses.length > 0) {
        return (
            <>
                <div id='clear'>
                    <button className='clear-all' onClick={ _handleClearAll }>Clear responses</button>
                </div>
                <div id='resp-container'>
                    {
                        responses.map(response => <SingleResp
                            key={ uid(response) }
                            response={ response }
                            responses={ responses }
                            setResponses={ setResponses }
                        />) 
                        .reverse()        
                    }
                </div>
            </>
        );
    } else {
        return (
            <>
                <div id='clear' />
                <div id='resp-container'>
                        <span>Responses will appear here</span>
                </div>
            </>
            
        );
    } 
}; 

export default Responses;