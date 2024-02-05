import { Routes, Route, Link } from 'react-router-dom';
import Analyze from "../../NavigationComponenets/Analyze/Analyze";
import Launchpad from "../../NavigationComponenets/Launchpad/Launchpad";
import Footprint from "../../NavigationComponenets/personInfoModal/Footprint";
import Calculator from "../../NavigationComponenets/Calculator/Calculator";
import { AppContext } from "../../../App";
import { useContext } from "react";
import SignUp from "../../Header/SignUp/SignUp";
import SignIn from "../../Header/SignIn/SignIn";

function Routing() {
    const { isLoggedIn } = useContext(AppContext);

    return (
        <Routes>
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/' element={isLoggedIn ? <Launchpad /> : <SignIn />} />
            <Route path='/analyze' element={isLoggedIn ? <Analyze /> : <SignIn />} />
            <Route path='/footprint' element={isLoggedIn ? <Footprint /> : <SignIn />} />
            <Route path='/calculator' element={isLoggedIn ? <Calculator /> : <SignIn />} />
            <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
    )
}

export default Routing;