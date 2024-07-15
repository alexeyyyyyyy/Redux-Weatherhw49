const Weather = ({ message, weatherInfo }) => {
    if (!weatherInfo || Object.keys(weatherInfo).length === 0) {
        return <div>{message}</div>;
    }

    return (
        <div>
            <p>Location: {weatherInfo.country}, {weatherInfo.city}</p>
            <p>Temp: {weatherInfo.temp} °C</p>
            <p>Pressure: {weatherInfo.pressure} hPa</p>
        </div>
    );
};

export default Weather;
