import styles from './Header.module.scss'
import logoWhite from '../../img/logo/logo-no-background.svg'
import CartButton from "../CartButton/CartButton.jsx";
import {Link} from "react-router-dom";
import Search from "../Search/Search.jsx";

function Header() {
   return (
      <header className={styles.header}>
         <Link to={'/fashion-app/'}>
            <img width={200} src={`${logoWhite}`} alt="logotype"/>
         </Link>
         <Search  />
         <Link to={'/fashion-app/cart'}><CartButton/></Link>
      </header>
   );
}

export default Header;