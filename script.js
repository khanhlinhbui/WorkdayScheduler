$(document).ready(function() {
     $('#currentDay').text(moment().format('dddd, MMMM Do')); 
     let currentHour = moment().hour().valueOf();
     
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
});
