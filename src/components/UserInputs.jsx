export default  function UserInputs({handleChangeInput,userInput}) {
   

return (
    <section id="user-input">
    <div className="input-group">
      <p>
      <label>Initial Investment</label>
      <input type="number" value={userInput.initialInvestment} onChange={(event)=>handleChangeInput('initialInvestment',event.target.value)} required/>
      </p>
      <p>
      <label >Annual Investment</label>
      <input type="number" value={userInput.annualInvestment} onChange={(event)=>handleChangeInput('annualInvestment',event.target.value)} required/>
      </p>
    </div>
    <div className="input-group">
      <p>
      <label>Expected Return</label>
      <input type="number" value={userInput.expectedReturn} onChange={(event)=>handleChangeInput('expectedReturn',event.target.value)} required/>
      </p>
      <p>
      <label>Duration</label>
      <input type="number" value={userInput.duration} onChange={(event)=>handleChangeInput('duration',event.target.value)} required/>
      </p>
    </div>
    </section>
); 
}