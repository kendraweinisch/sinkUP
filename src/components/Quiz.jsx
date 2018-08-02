// This page needs zip code, man looking for man, age range, user name and password setup

import React from 'react';
import { Image, HTMLDivElement, FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
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

            <FormGroup
                controlId="formBasicText"
                validationState={this.getValidationState()}
            >
                <ControlLabel>Please enter your first name</ControlLabel>
                <FormControl
                    type="text"
                    value={this.state.name}
                    placeholder="Enter text"
                    onChange={e => this.handleChange(e, "name")}
                />
                <FormControl
                    type="text"
                    value={this.state.email}
                    placeholder="Enter text"
                    onChange={e => this.handleChange(e, "email")}
                />
                <FormControl
                    type="text"
                    value={this.state.photo}
                    placeholder="Enter text"
                    onChange={e => this.handleChange(e, "photo")}
                />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
                {questiondata.questions.map(question => (<Question question={question} selectfn={this.selectanswer} />))}
            </FormGroup>

        );
    }
}

// render(<FormExample />);





//                                         <div class="form-group">
//                                             <label for="picLink">Link to Your Photo (required)</label>
//                                             <input type="html-link" class="form-control" id="photo-link" placeholder="(e.g., http://People Magazine's Hottest Man Alive)">
//             </div>
//                                             <h3>On a scale of 1-5, how much do you agree with these statements?</h3>
//                                             <div class="form-group">
//                                                 <label for="exampleFormControlSelect1">I see myself being a parent.</label>
//                                                 <select class="form-control" id="q1">
//                                                     <option>1</option>
//                                                     <option>2</option>
//                                                     <option>3</option>
//                                                     <option>4</option>
//                                                     <option>5</option>
//                                                 </select>
//                                             </div>
//                                             <div class="form-group">
//                                                 <label for="exampleFormControlSelect1">I see myself as a traveler.</label>
//                                                 <select class="form-control" id="q2">
//                                                     <option>1</option>
//                                                     <option>2</option>
//                                                     <option>3</option>
//                                                     <option>4</option>
//                                                     <option>5</option>
//                                                 </select>
//                                             </div>
//                                             <div class="form-group">
//                                                 <label for="exampleFormControlSelect1">I see myself as a homebody.</label>
//                                                 <select class="form-control" id="q3">
//                                                     <option>1</option>
//                                                     <option>2</option>
//                                                     <option>3</option>
//                                                     <option>4</option>
//                                                     <option>5</option>
//                                                 </select>
//                                             </div>
//                                             <div class="form-group">
//                                                 <label for="exampleFormControlSelect1">I see myself as a night owl.</label>
//                                                 <select class="form-control" id="q4">
//                                                     <option>1</option>
//                                                     <option>2</option>
//                                                     <option>3</option>
//                                                     <option>4</option>
//                                                     <option>5</option>
//                                                 </select>
//                                             </div>
//                                             <div class="form-group">
//                                                 <label for="exampleFormControlSelect1">I see myself as even-tempered.</label>
//                                                 <select class="form-control" id="q5">
//                                                     <option>1</option>
//                                                     <option>2</option>
//                                                     <option>3</option>
//                                                     <option>4</option>
//                                                     <option>5</option>
//                                                 </select>
//                                             </div>
//                                             <div class="form-group">
//                                                 <label for="exampleFormControlSelect1">I see myself as ambitious.</label>
//                                                 <select class="form-control" id="q6">
//                                                     <option>1</option>
//                                                     <option>2</option>
//                                                     <option>3</option>
//                                                     <option>4</option>
//                                                     <option>5</option>
//                                                 </select>
//                                             </div>
//                                             <div class="form-group">
//                                                 <label for="exampleFormControlSelect1">I see myself as a beach person.</label>
//                                                 <select class="form-control" id="q7">
//                                                     <option>1</option>
//                                                     <option>2</option>
//                                                     <option>3</option>
//                                                     <option>4</option>
//                                                     <option>5</option>
//                                                 </select>
//                                             </div>
//                                             <div class="form-group">
//                                                 <label for="exampleFormControlSelect1">I see myself as a reader.</label>
//                                                 <select class="form-control" id="q8">
//                                                     <option>1</option>
//                                                     <option>2</option>
//                                                     <option>3</option>
//                                                     <option>4</option>
//                                                     <option>5</option>
//                                                 </select>
//                                             </div>
//                                             <div class="form-group">
//                                                 <label for="exampleFormControlSelect1">I see myself as humorous.</label>
//                                                 <select class="form-control" id="q9">
//                                                     <option>1</option>
//                                                     <option>2</option>
//                                                     <option>3</option>
//                                                     <option>4</option>
//                                                     <option>5</option>
//                                                 </select>
//                                             </div>
//                                             <div class="form-group">
//                                                 <label for="exampleFormControlSelect1">I see myself owning pets.</label>
//                                                 <select class="form-control" id="q10">
//                                                     <option>1</option>
//                                                     <option>2</option>
//                                                     <option>3</option>
//                                                     <option>4</option>
//                                                     <option>5</option>
//                                                 </select>
//                                             </div>
//         </form>

//                         </Col>

//                     </Row>
//                     </Grid>
//                     </HTMLDivElement>                    )
//                 }
// }