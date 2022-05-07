import BurgerApi from "../burger-api";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_ERROR = "GET_INGREDIENTS_ERROR";
export const SET_BUNS_AMOUNT = "SET_BUNS_AMOUNT";
export const INCREMENT_INGREDIENT = "INCREMENT_INGREDIENT";
export const DECREMENT_INGREDIENT = "DECREMENT_INGREDIENT";

export const getIngredients = () => dispatch => {
    dispatch({type: GET_INGREDIENTS_REQUEST});
    BurgerApi.getIngredients().then(({data}) => {
       dispatch({
           type: GET_INGREDIENTS_SUCCESS,
           ingredients: data,
       });
    }).catch(err => {
        dispatch({
            type: GET_INGREDIENTS_ERROR,
            error: err.message === "Failed to fetch" ? "Не удалось получить ингредиенты" : err,
        });
    });
}