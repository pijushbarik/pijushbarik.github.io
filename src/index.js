import './scss/style.scss';
// import './'

if(document.readyState === "complete") {
    documentOnReady();
}

let interval = setInterval(() => {
    if(document.readyState === "complete") {
        clearInterval(interval);
        documentOnReady();
    }    
}, 100);

const documentOnReady = () => {
    removeBodyLoader();
};

const removeBodyLoader = () => {
    fadeOut("#body-loader", () => {
        document.querySelector("body").style.overflow = "auto";
    });
};

const fadeOut = (selector, cb) => {
    let el = document.querySelector(selector);
    let opacity = 1;    // initial opacity
    let timer = setInterval(() => {
        if(opacity <= 0.1) {
            clearInterval(timer);
            el.style.display = "none";
            cb();
        }
        el.style.opacity = opacity;
        opacity -= opacity * 0.2;
    }, 35);
};