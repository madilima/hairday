export function hoursClick() {
    const hours = document.querySelectorAll('.hour-available');

    hours.forEach((available) => {
        available.addEventListener('click', (selected) => {
            hours.forEach((hour) => {
                //remove selected class from all hours
                hour.classList.remove('hour-selected');
            })
            //add selected class to clicked hour
            selected.target.classList.add('hour-selected');
        })
   
    })
}