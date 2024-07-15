import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import { fetchQuote } from "../actions/quoteAction.js";

const Data = () => {
    const dispatch = useDispatch();
    const weatherInfo = useSelector(state => state.weatherInfo);
    const message = useSelector(state => state.message);

    const getWeather = (city) => {
        dispatch(fetchQuote(city));
    };

    return (
        <div>
            <Form getWeather={getWeather} />
            <Weather message={message} weatherInfo={weatherInfo} />
        </div>
    );
}

export default Data;
