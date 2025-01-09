import { useNavigate } from 'react-router';

export const useBtnGoBack = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/transaction/expenses');
  };

  return { handleBack };
};
