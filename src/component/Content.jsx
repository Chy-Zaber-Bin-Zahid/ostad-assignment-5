import React, { useState } from 'react';
import "../assets/css/content.css";
function Content() {
  const [state, setState] = useState("");
  const check = () => {
    const text = document.querySelector(".text").value;
    setState(text)
  };
  return (
    <div className="content">
      <textarea className="text" name="" id="" cols="30" rows="10"></textarea>
      <button onClick={check}>Submit</button>
      <p>{state}</p>
    </div>
  );
}

export default Content;
