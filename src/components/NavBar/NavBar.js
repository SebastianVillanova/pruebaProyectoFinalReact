import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

/* fontawesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    return (
        <nav className="container my-5">
            <Link to="/">
                <h3 className="title has-text-danger  has-text-centered p-5">Jordana Escalona Ecommerce</h3>
            </Link>
            <div className="is-flex is-align-items-center is-justify-content-center">
                <NavLink to={`/`} className={({ isActive }) => `button is-primary m-3 ${isActive ? "button is-link m-3" : "button is-primary m-3"}`}>

                    Home&nbsp; <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink to={`/category/auriculares`} className={({ isActive }) => `button is-primary m-3 ${isActive ? "button is-link m-3" : "button is-primary m-3"}`}>Auriculares</NavLink>
                {/* <button className="button is-primary m-3">Celulares</button> */}
                <NavLink to={`/category/parlantes`} className={({ isActive }) => `button is-primary m-3 ${isActive ? "button is-link m-3" : "button is-primary m-3"}`}>Parlantes</NavLink>
                <NavLink to={`/category/notebooks`} className={({ isActive }) => `button is-primary m-3 ${isActive ? "button is-link m-3" : "button is-primary m-3"}`}>Notebooks</NavLink>
                <CartWidget />
            </div>

        </nav>
    );
}

export default NavBar;