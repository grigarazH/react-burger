import styles from "./ingredient-details.module.css";
import {useSelector} from "react-redux";

const IngredientDetails = () => {
    const ingredient = useSelector(store => store.currentIngredient);
    return (
        <>
            <h2 className={styles.ingredientDetails__title}>Детали ингредиента</h2>
            <div className={styles.ingredientDetails__info}>
            <img className={styles.ingredientDetails__image} src={ingredient.image_large} alt={`Изображение игредиента ${ingredient.name}`}/>
            <h3 className={styles.ingredientDetails__name}>{ingredient.name}</h3>
            <ul className={styles.ingredientDetails__properties}>
                <li className={styles.ingredientDetails__property}>
                    <p className={styles.ingredientDetails__propertyName}>Калории, ккал</p>
                    <p className={styles.ingredientDetails__propertyValue}>{ingredient.calories}</p>
                </li>
                <li className={styles.ingredientDetails__property}>
                    <p className={styles.ingredientDetails__propertyName}>Белки, г</p>
                    <p className={styles.ingredientDetails__propertyValue}>{ingredient.proteins}</p>
                </li>
                <li className={styles.ingredientDetails__property}>
                    <p className={styles.ingredientDetails__propertyName}>Жиры, г</p>
                    <p className={styles.ingredientDetails__propertyValue}>{ingredient.fat}</p>
                </li>
                <li className={styles.ingredientDetails__property}>
                    <p className={styles.ingredientDetails__propertyName}>Углеводы, г</p>
                    <p className={styles.ingredientDetails__propertyValue}>{ingredient.carbohydrates}</p>
                </li>
            </ul>
            </div>
        </>
    )
}

export default IngredientDetails;