import '../css/TransactionNavBtn.css'
import {useTransactionNavBtn} from '../hooks/useTransactionNavBtn'

export default function TransactionNavBtn({activeSheet, expensesClass, incomesClass}) {
   const { navigateOnClickExpens, navigateOnClickincomes} = useTransactionNavBtn()


    return (
    <div className="transaction-nav-btn-container">
        <button type="submit" onClick={()=>{navigateOnClickExpens(activeSheet)}} className={`${expensesClass}`}>EXPENSES</button>
        <button type="submit" onClick={()=>{navigateOnClickincomes(activeSheet)}} className={`${incomesClass}`}>INCOMES</button>
    </div>
   );   
}