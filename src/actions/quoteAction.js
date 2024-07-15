import {API_KEY, BASE_URL} from "../utils/constants.js";

export const PUT_QUOTE = "PUT_QUOTE";
export const PENDING_QUOTE = "PENDING_QUOTE";
export const ERROR_QUOTE = "ERROR_QUOTE";


const putQuote = quote => ({
    type:PUT_QUOTE,
    payload: quote
});
const pendingQuote = () => ({
    type: PENDING_QUOTE
})

const errorQuote = (message) => ({
    type:ERROR_QUOTE,
    payload: message
})

export const fetchQuote = (city) => {
    return (dispatch) => {
        dispatch(pendingQuote());
        fetch(`${BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Город не найден');
                }
                return response.json();
            })
            .then(data => {
                console.log('Данные получены:', data);
                if (data) {
                    const weatherInfo = ({
                        country: data.sys?.country,
                        city: data.name,
                        temp: data.main?.temp,
                        pressure: data.main?.pressure,
                    });
                    dispatch(putQuote(weatherInfo));
                }
            })
            .catch(e => {
                console.error('Ошибка:', e);
                dispatch(errorQuote(e.message));
            });
    };
};