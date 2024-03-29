import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Balance from "./components/Balance"
import IncomeExpense from "./components/IncomeExpense"
import TransactionList from "./components/TransactionList"
import AddTransaction from "./components/AddTransaction"

import {GlobalProvider} from './Context/GlobalState'


function App() {
  

  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction/>
    </GlobalProvider>
    
  )
}

export default App
