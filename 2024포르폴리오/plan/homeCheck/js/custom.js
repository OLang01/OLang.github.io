$(document).ready(function(){
  //서브메뉴
    $("nav ul li").hover(function(){
      $("header").addClass("on");
      $(".inner").stop().slideDown();
    },
    function(){
      $("header").removeClass("on");
      $(".inner").stop().slideUp();
    });
    //변수지정
    let TOP = $(window).scrollTop();
    
    //로고 이미지 변경
    $("header").hover(function(){
      $('.logo img').attr("src","images/logo_o.png");
    },
    function(){
      if(TOP==0){
        $(".logo img").attr("src", "images/logo.png");
      }
    });
    //스크롤 했을 때
    $(window).scroll(function () {
      let TOP2 = $(window).scrollTop();
      //조건이 참 즉 TOP2의 값이 0일때
      if(TOP2 == 0){
        //bg클래스 삭제
        $("header").removeClass("bg");
        $(".logo img").attr("src", "images/logo.png");
      }else{
        //조건이 거짓 즉 TOP2의 값이 0아닐때
        //bg클래스 추가
        $("header").addClass("bg");
        $(".logo img").attr("src", "images/logo_o.png");
      }
      let serTitle = $(".service .title").offset().top;
      let serTitle2 = Number(serTitle)-500;
      if(TOP2>serTitle2){
        $(".service .title, .service .subTitle, .service_content").addClass("on");
      }
      let expert = $('.expert_technique_inner .title').offset().top;
      let expert2 = Number(expert)-500;
      if(TOP2>expert2){
        $(".expert_technique,.expert_technique_inner .title,.expert_technique_inner .subTitle, .expert_technique_inner .expert,.homecheck").addClass("on");
      }
      let awards = $('.awards').offset().top;
      let awards2 =Number(awards)-500;
      if(TOP2>awards2){
        $('.awards').addClass('on');
      }
    });
  });