import AddToCard from "./AddToCard";
import styles from './ProductCard.module.css';

const ProductCard = () => {
    return (
        <div className={styles.card}>
            Product Description
            <AddToCard />
        </div>
    )
}

export default ProductCard;