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
   // firebase.analytics();

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
    $('#sign-in-button').click(signIn);



function signIn() {
    email = $('#email').val();
    password = $('#password').val();
    if (ValidateEmail(email) == false) {
        $("#invalid").html("invalid email");
        return;
    }
    else {
        $("#invalid").html("");
    }
    if (password.length < 8) {
        $("#invalid").html("invalid password");
        return;
    }
    else {
        $("#invalid").html("");
    }
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            // Signed in 
            // ...
            if (user.user.emailVerified == false) {
                $("#invalid").html("You need to verify your email address");
                return;
            }
            displayName = user.user.displayName;
            nameCommittee = displayName.split(',');
            name = nameCommittee[0];
            committee = nameCommittee[1];
            uid = user.user.uid;

            const dbRefObject = firebase.database().ref().child(committee).child(uid);

            dbRefObject.on("value", snap => {
                // var date = new Date();
                // snap.val().month = date.toLocaleString('en-us', { month: 'long' })
                // console.log(snap.val().month)

                username = snap.val().username;
                email = snap.val().email;
                gender = snap.val().gender;
                phone = snap.val().phone;
                totalHours = snap.val().totalHours;
                hours = snap.val().hours;
                bounsHours = snap.val().bounsHours;
                goldenStar = snap.val().goldenStar;
                warnings = snap.val().warnings;
                black = snap.val().black;
                underalert = snap.val().underalert;
                tasks = snap.val().tasks;
                excuses = snap.val().excuses;
                month = snap.val().month;

                console.log(month)

                attendance = snap.val().attendance;
                taskQuality = snap.val().taskQuality;
                commitment = snap.val().commitment;
                comminication = snap.val().comminication;
                leadership = snap.val().leadership;
                teamwork = snap.val().teamwork;
                relation = snap.val().relation;
                decision = snap.val().decision;
                workPerformance = snap.val().workPerformance;
                comments = snap.val().comments;
                $(".sign-in").html("");
                $("#sign_in_out").html("Sign out");
                $("#sign_in_out").click(function () {
                    firebase.auth().signOut().then(function () {
                        // Sign-out successful.
                    }).catch(function (error) {
                        // An error happened.
                    });
                });
                $(document).prop('title', 'My Profile');

                $(".profile").html(
                    `<main>`+
                    `<section class="accHead">`+
                        `<div class="headCont d-flex align-items-center pl-4">`+
                            ` <div class="userImage position-relative pr-3" id="imageHolder">`+
                                ` <img src="./Images/person.png" alt="user-image" style="width: 100px;">`+
                                // `<div class="imgUpload d-flex align-items-center justify-content-center position-absolute">`+
                                // `<label for="image"><i class="fa fa-arrow-up font-weight-bold" style="padding-top:10px;cursor: pointer;"></i></label>`+
                                // `<input type="file" id="image" accept="image/*" style="display: none;">`+
                                // `</div>`+
                                    ` </div>`+
                                    `<div class="userName">`+
                                        `<h3 class="font-weight-bold">${username}</h3>`+
                                        `<h4>${committee}</h4>`+
                                        `</div>`+
                                        `</div>`+
                                        `</section>`+
                                        `<div class="accInfo d-flex justify-content-center align-items-center flex-column flex-md-row">`+
                                            `<div>`+
                                                `<div class="hoursAttitude cirSq">`+
                                                    `<div class="infoIcon d-flex justify-content-center align-items-center">`+
                                                        `<div class="secondCir">`+
                                                            `<div class="thirdCir d-flex justify-content-center align-items-center">`+
                                                                `<img src="./Images/hours.png" alt="" style="width:60px;">`+
                                                                `</div>`+
                                                                `</div>`+
                                                                `</div>`+
                                                                `<div class="infoText">`+
                                                                    `<div class="d-flex flex-column justify-content-between">`+
                                                                        `<h3 class="text-center">Hours and Attitude</h3>`+
                                                                        `<ul class="list-unstyled pb-5">`+
                                                                            `<li>Total Hours: <span>${totalHours}</span></li>`+
                                                                            `<li>Hours: <span>${hours}</span></li>`+
                                                                            `<li>Bonus Hours: <span>${bounsHours}</span></li>`+
                                                                            `<li>Golden star: <span>${goldenStar}</span></li>`+
                                                                            `<li>Warnings: <span>${warnings}</span></li>`+
                                                                            `<li>Black points: <span>${black}</span></li>`+
                                                                            `<li>Under Alert: <span>${underalert}</span></li>`+
                                                                            `<li>Tasks: <span>${tasks}</span></li>`+
                                                                            `<li>Execuses Left: <span>${excuses}</span></li>`+

                                                                            `</ul>`+
                                                                            `</div>`+
                
                                                                            `</div>`+
                                                                            `</div>`+
                                                                            `</div>`+
                                                                            `<div>`+
                                                                                `<div class="performance cirSq">`+
                                                                                    `<div class="infoIcon d-flex justify-content-center align-items-center">`+
                                                                                        `<div class="secondCir">`+
                                                                                            `<div class="thirdCir d-flex justify-content-center align-items-center">`+
                                                                                                `<img src="./Images/hours.png" alt="" style="width:60px;">`+
                                                                                                `</div>`+
                                                                                                `</div>`+
                                                                                                `</div>`+
                                                                                                `<div class="infoText">`+
                                                                                                    `<div class="d-flex flex-column justify-content-between">`+
                                                                                                        `<h3 class="text-center">Performance appraisal for December</h3>`+
                                                                                                        `<ul class="list-unstyled pb-5">`+
                                                                                                            `<li>Attendance: <span>${attendance}</span></li>`+
                                                                                                            `<li>Task Quality: <span>${taskQuality}</span></li>`+
                                                                                                            `<li>Communication: <span>${comminication}</span></li>`+
                                                                                                            `<li>Leadership: <span>${leadership}</span></li>`+
                                                                                                            `<li>Teamwork: <span>${teamwork}</span></li>`+
                                                                                                            `<li>Relation with others: <span>${relation}</span></li>`+
                                                                                                            `<li>Decision Making: <span>${decision}</span></li>`+
                                                                                                            `<li>Work Performance: <span>${workPerformance}</span></li>`+
                                                                                                            `<li>Comments: <span>${comments}</span></li>`+
                                                                                                            `</ul>`+
                                                                                                            `</div>`+
                
                                                                                                            `</div>`+
                                                                                                            `</div>`+
                                                                                                            `</div>`+
                                                                                                            `</div>`+
                                                                                                            `</main>`+
                
                                                                                                            `<footer class=" px-3 px-md-5">`+
                                                                                                            ` <h5 class="text-center py-3">This data is private, don't share it with anyone</h5>`+
                                                                                                            `<p>leadership Is your ability to "lead", influence or guide other individuals, teams, or entire teams.</p>`+
                                                                                                            `<p>communication the act of transferring information from one place, person or group to another.your body language your and how you explain your ideas simply and shortly.</p>`+
                                                                                                            `<p>Relation: It’s about your relation with your teammates and the team chemistry.</p>`+
                                                                                                            `<p>Teamwork is how you work with a team without problems to achive common goal.</p>`+
                                                                                                            `<p>Decion making the cognitive process resulting in the selection of a belief or a course of action among several possible alternative options.</p>`+
                                                                                                            `<p>Work performance Determined by the manager through your work and tasks.</p>`+
                                                                                                            `</footer>`);
            });

            // $("body").on('click', '.imgUpload', upload);

            function upload() {
                console.log("clicked")
                var image = $('input[type="file"]').files[0];
                // console.log(image);
                var img_name = image.name;
                var storageRef = firebase.storage().ref('img/' + img_name);
                var upload = storageRef.put(image);
                var imageHolder = document.querySelector("#imageHolder");

                upload.on('state_changed', function (snapshot) {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("upload is " + progress + " done");
                }, function (error) {
                    //handle error here
                    console.log(error.message);
                }, function () {
                    //handle successful uploads on complete
            
                    upload.snapshot.ref.getDownloadURL().then(function (downlaodURL) {
                        //get your upload image url here...
                        console.log(downlaodURL);
                    });
            
                })
            }

            console.log($('input#image'))
            
            $('input#image').change(upload);
            
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            $("#invalid").html(errorMessage);
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
function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }
    //alert("You have entered an invalid email address!")
    return (false)
}

});