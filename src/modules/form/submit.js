import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector('form');
const clientName = document.getElementById('client');
const selectedDate= document.getElementById('date');

// current date input field setup
const inputDate = dayjs(new Date()).format('YYYY-MM-DD');

// load the current date
selectedDate.value = inputDate

// set the minimum date to the current date 
selectedDate.min = inputDate

form.onsubmit = async (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    try {
        // getting client name and date values
        const name = clientName.value.trim();

        if (!name) {
           return alert("Please enter your name.");
        }

        //return the selected hour
        const hourSelected = document.querySelector(".hour-selected");
        //if no hour is selected, alert the user
        if (!hourSelected) {
            return alert("Please select an available hour.");
        }

        const [hour] = hourSelected.innerText.split(":");

        //insert the hour selected into the date
        const when = dayjs(selectedDate.value).add(hour, 'hour').format();

        //generate an id 
        const id = new Date().getTime();

        //create a new schedule
        await scheduleNew({ id, name, when });

        //reload the schedules for the selected date
        await schedulesDay()

        clientName.value = '';
      

    } catch (error) {
        alert(error.message);
    }
}; 