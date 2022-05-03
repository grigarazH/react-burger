import {combineReducers} from 'redux';
import {constructorIds} from "../../utils/data";

const ingredientsReducer = (state = [], actions) => {
    return state;
}

const constructorReducer = (state = constructorIds, actions) => {
    return state;
}

const currentIngredientReducer = (state = {}, actions) => {
    return state;
}

const orderReducer = (state = {}, actions) => {
    return state;
}

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    constructorIngredients: constructorReducer,
    currentIngredient: currentIngredientReducer,
    order: orderReducer,
});