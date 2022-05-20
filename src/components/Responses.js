import React from 'react';
import { uid } from 'react-uid';
import './css/Responses.css';
import { SingleResp } from '.';

const Responses = ({ responses }) => {
    if (responses) {
        return (<div id='resp-container'>{
            responses.map(response => <SingleResp
                key={uid(response)}
                response={response}
            />) // end map
            .reverse()        
        }</div>);
    } else {
        return (<div id='resp-container'>No responses yet</div>);
    } // end if    
}; // Responses

export default Responses;