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
};

const initStorageValue = () => {
  const userLocaldata = window.localStorage.getItem('userLocaldata');
  if (userLocaldata !== null) {
    return JSON.parse(userLocaldata);
  }
  return init;
};

export const initialState = initStorageValue();

// export const initialState = {
//   lightTheme: true,
//   isLoading: false,
//   isError: null,
//   isLogin: true,
//   isDelate: null,
//   isRegister: true,
//   isVerified: true,
//   token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjgzMjFhODUxM2YwYzdhZDI4YTU1NyIsImVtYWlsIjoicXdlcnR5MEBleGFtcGxlLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzM0ODg2NTY3LCJleHAiOjE3MzQ4OTAxNjd9.amW6A6CD-EwwAUbswEHcjZmDji5GSy4a9gLl7Gp5T48",
//   refreshToken: "sadfasgergrshbsbdgjyujtyhsrtggsegsrtg",
//   sesionId: "sadfasgergrshbsbdgjyujtyhsrtggsegsrtg",
//   userName: "Olaf",
//   email: "Olaf@gmail.com",
//   userID: 1111,
//   userAvatar: null,
//   balance: 0,
//   totalIncome: 1000000,
//   totalExpense: 200000,
//   incomes: [
//     {
//       description: "1Transaction's description",
//       category: "Продукты",
//       amount: 100,
//       date: "2020-12-31",
//       _id: "507f1f77bcf86cd799439013",
//     },
//     {
//       description: "2Transaction's description",
//       category: "Продукты",
//       amount: 300,
//       date: "2020-12-31",
//       _id: "507f1f77bcf86cd799439013",
//     },
//     {
//       description: "3Transaction's description",
//       category: "Продукты",
//       amount: 500,
//       date: "2020-12-31",
//       _id: "507f1f77bcf86cd799439013",
//     },
//   ],
//   incomesCat: [
//     { salary: 200 },
//     { "garage sale": 500 },
//     { "income from renting apartment": 5000 },
//   ],
//   incomesStat: {
//     January: 1000,
//     February: 2000,
//     March: 500,
//     April: 800,
//     May: 300,
//     June: 2500,
//     July: 400,
//     August: 800,
//     September: 0,
//     October: 200,
//     November: 9000,
//     December: 5000,
//   },
//   expenses: [
//     {
//       description: "1Transaction's description",
//       category: "Продукты",
//       amount: 1000,
//       date: "2020-12-31",
//       _id: "507f1f77bcf86cd799439013",
//     },
//     {
//       description: "2Transaction's description",
//       category: "Продукты",
//       amount: 3000,
//       date: "2020-12-31",
//       _id: "507f1f77bcf86cd799439013",
//     },
//     {
//       description: "3Transaction's description",
//       category: "Продукты",
//       amount: 5000,
//       date: "2020-12-31",
//       _id: "507f1f77bcf86cd799439013",
//     },
//   ],
//   expenseCat: [
//     { education: 2000 },
//     { food: 100 },
//     { clothes: 500 },
//     { entertainment: 800 },
//     { transport: 100 },
//   ],
//   expenseStat: {
//     January: 4000,
//     February: 1000,
//     March: 3500,
//     April: 600,
//     May: 3000,
//     June: 2000,
//     July: 1400,
//     August: 2500,
//     September: 800,
//     October: 2000,
//     November: 900,
//     December: 500,
//   },
//   transactionData: {},
// };
