import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from './constructor-draggable-element.module.css';
import {useDrag, useDrop} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {SET_CONSTRUCTOR_INGREDIENTS} from "../../services/actions/constructor";

const ConstructorDraggableElement = ({ingredient, onDelete}) => {
    const constructorIngredients = useSelector(store => store.constructorIngredients.items);
    const originalPosition = constructorIngredients.indexOf(ingredient);
    const dispatch = useDispatch();
    const move = (index, newPosition) => {
        let sortedIngredients = [...constructorIngredients];
        sortedIngredients.splice(constructorIngredients.findIndex(item => item.index === index), 1);
        sortedIngredients.splice(newPosition, 0, constructorIngredients.find(item => item.index === index));
        dispatch({type: SET_CONSTRUCTOR_INGREDIENTS, ingredients: sortedIngredients});
    }
    const [{isDrag}, drag] = useDrag({
        type: "constructorIngredient",
        item: {index: ingredient.index, originalPosition},
        end: ({index: droppedIndex, originalPosition}, monitor) => {
            const didDrop = monitor.didDrop();
            if(!didDrop) {
                let sortedIngredients = [...constructorIngredients];
                move(droppedIndex, originalPosition);
            }
        },
        collect: monitor => ({
            isDrag: monitor.isDragging(),
        }),
    });
    const [, drop] = useDrop({
        accept: "constructorIngredient",
        hover: ({index: draggedIndex}) => {
            if (draggedIndex !== ingredient.index) {
                const hoverPosition = constructorIngredients.indexOf(ingredient);
                move(draggedIndex, hoverPosition);
            }
        }
    });
    return (
        <li className={`${styles.ingredient} ${isDrag ? styles.ingredient_dragging : ""}`} ref={node => drag(drop(node))}>
            <DragIcon type={"primary"}/>
            <ConstructorElement
                isLocked={false}
                text={ingredient.name}
                thumbnail={ingredient.image}
                price={ingredient.price}
                handleClose={onDelete}
            />
        </li>
    )
}

export default ConstructorDraggableElement;