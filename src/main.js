import "fotorama/fotorama";
import "fotorama/fotorama.css";

import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";

import "styles.css";

// Import images:
import frontview from "./assets/frontview.png";
import sideview from "./assets/sideview.png";
import topview from "./assets/topview.png";

require("./index.html");

$("#front-image").attr('src', frontview);
$("#angled-image").attr('src', sideview);
$("#top-image").attr('src', topview);

$(document).ready(function() {
  $(".mobile-menu").click(() => {
    $("header > .navigation > ul").toggle();
  });
});
