import { Heading } from "../components/Heading";
import { Buttonbox } from "../components/Buttonbox";
import { Inputbox } from "../components/Inputbox";
import { useSearchParams } from "react-router-dom";
import { Name } from "../components/Name";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
// import { useSearchParams } from "react-router-dom";


export function Sendmoney(){
const [Searchparams]=useSearchParams()
const [amount,setamount]=useState(0)
const id=Searchparams.get('id')
console.log(amount)
console.log("id",id)
console.log(localStorage.getItem('token'))


    return <div className="flex justify-center items-center h-screen w-screen bg-gray-200">
     <div className="flex justify-center items-center bg-white rounded-2xl shadow-amber-400">
        <div className="flex flex-col  p-8 gap-3">
           <Heading  label={"Send Money"}></Heading>
           <Name />
           <p>Amount in Rs</p>
            <Inputbox  onchange={(e)=>{
                setamount(Number(e.target.value)||0)
            }} placeholder={"amount send"}></Inputbox>
            <Buttonbox  onclick={async ()=>{
           const res=await axios.post('http://localhost:3000/api/v1/acount/transfer',{
                amount:amount,
                to:id
            },{
            headers:{
                authorization:`Bearer ${localStorage.getItem('token')}`
            }
        }
           )

           alert("money transfer successfully")

            }} label={"send money"} ></Buttonbox>

        </div>
        </div>
    </div>
}