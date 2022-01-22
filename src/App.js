import './App.css';
import React, { useState } from "react";
import "./app.scss";



function App() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [total, setTotal] = useState(null);
  const [result, setResult] = useState("");
  const [color, setColor] = useState("black");

  function handleheight(event) {
    const {value} = event.target;
    if (value.indexOf(',') === -1) {
      setHeight(value);
    }
  }

  function handleweight(event) {
    const {value} = event.target;
    if (value.indexOf(',') === -1) {
      setWeight(value);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (height !== 0 && weight !== 0) {
        const bim = (weight/((height/100) * (height/100))).toFixed(2);
        setTotal(bim);
        if (bim < 16) {
            setResult("Underweight (Severe thinness)");
            setColor("#455A64");
        }else if (bim < 16.9) {
            setResult("Underweight (Moderate thinness)");
            setColor("#E0F2F1");
        }else if (bim < 18.5) {
            setResult("Underweight (Mild thinness) ");
            setColor("#39C0ED");
        } else if (bim < 25) {
            setResult("Normal range");
            setColor("#1266F1");
        } else if (bim < 30) {
            setResult("Overweight (Pre-obese)");
            setColor("#FFA900");
        } else if (bim< 35) {
            setResult("Obese (Class I) ");
            setColor("#F93154");
        } else if (bim < 39.9) {
            setResult("Obese (Class II) ");
            setColor("#C62828");
        } else {
            setResult("Obese (Class III) ");
            setColor("#B71C1C");
        }
    }


  }

  function handleReset(){
    setHeight("");
    setWeight("");
    setTotal("");
    setResult("");
  }

  return (
      <section className="first">
          <section className="container_section">
              <h1 className="title">BMI Calculator</h1>
              <div className="information">
                  <p>
                      Body mass index (BMI) is a value derived from the mass (weight) and height of a person.
                      The BMI is defined as the body mass divided by the square of the body height, and is expressed
                      in units of kg/m2, resulting from mass in kilograms and height in metres.
                  </p>
              </div>
              <div className="form_section">
                  <form>
                      <div className="label_input">
                          <label>Height: </label>
                          <input type="text" value={height}
                                 placeholder="Type your height (cm)"
                                 onChange={handleheight}/>
                      </div>
                      <div className="label_input">
                          <label>Weight: </label>
                          <input type="text" value={weight}
                                 placeholder="Type your weight (kg)"
                                 onChange={handleweight}/>
                      </div>
                      <div className="buttons">
                          <button className="button_one" type="sumbit" onClick={handleSubmit}>
                              Calculate
                          </button>
                          <button className="button_two" type="sumbit" onClick={handleReset}>
                              Reset
                          </button>
                      </div>

                  </form>
                  <div className="text" id="text">
                      <h2 style={{color}}>{total}</h2>
                      <p className="description">
                          {result}
                      </p>
                  </div>
              </div>
          </section>
      </section>


  )
}

export default App;
