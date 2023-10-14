import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text");

  const handleChange = (event) => {
    setText(event.target.value);
  };

 
  
  return (
    <>
      <div>
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="7"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
          ></textarea>
        </div>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
            Convert to lowercase
          </button>
         
        <div
          className="mb-3"
          style={{ color: props.mode === "dark" ? "white" : "black" }}
        >
          <h2>Your text summary</h2>
          <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
          <p>
            It will take you {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read
            it.
          </p>
          <p>{text.match()}</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
