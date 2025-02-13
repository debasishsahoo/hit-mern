import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import SignIn from './pages/User/SignIn'
import SignUp from './pages/User/SignUp'
import ChangePassword from './pages/User/ChangePassword'
import SignOut from './pages/User/SignOut'
import GetUser from './pages/User/GetUser'
import AddProduct from './pages/Product/AddProduct'
import ProductList from './pages/Product/ProductList'
import SingleProduct from './pages/Product/SingleProduct'
import UpdateProduct from './pages/Product/UpdateProduct'
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
          <Route path="/product/view" element={ <ProductList/> }/>
          <Route path="/product/add" element={ <AddProduct/> }/>
          <Route path="/product/view/:id" element={ <SingleProduct/> }/>
          <Route path="/product/update/:id" element={ <UpdateProduct/> }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
