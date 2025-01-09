import { useNavigate } from "react-router";

export const useTransactionNavBtn=()=>{
    const navigate = useNavigate()

    const navigateOnClickExpens = (activeSheet)=>{
        if(activeSheet==="expenses"){
            return
        }
        return navigate('/transaction/expenses', {replace: true})
    }

    const navigateOnClickincomes = (activeSheet)=>{
        if(activeSheet==="incomes"){
            return
        }
        return navigate('/transaction/incomes', {replace: true})
    }

    return { navigateOnClickExpens, navigateOnClickincomes}
}