import React from "react";
import PropTypes from 'prop-types';
import {Button, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {DragIcon, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";
import styles from "./burger-constructor.module.css";
import {ingredientPropType} from "../../utils/data";

const BurgerConstructor = props => {
    return (
        <section className={styles.burgerConstructor}>
            <ul className={styles.ingredientList}>
                <li className={styles.ingredient}><ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${props.topIngredient.name} (верх)`}
                    thumbnail={props.topIngredient.image}
                    price={props.topIngredient.price}/></li>
                <li><ul className={styles.middleIngredientsList}>
                    {props.middleIngredients.map((ingredient, index) => (
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
                    text={`${props.bottomIngredient.name} (низ)`}
                    thumbnail={props.bottomIngredient.image}
                    price={props.bottomIngredient.price} /></li>
            </ul>
            <div className={styles.orderInfo}>
                <p className={styles.orderPrice}>634 <span className={styles.orderPriceIcon}>
                    <CurrencyIcon type={'primary'}/>
                </span></p>
                <Button>Оформить заказ</Button>
            </div>
        </section>
    );
}


BurgerConstructor.propTypes = {
    topIngredient: ingredientPropType.isRequired,
    middleIngredients: PropTypes.arrayOf(ingredientPropType).isRequired,
    bottomIngredient: ingredientPropType.isRequired,
};

export default BurgerConstructor;
