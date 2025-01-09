import * as Yup from 'yup';
import { useDispatch } from "react-redux"
import { signInUser } from "../redux/auth/operation"
import { useNavigate } from "react-router";
// import { selectIsLogin, selectLightTheme } from '../redux/storeSlice';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
export const useSignIn=()=>{
  const dispach = useDispatch()
  const navigate = useNavigate()

  const signIn=(user)=>{
    dispach(signInUser(user))
    
  }
  const clickSignUp=(e)=>{
    navigate("/register", {replace: true})
    e.preventDefault()
  }
  const SignInShema = Yup.object().shape({
              email: Yup.string()
               .email("Invalid email address")
               .required('Email is required'),
               password:  Yup.string()
               .min(6, "Password must be at least 8 characters")
               .required("Password is required"),
  })
    
  return {SignInShema, signIn, clickSignUp}
}