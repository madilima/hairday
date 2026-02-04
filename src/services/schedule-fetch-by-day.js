import dayjs from 'dayjs';
import { apiConfig } from './api-config.js';

export async function scheduleFetchByDay({date}) {
    try {
        //making the request
        const response = await fetch(`${apiConfig.baseURL}/schedules` )

        //converting the response to json
        const data = await response.json();

        //filters the appointments by the given day
        const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, 'day'));
      
        return dailySchedules;
    } catch (error) {
     //   alert('It was not possible to search for appointments for the day. Please try again later.');
    }
}