import React, {useContext, useEffect, useState} from "react";
import PropTypes from 'prop-types';
import {Button, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {DragIcon, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {ADD_INGREDIENT, DELETE_INGREDIENT, SET_BUN} from "../../services/actions/constructor";

const BurgerConstructor = ({onOrder}) => {
    const constructorIngredients = useSelector(store => store.constructorIngredients.items);
    const [bunIngredient, setBunIngredient] = useState(undefined);
    const [middleIngredients, setMiddleIngredients] = useState([]);
    const ingredients = useSelector(store => store.ingredients.items);
    const dispatch = useDispatch();
    const [, dropTarget] = useDrop({
       accept: ["ingredient"],
       drop: item => {
           const ingredient = ingredients.find(ingredient => ingredient._id === item.id);
           if(ingredient.type === "bun") {
               dispatch({type: SET_BUN, ingredient: ingredient});
           }else{
               dispatch({type: ADD_INGREDIENT, ingredient: ingredient});
           }
       }
    });
    const onDeleteIngredient = index => {
        dispatch({type: DELETE_INGREDIENT, index: index});
    }
    useEffect(() => {
        setBunIngredient(constructorIngredients.find(ingredient => ingredient.type === "bun"));
        setMiddleIngredients(constructorIngredients.filter(ingredient => ingredient.type !== "bun"));
    }, [constructorIngredients]);
    return (
        <section className={styles.burgerConstructor}>
            <ul className={styles.ingredientList} ref={dropTarget}>
                {!bunIngredient && (
                    <div className={`${styles.ingredientPlaceholder} constructor-element constructor-element_pos_top ml-8 pr-4`}>Перетащите булку</div>
                )}
                {bunIngredient && <li className={styles.ingredient}><ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bunIngredient.name} (верх)`}
                    thumbnail={bunIngredient.image}
                    price={bunIngredient.price}/></li>}
                {middleIngredients.length === 0 && (
                    <div className={` constructor-element ${styles.ingredientPlaceholder} ml-8 pr-4 mb-4 mt-4`}>Перетащите ингредиенты</div>
                )}
                {middleIngredients.length > 0 && (
                    <li><ul className={styles.middleIngredientsList}>
                        {middleIngredients.map((ingredient, index) => (
                            <li key={index} className={`${styles.middleIngredient}`}>
                                <DragIcon type={"primary"}/>
                                <ConstructorElement
                                    isLocked={false}
                                    text={ingredient.name}
                                    thumbnail={ingredient.image}
                                    price={ingredient.price}
                                    handleClose={() => onDeleteIngredient(ingredient.index)}
                                /></li>
                        ))}
                    </ul></li>
                )}
                {!bunIngredient && (
                    <div className={`${styles.ingredientPlaceholder} constructor-element constructor-element_pos_bottom ml-8 pr-4`}>Перетащите булку</div>
                )}
                {bunIngredient &&
                    <li className={styles.ingredient}><ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bunIngredient.name} (низ)`}
                        thumbnail={bunIngredient.image}
                        price={bunIngredient.price}
                    /></li>}
            </ul>
                {bunIngredient && middleIngredients.length > 0 && (
                    <div className={styles.orderInfo}>
                    <p className={styles.orderPrice}>{bunIngredient.price * 2 + middleIngredients.reduce(((previousValue, currentValue) => previousValue + currentValue.price), 0)} <span className={styles.orderPriceIcon}>
                    <CurrencyIcon type={'primary'}/>
                </span></p>
                    <Button onClick={onOrder}>Оформить заказ</Button>
                    </div>
                )}
        </section>
    );
}


BurgerConstructor.propTypes = {
    onOrder: PropTypes.func.isRequired,
};

export default BurgerConstructor;
