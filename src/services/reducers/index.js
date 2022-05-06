import {combineReducers} from 'redux';

import {
    GET_INGREDIENTS_ERROR,
    GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, UPDATE_INGREDIENTS,
} from "../actions/ingredients";
import {SET_CONSTRUCTOR_INGREDIENTS} from "../actions/constructor";
import {SELECT_INGREDIENT, DESELECT_INGREDIENT} from "../actions/current-ingredient";
import {
    CLEAR_ORDER,
    POST_ORDER_ERROR,
    POST_ORDER_REQUEST,
    POST_ORDER_SUCCESS,
} from "../actions/order";

const ingredientsInitialState = {
    items: [],
    getIngredientsRequest: false,
    getIngredientsError: false,
    error: null,
}

const orderInitialState = {
    postOrderRequest: false,
    postOrderError: false,
    error: null,
}

const ingredientsReducer = (state = ingredientsInitialState, action) => {
    switch(action.type) {
        case GET_INGREDIENTS_REQUEST:
            return {...state,
                getIngredientsRequest: true,
                getIngredientsError: false,
                error: null,
            };
        case GET_INGREDIENTS_SUCCESS:
            return {
                ...state,
                getIngredientsRequest: false,
                getIngredientsError: false,
                items: action.ingredients,
            };
        case GET_INGREDIENTS_ERROR:
            return {
                ...state,
                getIngredientsRequest: false,
                getIngredientsError: true,
                items: action.error,
            };
        case UPDATE_INGREDIENTS:
            return {
                ...state,
                items: action.ingredients,
            };
        default:
            return state;
    }
}

const constructorReducer = (state = [], action) => {
    switch(action.type) {
        case SET_CONSTRUCTOR_INGREDIENTS:
            return action.ingredients;
        default:
            return state;
    }
}

const currentIngredientReducer = (state = null, action) => {
    switch(action.type) {
        case SELECT_INGREDIENT:
            return action.ingredient;
        case DESELECT_INGREDIENT:
            return null;
        default:
            return state;
    }
}

const orderReducer = (state = orderInitialState, action) => {
    switch(action.type) {
        case POST_ORDER_REQUEST:
            return {
                ...state,
                postOrderRequest: true,
                postOrderError: false,
                error: null,
            };
        case POST_ORDER_SUCCESS:
            return {
                ...state,
                postOrderRequest: false,
                postOrderError: false,
                order: action.order,
            };
        case POST_ORDER_ERROR:
            return {
                ...state,
                postOrderRequest: false,
                postOrderError: true,
            };
        case CLEAR_ORDER:
            return orderInitialState;
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    constructorIngredients: constructorReducer,
    currentIngredient: currentIngredientReducer,
    order: orderReducer,
});