import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        <nav className="nav">
            <p><strong>Seussology</strong></p>
            <NavLink to="/">Books</NavLink>
            <NavLink to="/quotes">Quotes</NavLink>
        </nav>
    )
}