import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsLoading, selectBalance } from '../redux/storeSlice';
import { saveDataToLocalStorage } from '../redux/storeSlice';

export const useApp = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isBalance = useSelector(selectBalance);

  const useSaveLocalStorage = () => {
    useEffect(() => {
      dispatch(saveDataToLocalStorage());
    }, [isLoading, isBalance]);
  };

  return { useSaveLocalStorage };
};
