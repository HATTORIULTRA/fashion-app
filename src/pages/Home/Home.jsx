import React, {useContext, useEffect, useState} from 'react';
import styles from './Home.module.scss'
import ClothesItem from "../../components/ClothesItem/ClothesItem.jsx";
import ClothesItemSkeleton from "../../components/ClothesItemSkeleton/ClothesItemSkeleton.jsx";
import Sort from "../../components/Sort/Sort.jsx";
import {SearchContext} from "../../App.jsx";
import {useSelector} from "react-redux";

// https://559da0082db6fafe.mokky.dev/items
// https://aidarv.pythonanywhere.com/looks/

function Home() {
   const {searchValue} = useContext(SearchContext);
   const [clothes, setClothes] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const sortType = useSelector(state => state.filter.sort.sortProperty)
   useEffect(() => {
      setIsLoading(true);

      const search = searchValue ? `name=*${searchValue}` : "";

      fetch(`https://559da0082db6fafe.mokky.dev/items?${search}&sortBy=${sortType}`)
         .then(res => res.json())
         .then(data => {
            setClothes(data);
            setIsLoading(false);
         })
   }, [sortType, searchValue]);


   const looksItems = clothes.map(item => (
      <ClothesItem key={item.id} {...item} />
   ));

   const skeleton = [...new Array(8)].map((_, i) => (
      <ClothesItemSkeleton key={i}/>
   ));

   return (
      <>
         <div className={styles.filters}>
            <Sort />
         </div>
         <div className={styles.content}>
            {isLoading ? skeleton : looksItems}
         </div>
      </>
   );
}

export default Home;