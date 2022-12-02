export default function SignUp() {
    return (
        <div className="max-w-lg mx-auto my-10 p-8 rounded-xl" >
            <h1 className="text-4xl font-medium">Register</h1>
            {/* <p className="">Hi, Register to use the TODO app 👋</p> */}

            {/* <div className="my-5">
                <button className="btn w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center  rounded-lg  hover:shadow transition duration-150 ">
                    <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="" /> <span>Login with Google</span>
                </button>
            </div> */}
            <form action="" className="my-10">
                <div className="flex flex-col space-y-5">
                    <label for="name">
                        <p className="font-medium pb-2">Name</p>
                        <input id="email" name="name" type="text" className="input input-secondary w-full py-3 rounded-lg px-3 hover:shadow" placeholder="Enter your name" />
                    </label>
                    <label for="email">
                        <p className="font-medium pb-2">Email address</p>
                        <input id="email" name="email" type="email" className="input input-secondary w-full py-3 rounded-lg px-3 hover:shadow" placeholder="Enter email address" />
                    </label>
                    <label for="password">
                        <p className="font-medium pb-2">Password</p>
                        <input id="password" name="password" type="password" className="input input-secondary w-full py-3 rounded-lg px-3 f hover:shadow" placeholder="Enter your password" />
                    </label>
                    {/* <div className="flex flex-row justify-between">
                            <div>
                                <label for="remember" className="">
                                    <input type="checkbox" id="remember" className="w-4 h-4 border-slate-200 focus:bg-indigo-600" />
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <a href="#" className="font-medium text-indigo-600">Forgot Password?</a>
                            </div>
                        </div> */}
                    <button className="btn btn-secondary w-full py-3 font-medium rounded-lg hover:shadow inline-flex space-x-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM5 18c.2-.63 2.57-1.68 4.96-1.94l2.04-2c-.39-.04-.68-.06-1-.06-2.67 0-8 1.34-8 4v2h9l-2-2H5zm15.6-5.5l-5.13 5.17-2.07-2.08L12 17l3.47 3.5L22 13.91z"/></svg>
                        <span>Register</span>
                    </button>
                    <p className="text-center">Already Registered!! <a href="#" className="text-primary font-medium inline-flex space-x-1 items-center"><span>Login </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg></span></a></p>
                </div>
            </form>
        </div>
    )
}