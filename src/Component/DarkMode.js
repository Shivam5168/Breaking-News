import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
const DarkMode = () => {

  const [myStyle, setMystyle] = useState({
    width: "90%",
    margin: "auto",
    border: "30px solid black",
    backgroundColor : "white"
  })

  const [btnStyle, setBtnStyle] = useState({
    border: "2px solid red",
    color: "white",
    width: "10%",
    margin: "auto",
    backgroundColor: "green"
  })


  const [switchStyle, setSwitchStyle] = useState({
    margin: "auto",
    color: "green",
    backgroundColor: "green",
    marginLeft: "47%",
  })


  const [button, setButton] = useState("light");

  const [btnStyleRed, setbtnStyleRed] = useState({
    color: "red",
    backgroundColor: "red",
    width: "5%",
    height: "5vh",
    marginTop: "30px",
    marginRight: "5px",
    marginLeft: "5px",
    marginBottom: "5px",
    border : "2px solid white"
  });
  const [btnStyleBlue, setbtnStyleBlue] = useState({
    color: "red",
    backgroundColor: "blue",
    width: "5%",
    height: "5vh",
    marginTop: "30px",
    marginRight: "5px",
    marginLeft: "5px",
    marginBottom: "5px",
    border : "2px solid white"
  });
  const [btnStylePink, setbtnStylePink] = useState({
    color: "red",
    backgroundColor: "pink",
    width: "5%",
    height: "5vh",
    marginTop: "30px",
    marginRight: "5px",
    marginLeft: "5px",
    marginBottom: "5px",
    border : "2px solid white"
  });
  const clickBtn = () => {
    if (myStyle.border === "30px solid black") {
      setMystyle({
        border: "30px solid grey", width: "90%",
        margin: "auto",
        backgroundColor : "white"
      });
      
      setButton("black");
      setBtnStyle({
        border: "2px solid red",
        color: "white",
        width: "10%",
        margin: "auto",
        backgroundColor: "black"
      });
      setSwitchStyle({
        color: "white",
        margin: "auto",
        backgroundColor: "black",
        marginLeft: "47%",
      })
    } else {
      setMystyle({
        border: "30px solid black",
        width: "90%",
        margin: "auto"
      });
      setButton("light");
      setBtnStyle({
        border: "2px solid red",
        color: "white",
        width: "10%",
        margin: "auto",
        backgroundColor: "green"
      });
      setSwitchStyle({
        color: "white",
        margin: "auto",
        backgroundColor: "green",
        marginLeft: "47%",
      })
    }
  }

  let clickBtnRed = () => {
    setMystyle({
      border: "30px solid black",
      width: "90%",
      margin: "auto",
      backgroundColor : "#f26d6d"
      
    })
    document.body.style.backgroundColor = "Red";
  }

  let clickBtnBlue = () => {
    setMystyle({
      border: "30px solid black",
      width: "90%",
      margin: "auto",
      backgroundColor : "#b0b1f5"
    })
    document.body.style.backgroundColor = "blue";
  }

  let clickBtnPink = () => {
    setMystyle({
      border: "30px solid black",
      width: "90%",
      margin: "auto",
      backgroundColor : "#f5bfe4"
    })
    document.body.style.backgroundColor = "pink";
  }
  return (
    <>
      <span onClick={clickBtnRed} style={btnStyleRed} type="button" ></span>
      <span onClick={clickBtnBlue} style={btnStyleBlue} type="button" ></span>
      <span onClick={clickBtnPink} style={btnStylePink} type="button" ></span>
      <div className="form-check form-switch">
          <input className="form-check-input" style={switchStyle} type="checkbox" onClick={clickBtn} role="switch" id="flexSwitchCheckDefault" />
          
        </div>
      <div style={myStyle}><div classNameName="accordion accordion-flush" id="accordionFlushExample" >
        <div classNameName="accordion-item">
          <h2 classNameName="accordion-header" id="flush-headingOne">
            <button
              classNameName="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            classNameName="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div classNameName="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate
              the <code>.accordion-flush</code> className. This is the first item's
              accordion body.
            </div>
          </div>
        </div>
        <div classNameName="accordion-item">
          <h2 classNameName="accordion-header" id="flush-headingTwo">
            <button
              classNameName="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            classNameName="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div classNameName="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate
              the <code>.accordion-flush</code> className. This is the second item's
              accordion body. Let's imagine this being filled with some actual
              content.
            </div>
          </div>
        </div>
        <div classNameName="accordion-item">
          <h2 classNameName="accordion-header" id="flush-headingThree">
            <button
              classNameName="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            classNameName="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div classNameName="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate
              the <code>.accordion-flush</code> className. This is the third item's
              accordion body. Nothing more exciting happening here in terms of
              content, but just filling up the space to make it look, at least at
              first glance, a bit more representative of how this would look in a
              real-world application.
            </div>
          </div>
        </div>
      </div>
        
      </div>

     

    </>
  )
}

export default DarkMode