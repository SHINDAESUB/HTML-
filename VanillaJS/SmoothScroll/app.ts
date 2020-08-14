function smoothScroll(target,duration){
    var target = document.querySelector(target);  //선택자 지정
    // var targetPosition = target.getBoundingClientRect(); //선택자의 위치,공간 정보
    var targetPosition = target.getBoundingClientRect().top;    //공간 정보
    var startPosition = window.pageYOffset; //브라우저의 현재 높이     
    var distance = targetPosition - startPosition; 
    var startTime = null;

    console.log(target);
    console.log(targetPosition);
    console.log(startPosition);
    console.log(distance);

    function animation(currentTime){
        if(startTime  === null) startTime = currentTime;
        
        var timeElapsed = currentTime - startTime;

        var run = ease(timeElapsed,startPosition,distance,duration); //내려가는속도 , 시작위치 , 이동하는 거리 , 이동시간 
        
        window.scrollTo(0,run);

        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t,b,c,d){ //이동 속도 css ease 검색하면 나옴
        t /= d /2;
        if(t < 1) return c / 2 * t * t + b 
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);

}

var section1 = document.querySelector('.section1');   //선택자 지정
var section2 = document.querySelector('.section2');   //선택자 지정

/* 밑으로 가기 */
section1.addEventListener('click',function(){  //'click' 이벤트 부여 -> 클릭하면  class=section2 부드럽게 이동
    smoothScroll('.section2',1000);
})

/* 위로 가기  */
section2.addEventListener('click',function(){  //'click' 이벤트 부여 -> 클릭하면  class=section2 부드럽게 이동
    smoothScroll('.section1',1000);
})


