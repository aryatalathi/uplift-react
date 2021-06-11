import React from "react";
import { render } from "react-dom";


function Calculator() {
              const [variables,setVariables] = React.useState({
                  value1:0,
                  value2:0
              });

              const [ans,setAns] = React.useState('');
              function updateVariables(event){
                  const variable = event.target.name;
                  const val = event.target.value;
                  setVariables({...variables,[variable]:Number(val)});
              }
              function add(){
                  setAns(variables.value1+variables.value2);
              }

              function subtract(){
                  setAns(variables.value1-variables.value2);
              }

              function percent(){
                setAns(variables.value1*variables.value2/100);
              }
              function multiply(){
                  setAns(variables.value1*variables.value2);
              }

              function divide(){
                  setAns(variables.value1/variables.value2);
              }
              return (
                  <div className="SIMPLE CALCULATOR">
                      <h1>SIMPLE CALCULATOR </h1>
                      <input onChange={updateVariables} type="number" placeholder="First Value" name="value1"/>
                      <input onChange={updateVariables} type="number" placeholder="Second Value" name="value2"/>
                      <button onClick={add}>ADDITION</button>
                      <button onClick={subtract}>SUBTRACTION</button>
                      <button onClick={percent}>PERCENTAGE</button>
                      <button onClick={multiply}>MULTIPLICATION</button>
                      <button onClick={divide}>DIVISION</button>
                      <h1 className="heading">ANSWER IS : {ans}</h1>
                  </div>
              )
}
export default Calculator; 






















/*ref : codesandbox */