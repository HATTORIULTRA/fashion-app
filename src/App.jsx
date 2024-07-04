import {Route, Routes} from "react-router-dom";
import styles from './App.module.scss'

import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import {createContext, useState} from "react";

export const SearchContext = createContext(null);

function App() {
   const [searchValue, setSearchValue] = useState('');

   return (
      <div className={styles.wrapper}>
         <SearchContext.Provider value={{searchValue, setSearchValue}}>
            <Header  />
            <div className={styles.container}>
               <Routes>
                  <Route path={'/fashion-app/'} element={<Home />} />
                  <Route path={'/fashion-app/cart'} element={<Cart />} />
                  <Route path={'*'} element={<NotFound />} />
               </Routes>
            </div>
         </SearchContext.Provider>
      </div>
   );
}

export default App;
