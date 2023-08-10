import React, { useState } from 'react';

export default function Textform(props) {
    const handleUpClick = () => {
        console.log("upercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleToClick = () => {
        console.log("upercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleMovClick = () => {
        console.log("upercase was clicked" + text);
        let newText = "";
        setText(newText);
    }
    const hilightText = () => {
        setHighlighted(!highlighted); // Toggle highlight state
    }
    const handelOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    const [highlighted, setHighlighted] = useState(false);

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control ${highlighted ? 'highlighted' : ''}`} value={text} onChange={handelOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleToClick}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleMovClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={hilightText}>Highlight Text</button>



            </div>
            <div className='container my-3'>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Charcters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Your Text Summary</h2>
                <p>{text}</p>


            </div>
        </>
    )
}
