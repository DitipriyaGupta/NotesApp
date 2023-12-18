
import {React} from "react";

import SignUp from "./Components/SignUp";
import SignIn from"./Components/SignIn";
import {Routes, Route } from "react-router-dom";
import "./Components/style.css";
import NavBar from "./Components/NavBar"
import Home from "./Components/Home";
import NewCard from './Components/Newcard'
import Update from './Components/Update'
import Aboutus from "./Components/Aboutus";
import Contactus from "./Components/Contactus";
import {  useSelector } from "react-redux";
import { createTheme, ThemeProvider  ,useTheme} from '@mui/material/styles';
const theme = createTheme({
  typography: {
    fontFamily: [
      'Plus Jakarta Sans',
      'sans-serif',
    ].join(','),
  },});
function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
<ThemeProvider theme={theme}>
{userInfo?<NavBar/>:null}
 <Routes>
     
 
      <Route path="/Home" element={<Home />} />
 <Route path="/NewCard" element={<NewCard />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/note/:id" element={<Update />} />
        
        <Route path="/" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      
         
      </Routes>
      </ThemeProvider>
   
      
  );
}
export default App