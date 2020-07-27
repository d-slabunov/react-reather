import React, { useMemo } from 'react';
import './styles.css';

const Day = ({ date, logo, highTemperatures, lowTemperatures, handleItemClick }) => {
    const icon = useMemo(() => {
        return process.env.REACT_APP_IMAGE_URL + logo + ".png"
    }, [logo]);

    return (
        <div className="item_wrapper" onClick={handleItemClick}>
            <div>{date}</div>
            <img className="image" src={icon} alt="logo"/>
            <div>
                <span className='highTemperature'>{Math.round(highTemperatures)}°</span>
                <span className='lowTemperature'>{Math.round(lowTemperatures)}°</span>
            </div>
        </div>
    );
};

export default Day;
