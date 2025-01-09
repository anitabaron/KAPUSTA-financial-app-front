import '../App.css';
import { selectIncomesStat, selectExpenseStat } from '../redux/storeSlice.js';
import css from '../css/ReportsIncExpSum.module.css';
import { useSelector } from 'react-redux';
import { useSelectedDate } from '../hooks/useSelectedDate';

export default function ReportsIncExpSum() {
  const { selectedDate, monthNames } = useSelectedDate();

  const totalIncomeYear = useSelector(selectIncomesStat);
  const totalExpenseYear = useSelector(selectExpenseStat);

  const monthIndex = selectedDate.monthIndex;
  const monthName = monthNames[monthIndex];

  let monthIncome = 0;
  if (totalIncomeYear && totalIncomeYear.hasOwnProperty(monthName)) {
    monthIncome = totalIncomeYear[monthName] || 0;
  }

  let monthExpense = 10;
  if (totalExpenseYear && totalExpenseYear.hasOwnProperty(monthName)) {
    monthExpense = totalExpenseYear[monthName] || 0;
  }

  return (
    <div>
      <div className={css.bar}>
        <div className={css.toWrap}>
          <p>Expenses:</p>
          <p className={css.textExpense}>- {`${monthExpense}`}</p>
        </div>
        <div className={css.line}></div>
        <div className={css.toWrap}>
          <p>Incomes:</p>
          <p className={css.textIncome}>+ {`${monthIncome}`}</p>
        </div>
      </div>
    </div>
  );
}
