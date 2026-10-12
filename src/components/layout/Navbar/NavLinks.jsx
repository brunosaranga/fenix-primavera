import { NavLink } from "react-router-dom";
import { navRoutes } from "../../../routes";
import { useContent } from "../../../hooks/useContent";
import styles from "./Navbar.module.css";

// Shared by desktop nav and mobile menu, so both always list the same pages.
export default function NavLinks({ variant = "desktop", onNavigate }) {
    const { nav } = useContent();

    return (
        <ul className={variant === "desktop" ? styles.links : styles.mobileLinks}>
            {navRoutes.map((route) => (
                <li key={route.path}>
                    <NavLink
                        to={route.path}
                        onClick={onNavigate}
                        className={({ isActive }) => [styles.link, isActive ? styles.active : ""].join(" ")}
                    >
                        {nav[route.labelKey]}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
}
