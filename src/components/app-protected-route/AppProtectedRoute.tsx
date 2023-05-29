import { ROUTES } from "@src/constants";
import React from "react";
import { Navigate } from "react-router-dom";

export type TProtectedRoute = {
  isAuth: boolean,
  children: JSX.Element
}

export const AppProtectedRoute:React.FC<TProtectedRoute> = (props) => {
  return (
    !props.isAuth ? (
      <Navigate to={ROUTES.signIn.path}/>
    ) : (
      props.children
    )
  )
}
