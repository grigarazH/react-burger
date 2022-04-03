import React, {useEffect, useState} from 'react';
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import {constructorData, getIngredientAmount} from "../../utils/data";
import AppHeader from "../app-header/app-header";
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css';
import '@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css';
import styles from './app.module.css';

function App() {
    const [ingredientData, setIngredientData] = useState([]);
    const [constructorIngredients, setConstructorIngredients] = useState(constructorData);
    useEffect(() => {
       const url = "https://norma.nomoreparties.space/api/ingredients";
       fetch(url).then(res => {
          return res.json();
       }).then(({data}) => {
           setIngredientData(data.map(ingredient => ({amount: getIngredientAmount(ingredient._id, constructorIngredients), ...ingredient})));
       }).catch(err => console.log(err));
    });

    return (
    <div className={styles.app}>
        <AppHeader/>
        <main className={styles.app__content}>
            <BurgerIngredients ingredients={ingredientData} className={styles.app__ingredients}/>
            <BurgerConstructor topIngredient={constructorIngredients.topIngredient} middleIngredients={constructorIngredients.middleIngredients} bottomIngredient={constructorIngredients.bottomIngredient}/>
        </main>
    </div>
  );
}

export default App;
