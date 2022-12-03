import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const router = useRouter()

    const userDetail = async () => {
        try {
            const data = { email, password }
            const user = await axios.post('http://localhost:4000/login', data, 
            { withCredentials: true })
            // console.log(user.data)
            const userData = user.data

            if(userData.success) {
                router.push('/page/dashboard')
            }
        } catch (error) {
            setError(error.response.data.message)
        }
    }

    const handleDefault = (event) => {
        event.preventDefault()
        userDetail()
    }
    return (
        <div className="max-w-lg mx-auto my-10 p-8 rounded-xl" >
            <h1 className="text-4xl font-medium">Login</h1>
            <p className="">Hi, Welcome back 👋</p>

            <div className="my-5">
                <button className="btn w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center  rounded-lg  hover:shadow transition duration-150 ">
                    <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="" /> <span>Login with Google</span>
                </button>
            </div>
            <form action="" className="my-10" onSubmit={handleDefault}>
                <div className="flex flex-col space-y-5">
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

                        {/* Error message */}
                        <span className="ml-1 text-error font-medium">{error}</span>

                    <button className="btn btn-secondary w-full py-3 font-medium rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        <span>Login</span>
                    </button>
                    <p className="text-center">Not registered yet?
                        <Link href='/page/signup' className="text-primary font-medium inline-flex space-x-1 items-center">
                            <span className="ml-1">Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg></span>
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}