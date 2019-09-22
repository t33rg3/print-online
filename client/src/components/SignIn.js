import React from "react";

const SignIn = () => {
    return (
        <div className="container mx-auto flex justify-center" style={{ height: "100vh" }} >
            <div className="w-full max-w-md m-auto">
                <form className="bg-silver-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        Username
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div className="mb-6">
                        Password
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <input value="Sign In" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" />
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                    </a>
                    </div>
                </form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2019 Acme Corp. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default SignIn;