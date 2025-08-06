
import './App.css'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import BotonMultiuso from './examples/BotonMultiuso'
import ComponenteConChildren from './examples/ComponenteConChildren'
function App() {

const saludar = () => {
  alert ('Hola pibe')
}
  return (
    <>
    <NavBar/>
    <ItemListContainer mensaje = 'Bienvenidos a mi emprendimento'/>
      {/* <BotonMultiuso color={"blue"} padding={'2rem'} borderRadius={'10%'} onClickHandler={saludar}/>
      <ComponenteConChildren/>
      <ComponenteConChildren>
        <p>hooa soy una children</p>
      </ComponenteConChildren> */}
    </>
  )
}

export default App
