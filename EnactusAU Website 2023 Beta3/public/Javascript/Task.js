$(document).ready(function () {
    const firebaseConfig = {
        apiKey: "AIzaSyDFthxLSkJbG0OoNf5QT3H7gkQ-UMTbM9Y",
        authDomain: "enactus-au-fa693.firebaseapp.com",
        databaseURL: "https://enactus-au-fa693-default-rtdb.firebaseio.com",
        projectId: "enactus-au-fa693",
        storageBucket: "enactus-au-fa693.appspot.com",
        messagingSenderId: "532644559523",
        appId: "1:532644559523:web:4b21b39aca7ba6f4241d16",
        measurementId: "G-0L68XZ7S94"
      };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $("#navigation-bar").addClass("fixed");
        }
        else {
            $("#navigation-bar").removeClass("fixed");
        }
    });
    // previous detection logic
    function myfunction1()
    {
        location.replace("https://www.w3schools.com");
    }
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
});



