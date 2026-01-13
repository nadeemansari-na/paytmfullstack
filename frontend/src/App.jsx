import React from "react"
import { Signup } from "./pages/Signup"
import { Signin } from "./pages/Signin"
import { PaymentApp } from "./pages/PaymentApp"
import { Sendmoney } from "./pages/Sendmoney"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Prevent } from "./pages/Prevent"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Prevent ></Prevent>}></Route>
        <Route path="/" element={ <Signup/>}></Route>
        {/* <Route path="/signin" element={ <Signin/>}></Route> */}
        <Route path="/sendmoney" element={<Sendmoney></Sendmoney>}></Route>
        <Route path="/payment" element={<PaymentApp></PaymentApp>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
