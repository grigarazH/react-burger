import {v4 as uuidv4} from 'uuid';

export const SET_CONSTRUCTOR_INGREDIENTS = "SET_CONSTRUCTOR_INGREDIENTS";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const SET_BUN = "SET_BUN";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";


export const setConstructorIngredients = ingredients => ({
    type: SET_CONSTRUCTOR_INGREDIENTS,
    ingredients: ingredients,
});

export const addIngredient = ingredient => ({
    type: ADD_INGREDIENT,
    ingredient: {...ingredient, uuid: uuidv4()}
});

export const setBun = ingredient => ({
    type: SET_BUN,
    ingredient: {...ingredient, uuid: uuidv4()},
});

export const deleteIngredient = uuid => ({
    type: DELETE_INGREDIENT,
    uuid: uuid,
});
