const url = "https://norma.nomoreparties.space/api";
const headers = {
    'Content-type': 'application/json',
}

export default class BurgerApi {
    static getIngredients() {
        return fetch(`${url}/ingredients`, {headers}).then((res) => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`);
        });
    }

    static postOrder(ingredients) {
        return fetch(`${url}/orders`, {
            method: 'POST',
            headers,
            body: JSON.stringify({ingredients}),
        }).then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка ${res.status}`);
        });
    }
}