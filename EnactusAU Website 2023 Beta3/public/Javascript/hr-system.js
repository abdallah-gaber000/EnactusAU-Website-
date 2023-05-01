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
    $("form").keyup(function (event) {
        if (event.keyCode === 13) {
            signIn();
        }
    });
    $('#sign-in-button').click(signIn);
    $("#totalInfo").keyup(function (event) {
        if (event.keyCode === 13) {
            saveData();
        }
    });
    $('#save-button').click(saveData);
});

function signIn() {
    password = $('#password').val();
    selected_committee = ""
    if (password == "Inf.T@c2022!") {
        $("#invalid").html("");
        selected_committee = "IT";
    }
    else if (password == "hm@n#R_2022") {
        $("#invalid").html("");
        selected_committee = "HR";
    }
    else if (password == "Bo@rd_2022!") {
        $("#invalid").html("");
        selected_committee = "Board";
    }
    else if (password == "p@bl!c.r$2022") {
        $("#invalid").html("");
        selected_committee = "PR & Marketing";
    }
    else if (password == "Prs@nti0n_2022#") {
        $("#invalid").html("");
        selected_committee = "Presentation";
    }
    else if (password == "!Pr0jct.2022") {
        $("#invalid").html("");
        selected_committee = "Project";
    }
    else if (password == "S0c!l.M_2022") {
        $("#invalid").html("");
        selected_committee = "Social media & Design";
    }
    else if (password == "PhVe@_2022") {
        $("#invalid").html("");
        selected_committee = "Photographers & Video Editing";
    }
    else if (password == "he!r_@rch#1038") {
        $("#invalid").html("");
        $('#chooseCommittee').html('<div class="form-group mx-auto"> <label for="committee">Choose Committee</label> <select class="form-control" id="committee"> <option value="" disabled selected>Select committee</option> <option value="Board">Board</option> <option value="HR">HR</option> <option value="PR & Marketing">PR & Marketing</option> <option value="Presentation">Presentation</option> <option value="Project">Project</option> <option value="IT">IT</option> <option value="Media">Media</option></select> </div>');
        $(".sign-in").html("");
        $('#committee').on('change', function () {
            selected_committee = this.value;
            $("#mainInfo").html('');
            $("#totalInfo").html('');
            getDatafromDB(selected_committee);
        });
    }
    // else if (password == "s&des!gn_2022") {
    //     $("#invalid").html("");
    //     selected_committee = "Social media & Design";
    // }
    // else if (password == "photo+ved!o_2020") {
    //     $("#invalid").html("");
    //     selected_committee = "Photographers & Video Editing";
    // }
    else {
        $("#invalid").html("invalid password");
        return;
    }
    if (selected_committee != "")
        getDatafromDB(selected_committee);

}
function getDatafromDB(selected_committee) {
    const dbRefObject = firebase.database().ref().child(selected_committee);
    dbRefObject.on("value", snap => {
        $(".sign-in").html("");
        $("#chooseMember").html('<div class="form-group mx-auto"><label for="committee">Choose member</label><select class="form-control" id="member"><option value="" disabled selected>Select member</option></select></div>');
        for (x in snap.val()) {
            $("#member").append('<option value="' + x + '">' + snap.val()[x].username + ' (' + snap.val()[x].gender + ')</option>');
            console.log(snap.val()[x].username + ' (' + snap.val()[x].email + ')')
        }
        $('#member').on('change', function () {
            uid = this.value;
            username = snap.val()[this.value].username;
            email = snap.val()[this.value].email;
            gender = snap.val()[this.value].gender;
            phone = snap.val()[this.value].phone;
            totalHours = snap.val()[this.value].totalHours;
            hours = snap.val()[this.value].hours;
            bounsHours = snap.val()[this.value].bounsHours;
            goldenStar = snap.val()[this.value].goldenStar;
            warnings = snap.val()[this.value].warnings;
            black = snap.val()[this.value].black;
            underalert = snap.val()[this.value].underalert;
            tasks = snap.val()[this.value].tasks;
            excuses = snap.val()[this.value].excuses;
            month = snap.val()[this.value].month;
            attendance = snap.val()[this.value].attendance;
            taskQuality = snap.val()[this.value].taskQuality;
            commitment = snap.val()[this.value].commitment;
            comminication = snap.val()[this.value].comminication;
            leadership = snap.val()[this.value].leadership;
            teamwork = snap.val()[this.value].teamwork;
            relation = snap.val()[this.value].relation;
            decision = snap.val()[this.value].decision;
            workPerformance = snap.val()[this.value].workPerformance;
            comments = snap.val()[this.value].comments;
            $("#mainInfo").html('<div class="col-12 ml-2 ml-md-5"><h4>' + username + '</h4><h5>' + email + '</h5><h5>' + phone + '</h5></div>');
            $("#totalInfo").html('<div class="col-11 col-md-5 bg-dark mx-auto mb-4 p-3" style="border-radius: 25px;"> <h6>Total Hours : ' + totalHours + '</h6> <div class="form-group"> <label for="hours">Hours</label> <input type="number" class="form-control" id="hours" placeholder=""> </div> <div class="form-group"> <label for="bounsHours">Bonus Hours</label> <input type="number" class="form-control" id="bounsHours" placeholder=""> </div> <div class="form-group"> <label for="goldenStar">Golden Star</label> <input type="number" class="form-control" id="goldenStar" placeholder=""> </div> <div class="form-group"> <label for="warnings">Warnings</label> <input type="number" class="form-control" id="warnings" placeholder=""> </div> <div class="form-group"> <label for="black">Black Points</label> <input type="number" class="form-control" id="black" placeholder=""> </div> <div class="form-group"> <label for="underalert">Under Alert</label> <input type="number" class="form-control" id="underalert" placeholder=""> </div> <div class="form-group"> <label for="tasks">Tasks</label> <input type="text" class="form-control" id="tasks" placeholder=""> </div> <div class="form-group"> <label for="excuses">Excuses Left</label> <input type="number" class="form-control" id="excuses" placeholder=""> </div><button type="button" id="save-button" class="btn btn-primary">Save</button> </div> <div class="col-11 col-md-5 bg-dark mx-auto mb-4 p-3" style="border-radius: 25px;"> <div class="form-group"> <label for="month">Month</label> <input type="text" class="form-control" id="month" placeholder=""> </div> <div class="form-group"> <label for="attendance">Attendance</label> <input type="number" class="form-control" id="attendance" placeholder=""> </div> <div class="form-group"> <label for="taskQuality">Task Quality</label> <input type="number" class="form-control" id="taskQuality" placeholder=""> </div> <div class="form-group"> <label for="commitment">Commitment</label> <input type="number" class="form-control" id="commitment" placeholder=""> </div> <div class="form-group"> <label for="comminication">Comminication</label> <input type="number" class="form-control" id="comminication" placeholder=""> </div> <div class="form-group"> <label for="leadership">Leadership</label> <input type="number" class="form-control" id="leadership" placeholder=""> </div> <div class="form-group"> <label for="teamwork">Teamwork</label> <input type="number" class="form-control" id="teamwork" placeholder=""> </div> <div class="form-group"> <label for="relation">Relation</label> <input type="number" class="form-control" id="relation" placeholder=""> </div> <div class="form-group"> <label for="decision">Decision</label> <input type="number" class="form-control" id="decision" placeholder=""> </div> <div class="form-group"> <label for="workPerformance">Work Performance</label> <input type="number" class="form-control" id="workPerformance" placeholder=""> </div> <div class="form-group"> <label for="comments">Comments</label> <input type="text" class="form-control" id="comments" placeholder=""> </div> </div>');
            $("#hours").val(hours);
            $("#bounsHours").val(bounsHours);
            $("#goldenStar").val(goldenStar);
            $("#warnings").val(warnings);
            $("#black").val(black);
            $("#underalert").val(underalert);
            $("#tasks").val(tasks);
            $("#excuses").val(excuses);
            $("#month").val(month);
            $("#attendance").val(attendance);
            $("#taskQuality").val(taskQuality);
            $("#commitment").val(commitment);
            $("#comminication").val(comminication);
            $("#leadership").val(leadership);
            $("#teamwork").val(teamwork);
            $("#relation").val(relation);
            $("#decision").val(decision);
            $("#workPerformance").val(workPerformance);
            $("#comments").val(comments);
            $('#save-button').click(saveData);
        });
    });
}
function saveData() {
    hours = parseFloat($("#hours").val());
    bounsHours = parseFloat($("#bounsHours").val());
    goldenStar = parseFloat($("#goldenStar").val());
    warnings = parseFloat($("#warnings").val());
    black = parseFloat($("#black").val());
    underalert = parseFloat($("#underalert").val());
    tasks = $("#tasks").val();
    excuses = parseFloat($("#excuses").val());
    month = $("#month").val();
    attendance = parseFloat($("#attendance").val());
    taskQuality = parseFloat($("#taskQuality").val());
    commitment = parseFloat($("#commitment").val());
    comminication = parseFloat($("#comminication").val());
    leadership = parseFloat($("#leadership").val());
    teamwork = parseFloat($("#teamwork").val());
    relation = parseFloat($("#relation").val());
    decision = parseFloat($("#decision").val());
    workPerformance = parseFloat($("#workPerformance").val());
    comments = $("#comments").val();

    warnings += Math.floor(underalert / 2);
    totalHours = hours + (bounsHours * 5) + (goldenStar * 20) - (warnings * 5) - (black * 20);
    if (underalert / 2 > 0) {
        underalert -= (Math.floor(underalert / 2) * 2);
    }

    writeUserData(selected_committee, uid, username, email, gender, phone, totalHours, hours, bounsHours, goldenStar, warnings, black, underalert, tasks, excuses, month, attendance, taskQuality, commitment, comminication, leadership, teamwork, relation, decision, workPerformance, comments);
}
function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }
    //alert("You have entered an invalid email address!")
    return (false)
}
function writeUserData(committee, uid, name, email, gender, phone, totalHours, hours, bounsHours, goldenStar, warnings, black, underalert, tasks, excuses, month, attendance, taskQuality, commitment, comminication, leadership, teamwork, relation, decision, workPerformance, comments) {
    firebase.database().ref(committee).child(uid).set({
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
    alert("saved");
}



