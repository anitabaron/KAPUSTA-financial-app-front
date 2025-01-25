import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { selectIsLogin, selectToken} from '../redux/storeSlice';
import { userIncomeCategory, userExpenseCategory } from "../redux/transaction/operation";

export const useTransaction=()=>{
  const dispatch = useDispatch()
  const islogin = useSelector(selectIsLogin)
  const token = useSelector(selectToken)

  const useTransactionData = () => {
    useEffect(() => {
         dispatch(userIncomeCategory(token))
         dispatch(userExpenseCategory(token))      
    }, [islogin]);
  }

    return { useTransactionData }
}