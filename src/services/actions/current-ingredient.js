export const SELECT_INGREDIENT = "SELECT_INGREDIENT";
export const DESELECT_INGREDIENT = "DESELECT_INGREDIENT";

export const selectIngredient = ingredient => ({
    type: SELECT_INGREDIENT,
    ingredient: ingredient,
});

export const deselectIngredient = ingredient => ({
    type: DESELECT_INGREDIENT,
    ingredient: ingredient,
});