$(document).ready(function () {
    //event listener on save buttons
    //this will aloow you to save events to local storage
    function saveEvent() {
        $('#saveBtn').on('click', function () {
            let key = $(this).parent().attr('id');
            let value = $(this).siblings('.bulletin-board').val();
            localStorage.setItem(key, value);
        });
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
    $('.post-container').on('click', '#deleteBtn', function () {
        let key = $(this).parent().attr('id');
        localStorage.removeItem(key);
        $(this).siblings('.bulletin-board').val('');
    });


  
    saveEvent();
    loadEvent();
});

