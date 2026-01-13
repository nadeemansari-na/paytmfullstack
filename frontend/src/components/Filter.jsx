import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

let key=1;
export function Filter(){
        const [Search,setSearch]=useState("")
        const [dabba, setdabba]=useState([])
        useEffect( ()=>{
            const fetchdata= async ()=>{
                console.log('filter=',{Search})
                const response=await axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${Search}`)
               setdabba(response.data.user)

            }
            fetchdata()
        },[Search])
        console.log("search",Search)
        return <>
        <p className="mt-5 font-semibold ">Users</p>
        <input className="pl-3 pb-1 pt-1 m-2 mb-2 mt-5 bg-gray-100 w-full rounded-md" type="text" placeholder="search inputs" onChange={(e)=>{
            setSearch(e.target.value)
        }}/>
       <User dabba={dabba}/>
    </>
}

function User({dabba}){
    const navigate=useNavigate()
    return <div id="83">
            {dabba.map(e=>
        <div id={key++} className="mt-5 flex justify-between hover:bg-gray-100">
            <div  className="flex gap-7 items-center">
            <div className="flex justify-center items-center rounded-full w-10 h-10 bg-green-100 ">
                <div className="text-green font-semibold">
            {e.firstname[0]}
                </div>
            </div>
            <div>{e.firstname} {e.lastname}</div>
            </div>

            <button className="bg-black pt-1 pb-1 pl-3 pr-3 shadow-blue-50 text-white rounded-md cursor-pointer " onClick={()=>{
            navigate(`/Sendmoney?id=${e._id}&name=${e.firstname}`)
            }}>
                Send money
            </button>
    
            </div>
       
        )}
        </div>
    }