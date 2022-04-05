import React from "react";
import PropTypes from 'prop-types';
import {Button, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {DragIcon, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";
import styles from "./burger-constructor.module.css";
import {ingredientPropType} from "../../utils/data";

const BurgerConstructor = ({topIngredient, middleIngredients, bottomIngredient, onOrder}) => {
    return (
        <section className={styles.burgerConstructor}>
            <ul className={styles.ingredientList}>
                <li className={styles.ingredient}><ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${topIngredient.name} (верх)`}
                    thumbnail={topIngredient.image}
                    price={topIngredient.price}/></li>
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
                <li className={styles.ingredient}><ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bottomIngredient.name} (низ)`}
                    thumbnail={bottomIngredient.image}
                    price={bottomIngredient.price} /></li>
            </ul>
            <div className={styles.orderInfo}>
                <p className={styles.orderPrice}>634 <span className={styles.orderPriceIcon}>
                    <CurrencyIcon type={'primary'}/>
                </span></p>
                <Button onClick={onOrder}>Оформить заказ</Button>
            </div>
        </section>
    );
}


BurgerConstructor.propTypes = {
    topIngredient: ingredientPropType.isRequired,
    middleIngredients: PropTypes.arrayOf(ingredientPropType).isRequired,
    bottomIngredient: ingredientPropType.isRequired,
    onOrder: PropTypes.func.isRequired,
};

export default BurgerConstructor;
