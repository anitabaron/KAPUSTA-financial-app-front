import { useNavigate, useLocation } from 'react-router'; // Dodajemy useLocation do sprawdzania bieżącej ścieżki

export const useReportNavBtn = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook zwracający obecną lokalizację (ścieżkę)

  // Funkcja do przełączania widoku
  const toggleSheet = () => {
    const currentPath = location.pathname; // Bieżąca ścieżka

    // Jeżeli obecna ścieżka to "expenses", to przełączamy na "incomes", i odwrotnie
    if (currentPath.includes('expenses')) {
      navigate('/transaction/reports/incomes', { replace: true });
    } else if (currentPath.includes('incomes')) {
      navigate('/transaction/reports/expenses', { replace: true });
    }
  };

  return toggleSheet ;
};
