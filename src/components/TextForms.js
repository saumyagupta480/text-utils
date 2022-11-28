import React, { useState } from "react";

function TextForms(props) {
  const handleUpperCase = () => {
    setText(text.toUpperCase());
    props.showAlert('success','Text has been converted to upper-case')
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
    props.showAlert('success','Text has been converted to lower-case')
  };
  const handleCopyText = () => {
    navigator.clipboard.writeText(text)
    props.showAlert('success','Text has been copied to clipboard')
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[  ]+/)
    setText(newText.join(" "))
    props.showAlert('success','Extra space has been removed')
  };
  const handleClearText = () => {
    setText('');
    props.showAlert('success','Text has been cleared')
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter text here");

  const darkModeStyle ={
    color :'white',
    backgroundColor : '#072b4f'
  }
  const lightModeStyle ={
    color :'#072b4f',
    backgroundColor : 'white'
  }
  
  let noOfWords = text.split(" ").length

  return (
    <div className="container" style={props.mode==='light' ? lightModeStyle : darkModeStyle}>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={props.mode==='light' ? lightModeStyle : {color :'white', backgroundColor : 'grey'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text Summary</h1>
        <p>{noOfWords} words and {text.length} characters</p>
        <p>{0.008 * noOfWords} minutes or {0.48 * noOfWords} seconds to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TextForms;
