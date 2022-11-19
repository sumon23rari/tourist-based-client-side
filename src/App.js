import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Notfound from './pages/Notfound/Notfound';
import Header from './pages/shared/Header/Header';
import About from './pages/About/About';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Checkout from './pages/Checkout/Checkout';
import Register from './pages/Register/Register';
import LogIn from './pages/LogIn/LogIn';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import AddService from './pages/Addservice/AddService';
import MangageService from './pages/ManageServices/MangageService';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Orders from './pages/Orders/Orders';
function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/service/:serviceId" element={<ServiceDetails></ServiceDetails>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/login" element={<LogIn></LogIn>}></Route>
      <Route path='/checkout/:serviceId' element={
        <RequireAuth>
           <Checkout></Checkout>
        </RequireAuth>
     }></Route>
     <Route path='/addService' element={
      <RequireAuth>
         <AddService></AddService>
      </RequireAuth>
     
     }></Route>
     <Route path='/orders' element={
      <RequireAuth>
        <Orders></Orders>
      </RequireAuth>
     }>

     </Route>
     <Route path="/manageService" element={
      <RequireAuth>
        <MangageService></MangageService>
      </RequireAuth>
     }></Route>
      <Route path="*" element={<Notfound></Notfound>}></Route>
    </Routes>
<ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
