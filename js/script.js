```javascript
document.addEventListener("DOMContentLoaded", function () {

    const main = new Splide("#video-carousel", {

        type: "slide",

        perPage: 1,

        perMove: 1,

        gap: "20px",

        arrows: true,

        pagination: true,

        rewind: true

    });


    const thumbnails = new Splide("#thumbnail-carousel", {

        fixedWidth: 180,

        fixedHeight: 110,

        gap: 12,

        rewind: true,

        pagination: false,

        arrows: false,

        isNavigation: true

    });


    main.sync(thumbnails);


    main.mount();

    thumbnails.mount();

});
```
