import { useState, createContext, useContext } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './app.css';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router } from "react-router-dom";

const value: any = [];

export const AppContext = createContext({
  formArray: value,
  setFormArray: (formArray: any[]) => { },
  isLoggedIn: false,
  setIsLoggedIn: (formArray: boolean) => { },
  name: value,
  setName: (formArray: any) => { }
});

function App() {
  const [formArray, setFormArray] = useState<any[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [name, setName] = useState<any>('');


  return (
    <AppContext.Provider value={{ formArray, setFormArray, isLoggedIn, setIsLoggedIn, name, setName }}>
      <Router>
        <div className='w-screen sm:h-screen flex justify-between flex-col ' >
          <Header />
          <Navigation />
          <Footer />
        </div>
      </Router>
    </AppContext.Provider>
  )
}


export default App;
