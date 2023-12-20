import classes from "./NavBar.module.css"
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/pelu-mini.jpg"

const NavBar = () =>
{
    return (
        <nav>
            <img src={logo} alt="logo web"/>
            <section className={classes.section}>
                <button className={classes.menu}>Accesorios</button>
                <button className={classes.menu}>Maquinas y partes</button>
                <button className={classes.menu}>Tijeras</button>
                <button className={classes.menu}>Herramientas</button>
            </section>
            <CartWidget />
        </nav>
  )
}
export default NavBar;