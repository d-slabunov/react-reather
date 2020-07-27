import React, {useState, useEffect, useMemo, useCallback} from 'react';
import { withRouter } from 'react-router';
import moment from 'moment';
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
                const dateInMilliseconds = item.dt * 1000
                const weekDay = moment(dateInMilliseconds).utc().format("dddd");
                return (
                    <Day
                        key={i}
                        date={weekDay}
                        logo={item.weather[0].icon}
                        highTemperatures={item.temp.max}
                        lowTemperatures={item.temp.min}
                        handleItemClick={() => handleItemClick(weekDay)}
                    />
                )
            })}
        </div>
    );
};

export default withRouter(WeatherDashboard);
