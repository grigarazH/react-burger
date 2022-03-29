import React, {useState} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import styles from "./burger-ingredients.module.css";
import IngredientCategory from "../ingredient-category/ingredient-category";

const BurgerIngredients = props => {
    const [currentTab, setCurrentTab] = useState("buns");

    const onTabClick = tabValue => {
        setCurrentTab(tabValue);
    }
    return (
        <section className={`${styles.burgerIngredients} ${props.className}`}>
            <h2 className={styles.heading}>Соберите бургер</h2>
            <nav>
                <ul className={styles.tabList}>
                    <li><Tab active={currentTab === "buns"} value={"buns"} onClick={onTabClick}>Булки</Tab></li>
                    <li><Tab active={currentTab === "sauces"} value={"sauces"} onClick={onTabClick}>Соусы</Tab></li>
                    <li><Tab active={currentTab === "main"} value={"main"} onClick={onTabClick}>Начинки</Tab></li>
                </ul>
            </nav>
            <div className={styles.ingredientList}>
                <IngredientCategory className={styles.category} title={"Булки"} ingredients={props.ingredients.filter(ingredient => ingredient.type === "bun")}/>
                <IngredientCategory className={styles.category} title={"Соусы"} ingredients={props.ingredients.filter(ingredient => ingredient.type === "sauce")}/>
                <IngredientCategory className={styles.category} title={"Начинки"} ingredients={props.ingredients.filter(ingredient => ingredient.type === "main")}/>
            </div>
        </section>
        );
}

export default BurgerIngredients