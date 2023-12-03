import React from "react";

const Login = (props)=>
{
    const Close = () =>
    {
        props.setLoginPage(false);
        props.setLoginAdminPage(false);
        props.setRegisterPage(false);
    }
    
    const ToggleAdmin = () =>
    {
        props.setLoginPage(true);
        props.setLoginAdminPage(false);
        props.setRegisterPage(false);
    }

    const ToggleRegister = () =>
    {
        props.setRegisterPage(true);
        props.setLoginAdminPage(false);
        props.setLoginPage(false);
    }

    return (
        <div>
<div id="login-popup" tabindex="-1"
    className="bg-black/75 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex">
    <div className="relative p-4 w-full max-w-md h-full md:h-auto">

        <div className="relative bg-zinc-900 rounded-lg shadow">
            <button type="button" onClick={Close}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-red-700 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"><svg
                    aria-hidden="true" className="w-5 h-5" fill="#c6c7c7" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        cliprule="evenodd"></path>
                </svg>
                <span className="sr-only">Close popup</span>
            </button>

            <div className="p-5">
                <p className="mb-4 text-sm font-normal text-gray-800"></p>

                <div className="text-center">
                    <p className="mb-6 text-2xl font-semibold leading-5 text-white">
                        Admin Login
                    </p>
                </div>


                <form className="w-full">
                <label for="username" className="sr-only">Admin username</label>
                    <input name="username" type="text" required=""
                        className="inputText mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Admin username" />
                    <label for="password" className="sr-only">Admin password</label>
                    <input name="password" type="password" autocomplete="current-password" required=""
                        className="inputText mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Admin password" />
                    <p className="mb-3 mt-2 text-sm text-gray-500" >
                        <a href="/forgot-password" className="text-red-700 hover:text-red-500">Reset your password?</a>
                    </p>
                    <button type="submit"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400">
                        Continue
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-slate-600">
                    Don't have an account?
                    <p onClick={ToggleRegister} className="font-medium text-red-700 hover:text-red-500">Sign up</p>
                </div>

                <div className="mt-2 text-center text-sm text-slate-600">
                    Are you a user?
                    <span><p onClick={ToggleAdmin} className="font-medium text-red-700 hover:text-red-500">Sign in as user</p></span>
                </div>
            </div>
        </div>
    </div>
</div>

        </div>
    )
}

export default Login;