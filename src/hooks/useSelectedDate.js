import { useSelector, useDispatch } from 'react-redux';
import { changeSelectedDate, selectSelectedDate } from '../redux/storeSlice.js';

export const useSelectedDate = () => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentDate = {
    monthIndex: new Date().getMonth(),
    year: new Date().getFullYear(),
  };

  const dispatch = useDispatch();
  const selectedDate = useSelector(selectSelectedDate);

  const setSelectedDate = (newDate) => {
    const monthIndex = newDate.getMonth();
    const year = newDate.getFullYear();
    dispatch(changeSelectedDate({ monthIndex, year }));
  };

  return { selectedDate, setSelectedDate, monthNames, currentDate };
};
