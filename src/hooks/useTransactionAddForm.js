import { useDispatch, useSelector } from "react-redux"
import {selectIncomesCat, selectExpenseCat, selectToken } from '../redux/storeSlice';
import { useState } from "react";
import { userExpenseCategory, userIncomeCategory, addUserExpense, addUserIncome, getUserIncome, getUserExpense,  } from "../redux/transaction/operation";
import { useEffect } from "react";

export const useTransactionAddForm = () => {
    const dispatch = useDispatch();
    const incomeCategory = useSelector(selectIncomesCat)
    const expenseCategory = useSelector(selectExpenseCat)
    const token = useSelector(selectToken)
    const [submit, setSubmit] = useState(false)


    const useEffectGetCategory = () => {
      useEffect(() => {
        dispatch(userIncomeCategory(token))
        dispatch(userExpenseCategory(token))
      }, []);
    }


    const useEffectGetTransaction = () => {
      useEffect(() => {
        setSubmit(false)
        dispatch(getUserIncome(token));
        dispatch(getUserExpense(token));

      }, [submit]);
    }

    const category= (activeSheet) =>{
        if(activeSheet ==="expenses"){
            return expenseCategory
        }
    return incomeCategory
    } 


  const addTransaction = ( {values, activeSheet} ) =>{
      const type= (activeSheet) =>{
        if(activeSheet ==="expenses"){
            return 'expense'
        }
        return 'income'
      }   

      const transactionDetails ={
          "typeOfTransaction": type(activeSheet),
          "description": values.description,
          "amount":  parseFloat(values.amount),
          "date": values.date,
          "category": values.category
        }
        setSubmit(true)

        if (activeSheet === 'expenses'){
          return  dispatch(addUserExpense({token, transactionDetails}))
        }
        return  dispatch(addUserIncome({token, transactionDetails}))

    }
    
    return {category, useEffectGetCategory, useEffectGetTransaction, addTransaction } 
}