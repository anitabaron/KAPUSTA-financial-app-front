import { useSelector } from "react-redux"
import {selectIncomesStat,  selectExpenseStat} from '../redux/storeSlice';



export const useTransactionSummary = () => {

    const incomesStat = useSelector(selectIncomesStat);
    const expenseStat = useSelector(selectExpenseStat);

    const data =(activeSheet) => {
        return activeSheet === "expenses" ? expenseStat : incomesStat;
    }
    const keys = (data) => {
        
        return Object.keys(data);

    };

    return { data, keys }
};