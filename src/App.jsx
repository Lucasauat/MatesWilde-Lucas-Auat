import './App.css'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer'
import Error from './components/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={ <ItemListContainer mensaje = 'Bienvenidos a mi emprendimento'/>}/>
      <Route path='/categories/:category' element={ <ItemListContainer mensaje = 'Te muestro los productos: '/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
