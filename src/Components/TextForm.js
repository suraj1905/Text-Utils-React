import React, { useState } from 'react'
import { toast } from "react-toastify";


export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = ()=>{
        setText(text.toUpperCase()) 
        if(text === ""){
            toast.error("Please enter a text")
        }
        else{
            toast.success("Converted to Uppercase" )
        }
    }

    const handleLoClick = ()=>{
        setText(text.toLowerCase()) 
        if(text === ""){
            toast.error("Please enter a text","danger")
        }
        else{
            toast.success("Converted to Lowercase")
        }
    }

    const handleOnChange = (e)=>{
        setText(e.target.value) 
    }

    const handleClearClick = () =>{
        setText("") 
        if(text === ""){
            toast.error("Please enter a text")
        }
        else{
            toast.success("Text Cleared!!")
        }
    }

    const handleSpacesClick = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        if(text === ""){
            toast.error("Please enter a text")
        }
        else{
            toast.success("Extra Spaces Removed")
        }
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        if(text === ""){
            toast.error("Please enter a text")
        }
        else{
            toast.success("Copied Successfully")
        }
      }

    return (
        <>
        <div className={`mb-3 text-${props.mode === 'light'?'dark':'light'}`}>
            <h1>Enter your text to analyse</h1>
            <textarea className="form-control" id="textanalyse" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'light'?'white':'#212529',color:props.mode === 'light'?'#212529':'white'}}></textarea>
        </div>
        <div>
            <button type="button" className="btn btn-primary my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleSpacesClick}>Remove Extra Spaces</button>
            <button type="button" className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className={`container my-2 text-${props.mode === 'light'?'dark':'light'}`}>
            <h5>Your text summary</h5>
            <span>{text===""?0:text.trim().split(/\s+/).length} words, {text.length} characters</span>
        </div>
        </>
    )
}
