
import {React} from "react";

import SignUp from "./Components/SignUp";
import SignIn from"./Components/SignIn";
import {Routes, Route } from "react-router-dom";
import Card from'./Components/Card'
import "./Components/style.css";
// import SignUp from "./SignUp";
import NavBar from "./Components/NavBar"
import Home from "./Components/Home";
import New from './Components/New'
import Newcard from './Components/Newcard'
function App() {
  
  return (
<>

<NavBar/>
    <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/New" element={<New />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Newcard" element={<Newcard />} />
      </Routes>
      
 <Routes>
         <Route path="/" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
      
    </>
  );
}
export default App