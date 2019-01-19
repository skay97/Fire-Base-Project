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


$("#submit").on("click", function(e) {
    var employeeName = $("#employeeName").val();
    console.log($('#employeeName').val);
    var role = $($("#role")[0]).val()
    var startDate = $("#startDate").val()
    var monthlyRate = $("#monthlyRate").val()

    e.preventDefault();

    $("tbody").append(
    `<tr>
        <td>${employeeName}</td>
        <td>${role}</td>
        <td>${startDate}</td>
        <td>72</td>
        <td>${monthlyRate}</td>
        <td>144000</td>
    </tr>`)
    $("#employeeName").val("");
    $("#role").val("");
    $("#startDate").val("");
    $("#monthlyRate").val("");
});

});
