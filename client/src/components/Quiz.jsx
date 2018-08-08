import React from 'react';
import {  FormControl, FormGroup, ControlLabel, Jumbotron, Button } from 'react-bootstrap';
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

    selectanswer(number, answer) {
        let state = Object.assign({}, this.state)
        state.answers[number]=answer
        console.log(state.answers)
        this.setState(state)
    }

    handleChange(e, field) {
        this.setState({ [field]: e.target.value });
    }

    determineMatch() {
}
     
    render() {
        return (
            <div>
            <Jumbotron>
            <h1>Getting to Know You</h1>
           </Jumbotron>;
         

            <FormGroup>
                {/* controlId="formBasicText"
                validationState={this.getValidationState()} */}
            
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
               
                {questiondata.questions.map((question, i) => (<Question question={question} choice={this.state.answers[i]} number={i} selectfn={this.selectanswer} />))}
                <ControlLabel>Scale of 1-4</ControlLabel>
            </FormGroup>
            <button onClick={()=>{ this.determineMatch('Determining Match'); }}>Submit to Find Match</button>
            
            </div>

        );
    
    }           
}
// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on all possible friends
// ===============================================================================

// var friends = require("../seeds/matches.js");

// // ===============================================================================
// // ROUTING
// // ===============================================================================

// module.exports = function(app) {
//   // API GET Requests
//   // Below code handles when users "visit" a page.
//   // In each of the below cases when a user visits a link
//   // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
//   // ---------------------------------------------------------------------------

//   app.get("/api/friends", function(req, res) {
//     res.json(friends);
//   });

//   // API POST Requests
//   // Below code handles when a user submits a form and thus submits data to the server.
//   // In each of the below cases, when a user submits form data (a JSON object)
//   // ...the JSON is pushed to the appropriate JavaScript array
//   // ---------------------------------------------------------------------------

//   app.post("/api/friends", function(req, res) {
//     // Note the code here. Our "server" will respond to a user"s survey result
//     // Then compare those results against every user in the database.
//     // It will then calculate the difference between each of the numbers and the user"s numbers.
//     // It will then choose the user with the least differences as the "best friend match."
//     // In the case of multiple users with the same result it will choose the first match.
//     // After the test, it will push the user to the database.

//     // We will use this object to hold the "best match". We will constantly update it as we
//     // loop through all of the options
//     var bestMatch = {
//       name: "",
//       photo: "",
//       friendDifference: Infinity
//     };

//     // Here we take the result of the user"s survey POST and parse it.
//     var userData = req.body;
//     var userScores = userData.scores;

//     // This variable will calculate the difference between the user"s scores and the scores of
//     // each user in the database
//     var totalDifference;

//     // Here we loop through all the friend possibilities in the database.
// <ul>
//     {users.map((item)=><li>{item}</li>)}
// </ul>

//     for (var i = 0; i < friends.length; i++) {
//       var currentFriend = friends[i];
//       totalDifference = 0;
// 7
//       console.log(currentFriend.name);

//       // We then loop through all the scores of each friend
//       for (var j = 0; j < currentFriend.scores.length; j++) {
//         var currentFriendScore = currentFriend.scores[j];
//         var currentUserScore = userScores[j];

//         // We calculate the difference between the scores and sum them into the totalDifference
//         totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
//       }

//       // If the sum of differences is less then the differences of the current "best match"
//       if (totalDifference <= bestMatch.friendDifference) {
//         // Reset the bestMatch to be the new friend.
//         bestMatch.name = currentFriend.name;
//         bestMatch.photo = currentFriend.photo;
//         bestMatch.friendDifference = totalDifference;
//       }
//     }

//     // Finally save the user's data to the database (this has to happen AFTER the check. otherwise,
//     // the database will always return that the user is the user's best friend).
//     friends.push(userData);

//     // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page
//     res.json(bestMatch);
//   });
// };