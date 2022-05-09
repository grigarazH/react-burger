import React from "react";
import PropTypes from "prop-types";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import styles from "./ingredient-category.module.css";
import {ingredientPropType} from "../../utils/data";

const IngredientCategory = ({ className, title, ingredients, onSelect}) => {
    return (
        <section className={className}>
            <h3 className={styles.title}>{title}</h3>
            <ul className={styles.ingredientList}>
                {ingredients.map((ingredient) => (
                    <BurgerIngredient ingredient={ingredient} key={ingredient._id} onSelect={onSelect}/>
                ))}
            </ul>
        </section>
    );
}

IngredientCategory.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(ingredientPropType),
    onSelect: PropTypes.func.isRequired,
}

export default IngredientCategory