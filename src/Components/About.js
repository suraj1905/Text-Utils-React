import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'#212529':'white', 
    }
  return (
    <div className="container accordion" id="accordionPanelsStayOpenExample">
  <div className="accordion-item ">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        About Text Utils Web
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body" style={myStyle}>
        <strong>Unleash the Power of Words: Introducing Your Text Utility Web App!</strong><br/> Say goodbye to tedious text manipulation and hello to effortless efficiency with your brand-new text utility web app! Whether you're a writer crafting the perfect sentence, a coder ensuring clean code, or anyone working with text, this app is your one-stop shop for all your transformation needs.
        <br/><strong>Effortless Formatting:</strong><br/>

Uppercase & Lowercase: Instantly convert your text to dazzling uppercase or serene lowercase with a single click. No more manual typing or tedious copy-pasting!
<br/>Space Slayer: Conquer unwanted whitespace with powerful extra space removal. Eliminate clutter and optimize your text in seconds.
<br/><strong>Seamless Integration:</strong>
<br/>Copy with Ease: Effortlessly copy the transformed text to your clipboard with a single click. Paste it anywhere you need, saving you valuable time and frustration.
<br/><strong>Simple & Intuitive:
</strong>
<br/>
Clean Interface: Enjoy a user-friendly design that's clear, intuitive, and free of distractions. Focus on your text, not on navigating the app.
Instant Results: See the transformed text in real-time as you type, providing immediate feedback and making editing a breeze.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Developed by
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body"style={myStyle}>
        <strong>Suraj Sharma.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Developed using
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body" style={myStyle}>
        <strong>React</strong> 
      </div>
    </div>
  </div>
</div>
  )
}
