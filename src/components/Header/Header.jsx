import styles from './Header.module.scss'
import logoWhite from '../../img/logo/logo-no-background.svg'
import CartButton from "../CartButton/CartButton.jsx";
import {Link} from "react-router-dom";
import Search from "../Search/Search.jsx";

function Header({searchValue, setSearchValue}) {
   return (
      <header className={styles.header}>
         <Link to={'/'}>
            <img width={200} src={`${logoWhite}`} alt="logotype"/>
         </Link>
         <Search searchValue={searchValue} setSearchValue={setSearchValue} />
         <Link to={'/cart'}><CartButton/></Link>
      </header>
   );
}

export default Header;