'use client'
import React, { useState } from 'react';

function Contact() {
  const [show, setShow] = useState(false);

  const onClick = () => {
    setShow(!show);
  };

  return (
    <div style={{margin: "100px"}}>
      {show ? <h1>Form Submitted Success</h1> : <p>Form</p>}
      <button onClick={onClick}>Submit Form</button>
    </div>
  );
}

export default Contact;