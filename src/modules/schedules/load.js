import { hoursLoad } from '../form/hours-load.js';
import { schedulesShow } from  '../schedules/show.js';
import { scheduleFetchByDay } from '../../services/schedule-fetch-by-day.js';

const selectedDate = document.getElementById('date');

export async function schedulesDay() {
    //get the selected date
    const date = selectedDate.value;

    //searches for available hours in api
    const dailySchedules = await scheduleFetchByDay({date});
    console.log(dailySchedules);

    //stores the booked hours in the date element
    schedulesShow({ dailySchedules });

    //renders the available hours
  hoursLoad({date, dailySchedules });
}
