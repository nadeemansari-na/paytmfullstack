import { useState } from "react";
import { Delete } from "./Delete";
import { useNavigate } from "react-router-dom";

export function Dropdown({open, setopen}){
    console.log("yahan tk pahuncha")
    const navigate=useNavigate()
    const [on,seton] =useState(false);
    const [user,setuser] = useState(localStorage.getItem("user"))
    
    return <div >
             {/* <div className="mr-9 p-1 rounded-full bg-green-600 w-7 h-7 flex justify-center items-center"><span className="text-white">s</span></div> */}

 
    <div   className="inline-block text-left text-xs">
      {/* Button */}
      <button 
        onClick={() => setopen(!open)}
        className="relative  px-3 py-1 mr-3  bg-black text-white rounded-md cursor-pointer hover:bg-green-900"
      >


        <span className="text-base">{user[0]}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div  className="absolute right-4 mt-2 w-39 bg-white shadow-lg shadow-blue-200 rounded-md p-2">
          <button className="block w-full text-left px-2 py-2 hover:bg-gray-100">
            {user}
          </button> <hr className="text-blue-400" />
          <button  onMouseLeave={()=> seton(false)}  onMouseEnter={()=> seton(true)} className="relative block w-full text-left px-3 py-2 hover:bg-gray-100 cursor-pointer">
            Theme
          </button>
          <button onClick={()=>{
             localStorage.removeItem('token')
             navigate('/')
          }
             } 
             className="block w-full text-left px-3 py-2 hover:bg-gray-100 text-red-600 cursor-pointer">
            Logout
          </button>
        </div>
      )}

      {/* condition rendering in react // show this only when on is true */}
      {/* inside dropdown */} 

      {on && (
        <div className="absolute right-43 top-25 w-12 bg-white shadow-lg shadow-blue-200">
          <button className="block w-full text-left px-2 py-2 hover:bg-gray-100 cursor-pointer">light</button>
          <button className="block w-full text-left px-2 py-2 hover:bg-gray-100 cursor-pointer">dark</button>
        </div>
      )}
    </div>

    </div>
}

