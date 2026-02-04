import {schedulesDay} from "../schedules/load";

const selectedDate = document.getElementById('date');

// Listen for changes on the date input field
selectedDate.onchange = () => {
    schedulesDay(selectedDate.value);
}