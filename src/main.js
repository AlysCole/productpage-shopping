import "fotorama/fotorama";
import "fotorama/fotorama.css";

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

});
