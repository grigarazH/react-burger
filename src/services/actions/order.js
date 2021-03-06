import BurgerApi from "../burger-api";
import {setConstructorIngredients} from "./constructor";
import {clearIngredientAmount} from "./ingredients";

export const POST_ORDER_REQUEST = "POST_ORDER_REQUEST";
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export const POST_ORDER_ERROR = "POST_ORDER_ERROR";
export const CLEAR_ORDER = "CLEAR_ORDER";

export const postOrder = (ingredients) => dispatch => {
    dispatch({type: POST_ORDER_REQUEST});
    BurgerApi.postOrder(ingredients.map(ingredient => ingredient._id))
        .then(data => {
           dispatch({
               type: POST_ORDER_SUCCESS,
               order: data.order,
           });
        })
        .then(() => {
            dispatch(setConstructorIngredients([]));
            dispatch(clearIngredientAmount());
        })
        .catch(err => {
            dispatch({
                type: POST_ORDER_ERROR,
                error: err.message === "Failed to fetch" ? "Не удалось создать заказ" : err,
            });
        });
}

export const clearOrder = () => ({type: CLEAR_ORDER});