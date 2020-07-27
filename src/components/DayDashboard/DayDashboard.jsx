import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import initialHourlyData from '../initialHourlyData';
import DailyChart from '../DailyChart';
import './styles.css';

const DayDashboard = ({ location }) => {
    const [name, setName] = useState(null);

    useEffect(() => {
        const day = location.pathname.replace(/^\/|\/$/g, '').toLowerCase();
        if (Object.keys(initialHourlyData).includes(day)) {
            setName(day);
        }
    }, [location]);

    return (
        <div>
            <h1>Hourly weather forecast for {name}</h1>
            <div className="time_wrapper">
                {name ? initialHourlyData[name].map((item, i) => (
                    <span key={i} className='time_wrapper_span'>
                        <img src={process.env.REACT_APP_IMAGE_URL + item.icon + ".png"} alt="img"/>
                        <div>{item.time}</div>
                        <div>{item.temp}</div>
                    </span>
                )) : (
                    <p> No data </p>
                )}
            </div>
            <DailyChart day={name} />
        </div>
    );
};

export default withRouter(DayDashboard);
