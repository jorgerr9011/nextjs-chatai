export default function Signup(){

    return(
        <div className="flex items-center">
            <div className="container mx-auto pe-48">
                <div className="max-w-md mx-auto my-10">
                    <div className="text-center">
                        <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-black-200">Register</h1>
                        <p className="text-gray-500 dark:text-black-400">Sign up to create your account</p>
                    </div>
                    <div className="m-7">
                        <form action="">
                            <div className="mb-6">
                                <label className="block mb-2 text-sm text-gray-600 light:text-gray-400">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="you@company.com" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 light:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm text-gray-600 light:text-gray-400">Username</label>
                                <input type="username" name="username" id="username" placeholder="you@company.com" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 light:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm text-gray-600 light:text-gray-400">Password</label>
                                </div>
                                <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 light:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm text-gray-600 light:text-gray-400">Repeat Password</label>
                                </div>
                                <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 light:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            </div>
                            <div className="mb-6">
                                <button type="button" className="w-full px-3 py-4 text-white bg-indigo-400 rounded-md focus:bg-indigo-600 focus:outline-none">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}