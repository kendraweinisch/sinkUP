import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import questiondata from "../questiondata"

const Question = props => {
    return (
        <div>
            <span>
                {props.question}
            </span>
            <div>
                {questiondata.answers.map(answer=><span onClick={()=>props.selectfn(answer)}>{answer}</span>)}
                </div>
        </div>
    )
}
export default Question