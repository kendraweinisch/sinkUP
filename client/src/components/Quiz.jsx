import React from 'react';
import { FormControl, FormGroup, ControlLabel, Jumbotron, Button } from 'react-bootstrap';
import Question from "./Question";
import './Quiz.css';
import questiondata from "../questiondata"
import Dates from "./matches"

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

    selectanswer(number, answer) {
        let state = Object.assign({}, this.state)
        state.answers[number] = answer
        console.log(state.answers)
        this.setState(state)
    }

    handleChange(e, field) {
        this.setState({ [field]: e.target.value });
    }

    determineMatch(answersArr) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };

        var totalDifference;

        // Here we loop through all the friend possibilities in the database.
        <ul>
            {Dates.map((item) => <li>{item}</li>)}
        </ul>

        for (var i = 0; i < Dates.length; i++) {
            var currentFriend = Dates[i];
            totalDifference = 0;
            7
            console.log(currentFriend.name);

            // We then loop through all the scores of each friend
            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = answersArr[j];

                // We calculate the difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

            // If the sum of differences is less then the differences of the current "best match"
            if (totalDifference <= bestMatch.friendDifference) {
                // Reset the bestMatch to be the new friend.
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
            }
        }

        // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
        // the database will always return that the user is the user's best friend).
        Dates.push(answersArr);

        // Return a JSON with the user's bestMatch. This will be used by the HTML in the next pagebest
        console.log(bestMatch, answersArr)
        return (bestMatch);


    }

    render() {
        return (
            <div>
                <div>
                <Jumbotron className="jumbotron">
                    <h1>Tell Us About Yourself</h1>
                </Jumbotron>;
                </div>
         <div className="mainContainer">
                    <FormGroup>
                        <ControlLabel>Please enter your first name</ControlLabel>
                        <FormControl 
                            type="text"
                            value={this.state.name}
                            onChange={e => this.handleChange(e, "name")}
                        />
                        <ControlLabel>Please enter your email address</ControlLabel>

                        <FormControl
                            type="text"
                            value={this.state.email}
                            onChange={e => this.handleChange(e, "email")}
                        />
                        <ControlLabel>Please enter the link to your photo</ControlLabel>

                        <FormControl
                            type="text"
                            value={this.state.photo}
                            onChange={e => this.handleChange(e, "photo")}
                        />
                        <FormControl.Feedback />
                        <ControlLabel>Use the 1-4 scale to rate yourself</ControlLabel>
                        {questiondata.questions.map((question, i) => (
                            <div>
                                <p>{question}</p>
                                <Question question={question} choice={this.state.answers[i]} number={i} selectfn={this.selectanswer} />
                            </div>
                        ))}

                    

                    <button onClick={() => { this.determineMatch(this.state.answers); }}>Submit to Find Match</button>
                    </FormGroup>
                </div>
            </div>

        );

    }
}
