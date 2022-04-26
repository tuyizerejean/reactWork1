import React from "react";
import "./index.css";
import Expenses from './components/Expenses'
 
export default function App() {
  const expenses=[
   { title:"school rent",price:19000.0,date: new Date(2022,2,3)},
    { title:"plot rent",price:18000.0,date: new Date(2022,3,3)},
    { title:"mortor rent",price:20000.0,date: new Date(2022,4,3)},
    { title:"house rent",price:40000.0,date: new Date(2022,5,3)},
  ]
   return (
     <div>
       <h2 className="App"> List of Monthly Expenses</h2>
       <Expenses items={expenses}></Expenses> 
     </div>
   )
}
