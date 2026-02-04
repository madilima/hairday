import { apiConfig } from './api-config';

export async function scheduleNew({id, name, when}) {
    try {
        //making the request to send the new appointment data
        await fetch(`${apiConfig.baseURL}/schedules`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',},
        body: JSON.stringify({
            id,
            name,
            when,
        }),
         })
         //alerting the user of success
         alert('Appointment successfully scheduled!');

    } catch (error) {
       alert('It was not possible to schedule a new appointment.');
    }
}