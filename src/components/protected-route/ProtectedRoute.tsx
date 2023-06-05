import { ROUTES } from "@src/constants";
import { RootState } from "@src/store/store";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Loader } from "../Loader/Loader";

export type TProtectedRoute = {
  isAuth: boolean,
  children: JSX.Element
}

export const ProtectedRoute:React.FC<TProtectedRoute> = (props) => {
  const isLoading = useSelector((state:RootState) => state.user.isLoading)

  return (
    !props.isAuth ? (
      <Navigate to={ROUTES.signIn.path}/>
    ) : (
      isLoading ?
      <Loader />
      :
      props.children
    )
  )
}
