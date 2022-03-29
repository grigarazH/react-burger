import React from 'react';
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import {constructorData, getIngredientAmount, ingredientData} from "../../utils/data";
import AppHeader from "../app-header/app-header";
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import styles from './app.module.css';

function App() {
    let ingredientDataWithAmount = ingredientData.map(ingredient => ({amount: getIngredientAmount(ingredient._id, constructorData), ...ingredient}));
    return (
    <div className={styles.app}>
        <AppHeader/>
        <main className={styles.app__content}>
            <BurgerIngredients ingredients={ingredientDataWithAmount} className={styles.app__ingredients}/>
            <BurgerConstructor topIngredient={constructorData.topIngredient} middleIngredients={constructorData.middleIngredients} bottomIngredient={constructorData.bottomIngredient}/>
        </main>
    </div>
  );
}

export default App;
