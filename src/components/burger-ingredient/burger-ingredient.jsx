import React, {useState} from "react";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient.module.css";
import {ingredientPropType} from "../../utils/data";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

const BurgerIngredient = (props) => {
            return (
            <li className={styles.burgerIngredient} onClick={() => props.onSelect(props.ingredient)}>
                <img className={styles.image} src={props.ingredient.image} alt={props.ingredient.name}/>
                <p className={styles.price}>{props.ingredient.price} <span className={styles.priceIcon}><CurrencyIcon type={"primary"}/></span></p>
                <p className={styles.title}>{props.ingredient.name}</p>
                {props.ingredient.amount > 0 && (<div className={styles.counter}><Counter count={props.ingredient.amount ?? 0} /></div>)}
            </li>
        );
}

BurgerIngredient.propTypes = {
    ingredient: ingredientPropType.isRequired,
}

export default BurgerIngredient