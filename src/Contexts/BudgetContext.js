import React from "react"
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";
const BudgetContext = React.createContext();

export const UNCATEGORIZED_BUDGET_ID = "uncategorized"

export function useBudgets(){
    return useContext(BudgetContext);
}
export const BudgetsProvider=({children})=>{
    const [budgets,setBudgets] = useLocalStorage('budgets',[])
    const [expenses,setExpenses] = useLocalStorage('expenses',[])

    function getBudgetExpenses(budgetId){
        return expenses.filter(expense => expense.budgetId===budgetId);
    }
    function addBudget({name,max}){
        setBudgets(prevBudgets=>{
            if(prevBudgets.find(budget=>budget.name===name)){
                return prevBudgets
            }
        return [...prevBudgets,{id:uuidv4(),name,max}]
        })
    }
    function addExpense({description,amount,budgetId}){
        setExpenses(prevBudgets=>{
            return [...prevBudgets,{id:uuidv4(),description,amount,budgetId}]
        })

    }
    function deletebudget({id}){
        setBudgets(prevBudgets=>{
            return prevBudgets.filter(budget=>budget.id!==id)
        })
    }
    function deleteExpenses({id}){
        setBudgets(prevExpenses=>{
            return prevExpenses.filter(expense=>expense.id!==id)
        })

    }

    return (
        <BudgetContext.Provider value={{
            budgets,
            expenses,
            getBudgetExpenses,
            addBudget,
            addExpense,
            deletebudget,
            deleteExpenses
        }}>{children}
        </BudgetContext.Provider>
    )
}