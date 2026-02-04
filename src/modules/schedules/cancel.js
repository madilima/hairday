import { scheduleCancel } from '../../services/schedule-cancel.js';
import  { schedulesDay } from './load.js';



const periods = document.querySelectorAll('.period');

//add click event to each period
periods.forEach((period) => {

    //listen for click on the cancel icon
    period.addEventListener('click', async (event) => {
        if(event.target.classList.contains('cancel-icon')) {
            const item = event.target.closest('li');

            //get the schedule id from data attribute to remove
            const { id } = item.dataset;


            //confirm that id was selected
            if (id) {

                //confirm cancellation
                const isConfirm = confirm('Are you sure you want to cancel this schedule?');


                if (isConfirm) {

                    //call api for cancellation
                    await scheduleCancel({ id });

                    //reload the schedule day
                     schedulesDay();
                }
                    

            }
        }
    })
})
