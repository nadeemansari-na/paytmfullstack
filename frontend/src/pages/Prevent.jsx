import { Navigate, Route } from "react-router-dom";
import { Signin } from "./Signin";

export const Prevent=()=>{
  console.log("not working")
  // console.log({login})
    const token=localStorage.getItem('token')
    if(token){
        return <Navigate to='/payment' replace />;
    }

  else  return <Signin/>
}