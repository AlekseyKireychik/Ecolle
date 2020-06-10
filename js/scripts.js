$(document).ready(function () {

    if ($(document).scrollTop() > $(".fixed-top").height()) {
        $(".fixed-top").toggleClass("scrolled");
    }

    $(window).on("scroll", function() {
        $(".container__header").toggleClass(
        "scrolled",
        $(this).scrollTop() > $(".container__header").height()
        );
    });

    $(".header__link").on("click", function (event) {
        let id = $(this).attr("href"),
            top = $(id).offset().top - 50;
        $("body,html").animate({scrollTop: top}, 500);
        $(".burger-menu__button").removeClass("is-active");
        $(".burger-menu").removeClass("is-active");
        $(".header__nav").removeClass("is-active");
        return false;
    });
    $(".burger-menu__button").on("click", function () {
        $(".burger-menu").toggleClass("is-active");
        $(".header__nav").toggleClass("is-active");
        $(".header__top").toggleClass("is-active");
        $("body").toggleClass("is-active");
    });
    $(".caption__btn").on("click", function () {
        $(".popup__login").addClass("is-active"); 
        $(".popup__owerlay").addClass("is-active");       
        $(".btn__close").on("click", function () {
            $(".popup__login").removeClass("is-active"); 
            $(".popup__registration").removeClass("is-active"); 
            $(".popup__owerlay").removeClass("is-active");       
        });
        $(".popup__owerlay").on("click", function () {
            $(".popup__login").removeClass("is-active"); 
            $(".popup__registration").removeClass("is-active"); 
            $(this).removeClass("is-active");       
        });
        $(".login__link").on("click", function () {
            $(".popup__login").removeClass("is-active"); 
            $(".popup__registration").addClass("is-active");
        });
        
    });

    $.extend($.validator.messages, {
        required: ""
    });

    $("#form__footer").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mes: {
                required: true
            }
        }
    });

    $(".submit").one("click", function () {
        if ($("#form__footer").valid() == true) {
            $("#form__footer").submit(function (e) {
                e.preventDefault();
                var thisForm = $(this);
                var data = new FormData(thisForm[0]);
                $.ajax({
                    url: "mail.php",
                    data: data,
                    processData: false,
                    contentType: false,
                    cache: false,
                    type: "POST",
                    success: function () {
                        alert("Message sent!");
                        $("#form__footer")[0].reset();
                    },
                    error: function () {
                        alert("Message not sent!");
                        $("#form__footer")[0].reset();
                    }
                });
            });
        }
    });
});
