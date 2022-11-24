$(document).ready(function() {
     $('#currentDay').text(moment().format('dddd, MMMM Do')); 
     let currentHour = moment().hour().valueOf();
     
     $('.time-block').each(function(){
        let scheduleHour = parseInt($(this).attr('id').split('-')[1]);
        if(currentHour==scheduleHour){
            $(this).addClass('present')
        }
    });
});
