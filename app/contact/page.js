"use client";
import Success from "@/components/Success";
import React, { useState } from "react";

function Contact() {
  const [show, setShow] = useState(false);

  const onClick = () => {
    setShow(!show);
  };

  return (
    <div style={{ display: "flex", margin: "auto", flexDirection: "column", maxWidth: "900px", padding: "0px 30px", height: "100vh", justifyContent: "center"}}>
      {show || 
      <div style={{display: 'flex', flexDirection: 'column', rowGap: '5px', marginBottom: "30px"}}>
        <h1 style={{marginBottom: '20px'}}>Contact Us</h1>
        <p>Or email us as info@htloyalty.com.</p>
        <p>We are located at 1209 Orange St, Wilmington, DE 19801</p>
      </div>
      }
      {show ? (
        <Success successMessage="Thank you for contacting our team, we'll be in touch with you shortly"/>
      ) : (
        <>
          <form>
            <div
              style={{ 
                display: "flex",
                flexDirection: "column",
                rowGap: "30px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: "12px",
                }}
              >
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email" />
                <input type="phone" placeholder="Phone Number" />
                <textarea placeholder="Enter your message"/>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: "12px",
                  alignItems: "center",
                }}
              >
                <input type="checkbox" />
                <label>
                  By checking this box, you agree to recieve communication from
                  our company.
                </label>
              </div>
              <button onClick={onClick}>Submit Form</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Contact;
