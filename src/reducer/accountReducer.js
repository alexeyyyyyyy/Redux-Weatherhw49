import {ERROR_QUOTE, PUT_QUOTE} from "../actions/quoteAction.js";

export const initialState = {
    weatherInfo: {},
    message: "Enter your city"
};

 export const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_QUOTE:
            return {
                ...state,
                weatherInfo: action.payload,
                message: null
            };
        case ERROR_QUOTE:
            return {
                ...state,
                message: action.payload,
                weatherInfo: {}
            };
        default:
            return state;
    }
};
