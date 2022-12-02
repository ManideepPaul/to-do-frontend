import Link from "next/link";
import axios from "axios";
import { useState } from "react";

export default function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createUser = async () => {
        try {
            const data = {name, email, password}
            const addUser = await axios.post('http://localhost:4000/createUser', data)  
            console.log(addUser) 
            setName('')
            setEmail('')
            setPassword('')
        } catch (error) {
            console.log(error)
        }
    }

    const handleDefault = (event) => {
        event.preventDefault()
        createUser()
    }
    return (
        <div className="max-w-lg mx-auto my-10 p-8 rounded-xl" >
            <h1 className="text-4xl font-medium">Register</h1>
            {/* <p className="">Hi, Register to use the TODO app 👋</p> */}

            {/* <div className="my-5">
                <button className="btn w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center  rounded-lg  hover:shadow transition duration-150 ">
                    <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="" /> <span>Login with Google</span>
                </button>
            </div> */}
            <form action="" className="my-10" onSubmit={handleDefault}>
                <div className="flex flex-col space-y-5">
                    <label htmlFor="name">
                        <p className="font-medium pb-2">Name</p>
                        <input id="email" name="name" type="text" className="input input-secondary w-full py-3 rounded-lg px-3 hover:shadow" placeholder="Enter your name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </label>
                    <label htmlFor="email">
                        <p className="font-medium pb-2">Email address</p>
                        <input id="email" name="email" type="email" className="input input-secondary w-full py-3 rounded-lg px-3 hover:shadow" placeholder="Enter email address" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                    </label>
                    <label htmlFor="password">
                        <p className="font-medium pb-2">Password</p>
                        <input id="password" name="password" type="password" className="input input-secondary w-full py-3 rounded-lg px-3 f hover:shadow" placeholder="Enter your password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                    {/* <div className="flex flex-row justify-between">
                            <div>
                                <label htmlFor="remember" className="">
                                    <input type="checkbox" id="remember" className="w-4 h-4 border-slate-200 focus:bg-indigo-600" />
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <a href="#" className="font-medium text-indigo-600">Forgot Password?</a>
                            </div>
                        </div> */}
                    <button className="btn btn-secondary w-full py-3 font-medium rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM5 18c.2-.63 2.57-1.68 4.96-1.94l2.04-2c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-2-2H5zm15.6-5.5l-5.13 5.17-2.07-2.08L12 17l3.47 3.5L22 13.91z" /></svg>
                        <span>Register</span>
                    </button>
                    <p className="text-center">Already Registered?
                        <Link href="/page/login" className="text-primary font-medium inline-flex space-x-1 items-center"><span className="ml-1">Login </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg></span>
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}