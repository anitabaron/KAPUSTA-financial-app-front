import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsLoading, selectToken } from '../redux/storeSlice';
import { saveDataToLocalStorage } from '../redux/storeSlice';
import { userDetails } from '../redux/user/operation';
export const useApp = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const token = useSelector(selectToken);

  const useSaveLocalStorage = () => {
    useEffect(() => {
      dispatch(saveDataToLocalStorage());
    }, [isLoading]);
  };

  const useGetUserData = () => {
    useEffect(() => {
      if(token !== null & token !== undefined){
        dispatch(userDetails(token));
      }
    }, [token]);
  };

  return { useSaveLocalStorage, useGetUserData };
};
