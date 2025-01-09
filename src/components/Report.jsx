import { useEffect, useState } from 'react';
import '../css/Report.css';
import '../css/Transaction.css';
import { Chart } from './Chart/Chart';
import ReportDataSelection from './ReportDateSelection';
import ReportsIconSet from './ReportsIconSet/ReportsIconSet';
import ReportsIncExpSum from './ReportsIncExpSum';
import { useSelector } from 'react-redux';
import { selectExpenses, selectIncomes } from "../redux/storeSlice";
import { useSelectedDate } from '../hooks/useSelectedDate';
import { calculateCategorySums, addMissingCategories, getNonZeroCategories } from '../components/ReportsIconSet/calculateSums';
import { expencesIcons, incomeIcons } from '../components/ReportsIconSet/icons';


export default function Report({ activeSheet, expensesClass, incomesClass }) {
  const [selectCategory, setSelectCategory] = useState("Products");

  const expenses = useSelector(selectExpenses);
  const incomes = useSelector(selectIncomes);
  const { selectedDate } = useSelectedDate();

  const [sumCatExpenses, setSumCatExpenses] = useState({});
  const [sumCatIncomes, setSumCatIncomes] = useState({});
  const [nonZeroCategoriesExpenses, setNonZeroCategoriesExpenses] = useState([]);
  const [nonZeroCategoriesIncomes, setNonZeroCategoriesIncomes] = useState([]);

  useEffect(() => {

    const calculatedSumExpenses = calculateCategorySums(expenses, selectedDate);
    const updatedSumExpenses = addMissingCategories(expencesIcons, calculatedSumExpenses);
    setSumCatExpenses(updatedSumExpenses);


    const calculatedSumIncomes = calculateCategorySums(incomes, selectedDate);
    const updatedSumIncomes = addMissingCategories(incomeIcons, calculatedSumIncomes);
    setSumCatIncomes(updatedSumIncomes);


    const arrayExpenses = expencesIcons.map(cat => cat[1]);
    const nonZeroCategoriesExp = getNonZeroCategories(arrayExpenses, updatedSumExpenses);
    setNonZeroCategoriesExpenses(nonZeroCategoriesExp);


    const arrayIncomes = incomeIcons.map(cat => cat[1]);
    const nonZeroCategoriesInc = getNonZeroCategories(arrayIncomes, updatedSumIncomes);
    setNonZeroCategoriesIncomes(nonZeroCategoriesInc);

  }, [expenses, incomes, selectedDate]);

  useEffect(() => {
    if (activeSheet) {
      if (activeSheet === 'incomes' && nonZeroCategoriesIncomes.length > 0) {
        setSelectCategory(nonZeroCategoriesIncomes[0]);
      } else if (activeSheet === 'expenses' && nonZeroCategoriesExpenses.length > 0) {
        setSelectCategory(nonZeroCategoriesExpenses[0]);
      }
    }
  }, [activeSheet, nonZeroCategoriesExpenses, nonZeroCategoriesIncomes]);

  const handleCategoryChange = (category) => {
    setSelectCategory(category);
  };
  return (
    <>
      <ReportDataSelection />
      <ReportsIncExpSum activeSheet={activeSheet} />
      
      <ReportsIconSet
        activeSheet={activeSheet}
        expensesClass={expensesClass}
        incomesClass={incomesClass}
        selectCategory={selectCategory}
        onCategoryChange={handleCategoryChange} 
      />
      
      <Chart
        activeSheet={activeSheet}
        selectedCategory={selectCategory} 
      />
    </>
  );
}