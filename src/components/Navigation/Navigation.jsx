import { NavLink } from 'react-router-dom';
import css from '../Navigation/Navigation.module.css';

export default function Navigation() {
    return (
        <header className={css.header}>
            <nav className={css.nav}>
                <ul className={css.navList}>
                    <li className={css.navItem}>
                        <NavLink to="/" className={css.navLink}>
                            Home
                        </NavLink>
                    </li>
                    <li className={css.navItem}>
                        <NavLink to="/movies" className={css.navLink}>
                            Movies
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
