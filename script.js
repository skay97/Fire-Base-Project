var employeeName = $("#employeeName").val();
var role = $("#role").val();
var startDate = $("#startDate").val();
var monthlyRate = $("monthlyRate").val();

$(".submitButton").on("click", function(e) {
    e.preventDefault()
    console.log("something")
    $(".currentEmployees").append(
    `<tr>
      <td>${employeeName}</td>
      <td>${role}</td>
      <td>${startDate}</td>
      <td>72</td>
      <td>${monthlyRate}</td>
      <td>144000</td>
    </tr>`)
    $("#employeeName").empty();
    $("#role").empty();
    $("#startDate").empty();
    $("#monthlyRate").empty();
})

