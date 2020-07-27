import React, { useMemo } from 'react';
import { Chart } from 'react-charts';
import moment from 'moment';
import Box from '../Box';
import { convertTime12to24 } from '../../helpers/dateConveter'
import initialHourlyData from '../initialHourlyData';

const axes = [
    {
        primary: true,
        position: 'bottom',
        type: 'time'
    },
    { position: 'left', type: 'linear' }
]

const DailyChart = ({ day }) => {
    const data = useMemo(
        () => [
            {
                label: 'Temperature',
                data: day ? initialHourlyData[day].map((el) => {
                    const hour = convertTime12to24(el.time);
                    const temperature = Number(el.temp.replace(/[^-0-9]/gim,''));
                    return {x: moment(new Date().setHours(hour)), y: temperature};
                }) : []
            }
        ],
        [day]
    );

    return (
        <Box>
             <Chart data={data} axes={axes} tooltip />
        </Box>
    );
};

export default DailyChart;
