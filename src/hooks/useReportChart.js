import { useSelector } from 'react-redux';
import { selectIncomes, selectExpenses } from '../redux/storeSlice';

export const useReportChart = () => {
  const incomesStat = useSelector(selectIncomes);
  const expenseStat = useSelector(selectExpenses);

  const summaryReportData = (activeSheet) => {
    if (activeSheet === 'expenses') {
      return expenseStat;
    }
    return incomesStat;
  };

  return { summaryReportData };
};
