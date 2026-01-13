import { useState } from "react"
import { Inputbox } from "../components/Inputbox"
import { Appbar } from "../components/Appbar"
import { Filter } from "../components/Filter"
import axios from "axios"
import { Dropdown } from "../components/Dropdown"

export  function PaymentApp(){
  const [open, setopen]=useState(false)

    return <div  on={()=>{
      console.log("clicked")
       open? setopen(false):setopen(true)}} className="m-2  ml-4 ">
      <div className="text-xl font-semibold shadow-black flex justify-between">
        <div className="text-xl font-semibold shadow-black">PayTm App</div>
       <Dropdown open={open} setopen={setopen}/>
         </div> <br /><hr className="text-blue-200 text-shadow-blue-200" />
        <Appbar amount={"Rs 10000"} />


        <Filter></Filter>
        

    </div>
}