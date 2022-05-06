import React, {useEffect, useState} from 'react';
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import {constructorIds} from "../../utils/data";
import AppHeader from "../app-header/app-header";
import styles from './app.module.css';
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients, UPDATE_INGREDIENTS} from "../../services/actions/ingredients";
import {SET_CONSTRUCTOR_INGREDIENTS} from "../../services/actions/constructor";
import {DESELECT_INGREDIENT, SELECT_INGREDIENT} from "../../services/actions/current-ingredient";
import {CLEAR_ORDER, postOrder} from "../../services/actions/order";

function App() {
    const [isIngredientModalActive, setIngredientModalActive] = useState(false);
    const [isOrderModalActive, setOrderModalActive] = useState(false);
    const currentIngredient = useSelector(store => store.currentIngredient);
    const orderData = useSelector(store => store.order.order);
    const dispatch = useDispatch();
    const ingredients = useSelector(store => store.ingredients.items);
    const constructorIngredients = useSelector(store => store.constructorIngredients);
    const closeAllModals = () => {
        dispatch({type: DESELECT_INGREDIENT});
        dispatch({type: CLEAR_ORDER});
        setIngredientModalActive(false);
        setOrderModalActive(false);
    }
    const selectIngredient = ingredient => {
        dispatch({type: SELECT_INGREDIENT, ingredient});
        setIngredientModalActive(true);
    }
    const orderBurger = () => {
        dispatch(postOrder(constructorIngredients));
        setOrderModalActive(true);
    }
    useEffect(() => {
       dispatch(getIngredients());
    }, [dispatch]);


    useEffect(() => {
        if(ingredients.length > 0 && constructorIngredients.length === 0) {
            const initialConstructorIngredients = constructorIds.map(id => ingredients.find(ingredient => ingredient._id === id));
            dispatch({type: SET_CONSTRUCTOR_INGREDIENTS, ingredients: initialConstructorIngredients});
            dispatch({type: UPDATE_INGREDIENTS, ingredients: ingredients.map(ingredient => {
                let amount = 0;
                initialConstructorIngredients.forEach(constructorIngredient => {
                    if(constructorIngredient._id === ingredient._id) amount++;
                });
                return {
                    ...ingredient,
                    amount: amount
                };
            })});
        }
    }, [ingredients]);

    return (
        <div className={styles.app}>
            <AppHeader/>
            <main className={styles.app__content}>
                <BurgerIngredients className={styles.app__ingredients} onSelect={selectIngredient}/>
                <BurgerConstructor onOrder={orderBurger}/>
            </main>
            {isIngredientModalActive && currentIngredient && <Modal onClose={closeAllModals}>
                <IngredientDetails ingredient={currentIngredient}/>
            </Modal>}
            {isOrderModalActive && orderData && <Modal onClose={closeAllModals}>
                <OrderDetails/>
            </Modal>}
        </div>
  );
}

export default App;
