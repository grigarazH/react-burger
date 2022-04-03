import React, {useEffect, useState} from "react";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";
import styles from "./burger-ingredient.module.css";
import {ingredientPropType} from "../../utils/data";
import Modal from "../modal/modal";

const BurgerIngredient = (props) => {
    const [isModalActive, setModalActive] = useState(false);
    useEffect(() => {
        console.log(isModalActive);
    }, [isModalActive]);
    const closeModal = () => {
        setModalActive(false);
    }
            return (
            <li className={styles.burgerIngredient} onClick={() => setModalActive(true)}>
                <img className={styles.image} src={props.ingredient.image} alt={props.ingredient.name}/>
                <p className={styles.price}>{props.ingredient.price} <span className={styles.priceIcon}><CurrencyIcon type={"primary"}/></span></p>
                <p className={styles.title}>{props.ingredient.name}</p>
                {props.ingredient.amount > 0 && (<div className={styles.counter}><Counter count={props.ingredient.amount ?? 0} /></div>)}
                {isModalActive && <Modal onEscPress={e => {
                    if(e.key === "Escape") {
                        closeModal();
                    }
                }} onOverlayClick={closeModal}/>}
            </li>
        )
}

BurgerIngredient.propTypes = {
    ingredient: ingredientPropType.isRequired,
}

export default BurgerIngredient