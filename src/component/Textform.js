import React, { useState } from "react";
import { useSpeechSynthesis } from 'react-speech-kit';

const Textform = (props) => {
  const [text, settext] = useState(" ");
  const {speak} = useSpeechSynthesis();
  
  


  const handleOnChange = (event) => {
    settext(event.target.value);
  }

  const handleUpClick = () => {
    console.log("changed");
    let newText = text.toUpperCase();
    settext(newText);
  };

  const Firstupletter = (e) =>{
    let caps = e.target.value.charAt(0).toUpperCase() +e.targetl.value.slice(1);
    console.log(caps);
    settext (caps);
  }

  

  const handleLowClick =() =>{
    let lowtext = text.toLocaleLowerCase();
    settext(lowtext);
  }
  
  const handleClear = () =>{
    settext(" ");
  }

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
}

const handleRemove = () =>{
  let newText = text.split(/[ ]+/);
  settext(newText.join(" "))

}

return (

    <>
      <div className="container my-3" style={{color : props.Mode=== "dark"?"white":"grey"}}>
      <div className="mb-3">
        <h2>{props.heading}</h2>
      <textarea
          className="form-control"
          id="myBox"
          rows="6"
          value={text}
          style={{backgroundColor : props.Mode=== "light"?"grey":"white",color : props.Mode=== "light"?"white":"grey"}}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button
        className="btn btn-primary"
        style={{ margin: "5px" }}
        onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary"
         style={{ margin: "5px" }}
        onClick={Firstupletter}>FirstletterCaps</button>

       
        <button className="btn btn-primary"
        style={{ margin: "5px" }}
        onClick={handleLowClick}>Convert to lowercase</button>

       <button className="btn btn-primary"
        style={{ margin: "5px" }}
        onClick={handleClear}>Clear All Text</button>

        <button className="btn btn-primary"
        style={{ margin: "5px" }}
        onClick={handleCopy}>Copy Text</button>

       <button className="btn btn-primary"
        style={{ margin: "5px" }}
        onClick={handleRemove}>Remove Extra Space</button>

  
      <button className="btn btn-primary"
        style={{ margin: "5px" }} 
        onClick ={() => speak ({text : text})}>Speech</button> 
     
    </div> 
    <div className="container my-2" style={{color : props.Mode=== "dark"?"white":"grey"}}>
      <h2>Your Summary</h2>
      <p>{text.split(" ").length} words and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h3>preview</h3>
      <p>{text}</p>
     </div>
  </>
  
  );
};

export default Textform;
