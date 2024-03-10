import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] =useState(4)

 //let counter=4;
 const addValue=()=>{
 
   counter=counter+1;
   setCounter(counter)

 }

 const removeValue= ()=>{
  
  counter=counter-1;
  setCounter(counter)
 }
  return (
    <>
     
     <h1>Chai or react</h1>
     <h2>Counter value:{counter}</h2>

     <button onClick={addValue}>
      Add value: {counter}</button>
      <br></br>
      <br></br>
     <button onClick={removeValue}>Remove Value: {counter}</button>

     <p>footer:{counter}</p>
    </>
  )
}

export default App
