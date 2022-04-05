import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";
import styles from "./ingredient-details.module.css";
import {ingredientPropType} from "../../utils/data";
import PropTypes from "prop-types";

const IngredientDetails = ({ingredient, onCloseClick}) => {
    return (
        <>
            <div className={styles.ingredientDetails__heading}>
                <h2 className={styles.ingredientDetails__title}>Детали ингредиента</h2>
                <span className={styles.ingredientDetails__closeIcon}><CloseIcon type={"primary"} onClick={onCloseClick}/></span>
            </div>
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

IngredientDetails.propTypes = {
    ingredient: ingredientPropType.isRequired,
    onCloseClick: PropTypes.func.isRequired,
}

export default IngredientDetails;