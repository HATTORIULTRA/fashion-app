import {Route, Routes} from "react-router-dom";
import styles from './App.module.scss'

import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import {useState} from "react";

function App() {
   const [searchValue, setSearchValue] = useState('');

   return (
      <div className={styles.wrapper}>
         <Header searchValue={searchValue} setSearchValue={setSearchValue} />
         <div className={styles.container}>
            <Routes>
               <Route path={'/'} element={<Home searchValue={searchValue} />} />
               <Route path={'/cart'} element={<Cart />} />
               <Route path={'*'} element={<NotFound />} />
            </Routes>
         </div>
      </div>
   );
}

export default App;
