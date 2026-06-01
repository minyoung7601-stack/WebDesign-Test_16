$(function () {
  //메뉴
  $("nav>ul>li").on("mouseover focusin", function () {
    $(".sub, .bg").stop().slideDown();
  });
  $("nav>ul>li").on("mouseout focusout", function () {
    $(".sub, .bg").stop().slideUp();
  });

  //슬라이드
  $(".slide a:gt(0)").hide();
  setInterval(function () {
    $(".slide a:first").fadeOut().next("a").fadeIn().end().appendTo(".slide");
  }, 3000);

  //팝업
  $(".popup01").click(function () {
    $(".popup").show();
  });
  $(".close").click(function () {
    $(".popup").hide();
  });
});
