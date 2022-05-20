import React from 'react';
import './css/Response.css';
import { SingleResp } from '.';

const Responses = ({ responses }) => {
    return (<div id='resp-container'>{
        responses.map(response => <SingleResp
            key={response.date}
            response={response}
        />
        )
    }</div>);
}; // Responses

export default Responses;