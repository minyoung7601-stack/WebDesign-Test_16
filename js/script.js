$(function () {
  //메뉴
  $("nav>ul>li").on("mouseover focusin", function () {
    $(".sub").stop().fadeIn(300);
  });
  $("nav>ul>li").on("mouseout focusout", function () {
    $(".sub").stop().fadeOut(300);
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
