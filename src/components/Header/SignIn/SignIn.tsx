import { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../../App';

function Profile() {
  const [email, setEmail] = useState('');
  const [nameInput, setNameInput] = useState(''); // Create local state for name input
  const [password, setPassword] = useState('');
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const { setName } = useContext(AppContext);

  useEffect(() => {
    if (!isLoggedIn) {
      setName('')
    }
      const storedName = localStorage.getItem('name');
      if (storedName) {
        setName(storedName);
      }
    
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  const handleRegistration = () => {
    if (email && password && nameInput) {
      const user = { email, password };
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('name', nameInput);
      setName(nameInput);
      setEmail('');
      setPassword('');
      setIsLoggedIn(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="flex justify-end  h-screen w-full lg:py-0 mx-auto">
      <div className=" w-full bg-white bg-opacity-60 rounded-lg shadow dark:border md:mt-0 md:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 h-96 space-y-4 md:space-y-6 md:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Log In
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label htmlFor="name" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                Your name
              </label>
              <input
                type="name"
                name="name"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 md:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 md:text-md rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <p className="text-md text-gray-600 font-bold dark:text-gray-600">
              Don't have an account? <Link to="/signup" >
                <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up here</a></Link> </p>
            <Link to="/">
              <button
                onClick={handleRegistration}
                type="submit"
                className="w-full  text-white bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mt-4"
              >
                Log In
              </button>
            </Link>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Profile;
