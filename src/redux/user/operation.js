import Axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"


const axios = Axios.create({
    baseURL: 'http://localhost:3000/api'
  });

const token = (state)=>state.store.token
axios.defaults.headers.common.Authorization = `Bearer ${token}`

//Get all your info

export const userDetails = createAsyncThunk(
    'userDetails /fetchreUserDetails ', 
    async(token) => {
        
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const resp = await axios.get('/user',
        )
        return resp.data
})


//Update user's balance

export const setUserBalance = createAsyncThunk(
    'getUserBalance/fetchGetUserBalance', 
    async(data) => {
        axios.defaults.headers.common.Authorization = `Bearer ${data.token}`
        const balance= parseFloat(data.newBalance)
        const resp = await axios.patch('/user/balance',
            //balance
            {
                "newBalance": balance
            }
        )
        return resp.data
})
