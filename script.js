let counter = 0;
let proCount = 0;


window.addEventListener('wheel', function(event){
    if(event.deltaY < 0){
        counter += 45;
        proCount += 1;
        $('.main_box').css({"transform" : "rotate("+ counter +"deg)"});
        // $(".proBox").removeClass('active');
        // if(proCount > 7){proCount = 0}
        // $(".proBox").eq(proCount).addClass('active');
    }else if(event.deltaY > 0){
        counter -= 45;
        proCount -= 1;
        $('.main_box').css({"transform" : "rotate("+ counter +"deg)"});
        // $(".proBox").removeClass('active');
        // if(proCount < -7){proCount = 0}
        // $(".proBox").eq(proCount).addClass('active');
    }
})