import Axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const axios = Axios.create({
  baseURL: "http://localhost:3000/api",
});

//Add an income
export const addUserIncome = createAsyncThunk(
  'addUserIncome/fetchAddUserIncome',
  async ({token , transactionDetails }) => {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      const resp = await axios.post('/transaction/income', 
        transactionDetails
                // {
                //   "typeOfTransaction": "expense",
                //   "description": "Nice dinner",
                //   "amount": "500",
                //   "date": "2024-10-03",
                //   "category": "Food"
                // }
              );
    
      return resp.data;
  }
);

//Get income stats
export const getUserIncome = createAsyncThunk(
  "getUserIncome/fetchGetUserIncome",
  async (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    const resp = await axios.get("/transaction/income");
    return resp.data;
  }
);

//Add an expense
export const addUserExpense = createAsyncThunk(
  'addUserExpense/fetchAddUserExpense',
  async ({token , transactionDetails }) => {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      const resp = await axios.post('/transaction/expense', 
        transactionDetails
              // {
              //   "typeOfTransaction": "expense",
              //   "description": "Nice dinner",
              //   "amount": "500",
              //   "date": "2024-10-03",
              //   "category": "Food"
              // }
              );
      return resp.data;        
  });

//Get expense stats
export const getUserExpense = createAsyncThunk(
  "getUserExpense/fetchGetUserExpense",
  async (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    const resp = await axios.get("/transaction/expense");
    return resp.data;
  }
);

// Delete transaction
export const deleteUserExpense = createAsyncThunk(
  'deleteUserTransaction/fetchDeleteUserTransaction',
  async ({ transDesc, token }) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    const endpoint = `/transaction/${transDesc}`
    const resp = await axios.delete(endpoint);
    return resp.data;
  }
);

//Get categories for incomes

export const userIncomeCategory = createAsyncThunk(
  "userIncomeCategory/fetchUserIncomeCategory",
  async (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    const resp = await axios.get("/transaction/income-categories");
    return resp.data;
  }
);

//Get categories for expenses

export const userExpenseCategory = createAsyncThunk(
  "userExpenseCategory/fetchUserExpenseCategory",
  async (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    const resp = await axios.get("/transaction/expense-categories");
    return resp.data;
  }
);

//Get transactions data for a specific period

export const userTransactionPeriodDate = createAsyncThunk(
  "userTransactionPeriodDate/fetchUserTransactionPeriodDate",
  async ({ monthIndex, year, token }, { rejectWithValue }) => {
    try {
      console.log("Dane przekazane do zapytania:", { monthIndex, year });
      //   console.log("Token użyty do autoryzacji:", token);
        axios.defaults.headers.common.Authorization = `Bearer ${encodeURIComponent(
          token
        )}`;
      const resp = await axios.get(
        `/transaction/period-data?monthIndex=${monthIndex}&year=${year}`
      );
      return resp.data;
    } catch (error) {
      console.error("Błąd podczas pobierania danych:", error);
      return rejectWithValue(error.response?.data || "Błąd serwera");
    }
  }
);

// Update balance
export const updateBalance = createAsyncThunk(
  "user/updateBalance",
  async (balance, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const token = state.store.token;
      if (!token) {
        console.error("No token found");
        return rejectWithValue("No token found");
      }
      console.log("Using token:", token);
      console.log("Sending balance:", balance);
      const response = await axios.patch(
        "/user/balance",
        { newBalance: Number(balance) },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response from server:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error updating balance:",
        error.response?.data || error.message
      );
      return rejectWithValue(error.response?.data || "Server error");
    }
  }
);
