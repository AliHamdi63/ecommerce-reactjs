import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import PageError from './components/PageError';
import DataInfo from './components/DataInfo';
import ContactUs from './components/ContactUs';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <a name="top"></a>

      <Routes>

        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Navigate to={"/home"} />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/info/:id' element={<DataInfo />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/search' element={<Search />} />
        <Route path='/contactus' element={<ContactUs />} />

        <Route path='*' element={<PageError />} />

      </Routes>
      <a href="#top" className="up fa fa-arrow-circle-up"></a>

    </div>
  );
}

export default App;
