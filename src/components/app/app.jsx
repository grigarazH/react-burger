import React, {useEffect, useState} from 'react';
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import {constructorData, getIngredientAmount} from "../../utils/data";
import AppHeader from "../app-header/app-header";
import styles from './app.module.css';
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";

function App() {
    const [ingredientData, setIngredientData] = useState([]);
    const [constructorIngredients, setConstructorIngredients] = useState(constructorData);
    const [isIngredientModalActive, setIngredientModalActive] = useState(false);
    const [isOrderModalActive, setOrderModalActive] = useState(false);
    const [currentIngredient, setCurrentIngredient] = useState(null);
    const closeAllModals = () => {
        setIngredientModalActive(false);
        setOrderModalActive(false);
    }
    const selectIngredient = ingredient => {
        setCurrentIngredient(ingredient);
        setIngredientModalActive(true);
    }
    const orderBurger = () => {
        setOrderModalActive(true);
    }
    useEffect(() => {
       const url = "https://norma.nomoreparties.space/api/ingredients";
       fetch(url).then(res => {
           if(res.ok) {
               return res.json();
           }
           return Promise.reject(`Ошибка ${res.status}`);
       }).then(({data}) => {
           setIngredientData(data.map(ingredient => ({amount: getIngredientAmount(ingredient._id, constructorIngredients), ...ingredient})));
       }).catch(err => console.log(err));
    }, [constructorIngredients]);

    return (
    <div className={styles.app}>
        <AppHeader/>
        <main className={styles.app__content}>
            <BurgerIngredients ingredients={ingredientData} className={styles.app__ingredients} onSelect={selectIngredient}/>
            <BurgerConstructor topIngredient={constructorIngredients.topIngredient}
                               middleIngredients={constructorIngredients.middleIngredients}
                               bottomIngredient={constructorIngredients.bottomIngredient}
                               onOrder={orderBurger}
            />
        </main>
        {isIngredientModalActive && <Modal onClose={closeAllModals}>
            <IngredientDetails ingredient={currentIngredient}/>
        </Modal>}
        {isOrderModalActive && <Modal onClose={closeAllModals}>
            <OrderDetails/>
        </Modal>}

    </div>
  );
}

export default App;
