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
    // firebase.auth();
    // firebase.database()

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
            signUp();
        }
    });

    
    $('#sign-up-button').click(signUp);

    ////////////////////////////
    // (THIS CODE MOVES BOARD INTO THIER OWN LIST)
    function moveBoard() {
        var boardList = firebase.database().ref('Board');
        var manager = firebase.database().ref().child('IT').child('U41FpooWIxelCgN97IAva45eFlq1');
        boardList.push(manager)
    }
    moveBoard()
    ////////////////////////////
    

    // (THIS CODE MOVES PHOTOGRAPHERS AND GDESIGNERS INTO ONE COMITTEE)
    // function merge() {
    //     var newList =  firebase.database().ref('Media');
    //     var photo =  firebase.database().ref('Photographers & Video editing');
    //     var media =  firebase.database().ref('Social media & Design');
    //     photo.on('value', (snapshot)=> {
    //         snapshot.forEach( (user) =>{
    //             newList.push(user.val())
    //         })
    //     })
    //     media.on('value', (snapshot)=> {
    //         snapshot.forEach( (user) =>{
    //             newList.push(user.val())
    //         })
    //     })


        // newList.forEach(user => {
        //     anotherList.push(user);
        // })

        // newList.set({
        //     getUsers
        // })
        // function getUsers() {
        //     const dbRef = firebase.database().ref('Social media & Design');
    
        //     dbRef.get().then( (snapshot) => {
        //         console.log(snapshot.val());
        //     })
        // }
        // getUsers();
    
    // }
    // merge()


function signUp() {
    username = $('#fullName').val();
    gender = $('#gender').val();
    phone = $('#phone').val();
    committee = $('#committee').val();
    email = $('#email').val();
    password = $('#password').val();
    confirmPassword = $('#confirmPassword').val();
    errors = 0;
    flag = 0;
    if (username.length < 5) {
        $("#nameHelp").html("invalid name");
        errors++;
        flag = 1;
    }
    else {
        $("#nameHelp").html("");
    }
    if (gender == null) {
        $("#genderHelp").html("Must select gender");
        errors++;
        flag = 1;
    }
    else {
        $("#genderHelp").html("");
    }
    if (phone.length < 11 || phone.length > 15) {
        $("#phoneHelp").html("invalid phone number");
        errors++;
        flag = 1;
    }
    else {
        $("#phoneHelp").html("");
    }
    if (committee == null) {
        $("#committeeHelp").html("Must select committee");
        errors++;
    }
    else {
        $("#committeeHelp").html("");
    }
    if (ValidateEmail(email) == false) {
        $("#emailHelp").html("invalid email");
        errors++;
    }
    else {
        $("#emailHelp").html("");
    }
    if (validatePassword(password) == false) {
        $("#passwordHelp").html("The password must contain at least: <br>1 lowercase <br>1 uppercase <br>1 numeric character <br>and must be eight characters or longer");
        errors++;
    }
    else {
        $("#passwordHelp").html("");
    }
    if (password != confirmPassword) {
        $("#confirmPasswordHelp").html("The password doesn't match");
        errors++;
    }
    else {
        $("#confirmPasswordHelp").html("");
    }
    if (errors != 0) {
        if (flag == 1) {
            $("html, body").animate({
                scrollTop: 40
            }, 200);
        }
        return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            // Signed in 
            // ...
            user.user.updateProfile({
                displayName: username + "," + committee,
            }).then(function () {
                // Update successful.
                user.user.sendEmailVerification().then(function () {
                    // Email sent.
                    $(".sign-up").hide("");
                    $("#verify-header").css("margin-top", "5em");
                    $("#verify-header").css("margin-bottom", "1em");
                    $("#verify-header").html('Verify Email<br><br>You need to verify your email address.<br>A verification email has been sent to ' + email + '.<br>Follow the instructions in the email and then sign in.<br><a class="btn mx-auto text-center btn-lg" style="color: black; font-weight: 800; background-color: #FEC223; margin: 30px" href="sign-in.html" role="button">sign in</a>');
                    uid = user.user.uid;
                    totalHours = 0;
                    hours = 0;
                    bounsHours = 0;
                    goldenStar = 0;
                    warnings = 0;
                    black = 0;
                    underalert = 0;
                    tasks = "0/0";
                    excuses = 3;
                    month = "October"
                    attendance = 0;
                    taskQuality = 0;
                    commitment = 0;
                    comminication = 0;
                    leadership = 0;
                    teamwork = 0;
                    relation = 0;
                    decision = 0;
                    workPerformance = 0;
                    comments = ""
                    writeUserData(committee, uid, username, email, gender, phone, totalHours, hours, bounsHours, goldenStar, warnings, black, underalert, tasks, excuses, month, attendance, taskQuality, commitment, comminication, leadership, teamwork, relation, decision, workPerformance, comments);
                    console.log("success")
                }).catch(function (error) {
                    console.log("error sendEmailVerification")
                });
            }).catch(function (error) {
                console.log("error createUserWithEmailAndPassword")

            });
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // console.log(errorMessage)
            // ..
        });
}

function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}
function validatePassword(password) {
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)) {
        return (true)
    }
    alert("The password must contain at least: \n 1 lowercase \n1 uppercase \n1 numeric character \nand must be eight characters or longer")
    return (false)
}
function writeUserData(committee, uid, name, email, gender, phone, totalHours, hours, bounsHours, goldenStar, warnings, black, underalert, tasks, excuses, month, attendance, taskQuality, commitment, comminication, leadership, teamwork, relation, decision, workPerformance, comments) {
    firebase.database().ref(`${committee}`).child(uid).set({
        username: name,
        email: email,
        gender: gender,
        phone: phone,
        totalHours: totalHours,
        hours: hours,
        bounsHours: bounsHours,
        goldenStar: goldenStar,
        warnings: warnings,
        black: black,
        underalert: underalert,
        tasks: tasks,
        excuses: excuses,
        month: month,
        attendance: attendance,
        taskQuality: taskQuality,
        commitment: commitment,
        comminication: comminication,
        leadership: leadership,
        teamwork: teamwork,
        relation: relation,
        decision: decision,
        workPerformance: workPerformance,
        comments: comments
    });
}

//to make animated input
$('input').on('focusin', function() {
    $(this).parent().find('label').addClass('activee');
  });
   
  $('input').on('focusout', function() {
    if (!this.value) {
      $(this).parent().find('label').removeClass('activee');
    }
  });
  $('tras').on('focusin', function() {
    $(this).parent().find('trans').addClass('activee');
  });
   
  
  //visibility of password
  const visibilitybtn = document.getElementById("visibilitybtn");
  visibilitybtn.addEventListener("click", togglevisibility)
  function togglevisibility()
  {
      const passwordInput = document.getElementById("password")
      const icon = document.getElementById("icon")
  
      if(passwordInput.type === "password")
      {
          passwordInput.type="text"
          document.getElementById('icon').src='./Images/img visibility/visibility.svg'
      }
      else
      {
          passwordInput.type="password"
          document.getElementById('icon').src='./Images/img visibility/visibility_off_black_24dp.svg'

      }
  }
    //visibility of confirm password

  const visibility = document.getElementById("visibility");
  visibility.addEventListener("click", toglevisibility)
  function toglevisibility()
  {
      const passwordInput = document.getElementById("confirmPassword")
      const icon = document.getElementById("icons")
  
      if(passwordInput.type === "password")
      {
          passwordInput.type="text"
          document.getElementById('icons').src='./Images/img visibility/visibility.svg'
      }
      else
      {
          passwordInput.type="password"
          document.getElementById('icons').src='./Images/img visibility/visibility_off_black_24dp.svg'

      }
  }

});