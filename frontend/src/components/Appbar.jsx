import axios from "axios"
import { useEffect, useState } from "react"


export function Appbar(){
    const [store,setstore]=useState(0)

    useEffect( ()=>{
      async  function call(){

          const result= await axios.get('http://localhost:3000/api/v1/acount/getbalance',{
              headers:{
                  Authorization:`Bearer ${localStorage.getItem('token')}`
              }
          })
          setstore(result.data.balance)
        }
        call()
        
    },[])
    return <div>
        <div className="mt-5 flex items-center gap-11">
        <div className=" font-semibold">Your balance   </div>
        <div className="">₹{store.toFixed(2)}</div>
        </div>

    </div>
}