

$(document).ready(function(){

});

window.addEventListener('scroll',function(e){
    let moveTop = $(window).scrollTop();
    if(moveTop >= 400){
        $(".circle2").removeClass("hide");
        $(".circle3").removeClass("hide");
        $(".circle2").addClass("ani_circle_1");
        $(".circle3").addClass("ani_circle_2");
    }
    if(moveTop >= 950){
        $(".calender_text").removeClass("hide");
        $(".current_calender").removeClass("hide");
        $(".sub_calender_img").removeClass("hide");
        $(".calender_text").addClass("ani_calender_1");
        $(".current_calender").addClass("ani_calender_2");
        $(".sub_calender_img").addClass("ani_calender_3");
    }
})