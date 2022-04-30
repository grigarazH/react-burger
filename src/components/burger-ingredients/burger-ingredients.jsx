import React, {useContext, useState} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import IngredientCategory from "../ingredient-category/ingredient-category";
import PropTypes from "prop-types";
import {ingredientPropType} from "../../utils/data";
import {BurgerIngredientsContext} from "../../services/burger-ingredients-context";

const BurgerIngredients = ({onSelect, className}) => {
    const [currentTab, setCurrentTab] = useState("buns");
    const ingredients = useContext(BurgerIngredientsContext);
    const onTabClick = tabValue => {
        setCurrentTab(tabValue);
    }
    return (
        <section className={`${styles.burgerIngredients} ${className ? className : ""}`}>
            <h2 className={styles.heading}>Соберите бургер</h2>
            <nav>
                <ul className={styles.tabList}>
                    <li><Tab active={currentTab === "buns"} value={"buns"} onClick={onTabClick}>Булки</Tab></li>
                    <li><Tab active={currentTab === "sauces"} value={"sauces"} onClick={onTabClick}>Соусы</Tab></li>
                    <li><Tab active={currentTab === "main"} value={"main"} onClick={onTabClick}>Начинки</Tab></li>
                </ul>
            </nav>
            <div className={styles.ingredientList}>
                <IngredientCategory className={styles.category} title={"Булки"} ingredients={ingredients.filter(ingredient => ingredient.type === "bun")} onSelect={onSelect}/>
                <IngredientCategory className={styles.category} title={"Соусы"} ingredients={ingredients.filter(ingredient => ingredient.type === "sauce")} onSelect={onSelect}/>
                <IngredientCategory className={styles.category} title={"Начинки"} ingredients={ingredients.filter(ingredient => ingredient.type === "main")} onSelect={onSelect}/>
            </div>
        </section>
        );
}

BurgerIngredients.propTypes = {
    className: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
}

export default BurgerIngredients