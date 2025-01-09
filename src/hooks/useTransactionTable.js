import { useDispatch, useSelector } from "react-redux"
import { selectIncomes, selectExpenses, selectToken } from '../redux/storeSlice';
import { useEffect, useState } from "react";
import { deleteUserExpense, getUserIncome, getUserExpense } from "../redux/transaction/operation";

export const useTransactionTable = (activeSheet) => {
  const dispatch = useDispatch()
  const incomes = useSelector(selectIncomes);
  const expenses = useSelector(selectExpenses);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [transDesc, setTransDesc] = useState(null);
  const [activeData, setActiveData] = useState([]);
  const token = useSelector(selectToken)
  const [submit, setSubmit] = useState(false)
  
  const newData =  Object.values(activeData);
  const transactionData =  newData.reduce(
    (accumulator, currentValue) =>{ 
      currentValue = {...currentValue, date:parseFloat(currentValue.date.slice(0, 10).replace("-", "").replace("-", ""))}
      return [...accumulator, currentValue]}
    , []);
  const transactionDataSort = transactionData.sort((b, a) => new Date(a.date) - new Date(b.date))
 
  const tableDataSort =  transactionDataSort.reduce(
    (accumulator, currentValue) =>{
      currentValue = {...currentValue, date:`${currentValue.date.toString().slice(0, 4)}-`+
                                            `${currentValue.date.toString().slice(4, 6)}-`+
                                            `${currentValue.date.toString().slice(6, 8)}`}
      return [...accumulator, currentValue]}
    , []);

  const transactionTableData = () => tableDataSort;

  const deleteTransaction = (description) => {
    setModalIsOpen(true);
    setTransDesc(description);
  };

  const deleteConf = () => {
    setModalIsOpen(false);
    setSubmit(true)
    dispatch(deleteUserExpense({ transDesc, token }))
  };

  const deleteModalClose = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (activeSheet === "expenses") {
      setActiveData(expenses);
    } else {
      setActiveData(incomes);
    }
  }, [expenses, incomes, activeSheet]);

  const useEffectGetTransaction = () => {
      useEffect(() => {
        setSubmit(false)
        dispatch(getUserIncome(token));
        dispatch(getUserExpense(token));

      }, [submit]);
    }
  return {
    transactionTableData,
    useEffectGetTransaction,
    deleteTransaction,
    deleteConf,
    deleteModalClose,
    modalIsOpen,
  };
};