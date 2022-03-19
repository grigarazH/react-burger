import React from "react";
import PropTypes from 'prop-types';
import {Button, ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import {DragIcon, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/common.css";
import "@ya.praktikum/react-developer-burger-ui-components/dist/ui/box.css";
import styles from "./BurgerConstructor.module.css";

class BurgerConstructor extends React.Component {
    render() {
        console.log(styles);
        return (
            <section className={styles.burgerConstructor}>
                <ul className={styles.ingredientList}>
                <li className={styles.ingredient}><ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${this.props.topIngredient.name} (верх)`}
                    thumbnail={this.props.topIngredient.image}
                    price={this.props.topIngredient.price}/></li>
                    <li><ul className={styles.middleIngredientsList}>
                        {this.props.middleIngredients.map((ingredient, index) => (
                            <li className={`${styles.middleIngredient} ${index === 0 ? "mt-4" : ""}`}>
                             <DragIcon type={"primary"} className={styles.dragIcon}/>
                             <ConstructorElement
                                 isLocked={false}
                                 key={index} text={ingredient.name}
                                 thumbnail={ingredient.image}
                                 price={ingredient.price}/></li>
                        ))}
                    </ul></li>
                    <li className={styles.ingredient}><ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${this.props.bottomIngredient.name} (низ)`}
                    thumbnail={this.props.bottomIngredient.image}
                    price={this.props.bottomIngredient.price} /></li>
                </ul>
                <div className={styles.orderInfo}>
                    <p className={styles.orderPrice}>634 <svg className={styles.orderPriceIcon} width={"36"} height ={"36"} viewBox={"0 0 36 36"}>
                        <g transform={`scale(${3/2})`}><CurrencyIcon type={"primary"}/></g>
                    </svg></p>
                    <Button>Оформить заказ</Button>
                </div>
            </section>
        )
    }
}

const ingredientPropType = PropTypes.shape({
   name: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired
});

BurgerConstructor.propTypes = {
    topIngredient: ingredientPropType.isRequired,
    middleIngredients: PropTypes.arrayOf(ingredientPropType).isRequired,
    bottomIngredient: ingredientPropType.isRequired,
};

export default BurgerConstructor;
