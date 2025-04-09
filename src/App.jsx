import { useState } from "react";
import Header from "./components/Header"
import UserInputs from "./components/UserInputs"
import Result from "./components/Results";


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
});
function handleChangeInput(fieldName,value) {
setUserInput((prevUserInput)=> {
    return {...prevUserInput, [fieldName]: +value}
});
}
  return (
    <>
    <Header/>
    <UserInputs userInput={userInput} handleChangeInput={handleChangeInput}/>
    <Result userInput={userInput}></Result>
    </>
  )
}

export default App
