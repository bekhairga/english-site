$(document).ready(function() {
    $.stellar({
        responsive: true,
        horizontalOffset: 60
    });
    function wResize() {
        $("header").css("min-height", $(window).height());
    }
    wResize();
    $(window).resize(function() {
        wResize();
    });

    $(".top-phone .wrapper .tab")
        .click(function() {
            $(".top-phone .wrapper .tab")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
            $(".top-phone .tab-item")
                .hide()
                .eq($(this).index())
                .fadeIn();
        })
        .eq(0)
        .addClass("active");

    $(".tabs-header .wrapper .tab")
        .click(function() {
            $(".tabs-header .wrapper .tab")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
            $(".tabs-header .tab-item")
                .hide()
                .eq($(this).index())
                .fadeIn();
        })
        .eq(0)
        .addClass("active");

    //Цели для Яндекс.Метрики и Google Analytics
    $(".count_element").on("click", function() {
        ga("send", "event", "goal", "goal");
        yaCounterXXXXXXXX.reachGoal("goal");
        return true;
    });

    //SVG Fallback
    if (!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this)
                .attr("src")
                .replace(".svg", ".png");
        });
    }

    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $("#form").submit(function(e) {
        e.preventDefault;
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            alert("Спасибо за заявку!");
            setTimeout(function() {
                $.fancybox.close();
            }, 1000);
        });
    });
});