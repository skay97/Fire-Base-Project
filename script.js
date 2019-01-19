$(document).ready(function(){



$("#submit").on("click", function(e) {
    var employeeName = $("#employeeName").val();
    console.log($('#employeeName').val);
    var role = $($("#role")[0]).val()
    var startDate = $("#startDate").val()
    var monthlyRate = $("#monthlyRate").val()

    e.preventDefault()

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
