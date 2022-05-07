import React, {useEffect, useState} from 'react';
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import AppHeader from "../app-header/app-header";
import styles from './app.module.css';
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import {useDispatch, useSelector} from "react-redux";
import {getIngredients} from "../../services/actions/ingredients";
import {
    deselectIngredient,
    selectIngredient
} from "../../services/actions/current-ingredient";
import {clearOrder, postOrder} from "../../services/actions/order";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {
    const [isIngredientModalActive, setIngredientModalActive] = useState(false);
    const [isOrderModalActive, setOrderModalActive] = useState(false);
    const currentIngredient = useSelector(store => store.currentIngredient);
    const orderData = useSelector(store => store.order.order);
    const dispatch = useDispatch();
    const constructorIngredients = useSelector(store => store.constructorIngredients.items);
    const closeAllModals = () => {
        dispatch(deselectIngredient());
        dispatch(clearOrder());
        setIngredientModalActive(false);
        setOrderModalActive(false);
    }
    const onSelectIngredient = ingredient => {
        dispatch(selectIngredient(ingredient));
        setIngredientModalActive(true);
    }
    const orderBurger = () => {
        dispatch(postOrder(constructorIngredients));
        setOrderModalActive(true);
    }
    useEffect(() => {
       dispatch(getIngredients());
    }, [dispatch]);

    return (
        <div className={styles.app}>
            <AppHeader/>
            <main className={styles.app__content}>
                <DndProvider backend={HTML5Backend}>
                <BurgerIngredients className={styles.app__ingredients} onSelect={onSelectIngredient}/>
                <BurgerConstructor onOrder={orderBurger}/>
                </DndProvider>
            </main>
            {isIngredientModalActive && currentIngredient && <Modal onClose={closeAllModals}>
                <IngredientDetails/>
            </Modal>}
            {isOrderModalActive && orderData && <Modal onClose={closeAllModals}>
                <OrderDetails/>
            </Modal>}
        </div>
  );
}

export default App;
