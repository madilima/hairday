import dayjs from 'dayjs';
import { openingHours } from '../../utils/opening-hours.js';
import { hoursClick } from './hours-click.js';


const hours = document.getElementById('hours');

export function hoursLoad({date, dailySchedules}) {
    //clear previous hours
    hours.innerHTML = '';

    //create an array with booked hours
    const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format('HH:mm'))

    //create an array with opening hours and their availability
    const opening = openingHours.map((hour) => {
        const [scheduleHour] = hour.split(":")


        //verify if the hour is past
        const isHourPast = dayjs(date).add(scheduleHour, 'hour').isBefore(dayjs());

        const available = !unavailableHours.includes(hour) && !isHourPast;

        return {
            hour,
            available
        }
    })
    
    //render the available hours in the schedule
opening.forEach(({hour, available}) => {
    const li = document.createElement('li');
    li.classList.add("hour");
    li.classList.add(available ? 'hour-available' : 'hour-unavailable');

    li.textContent = hour;

    if (hour === "9:00") {
        hourHeaderAdd("Manhã");
    }  else if (hour === "13:00") {
        hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
        hourHeaderAdd("Noite");
    }

    hours.append(li);
});
 //bind the click event to available hours
    hoursClick();
}

function hourHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}