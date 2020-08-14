function scrollApper(){
    var introText = document.querySelector('.intro-text'); //효과줄 선택자 지정
    var introPosition = introText.getBoundingClientRect().top;  //선택자의 top 위치 값
    var screenPosition = window.innerHeight / 1.3; //브라우저의 크기 / 나누기 1.3배
    console.log(introPosition);

    if(introPosition < screenPosition){   //스크린 화면이 더 커지면 글짜 다시 나타내는 효과 등장
        introText.classList.add('intro-appear')
    }
}
  
    window.addEventListener('scroll',scrollApper);  //스크롤 하면 이벤트 발생 하게 등록
