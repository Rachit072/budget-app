import React from 'react'
import { useBudgets } from '../Contexts/BudgetContext'
import BudgetCard from './BudgetCard'

export default function TotalBudgetCard() {
    const {expenses,budgets} = useBudgets()
    const amount = expenses.reduce(
      (total,expense) => total + expense.amount,0)
    const max = budgets.reduce(
        (total,expense) => total + expense.max,0)
  
    if(max===0) return null
    return <BudgetCard name='Total' max ={max} amount={amount} gray hideButtons/>
}
