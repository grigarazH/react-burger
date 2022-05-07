import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import React, {useCallback} from "react";
import styles from './constructor-draggable-element.module.css';
import {useDrag, useDrop} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {
    deleteIngredient,
    setConstructorIngredients
} from "../../services/actions/constructor";
import {decrementIngredient} from "../../services/actions/ingredients";
import {ingredientPropType} from "../../utils/data";

const ConstructorDraggableElement = ({ingredient}) => {
    const constructorIngredients = useSelector(store => store.constructorIngredients.items);
    const originalIndex = constructorIngredients.indexOf(ingredient);
    const dispatch = useDispatch();
    const onMove = (uuid, newIndex) => {
        let sortedIngredients = [...constructorIngredients];
        sortedIngredients.splice(constructorIngredients.findIndex(item => item.uuid === uuid), 1);
        sortedIngredients.splice(newIndex, 0, constructorIngredients.find(item => item.uuid === uuid));
        dispatch(setConstructorIngredients(sortedIngredients));
    }
    const onDelete = useCallback(() => {
        dispatch(deleteIngredient(ingredient.uuid));
        dispatch(decrementIngredient(ingredient._id));
    }, [ingredient]);
    const [{isDrag}, drag] = useDrag({
        type: "constructorIngredient",
        item: {uuid: ingredient.uuid, originalIndex},
        end: ({uuid: droppedUuid, originalIndex}, monitor) => {
            const didDrop = monitor.didDrop();
            if(!didDrop) {
                onMove(droppedUuid, originalIndex);
            }
        },
        collect: monitor => ({
            isDrag: monitor.isDragging(),
        }),
    });
    const [, drop] = useDrop({
        accept: "constructorIngredient",
        hover: ({uuid: draggedUuid}) => {
            if (draggedUuid !== ingredient.uuid) {
                const hoverIndex = constructorIngredients.indexOf(ingredient);
                onMove(draggedUuid, hoverIndex);
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

ConstructorDraggableElement.propTypes = {
    ingredient: ingredientPropType.isRequired,
}

export default ConstructorDraggableElement;