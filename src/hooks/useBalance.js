import * as Yup from 'yup';
import { setUserBalance } from "../redux/user/operation"
import { useDispatch, useSelector } from "react-redux"
import { selectToken, selectBalance} from '../redux/storeSlice';

export const useBalance=()=>{
  const dispach = useDispatch()
  const balance = useSelector(selectBalance);
  const token = useSelector(selectToken)

  const balanceShema = Yup.object().shape({
    balance: Yup.number()
                .min(1)
  })

  const setBalance = (newBalance, actions)=>{
    const data = {
                      "newBalance": newBalance.balance,
                      "token": token
                    }
    dispach(setUserBalance(data))
    actions.resetForm()
  }
  
  return {balanceShema, balance, setBalance }
}