import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {Route,Routes} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Policy from "./pages/Policy";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/auth/Dashboard";
import Private from "./pages/auth/Private";
import ForgotPass from "./pages/auth/ForgotPass";
import Order from'./pages/auth/Order';
import AdminRoute from "./pages/admin/Private";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateProduct from "./pages/admin/CreateProduct";
import Category from "./pages/admin/Category";
import AllUsers from "./pages/admin/AllUsers";
import ProductOverview from "./pages/ProductOverview";
import Kids from "./pages/Kids";
import Women from "./pages/Women";
import Mens from "./pages/Mens";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import OrderConfirmationPage from "./pages/OrderConfirm";

function App() {
  return (
    <div className="ansh">

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>

        {/* private routes */}
        <Route path="/dashboard" element={<Private/>}>
          <Route path="user" element={<Dashboard/>} />
          <Route path="user/orders" element={<Order/>} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute/>}>
          <Route path="admin" element={<AdminDashboard/>} />
          <Route path="admin/create-product" element={<CreateProduct/>} />
          <Route path="admin/create-category" element={<Category/>}/>
          <Route path="admin/users" element={<AllUsers/>} />
        </Route>
        
        <Route path="/policy" element={<Policy/>}/>
        <Route path="/product-overview/:name" element={<ProductOverview/>}/>
        <Route path="/mens" element={<Mens/>}/>
        <Route path="/women" element={<Women/>}/>
        <Route path="/kids" element={<Kids/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/forgot-password" element={<ForgotPass/>}/>
        <Route path="/order-confirm" element={<OrderConfirmationPage/>}/>

        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
 
      <Footer />
       
    </div>
  );
}

export default App;


