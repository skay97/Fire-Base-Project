<<<<<<< HEAD


// $(document).ready(function () {



//     $("#submit").on("click", function (e) {
//         var employeeName = $("#employeeName").val();
//         console.log($('#employeeName').val());
//         var role = $($("#role")[0]).val()
//         var startDate = $("#startDate").val()
//         var monthlyRate = $("#monthlyRate").val()

//         e.preventDefault()

//         $("tbody").append(
//             `<tr>
//            <td>${employeeName}</td>
//            <td>${role}</td>
//            <td>${startDate}</td>
//            <td>72</td>
//            <td>${monthlyRate}</td>
//            <td>144000</td>
//        </tr>`)
//         $("#employeeName").val("");
//         $("#role").val("");
//         $("#startDate").val("");
//         $("#monthlyRate").val("");
//     });

=======
>>>>>>> e3e9648fc086ed068a7de9b1caf7c9bdfce1f3eb
$(document).ready(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDxN6bpG5NT1KCgQvq35SZKapnr8Bk2CzU",
    authDomain: "fir-inclass-project.firebaseapp.com",
    databaseURL: "https://fir-inclass-project.firebaseio.com",
    projectId: "fir-inclass-project",
    storageBucket: "fir-inclass-project.appspot.com",
    messagingSenderId: "83150528120"
  };
  firebase.initializeApp(config);

  var database = firebase.database();


  

$("#submit").on("click", function(e) {
    

    e.preventDefault();

    var employeeName = $("#employeeName").val();
<<<<<<< HEAD
    // console.log($('#employeeName').val());
    var role = $($("#role")[0]).val()
    var startDate = $("#startDate").val()
    var monthlyRate = $("#monthlyRate").val()

    e.preventDefault()
for (var i=0;i<emplyeeInfo.lenght;i++) {

}
    $("tbody").append(
    `<tr>
        <td>${employeeName}</td>
        <td>${role}</td>
        <td>${startDate}</td>
        <td>72</td>
        <td>${monthlyRate}</td>
        <td>144000</td>
    </tr>`)
=======
    var role = $("#role").val();
    var startDate = $("#startDate").val();
    var monthlyRate = $("#monthlyRate").val();
    

    var newEmp = {
        name: employeeName,
        role: role,
        start: startDate,
        rate: monthlyRate
    }

    database.ref().push(newEmp);

    




>>>>>>> e3e9648fc086ed068a7de9b1caf7c9bdfce1f3eb
    $("#employeeName").val("");
    $("#role").val("");
    $("#startDate").val("");
    $("#monthlyRate").val("");


});


database.ref().on("child_added", function(childsnapshot) {
    var employeeName = childsnapshot.val().name;
    var role = childsnapshot.val().role;
    var startDate = childsnapshot.val().start;
    var monthlyRate = childsnapshot.val().rate;

    $("tbody").append(
        `<tr>
            <td>${employeeName}</td>
            <td>${role}</td>
            <td>${startDate}</td>
            <td>72</td>
            <td>${monthlyRate}</td>
            <td>144000</td>
        </tr>`)


});

});
