const initialCurrentDate = {
  monthIndex: new Date().getMonth(),
  year: new Date().getFullYear(),
};

const init = {
  lightTheme: true,
  isLoading: false,
  isError: null,
  isLogin: false,
  isDelate: null,
  isRegister: null,
  isVerified: null,
  token: null,
  refreshToken: null,
  sesionId: null,
  userName: null,
  email: null,
  userID: null,
  userAvatar: null,
  balance: 0,
  totalIncome: null,
  totalExpense: null,
  selectedDate: {
    monthIndex: initialCurrentDate.monthIndex,
    year: initialCurrentDate.year,
  },
  incomes: [],
  incomesCat: [],
  incomesStat: {},
  expenses: [],
  expenseCat: [],
  expenseStat: {},
  transactionData: {},
  initBalance: null,
};

const initStorageValue = () => {
  const userLocaldata = window.localStorage.getItem('userLocaldata');
  const initState = init;
  if (userLocaldata !== null) {
    initState.token = JSON.parse(userLocaldata)
  }
  return initState;
};

export const initialState = initStorageValue();
