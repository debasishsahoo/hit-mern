import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import SignIn from './pages/User/SignIn'
import SignUp from './pages/User/SignUp'
import ChangePassword from './pages/User/ChangePassword'
import SignOut from './pages/User/SignOut'
import GetUser from './pages/User/GetUser'
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={ <SignIn/> }/>
          <Route path="/signin" element={ <SignIn/> }/>
          <Route path="/signup" element={ <SignUp/> }/>
          <Route path="/signout" element={ <SignOut/> }/>
          <Route path="/changepassword" element={ <ChangePassword/> }/>
          <Route path="/user" element={ <GetUser/> }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
