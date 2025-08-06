import "../css/NavBar.css"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <nav className='nav-container'>
            <img alt='logo' src='../logomate.png' className='logo'/>
            <h1>MatesWilde</h1>
            <a className='anchor-nav'>Nuevo</a>
            <a className='anchor-nav'>Mas Vendidos</a>
            <a className='anchor-nav'>Ofertas</a>
            <CartWidget/>

        </nav>
    )
}
export default NavBar