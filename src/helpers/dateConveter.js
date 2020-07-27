import moment from "moment";

export const convertToMilliseconds = (date) => {
    const dateInMilliseconds = date * 1000
    return moment(dateInMilliseconds).utc().format("dddd")
};

export const convertTime12to24 = (time12h) => {
    const prepareTime = time12h.toUpperCase();
    const [time, modifier] = prepareTime.split(' ');

    let hours = time;

    if (hours === '12') {
        hours = '00';
    }

    if (modifier === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }
    return Number(hours);
};
