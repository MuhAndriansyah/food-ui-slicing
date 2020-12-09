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

// function resizeBrowser() {
//   return window.onresize ? "diresize" : "ok";
// }
// console.log(resizeBrowser());
// window.onresize = function () {
//   let windowWidth = window.innerWidth;
//   let getIdGlider = document.getElementById("glider");
//   if (windowWidth <= 576) {
//     getIdGlider.classList.add("glider");
//     new Glider(document.querySelector(".glider"), {
//       // Mobile-first defaults
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       scrollLock: true,
//       dots: "#resp-dots",
//       arrows: {
//         prev: ".glider-prev",
//         next: ".glider-next",
//       },
//       responsive: [
//         {
//           // screens greater than >= 775px
//           breakpoint: 578,
//           settings: {
//             // Set to `auto` and provide item width to adjust to viewport
//             slidesToShow: "auto",
//             slidesToScroll: "auto",
//             itemWidth: 150,
//             duration: 0.25,
//           },
//         },
//       ],
//     });
//   } else if (windowWidth > 576) {
//     getIdGlider.classList.remove("glider");
//   }
// };
