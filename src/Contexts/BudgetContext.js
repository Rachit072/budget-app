import React from "react"
import { useState } from "react";
import { useContext } from "react";

const BudgetContext = React.createContext();

export function useBudgets(){
    const [Budgets,setBudgets] = useState([])
    const [Expenses,setExpenses] = useState([])
    function getBudgetExpenses(){

    }
    function addBudget(){

    }
    function addExpenses(){

    }
    function deletebudget(){

    }
    function deleteExpenses(){

    }
    return useContext(BudgetContext)
}
export const BudgetProvider=({children})=>{
    return (
        <BudgetContext.Provider value={{
            Budgets,
            Expenses,
            getBudgetExpenses,
            addBudget,
            addExpenses,
            deletebudget,
            deleteExpenses
        }}>{children}</BudgetContext.Provider>
    )
}