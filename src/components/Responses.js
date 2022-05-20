import React from 'react';
import { uid } from 'react-uid';
import './css/Responses.css';
import { SingleResp } from '.';

const Responses = ({ responses, setResponses }) => {
    if (responses && responses.length > 0) {
        return (<div id='resp-container'>{
            responses.map(response => <SingleResp
                key={ uid(response) }
                response={ response }
                responses={ responses }
                setResponses={ setResponses }
            />) 
            .reverse()        
        }</div>);
    } else {
        return (<div id='resp-container'>
                <span>No responses yet</span>
        </div>);
    } 
}; 

export default Responses;