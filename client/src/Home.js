import React from "react";
import logo from "./logo.svg";
import { newContextComponents} from "@drizzle/react-components"
import InputForm from "./inputForm"


const {
  AccountData,
  ContractData,
  ContractForm,
} = newContextComponents;



export default ({ drizzle, drizzleState }) => { // destructure drizzle and drizzleState from props
  const customForm = (options) => {
    return (
      <InputForm settings={options} />
    );
  }
  
  return (
    <div className="App">
    <div>
      <img className="App-logo"src={logo} alt="drizzle-logo" />
      <h1>Drizzle Examples</h1>
      <p>Examples of how to get started with Drizzle in various situations.</p>
    </div>

    <div className="section">
      <h2>Set User</h2>
      <ContractForm drizzle={drizzle} contract="Piggy" method="setUser" render={customForm} />
    </div>
    
    <div className="section">
      <h2>Active Account</h2>
      <AccountData drizzle={drizzle} drizzleState={drizzleState} accountIndex={0} units="ether" precision={3} />
      <ContractForm drizzle={drizzle} contract="Piggy" method="addMoney" />
      <ContractData
          drizzle={drizzle} 
          drizzleState={drizzleState}
          contract="Piggy"
          method="getBalance"
          methodArgs={[{ from: drizzleState.accounts[0] }]}
          />
    </div>
  </div>

  )
};