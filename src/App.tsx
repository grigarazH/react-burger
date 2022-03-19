import React from 'react';
import './App.css';
import BurgerConstructor from "./components/burger-constructor/BurgerConstructor";

function App() {
  return (
    <div className="App">
      <BurgerConstructor topIngredient={{
        name: "Краторная булка N-200i",
        price: 1255,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
      }} middleIngredients={[
        {
          name: "Соус традиционный галактический",
          price: 15,
          image: "https://code.s3.yandex.net/react/code/sauce-03.png"
        },
        {
          name: "Соус традиционный галактический",
          price: 15,
          image: "https://code.s3.yandex.net/react/code/sauce-03.png"
        },
        {
          name: "Соус традиционный галактический",
          price: 15,
          image: "https://code.s3.yandex.net/react/code/sauce-03.png"
        },
        {
          name: "Соус традиционный галактический",
          price: 15,
          image: "https://code.s3.yandex.net/react/code/sauce-03.png"
        },
        {
          name: "Соус традиционный галактический",
          price: 15,
          image: "https://code.s3.yandex.net/react/code/sauce-03.png"
        },
        {
          name: "Соус традиционный галактический",
          price: 15,
          image: "https://code.s3.yandex.net/react/code/sauce-03.png"
        },
        {
          name: "Соус традиционный галактический",
          price: 15,
          image: "https://code.s3.yandex.net/react/code/sauce-03.png"
        },
        {
          name: "Соус традиционный галактический",
          price: 15,
          image: "https://code.s3.yandex.net/react/code/sauce-03.png"
        },
        {
          name: "Соус традиционный галактический",
          price: 15,
          image: "https://code.s3.yandex.net/react/code/sauce-03.png"
        },
        {
          name: "Соус традиционный галактический",
          price: 15,
          image: "https://code.s3.yandex.net/react/code/sauce-03.png"
        },
      ]} bottomIngredient={{
        name: "Краторная булка N-200i",
        price: 1255,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
      }}/>
    </div>
  );
}

export default App;
