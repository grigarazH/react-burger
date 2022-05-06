import BurgerApi from "../burger-api";

export const GET_INGREDIENTS_REQUEST = "GET_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_ERROR = "GET_INGREDIENTS_ERROR";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";

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
            error: err,
        });
    });
}