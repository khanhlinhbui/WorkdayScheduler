$(document).ready(function(){
    $('#currentDay').text(moment().format('dddd, MMMM Do')); 
     let currentHour = moment().hour().valueOf();
     //  determine which time block is past, present or future
    $('.time-block').each(function(){
        let scheduleHour = parseInt($(this).attr('id').split('-')[1]);
        if(currentHour==scheduleHour){
            $(this).addClass('present')
            $(this).removeClass('past')
            $(this).removeClass('future')
        }
        if(currentHour > scheduleHour){
            $(this).addClass('past')
            $(this).removeClass('present')
            $(this).removeClass('future')
        }
        if(currentHour < scheduleHour){
            $(this).addClass('future')
            $(this).removeClass('present')
            $(this).removeClass('past')
        }
    });
    $('.saveBtn').click(function(){
        scheduleContentInput = $(this).siblings('.scheduleContent').val()
        scheduleContentKey = $(this).parent().attr('id')
        localStorage.setItem(scheduleContentKey,scheduleContentInput)
    });
    $('#time-9 .scheduleContent').val(localStorage.getItem('time-9'))
    $('#time-10 .scheduleContent').val(localStorage.getItem('time-10'))
    $('#time-11 .scheduleContent').val(localStorage.getItem('time-11'))
    $('#time-12 .scheduleContent').val(localStorage.getItem('time-12'))
    $('#time-13 .scheduleContent').val(localStorage.getItem('time-13'))
    $('#time-14 .scheduleContent').val(localStorage.getItem('time-14'))
    $('#time-15 .scheduleContent').val(localStorage.getItem('time-15'))
    $('#time-16 .scheduleContent').val(localStorage.getItem('time-16'))
    $('#time-17 .scheduleContent').val(localStorage.getItem('time-17'))

});
