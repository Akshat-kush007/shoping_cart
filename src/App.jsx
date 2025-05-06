import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage'

const App = () => {
  return (
    <div className='h-screen '>
    <div className='bg-slate-900'>
        <Navbar/>
    </div>

      <Routes >

        <Route path="/" element={<HomePage/>}/>
        <Route path="/cart" element={<CartPage/>}/>

      </Routes>
    </div>
  );
};

export default App;
