import { Link, useLocation, useNavigate} from "react-router-dom"

import styles from "./NavBar.module.css"

import SearchBar from "./SearchBar/SearchBar"


const NavBar = () => {

    const {pathname} = useLocation();
    const navigate = useNavigate();

    const refreshPage = () => {
        if(pathname !== '/home') {
            navigate('/home');
        } else {
            navigate(0);
        }
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.title}>
                <button onClick={refreshPage} className={styles.button}>Home PI Foods</button>
            <div className={styles.search}>
                <SearchBar />
            </div>
            <div className={styles.create}>
                <Link to='/form'>
                <button className={styles.button}>Create your Recipe</button>
                </Link>
            </div>
            </div>
        </nav>
    )
}

export default NavBar