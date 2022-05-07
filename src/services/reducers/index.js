import {combineReducers} from 'redux';

import {
    DECREMENT_INGREDIENT,
    GET_INGREDIENTS_ERROR,
    GET_INGREDIENTS_REQUEST, GET_INGREDIENTS_SUCCESS, INCREMENT_INGREDIENT, SET_BUNS_AMOUNT, UPDATE_INGREDIENTS,
} from "../actions/ingredients";
import {ADD_INGREDIENT, DELETE_INGREDIENT, SET_BUN, SET_CONSTRUCTOR_INGREDIENTS} from "../actions/constructor";
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

const constructorInitialState = {
    items: [],
    lastIndex: 0,
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
                error: action.error,
                items: [],
            };
        case INCREMENT_INGREDIENT:
            return {
                ...state,
                items: state.items.map(ingredient => ingredient._id === action.id ? {...ingredient, amount: ingredient.amount ? ingredient.amount + 1 : 1} : ingredient),
            };
        case DECREMENT_INGREDIENT:
            return {
                ...state,
                items: state.items.map(ingredient => ingredient._id === action.id ? {...ingredient, amount: ingredient.amount && ingredient.amount > 0 ? ingredient.amount - 1 : 0} : ingredient),
            };
        case SET_BUNS_AMOUNT:
            return {
                ...state,
                items: state.items.map(ingredient => ingredient.type === "bun" ? ingredient._id === action.id ? {...ingredient, amount: 2} : {...ingredient, amount: 0} : ingredient),
            };
        default:
            return state;
    }
}

const constructorReducer = (state = constructorInitialState, action) => {
    switch(action.type) {
        case SET_CONSTRUCTOR_INGREDIENTS:
            return {...state,
            items: action.ingredients};
        case SET_BUN:
            return {
                ...state,
                items: state.items.find(ingredient => ingredient.type === "bun") ? state.items.map(ingredient => ingredient.type === "bun" ? action.ingredient : ingredient) : [...state.items, {...action.ingredient, amount: undefined}],
            };
        case ADD_INGREDIENT:
            return {
                ...state,
                items: [...state.items, {...action.ingredient, amount: undefined, index: state.lastIndex}],
                lastIndex: state.lastIndex + 1,
            };
        case DELETE_INGREDIENT:
            return {
                ...state,
                items: state.items.filter(ingredient => ingredient.index !== action.index),
            };
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
                order: null,
                error: action.error,
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