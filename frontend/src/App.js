
import {React} from "react";

import SignUp from "./Components/SignUp";
import SignIn from"./Components/SignIn";
import {Routes, Route } from "react-router-dom";

import "./Components/style.css";
// import SignUp from "./SignUp";
import NavBar from "./Components/NavBar"
import Home from "./Components/Home";
import NewCard from './Components/Newcard'
import Update from './Components/Update'
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";

function App() {
  
  return (
<>


<NavBar/>
    <Routes>
   {/* <Route element={<NavBar/>}><Route path="/Home" element={<Home />} /> */}
   <Route path="/Home" element={<Home />} />
        <Route path="/NewCard" element={<NewCard />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/note/:id" element={<Update />} />
        
        
        
        {/* <Route path="/Newcard" element={<Newcard />} /> */}
       
      
         <Route path="/" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
      
    </>
  );
}
export default App