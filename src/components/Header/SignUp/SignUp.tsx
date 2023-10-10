
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [isClicked, setIsClicked] = useState<boolean>(false);

    const handleClick = () => {
        setIsClicked(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const isButtonDisabled =
        !formData.email || !formData.password || !formData.confirmPassword;

    return (
        <div className="flex justify-end  h-screen w-full lg:py-0 mx-auto">

                <div className="w-full bg-white bg-opacity-60 rounded-lg shadow dark:border md:mt-0 md:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 h-96 space-y-4 md:space-y-6 md:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 md:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 md:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                                    Confirm password
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    id="confirm-password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 md:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex items-start"></div>
                            <Link to={!isClicked ? "/signin" : "/SignUp"}>
                                <button
                                    onClick={handleClick}
                                    type="submit"
                                    className={`w-full  text-white bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${isButtonDisabled ? 'cursor-not-allowed bg-gray-300' : ''}
                                    `}
                                    disabled={isButtonDisabled}
                                >
                                    Create an account
                                </button>
                            </Link>
                            <p className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                                Already have an account?{' '}
                                <Link to="/signin">
                                    <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                        Login here
                                    </a>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
                </div>

    )
}

export default SignUp;