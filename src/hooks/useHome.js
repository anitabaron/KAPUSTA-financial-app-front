import { useSelector } from 'react-redux';
import { selectIsLogin } from '../redux/storeSlice';
import { useNavigate } from 'react-router';

export const useHome = () => {
  const navigate = useNavigate();
  const isLogin = useSelector(selectIsLogin);

  return { isLogin, navigate };
};
