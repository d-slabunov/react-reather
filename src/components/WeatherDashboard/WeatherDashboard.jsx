import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { withRouter } from 'react-router';
import { convertToMilliseconds } from '../../helpers/dateConveter';
import Day from '../Day';
import './styles.css';

const WeatherDashboard = ({ history }) => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_WEATHER_URL + process.env.REACT_APP_API_KEY)
            .then(response => response.json())
            .then(data => {
                setWeatherData(data.daily)
            });
    }, []);

    const fiveDayForecast = useMemo(() => {
        return weatherData.splice(0, 5)
    }, [weatherData]);

    const handleItemClick = useCallback(
        (weekDay) => {
        history.push(`/${weekDay.toLowerCase()}`)
    },[history]);

    return (
        <div className="weather_dashboard">
            {fiveDayForecast.map((item, i) => {
                return (
                    <Day
                        key={i}
                        date={convertToMilliseconds(item.dt)}
                        logo={item.weather[0].icon}
                        highTemperatures={item.temp.max}
                        lowTemperatures={item.temp.min}
                        handleItemClick={() => handleItemClick(convertToMilliseconds(item.dt))}
                    />
                )
            })}
        </div>
    );
};

export default withRouter(WeatherDashboard);
