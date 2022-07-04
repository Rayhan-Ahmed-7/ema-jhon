import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Orders from './components/Orders/Orders';
import Shipment from './components/Shipment/Shipment';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}/>
        <Route path='/shop' element={<Shop></Shop>}/>
        <Route path='/orders' element={<Orders></Orders>}/>
        <Route path='/inventory' element={<RequireAuth>
          <Inventory/>
        </RequireAuth>}/>
        <Route path='/shipment' element={<RequireAuth>
          <Shipment></Shipment>
        </RequireAuth>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
