import "../App.css"
import CartWidget from "./CartWidget";
const NavBar = () => {
    return(
        < >
        <header>
        <div>
            <h3>TecnoSoluciones</h3>
        </div>
        <nav>
            <ul>
                <li>
                    <a>Escritorio</a>
                </li>
                <li>
                    <a>Laptops</a>
                </li>
                <li>
                    <a>Componentes</a>
                </li>
                <li>
                    <a>Consumibles</a>
                </li>
            </ul>
        </nav>
        <CartWidget />
      </header>
    </>
    );
}

export default NavBar;