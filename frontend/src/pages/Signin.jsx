import { useEffect, useState } from "react"
import { Heading } from "../components/Heading"
import { Subheading } from "../components/Subheading"
import { Inputbox } from "../components/Inputbox"
import { Buttonbox } from "../components/Buttonbox"
import { Navigate, useNavigate } from "react-router-dom"
import axios from "axios"

export const Signin = () => {
    const [Username, setUsername] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()
//     const limbi = token.length
//     console.log(limbi)
//     useEffect(()=>{
// if (limbi !=0 && limbi!=9 ) navigate('/payment')
// else if(limbi==0){ alert('Please fill your correct Email') }
// else if(limbi==9){ alert('Email or password is incorrect')}
//     },[token])
  
    return <div className="flex justify-center items-center h-screen w-screen bg-gray-200">
        <div className="flex justify-center items-center bg-white rounded-2xl shadow-amber-400">
            <div className="flex flex-col  p-5 h-3/4 gap-3">
                <Heading label={"Sign in"}></Heading>
                <div className="mb-3 text-center w-44">
                <Subheading  label={"Enter your information to access your account"}></Subheading>

                </div>
                <Inputbox onchange={(e) => {
                    setUsername(e.target.value)
                }} placeholder={"nadeemans@gmail.com"} label={"Email"}></Inputbox>
                <Inputbox Type={"number"} onchange={(e) => {
                    setpassword(e.target.value)
                }} placeholder={"Minimum 7 character"} label={"Password"}></Inputbox>
                <div className="mt-3 ">
                    <Buttonbox onclick={async (e) => {
                        const ret = await axios.get('https://paytmfullstack-z2x9.onrender.com/api/v1/user/signin', {
                            headers: {
                                username: Username,
                                password
                            }
                        })
                        
                        
                      if(ret.data.msg=="got the token"){ 
                         navigate('/payment')
                        localStorage.setItem("token", ret.data.token)
                        localStorage.setItem("user",ret.data.username)
                    }
                    else alert("email or password is incorrect")
                        
                    }} label={"Sign in"}></Buttonbox>

                </div>
                <div ><p className="text-center text-gray-500">Cant have an account ? <a className="underline-offset-1 text-blue-500" href="/">Sign up</a></p></div>
                <div>
                </div>
            </div>
        </div>
    </div>
}