$(document).ready(function () {
    // The old Config, DO NOT REMOVE
    // var firebaseConfig = {
    //     apiKey: "AIzaSyB_usShzAgFFsqXN_wVaZtrd-Pp3IVTqwg",
    //     authDomain: "enactus-au.firebaseapp.com",
    //     databaseURL: "https://enactus-au.firebaseio.com",
    //     projectId: "enactus-au",
    //     storageBucket: "enactus-au.appspot.com",
    //     messagingSenderId: "734824269799",
    //     appId: "1:734824269799:web:64656fe874e44ad72d5f42",
    //     measurementId: "G-7HV22V6ZR3"
    // };
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
    $("form").keyup(function (event) {
        if (event.keyCode === 13) {
            signIn();
        }
    });
    $('#sign-in-button').click(resetPass);

});

function resetPass() {
    email = $('#email').val();
    if (ValidateEmail(email) == false) {
        $("#emailHelp").html("invalid email");
        return;
    }
    else {
        $("#emailHelp").html("");
    }
    firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Email sent.
        alert("Email sent successfully to your email address "+email);
        window.location.href = "https://enactusau.org/sign-in.html";
      }).catch(function(error) {
        // An error happened.
        $("#emailHelp").html(""+error);

      });
}

function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }
    //alert("You have entered an invalid email address!")
    return (false)
}


