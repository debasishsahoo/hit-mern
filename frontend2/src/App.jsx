import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/UserContext";
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
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={ <SignIn/> }/>
          <Route path="/signin" element={ <SignIn/> }/>
          <Route path="/signup" element={ <SignUp/> }/>
          <Route path="/signout" element={<ProtectedRoute><SignOut/></ProtectedRoute>  }/>
          <Route path="/changepassword" element={<ProtectedRoute><ChangePassword/></ProtectedRoute>  }/>
          <Route path="/user" element={ <ProtectedRoute><GetUser/></ProtectedRoute>}/>
          <Route path="/product/view" element={ <ProtectedRoute><ProductList/></ProtectedRoute>}/>
          <Route path="/product/add" element={ <ProtectedRoute><AddProduct/></ProtectedRoute>}/>
          <Route path="/product/view/:id" element={ <ProtectedRoute><SingleProduct/></ProtectedRoute>}/>
          <Route path="/product/update/:id" element={ <ProtectedRoute><UpdateProduct/></ProtectedRoute>}/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
