"use strict";$(document).foundation(),$(document).ready((function(){$(".indiastack-is-slider").slick({dots:!1,arrows:!1,infinite:!0,speed:1e3,fade:!0,cssEase:"ease",autoplay:!0,autoplaySpeed:3e3}),$(".timeline-wrap").slick({dots:!1,arrows:!1,infinite:!1,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0,centerPadding:"0px"}}]}),$(".timeline-next").click((function(){$(".timeline-wrap").slick("slickNext")})),$(".timeline-previous").click((function(){$(".timeline-wrap").slick("slickPrev")})),$(".mobile-menu").on("click",(function(){$(".hamburger-menu").toggleClass("animate"),$(".top-bar").toggleClass("menu-open")}))}));
//# sourceMappingURL=app.js.map