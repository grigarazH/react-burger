import React from "react";
import PropTypes from "prop-types";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import styles from "./ingredient-category.module.css";

const IngredientCategory = props => {
    return (
        <section className={props.className}>
            <h3 className={styles.title}>{props.title}</h3>
            <ul className={styles.ingredientList}>
                {props.ingredients.map((ingredient) => (
                    <BurgerIngredient ingredient={ingredient} key={ingredient._id}/>
                ))}
            </ul>
        </section>
    );
}

IngredientCategory.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    })).isRequired
}

export default IngredientCategory