import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient.module.css";
import {ingredientPropType} from "../../utils/data";
import PropTypes from "prop-types";

const BurgerIngredient = ({ingredient, onSelect}) => {
            return (
            <li className={styles.burgerIngredient} onClick={() => onSelect(ingredient)}>
                <img className={styles.image} src={ingredient.image} alt={ingredient.name}/>
                <p className={styles.price}>{ingredient.price} <span className={styles.priceIcon}><CurrencyIcon type={"primary"}/></span></p>
                <p className={styles.title}>{ingredient.name}</p>
                {ingredient.amount > 0 && (<div className={styles.counter}><Counter count={ingredient.amount ?? 0} /></div>)}
            </li>
        );
}

BurgerIngredient.propTypes = {
    ingredient: ingredientPropType.isRequired,
    onSelect: PropTypes.func.isRequired,
}

export default BurgerIngredient