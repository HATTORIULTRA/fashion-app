import React, {useEffect, useState} from 'react';
import styles from './Home.module.scss'
import ClothesItem from "../../components/ClothesItem/ClothesItem.jsx";
import ClothesItemSkeleton from "../../components/ClothesItemSkeleton/ClothesItemSkeleton.jsx";
import Sort from "../../components/Sort/Sort.jsx";

// https://559da0082db6fafe.mokky.dev/items
// https://aidarv.pythonanywhere.com/looks/

function Home({searchValue}) {
   const [clothes, setClothes] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [sortType, setSortType] = useState({
      name: 'популярности',
      sortProperty: 'rating'
   });
   useEffect(() => {
      setIsLoading(true);

      const sortBy = sortType.sortProperty;
      const search = searchValue ? `name=*${searchValue}` : "";

      fetch(`https://559da0082db6fafe.mokky.dev/items?${search}&sortBy=${sortBy}`)
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
            <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
         </div>
         <div className={styles.content}>
            {isLoading ? skeleton : looksItems}
         </div>
      </>
   );
}

export default Home;