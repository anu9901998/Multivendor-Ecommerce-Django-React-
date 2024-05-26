
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

function App() {
  return (
    <>

      <Header />
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
        <Route path='/order/success' element={<OrderSuccess/>}/>
        <Route path='/order/failure' element={<OrderFailure/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
