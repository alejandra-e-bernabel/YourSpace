$(document).ready(function () {
    let lastLoginDate = getTimeAndDate();
    $("#lastLogin").text("Last Online: " + lastLoginDate);
    //event listener on save buttons
    // this will aloow you to save events to local storage
    function saveEvent() {
        $('.saveBtn').on('click', function () {
            let key = $(this).parent().attr('id');
            let value = $(this).siblings('.bulletin-board').val();
            localStorage.setItem(key, value);
        });
    }

    function getTimeAndDate() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        let hour = date.getHours();

        const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][month];
    
        let hourString = "";
    
        if (hour>12) {
            hour = hour-12;
            hourString = hour + "PM";
        } else if (hour == 0) {
            hour = 12;
            hourString = hour + "AM";
        } else if (hour ==12) {
            hourString = hour + "PM";
        } else 
            hourString = hour + "AM";
        
        return monthName + " " + day + ", " + year + " @ " + hourString;
    }
  
    // this function will get any user input that was saved to LS and set the values of the corrosponding text area elems
    function loadEvent() {
        $('.post-container').each(function () {
            const key = $(this).attr('id');
            const value = localStorage.getItem(key);
            $(this).children('.bulletin-board').val(value);
        });
    }
// this will erase the text areas when the delete button is clicked
    $('.post-container').on('click', '.deleteBtn', function () {
        let key = $(this).parent().attr('id');
        localStorage.removeItem(key);
        $(this).siblings('.bulletin-board').val('');
    });


  
    saveEvent();
    loadEvent();
});