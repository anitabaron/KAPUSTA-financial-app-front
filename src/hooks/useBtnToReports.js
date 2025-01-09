import { useNavigate } from 'react-router';

export const useBtnToReports = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/transaction/reports/expenses');
  };

  return { handleOnClick };
};
