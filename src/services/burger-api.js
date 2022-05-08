const url = "https://norma.nomoreparties.space/api";
const headers = {
    'Content-type': 'application/json',
}

export default class BurgerApi {
    static getIngredients() {
        return fetch(`${url}/ingredients`, {headers}).then((res) => {
            return BurgerApi.checkResponse(res);
        });
    }

    static checkResponse(response) {
        if(response.ok) {
            return response.json();
        }
        return Promise.reject(`Ошибка ${response.status}`);
    }

    static postOrder(ingredients) {
        return fetch(`${url}/orders`, {
            method: 'POST',
            headers,
            body: JSON.stringify({ingredients}),
        }).then(res => {
            return BurgerApi.checkResponse(res);
        });
    }
}