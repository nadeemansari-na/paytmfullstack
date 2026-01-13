import { Heading } from "../components/Heading"
import { Inputbox } from "../components/Inputbox"
import { Subheading } from "../components/Subheading"
import { Buttonbox } from "../components/Buttonbox"
import { useState, useEffect } from "react"
import axios from 'axios'
import { ButtonWarning } from "../components/ButtonWarning"
import { Navigate, useNavigate } from "react-router-dom"

export const Signup = () => {
    const navigate = useNavigate();
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Password, setPassword] = useState("");
    const [Username, setUsername] = useState("");

    useEffect(() => {
        // Redirect to '/payment' if the user is already signed in
        if (localStorage.getItem("token")) {
            navigate('/payment', { replace: true });
        }
    }, [navigate]);

    console.log(Username, Firstname, Lastname, Password)
    console.log(localStorage.getItem("token"))
        // if(!localStorage.getItem("token") || localStorage.getItem(" ")){
    return <div className="flex justify-center items-center h-screen w-screen bg-gray-200">
        <div className="flex justify-center items-center bg-white rounded-2xl shadow-amber-400">
            <div className="flex flex-col  p-7 gap-4">
                <Heading label={"Sign up"}></Heading>
                <Subheading label={"Enter your username, firstname, lastname, password"}></Subheading>
                <Inputbox onchange={(e) => {
                    setFirstname(e.target.value)
                }} placeholder={"Nadeem"} label={"First Name"}></Inputbox>
                <Inputbox onchange={(e) => {
                    setLastname(e.target.value)
                }} placeholder={"Ansari"} label={"Last Name"}></Inputbox>
                <Inputbox onchange={(e) => {
                    setUsername(e.target.value)
                }} placeholder={"nadeemans@gmail.com"} label={"Email"}></Inputbox>
                <Inputbox onchange={(e) => {
                    setPassword(e.target.value)
                }} placeholder={"Minimum 7 character"} label={"Password"}></Inputbox>

                <Buttonbox label={"Sign up"} onclick={async () => {
                const result=await   axios.post('http://localhost:3000/api/v1/user/signup', {
                        username: Username,
                        firstname: Firstname,
                        lastname: Lastname,
                        password: Password
                    }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    
                    
                    //  const dabba=localStorage.getItem("token")
                    console.log("msg:"+result.data.msg)
                    if(result.data.msg=="user created successfully"){
                        localStorage.setItem("token",result.data.token)
                        localStorage.setItem("user",result.data.username)
                    navigate('/payment')
                }
                    else alert("your credential are wrong")
                }}></Buttonbox>
                <ButtonWarning label={"Already have an account?"} buttontext={"Sign in"} to={"/signin"} ></ButtonWarning>
            </div>
        </div>
    </div>
    //     }

    // else{
    //    return  <Navigate to={'/payment'} replace/>
    // }
}

