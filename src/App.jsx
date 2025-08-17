
import './App.css'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import BotonMultiuso from './examples/BotonMultiuso'
import ComponenteConChildren from './examples/ComponenteConChildren'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

const saludar = () => {
  alert ('Hola pibe')
}
  return (
    <>
    <NavBar/>
    <ItemListContainer mensaje = 'Bienvenidos a mi emprendimento'/>
    </>
  )
}

export default App
