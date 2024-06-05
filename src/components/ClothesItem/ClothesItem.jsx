import styles from './ClothesItem.module.scss'

function ClothesItem(props) {
   const {images, name, description} = props;
   const trimmedDescr = description.substring(0, description.indexOf('.') + 1)

   return (
      <div className={styles.itemWrapper}>
         <img width={400} src={images[0].image} alt=""/>
         <h2>{name}</h2>
         <div className={styles.description}>
            <p>{trimmedDescr}</p>
         </div>
      </div>
   );
}

export default ClothesItem;