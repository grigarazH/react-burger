import React, {useContext, useEffect, useState} from "react";
import PropTypes from 'prop-types';
import {Button, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {DragIcon, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import {BurgerConstructorContext} from "../../services/burger-constructor-context";

const BurgerConstructor = ({onOrder}) => {
    const constructorIngredients = useContext(BurgerConstructorContext);
    const [bunIngredient, setBunIngredient] = useState(undefined);
    const [middleIngredients, setMiddleIngredients] = useState([]);
    useEffect(() => {
        console.log(constructorIngredients);
        setBunIngredient(constructorIngredients.find(ingredient => ingredient.type === "bun"));
        setMiddleIngredients(constructorIngredients.filter(ingredient => ingredient.type !== "bun"));
    }, [constructorIngredients]);
    return (
        <section className={styles.burgerConstructor}>
            <ul className={styles.ingredientList}>
                {bunIngredient && <li className={styles.ingredient}><ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bunIngredient.name} (верх)`}
                    thumbnail={bunIngredient.image}
                    price={bunIngredient.price}/></li>}
                <li><ul className={styles.middleIngredientsList}>
                    {middleIngredients.map((ingredient, index) => (
                        <li key={index} className={`${styles.middleIngredient}`}>
                            <DragIcon type={"primary"}/>
                            <ConstructorElement
                                isLocked={false}
                                text={ingredient.name}
                                thumbnail={ingredient.image}
                                price={ingredient.price}/></li>
                    ))}
                </ul></li>
                {bunIngredient &&
                    <li className={styles.ingredient}><ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bunIngredient.name} (низ)`}
                        thumbnail={bunIngredient.image}
                        price={bunIngredient.price} /></li>}
            </ul>
            <div className={styles.orderInfo}>
                {bunIngredient && middleIngredients.length > 0 && (
                    <p className={styles.orderPrice}>{bunIngredient.price * 2 + middleIngredients.reduce(((previousValue, currentValue) => previousValue + currentValue.price), 0)} <span className={styles.orderPriceIcon}>
                    <CurrencyIcon type={'primary'}/>
                </span></p>
                )}
                <Button onClick={onOrder}>Оформить заказ</Button>
            </div>
        </section>
    );
}


BurgerConstructor.propTypes = {
    onOrder: PropTypes.func.isRequired,
};

export default BurgerConstructor;
