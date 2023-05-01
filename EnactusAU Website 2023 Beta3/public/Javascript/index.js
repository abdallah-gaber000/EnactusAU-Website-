$(document).ready(function () {
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });

    $("#to-top").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 200);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() - 200 > 0) {
            $('#to-top').stop().slideDown('fast'); // show the button
        } else {
            $('#to-top').stop().slideUp('fast'); // hide the button
        }
    });

    nav = document.querySelector("#navigation-bar");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            nav.style.marginTop = "0px"
            $("#navigation-bar").addClass("fixed");
        }
        else {
            nav.style.marginTop = "60px"
            $("#navigation-bar").removeClass("fixed");
        }
    });
  });







  var countDownDate = new Date("30 Oct, 2021 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.querySelector("#join-content").innerHTML = ""
      document.getElementById("demo").innerHTML = "The Form Closed";
    }
  }, 1000);