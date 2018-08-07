// This page needs zip code, man looking for man, age range, user name and password setup

import React from 'react';
import {  FormControl, FormGroup, ControlLabel, Jumbotron } from 'react-bootstrap';
import Question from "./Question";
import './Quiz.css';
import questiondata from "../questiondata"

export default class Userform extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
        this.selectanswer = this.selectanswer.bind(this);
        this.state = {
            name: "", email: "", photo: "", answers: []
        };
    }

    getValidationState() {
        const namelength = this.state.name.length;
        if (namelength > 10) return 'success';
        else if (namelength > 0) return 'error';
        return null;
    }

    selectanswer(answer) {
        let state = Object.assign({}, this.state)
        state.answers.push(answer)
        this.setState(state)
    }

    handleChange(e, field) {
        this.setState({ [field]: e.target.value });
    }

  
    render() {
        return (
            <div>
            <Jumbotron>
            <h1>Getting to Know You</h1>
           </Jumbotron>;
         

            <FormGroup>
                controlId="formBasicText"
                validationState={this.getValidationState()}
            
                <ControlLabel>Please enter your first name</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.name}
                    placeholder="Enter name"
                    onChange={e => this.handleChange(e, "name")}
                />
                <FormControl
                    type="text"
                    value={this.state.email}
                    placeholder="Enter email address"
                    onChange={e => this.handleChange(e, "email")}
                />
                <FormControl
                    type="text"
                    value={this.state.photo}
                    placeholder="Enter link to photo"
                    onChange={e => this.handleChange(e, "photo")}
                />
                <FormControl.Feedback />
               
                {questiondata.questions.map(question => (<Question question={question} selectfn={this.selectanswer} />))}
                <ControlLabel>Scale of 1-4</ControlLabel>
            </FormGroup>
            
            </div>
        );
    }
}                                  