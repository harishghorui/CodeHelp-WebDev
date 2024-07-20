import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className='h-full'>

      <Toaster/>

      <div className="bg-slate-900">
        <Navbar/>
      </div>
      
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </div>

    </div>
  )
};

export default App;
