
import Login from './Components/Login.jsx';
import Forget from './Components/Forget.jsx';
import CreateAccount from './Components/CreateAccount.jsx';
import Verification from './Components/Verification.jsx';
import Home from './Components/Home.jsx';



import {BrowserRouter as Router, Route,Routes } from 'react-router-dom';



import './App.css'
import Mobile from './Components/homecomponents/Mobile.jsx';
import MyWhistle from './Components/homecomponents/MyWhistle.jsx';
import Fashion from './Components/homecomponents/Fashion.jsx';
import ViewMore from './Components/homecomponents/ViewMore.jsx';
import MyOrder from './Components/homecomponents/MyOrder.jsx';
import OrderHistory from './Components/homecomponents/OrderHistory.jsx';
import MyCart from './Components/homecomponents/MyCart.jsx';
import ChangeAddress from './Components/homecomponents/ChangeAddress.jsx';
import Privacy from './Components/homecomponents/Privacy.jsx';
import Terms from './Components/homecomponents/Terms.jsx';
import Support from './Components/homecomponents/Support.jsx';

function App() {
  

  return (
  <>
   <Router>
    <Routes>
      <Route path='/' element={<Login/>} ></Route>
      <Route path='/forget' element={<Forget/>} ></Route>
      <Route path='/create' element={<CreateAccount/>} ></Route>
      <Route path='/forget/Verify' element={<Verification/>}></Route>
      <Route path='Login/Home' element={<Home/>} ></Route>
      <Route path='image' element={<Mobile/>} ></Route>
      <Route path='whistle' element={<MyWhistle/>} ></Route>
      <Route path='fashion' element={<Fashion/>} ></Route>
      <Route path='viewmore' element={<ViewMore/>} ></Route>
      <Route path='myorder' element={<MyOrder/>} ></Route>
      <Route path='orderhistory' element={<OrderHistory/>} ></Route>
      <Route path='cart' element={<MyCart/>} ></Route>
      <Route path='address' element={<ChangeAddress/>} ></Route>
      <Route path='policy' element={<Privacy/>} ></Route>
      <Route path='terms' element={<Terms/>} ></Route>
      <Route path='support' element={<Support/>} ></Route>
      
      
    </Routes>
   </Router>

  
  </>

   
  )
}

export default App;
