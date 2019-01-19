var employeeName = $(employeeName field).val();
var role = $(role field).val();
var startDate = $(startDate field).val();
var monthlyRate = $(monthlyRate field).val();

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
    $(employeeName field).empty();
    $(role field).empty();
    $(startDate field).empty();
    $(monthlyRate field).empty();
})

