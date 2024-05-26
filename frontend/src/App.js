
import './App.css';
//Assets
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Categories from './components/Categories';
import CategoryProducts from './components/CategoryProducts';
import AllProduct from './components/AllProduct';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
//customer Panel
import Register from './components/customer/Register';
import Login from './components/customer/Login';
import Dashboard from './components/customer/Dashboard';
import Orders from './components/customer/Orders';
import OrderSuccess from './components/OrderSuccess';
import OrderFailure from './components/OrderFailure';
import ChangePassword from './components/customer/ChangePassword';
import WhishList from './components/customer/Whishlist';
import Profile from './components/customer/Profile';
import AddressList from './components/customer/AddressList';
import AddAdress from './components/customer/AddAddress';

function App() {
  return (
    <>

      <Header />
      <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/category/:category_slug/:category_id' element={<CategoryProducts/>}/>
        <Route path='/product/:product/:product_id' element={<ProductDetail/>}/>
        <Route path='/products' element={<AllProduct/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/customer/register' element={<Register/>}/>
        <Route path='/customer/login' element={<Login/>}/>
        <Route path='/customer/dashboard' element={<Dashboard/>}/>
        <Route path='/customer/orders' element={<Orders/>}/>
        <Route path='/customer/whishlist' element={<WhishList/>}/>
        <Route path='/customer/profile' element={<Profile/>}/>
        <Route path='/customer/adresses' element={<AddressList/>}/>
        <Route path='/customer/add-address' element={<AddAdress/>}/>
        <Route path='/customer/change-password' element={<ChangePassword/>}/>
        <Route path='/order/success' element={<OrderSuccess/>}/>
        <Route path='/order/failure' element={<OrderFailure/>}/>
      </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
