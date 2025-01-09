import { useDispatch } from "react-redux"
import { signOutUser } from "../redux/auth/operation"
import { useSelector } from 'react-redux';
import {selectIsLogin, selectUserAvatar, selectUserName, selectToken } from '../redux/storeSlice';
import { useState } from "react";
import { useNavigate } from "react-router";

export const useNavBar=()=>{
  const isLogin = useSelector(selectIsLogin);
  const avatar = useSelector(selectUserAvatar);
  const userName = useSelector(selectUserName);
  const dispach = useDispatch()
  const navigate = useNavigate()
  const token = useSelector(selectToken)
  const [modalIsOpen, setModalIsOpene]=useState(false)

  const signOut=()=>{
    setModalIsOpene(true)
  }
  const signOutConf=()=>{
    setModalIsOpene(false)
    dispach(signOutUser(token))
    navigate("/", {replace: true})

  }
  const modalIsClose = () =>{
    setModalIsOpene(false)
  }
    return { isLogin, avatar, userName, modalIsOpen, signOut, signOutConf, modalIsClose }
}