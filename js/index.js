AOS.init();

$(function () {
  $(".slick").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    mobileFirst: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 769,
        settings: "unslick",
      },
    ],
  });

  $(window).on("resize", function () {
    $(".slick").slick("resize");
  });
});

function onTabClick(event) {
  let activeTabs = document.querySelectorAll(".active");

  console.log(activeTabs);
  // deactivate existing active tab and panel
  activeTabs.forEach(function (tab) {
    tab.className = tab.className.replace("active", "");
  });

  // activate new tab and panel
  event.target.parentElement.className += " active";
  document.getElementById(event.target.href.split("#")[1]).className +=
    " active";
}

const element = document.getElementById("nav-tab");

element.addEventListener("click", onTabClick, false);
