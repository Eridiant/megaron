// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
// import 'swiper/scss';

document.addEventListener('DOMContentLoaded', () => {

    var navbar = document.querySelector('.navbar');
    let flag = 1;
    scrl();
    window.addEventListener("scroll", (e) => {
        scrl();
    })

    function scrl() {
        let height = window.scrollY;
        if (height > 140 && flag) {
            flag = 0;
            addBg();
        } else if (height <= 100 && !flag) {
            flag = 1;
            removeBg();
        }
    }

    function addBg() {
        navbar.classList.add('scroll');
    }

    function removeBg() {
        navbar.classList.remove('scroll');
    }


    document.addEventListener('click', (e) => {
        let target = e.target;


        // if (target.closest('.show .menu-icon') || target.classList.contains('show')) {
        //     document.querySelector('.menu').classList.remove('show');
        //     document.body.classList.remove('show');
        //     document.body.style.overflow = 'auto';
        //     return;
        // }
        // console.log(target);

        if (target.closest('#menu .menu-item.sub') && !target.closest('#menu .menu-item.sub a')) {
            let sub = target.querySelector('.menu-sub');
            // console.log('item', target.closest('#menu .menu-item.sub'));
            // console.log('sub', sub);
            if (sub.style.maxHeight) {
                sub.style.maxHeight = null;
            } else {
                sub.style.maxHeight = sub.scrollHeight + 'px';
            }
        }

        if (target.closest('.popup-close') || target.classList.contains('popup')) {

            document.querySelector('.popup-inner').className = 'popup-inner';
            document.querySelector('.popup').className = 'popup';
            document.body.classList.remove('show');
        }

        if (target.closest('.menu-icon') || target.classList.contains('show')) {
            let menu = document.querySelector('.menu-icon');

            if (target.closest('.active') || target.classList.contains('show')) {
                menu.classList.remove('active');
                document.querySelector('#menu').classList.remove('show');
                document.body.classList.remove('show');
                document.body.style.overflow = 'auto';
            } else {
                menu.classList.add('active');
                document.querySelector('#menu').classList.add('show');
                document.body.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
            return;
        }
        // console.log('target', target);
    })

    var panorama = new Swiper(".panorama-swiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
    });


    var projects = new Swiper(".projects-swiper", {
        modules: [Navigation, Pagination],
        spaceBetween: 35,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".projects-next",
            prevEl: ".projects-prev",
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            300: {
                slidesPerView: 1,
            },
        },
    });

    var offer = new Swiper(".offer-swiper", {
        modules: [Navigation, Pagination],
        spaceBetween: 35,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".offer-next",
            prevEl: ".offer-prev",
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            300: {
                slidesPerView: 1,
            },
        },
    });

    var district = new Swiper(".district-swiper", {
        modules: [Navigation, Pagination],
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 35,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".district-next",
            prevEl: ".district-prev",
        },
        // breakpoints: {
        //     1024: {
        //         slidesPerView: 3,
        //     },
        //     768: {
        //         slidesPerView: 2,
        //     },
        //     300: {
        //         slidesPerView: 1,
        //     },
        // },
    });

    var experts = new Swiper(".experts-swiper", {
        slidesPerView: 3,
        spaceBetween: 35,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".experts-next",
            prevEl: ".experts-prev",
        },
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            300: {
                slidesPerView: 1,
            },
        },
    });

    var gallery = new Swiper(".gallery-swiper-thumbs", {
        modules: [Navigation],
        spaceBetween: 10,
        slidesPerView: 4,
        // freeMode: true,
        watchSlidesProgress: true,
    });
    var thumb = new Swiper(".gallery-swiper", {
        modules: [Thumbs],
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: gallery,
        },
    });

    // google.mapsevent.addDomListener(window, 'load', init);
})

window.addEventListener('load', () => {

    if (document.querySelector('#map')) {
        init();
    }
})



function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{ "featureType": "all", "elementType": "geometry.fill", "stylers": [{ "weight": "2.00" }] }, { "featureType": "all", "elementType": "geometry.stroke", "stylers": [{ "color": "#9c9c9c" }] }, { "featureType": "all", "elementType": "labels.text", "stylers": [{ "visibility": "on" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#eeeeee" }] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [{ "color": "#7b7b7b" }] }, { "featureType": "road", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#c8d7d4" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#070707" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "color": "#ffffff" }] }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'Snazzy!'
    });
}
