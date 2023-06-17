import React from 'react'
import { useState } from 'react'

export default function Textform(props) {
  
 const handleUpClick =()=>{
  // console.log("You have Clicked on handleUpClick" + text);

  // setText="You have Clicked on handleUpClick"  wrong way to assign value in state
  
  let newText = text.toUpperCase();
  setText(newText); 
  props.showAlert("converted to Uppercase!", "success");
  }

  const handleLowClick =()=>{
    let newText2 =text.toLowerCase();
    setText(newText2);
    props.showAlert("converted to Lowercase!", "success");
  }
  const handleCapClick =()=>{
    let newText2 =text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText2);
    props.showAlert("First Letter converted to Uppercase!", "success");
  }

  const handleClear =()=>{
    let newText2 ='';
    setText(newText2);
    props.showAlert("Text has been removed!", "success");
  }

  const handleOnChange =(event)=>{
    // console.log("on Change");
    setText(event.target.value); 
  }

  const handleCount =()=>{
  let newCount=count+1;
  setCount(newCount);

  }

  const handleCopy =()=>{
    //  var text = document.getElementById('myBox');
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!", "success");
  }

  const[text, setText] = useState("");
  const[count, setCount] = useState(0);
  return (
    <>
    <div className="contaner border" style={{padding:'10px',color:props.mode==='dark'?'white':'black'}}>
    <h3 className='my-2 mb-4'>{props.heading}</h3>
            <div className="mb-3">
            <textarea className="form-control" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'#002f5e':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="6" />
            </div>
            <button disabled={text.length===0} className='btn btn-primary my-1' onClick={handleUpClick} >Convert to Uppercase</button>&nbsp;&nbsp; &nbsp;  
            <button disabled={text.length===0} className='btn btn-secondary my-1' onClick={handleLowClick} >Convert to Lowercase</button>&nbsp;&nbsp; &nbsp; 
            <button disabled={text.length===0} className='btn btn-warning my-1' onClick={handleCapClick} >Convert to Capitalize</button>&nbsp;&nbsp; &nbsp; 
            <button disabled={text.length===0} className='btn btn-success my-1' onClick={handleClear} >Clear</button>&nbsp;&nbsp; &nbsp; 
            <button disabled={text.length===0} className='btn btn-danger my-1' onClick={handleCopy} >Copy Text</button>
    </div>
    <div className="container border" style={{color:props.mode==='dark'?'white':'black'}}>
      <h4 >Your Text Summary</h4>
      <p ><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
      <p ><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minutes</p>
      <h4 >Preview</h4>
      <code >{text.length>0?text:"Nothing to preview"}</code>
    </div>
    <div className="container border" style={{marginTop:"40px",color:props.mode==='dark'?'white':'black'}}>
      <h4 >Button Press Counter</h4>
      <button className='btn btn-secondary' onClick={handleCount} >Press to Count</button>
      <p >{count}</p>
    </div>
    </>
  )
}
