
$(function() {

    "use strict";

    const options = {
        containers: ["#swup", "#swupMenu"],
        animateHistoryBrowsing: true,
        linkSelector: 'a:not([data-no-swup])'
    };
    const swup = new Swup(options);

    // scrollbar
    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.querySelector('#scrollbar'), {
        damping: 0.05,
        renderByPixel: true,
        continuousScrolling: true,
    });
    Scrollbar.init(document.querySelector('#scrollbar2'), {
        damping: 0.05,
        renderByPixel: true,
        continuousScrolling: true,
    });

    // page loading
    $(document).ready(function() {
        anime({
            targets: '.ao-preloader .ao-preloader-content',
            opacity: [0, 1],
            delay: 200,
            duration: 600,
            easing: 'linear',
            complete: function(anim) {

            }
        });
        anime({
            targets: '.ao-preloader',
            opacity: [1, 0],
            delay: 2200,
            duration: 400,
            easing: 'linear',
            complete: function(anim) {
                $('.ao-preloader').css('display', 'none');
            }
        });
    });

    var bar = new ProgressBar.Line(preloader, {
        strokeWidth: 1.7,
        easing: 'easeInOut',
        duration: 1400,
        delay: 750,
        trailWidth: 1.7,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });

    bar.animate(1);

    // counters
    anime({
        targets: '.ao-counter-frame',
        opacity: [0, 1],
        duration: 800,
        delay: 2300,
        easing: 'linear',
    });

    anime({
        targets: '.ao-counter',
        delay: 1300,
        opacity: [1, 1],
        complete: function(anim) {
            $('.ao-counter').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'linear',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });

    // progressbars
    var bar = new ProgressBar.Circle(circleprog1, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: 1400,
        delay: 2500,
        trailWidth: 7,
        step: function(state, circle) {
            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }
        }
    });

    bar.animate(1);

    var bar = new ProgressBar.Circle(circleprog2, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: 1400,
        delay: 2600,
        trailWidth: 7,
        step: function(state, circle) {
            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }
        }
    });

    bar.animate(0.9);

    var bar = new ProgressBar.Circle(circleprog3, {
        strokeWidth: 7,
        easing: 'easeInOut',
        duration: 1400,
        delay: 2700,
        trailWidth: 7,
        step: function(state, circle) {
            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }
        }
    });

    bar.animate(0.7);

    var bar = new ProgressBar.Line(lineprog1, {
        strokeWidth: 1.72,
        easing: 'easeInOut',
        duration: 1400,
        delay: 2800,
        trailWidth: 1.72,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });

    bar.animate(.98);

    var bar = new ProgressBar.Line(lineprog2, {
        strokeWidth: 1.72,
        easing: 'easeInOut',
        duration: 1400,
        delay: 2900,
        trailWidth: 1.72,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });

    bar.animate(.95);

    var bar = new ProgressBar.Line(lineprog3, {
        strokeWidth: 1.72,
        easing: 'easeInOut',
        duration: 1400,
        delay: 3000,
        trailWidth: 1.72,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });

    bar.animate(.80);

    var bar = new ProgressBar.Line(lineprog4, {
        strokeWidth: 1.72,
        easing: 'easeInOut',
        duration: 1400,
        delay: 3100,
        trailWidth: 1.72,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });

    bar.animate(.87);

    var bar = new ProgressBar.Line(lineprog5, {
        strokeWidth: 1.72,
        easing: 'easeInOut',
        duration: 1400,
        delay: 3200,
        trailWidth: 1.72,
        svgStyle: {
            width: '100%',
            height: '100%'
        },
        step: (state, bar) => {
            bar.setText(Math.round(bar.value() * 100) + ' %');
        }
    });

    bar.animate(.85);

    // Contact form
    $('.ao-input').keyup(function() {
        if ($(this).val()) {
            $(this).addClass('ao-active');
        } else {
            $(this).removeClass('ao-active');
        }
    });

    $("#form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {

            var tl = anime.timeline({
                easing: 'easeOutExpo',
            });

            tl
                .add({
                    targets: '.ao-submit',
                    opacity: 0,
                    scale: .5,
                })
                .add({
                    targets: '.ao-success',
                    scale: 1,
                    height: '45px',
                })
        });
        return false;
    });

    // portfolio filter
    $('.ao-filter a').on('click', function() {
        $('.ao-filter .ao-current').removeClass('ao-current');
        $(this).addClass('ao-current');

        var selector = $(this).data('filter');
        $('.ao-grid').isotope({
            filter: selector
        });
        return false;
    });

    // masonry Grid
    $('.ao-grid').isotope({
        filter: '*',
        itemSelector: '.ao-grid-item',
        transitionDuration: '.6s',
    });

    // slider works
    var swiper = new Swiper('.ao-works-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1400,
        autoplay: {
            delay: 4000,
        },
        autoplaySpeed: 5000,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.ao-works-swiper-next',
            prevEl: '.ao-works-swiper-prev',
        },
        breakpoints: {
            1500: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 1,
            },
        },
    });

    // reinit
    document.addEventListener("swup:contentReplaced", function() {

        Scrollbar.use(OverscrollPlugin);
        Scrollbar.init(document.querySelector('#scrollbar'), {
            damping: 0.05,
            renderByPixel: true,
            continuousScrolling: true,
        });
        Scrollbar.init(document.querySelector('#scrollbar2'), {
            damping: 0.05,
            renderByPixel: true,
            continuousScrolling: true,
        });

        $("#form").submit(function() {
            $.ajax({
                type: "POST",
                url: "mail.php",
                data: $(this).serialize()
            }).done(function() {

                var tl = anime.timeline({
                    easing: 'easeOutExpo',
                });

                tl
                    .add({
                        targets: '.ao-submit',
                        opacity: 0,
                        scale: .5,
                    })
                    .add({
                        targets: '.ao-success',
                        scale: 1,
                        height: '45px',
                    })
            });
            return false;
        });

        // Masonry Grid
        $('.ao-grid').isotope({
            filter: '*',
            itemSelector: '.ao-grid-item',
            transitionDuration: '.6s',
        });

        $('.ao-filter a').on('click', function() {
            $('.ao-filter .ao-current').removeClass('ao-current');
            $(this).addClass('ao-current');

            var selector = $(this).data('filter');
            $('.ao-grid').isotope({
                filter: selector
            });
            return false;
        });

        anime({
            targets: '.ao-counter-frame',
            opacity: [0, 1],
            duration: 800,
            delay: 300,
            easing: 'linear',
        });

        $('.ao-counter').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'linear',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

        // slider works
        var swiper = new Swiper('.ao-works-slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 1400,
            autoplay: {
                delay: 4000,
            },
            autoplaySpeed: 5000,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.ao-works-swiper-next',
                prevEl: '.ao-works-swiper-prev',
            },
            breakpoints: {
                1500: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 1,
                },
            },
        });

    })

});