import React, { useState } from 'react';

export default function Textform(props) {
    const [text,] = useState("Enter Your Text");
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary">Convert To Uppercase</button>
        </div>
    )
}
