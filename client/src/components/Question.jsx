import React, { Component } from 'react';
import { Row, Col, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import questiondata from "../questiondata"
const ANSWERS = questiondata.answers;

function renderDropdownButton() {
    return (
        <DropdownButton
        bsStyle="Primary"
      title={"Choose an answer"}
    //   id={`dropdown-basic-${}`}
    >
    {ANSWERS.map((answer, key)=><MenuItem eventKey={key}>{answer}</MenuItem>)}
</DropdownButton>
    )
}

const Question = props => {
    return (
        <div>
            <span>
                {props.question}
            </span>
            <div>
                {renderDropdownButton()}
                </div>
        </div>
    )
}
export default Question