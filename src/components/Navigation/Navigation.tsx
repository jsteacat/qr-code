import { NavLink } from 'react-router'
import styles from './Navigation.module.css'

function Navigation() {
    return (
        <nav className={styles.navigation}>
            <NavLink
                to="/generate"
                className={({ isActive }) =>
                    `${styles['nav-item']} ${isActive ? styles['nav-item-active'] : ''}`
                }
            >
                Generate QR
            </NavLink>
            <NavLink
                to="/scan"
                className={({ isActive }) =>
                    `${styles['nav-item']} ${isActive ? styles['nav-item-active'] : ''}`
                }
            >
                Scan QR
            </NavLink>
        </nav>
    )
}

export default Navigation
