import React, {forwardRef, useCallback, useContext, useEffect, useRef, useState} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import IngredientCategory from "../ingredient-category/ingredient-category";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {useInView} from "react-intersection-observer";

const BurgerIngredients = ({onSelect, className}) => {
    const [currentTab, setCurrentTab] = useState("buns");
    const ingredients = useSelector(store => store.ingredients.items);
    const containerRef = useRef(null);
    const {ref: bunInViewRef, inView: bunInView} = useInView({threshold: 0});
    const {ref: sauceInViewRef, inView: sauceInView} = useInView({threshold: 0});
    const {ref: mainInViewRef, inView: mainInView} = useInView({threshold: 0});
    const bunRef = useRef(null);
    const sauceRef = useRef(null);
    const mainRef = useRef(null);

    const setBunRefs = useCallback(node => {
        bunRef.current = node;
        bunInViewRef(node);
    }, [bunInViewRef]);

    const setSauceRefs = useCallback(node => {
        sauceRef.current = node;
        sauceInViewRef(node);
    }, [sauceInViewRef]);

    const setMainRefs = useCallback(node => {
        mainRef.current = node;
        mainInViewRef(node);
    }, [mainInViewRef]);

    useEffect(() => {
        mainInView && setCurrentTab("main");
        sauceInView && setCurrentTab("sauces");
        bunInView && setCurrentTab("buns");
    }, [bunInView, sauceInView, mainInView]);

    const onTabClick = tabValue => {
        setCurrentTab(tabValue);
        switch(tabValue) {
            case "buns":
                bunRef.current.scrollIntoView({block: "start", behavior: "smooth"});
                break;
            case "sauces":
                sauceRef.current.scrollIntoView({block: "start", behavior: "smooth"});
                break;
            case "main":
                mainRef.current.scrollIntoView({block: "start", behavior: "smooth"});
        }
    }

    return (
        <section ref={containerRef} className={`${styles.burgerIngredients} ${className ? className : ""}`}>
            <h2 className={styles.heading}>Соберите бургер</h2>
            <nav>
                <ul className={styles.tabList}>
                    <li><Tab active={currentTab === "buns"} value={"buns"} onClick={onTabClick}>Булки</Tab></li>
                    <li><Tab active={currentTab === "sauces"} value={"sauces"} onClick={onTabClick}>Соусы</Tab></li>
                    <li><Tab active={currentTab === "main"} value={"main"} onClick={onTabClick}>Начинки</Tab></li>
                </ul>
            </nav>
            <ul className={styles.ingredientList}>
                <li ref={setBunRefs}><IngredientCategory className={styles.category} title={"Булки"} ingredients={ingredients.filter(ingredient => ingredient.type === "bun")} onSelect={onSelect}/></li>
                <li ref={setSauceRefs}><IngredientCategory className={styles.category} title={"Соусы"} ingredients={ingredients.filter(ingredient => ingredient.type === "sauce")} onSelect={onSelect}/></li>
                <li ref={setMainRefs}><IngredientCategory className={styles.category} title={"Начинки"} ingredients={ingredients.filter(ingredient => ingredient.type === "main")} onSelect={onSelect}/></li>
            </ul>
        </section>
        );
}

BurgerIngredients.propTypes = {
    className: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
}

export default BurgerIngredients