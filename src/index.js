import './scss/style.scss';
import $ from "jquery";

$(window).on("load", ()  => {
    $("#body-loader").fadeOut(() => {
        $("body").css("overflow", "auto");
    });
});