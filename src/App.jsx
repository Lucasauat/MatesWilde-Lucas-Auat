import './App.css'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer'
import Error from './components/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';

function App() {


  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer mensaje = 'Bienvenidos a mi emprendimento'/>}/>
          <Route path='/categories/:category' element={ <ItemListContainer mensaje = 'Te muestro los productos: '/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
