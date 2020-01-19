import './scss/style.scss';
import $ from "jquery";

$(window).on("load", ()  => {
    setTimeout(() => {
        $("#body-loader").fadeOut(() => {
            $("body").css("overflow", "auto");
        });
    }, 1500);
});