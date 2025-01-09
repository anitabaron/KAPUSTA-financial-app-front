import React, { useEffect, useState } from 'react';
import '../../App.css';
import '../../css/Transaction.css';
import css from './ReportsIconSet.module.css';
import { useLocation } from 'react-router';
import { expencesIcons, incomeIcons } from './icons';
import ReportNavBtn from '../ReportNavBtn';
import { useSelector } from 'react-redux';
import { selectExpenses, selectIncomes } from "../../redux/storeSlice";
import { useSelectedDate } from '../../hooks/useSelectedDate';
import { calculateCategorySums, addMissingCategories } from './calculateSums'; 

export default function ReportsIconSet({
  activeSheet,
  expensesClass,
  incomesClass,
  selectCategory,
  onCategoryChange,
}) {
  const expenses = useSelector(selectExpenses);
  const incomes = useSelector(selectIncomes);
  const { selectedDate } = useSelectedDate();
  const location = useLocation();


  const [sumCatExpenses, setSumCatExpenses] = useState({});
  const [sumCatIncomes, setSumCatIncomes] = useState({});

  
  useEffect(() => {
    const calculatedSumExpenses = calculateCategorySums(expenses, selectedDate);
    const updatedSumExpenses = addMissingCategories(expencesIcons, calculatedSumExpenses);
    setSumCatExpenses(updatedSumExpenses);

    const calculatedSumIncomes = calculateCategorySums(incomes, selectedDate);
    const updatedSumIncomes = addMissingCategories(incomeIcons, calculatedSumIncomes);
    setSumCatIncomes(updatedSumIncomes);
  }, [expenses, incomes, selectedDate]);

  const handleClickIcon = (category) => {
    onCategoryChange(category);
  };

  return (
    <div>
      <div className={css.box}>
        <ReportNavBtn
          activeSheet={activeSheet}
          expensesClass={expensesClass}
          incomesClass={incomesClass}
        />

        <div className={css.icons}>
          {location.pathname === '/transaction/reports/expenses'
            ? expencesIcons.map((icon, index) => (
                <React.Fragment key={index}>
                  <div
                    key={index}
                    className={`${css.div_svg} ${selectCategory === icon[1] ? css.active_svg : ''} ${sumCatExpenses[icon[1]] === 0 ? css.blocked : ''}`}
                    onClick={() => handleClickIcon(icon[1])}
                  >
                    <p className={css.amount}>{sumCatExpenses[icon[1]]}</p>
                    <svg className={css.svg}>
                      <use href={icon[0]}></use>
                    </svg>
                    <div className={`${css.div_background_svg} ${selectCategory === icon[1] ? css.active_background : ''}`}></div>
                    <p className={css.text_icon}>{icon[1]}</p>
                  </div>
                  {(index + 1) % 3 === 0 && <div className={css.line}></div>}
                </React.Fragment>
              ))
            : incomeIcons.map((icon, index) => (
              <div
                key={index}
                className={`${css.div_svg} ${selectCategory === icon[1] ? css.active_svg : ''} ${sumCatIncomes[icon[1]] === 0 ? css.blocked : ''}`}
                onClick={() => handleClickIcon(icon[1])}
              >
                <p className={css.amount}>{sumCatIncomes[icon[1]]}</p>
                <svg className={css.svg}>
                  <use href={icon[0]}></use>
                </svg>
                <div className={`${css.div_background_svg} ${selectCategory === icon[1] ? css.active_background : ''}`}></div>
                <p className={css.text_icon}>{icon[1]}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}