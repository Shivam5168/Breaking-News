import React, { useState } from 'react'

const Practice = () => {
  let handleClickUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }

  let handleClickLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  let handleClickClear = () => {
    setText("");
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const [text , setText] = useState("");
  
  return (
    <>
    <div>Practice</div>
    <textarea value={text} placeholder='write your code...' onChange={handleOnChange}></textarea>
    <div><button onClick={handleClickUpperCase}>To Upper Case</button></div>   
    <div><button onClick={handleClickLowerCase}>To Lower Case</button></div> 
    <div><button onClick={handleClickClear}>Clear</button></div> 
    <div><label>total characters in text are {text.length} and words are {text.split(" ").length-1}</label></div> 
    </>
  )
}

export default Practice;