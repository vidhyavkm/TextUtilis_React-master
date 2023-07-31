import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log("uppercase button" + text)
        let newText = text.toUpperCase();
        // setText("Uppercase Button clicked")
        setText(newText)
        props.showAlert('Converted to Upper Case','success')
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lower Case','success')

    }

    const handleClClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert('Text Cleared','success')

    }

    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert('Removed Extra Spaces','success')

    }

    const handleOnChange = (event) => {
        console.log('onchange')
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    return (
        <>
            <div className='container my-3'>

                <div className='container' style={{color:props.mode==="dark"?'white':'#042743'}}>
                    <h2>{props.heading}</h2>
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode=="dark"?'white':'#042743'}}id="myBox" rows="8"></textarea>
                    </div>
                    <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to LowerCase</button>
                    <button className='btn btn-primary mx-2' onClick={handleClClick}>Clear Text</button>
                    <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove Extra Space</button>

                </div>

                <div className='container'style={{color:props.mode==='dark'?'white':'#042743'}}>
                    <h3>Your Text Summary</h3>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.08 * text.split(" ").length} Minutes to read</p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Enter something in the textbox to preview it"}</p>
                </div>
            </div>
        </>
    )
}
