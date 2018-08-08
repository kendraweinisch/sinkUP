import React from 'react';
import { DropdownButton, MenuItem, FormControl } from 'react-bootstrap';
import questiondata from "../questiondata"
import './Question.css';

const ANSWERS = questiondata.answers;

class Question extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          {
            <FormControl componentClass="select" onChange={this.handleChange}
                        bsStyle="Primary"
                        title={this.props.choice}
                        className="dropdownbutton"
                    >
                        {ANSWERS.map((answer, key) => <option value={key} onChange={this.handleChange} >{answer}</option>)}
                    </FormControl>  
              /* <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" /> */}
        </form>
      );
    }
  }
// function handleClick(answer, fn){
// fn(answer)
// }

// function renderDropdownButton(number, title, fn, this) {
//     return (
//         <DropdownButton onChange={this.handleChange}
//             bsStyle="Primary"
//             title={title}
//         //   id={`dropdown-basic-${}`}
//         >
//             {ANSWERS.map((answer, key) => <MenuItem onClick={()=>fn(number, answer)} eventKey={key}>{answer}</MenuItem>)}
//         </DropdownButton>
//     )
// }

// const Question = props => {
//     return (
//         <div>
//             <span>
//                 {props.question}
//             </span>
//             <div>
//                 {renderDropdownButton(props.number, props.choice, props.selectfn)}
//             </div>
//         </div>
//     )
// }
export default Question