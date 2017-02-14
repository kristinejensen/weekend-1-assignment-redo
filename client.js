$(document).ready(function(){
  $('#submitButton').on('click', function(){
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();

    $('#employeeTable').append('<tr>' +
      '<td>' + firstName + '</td>' +
      '<td>' + lastName + '</td>' +
      '<td>'+ idNumber + '</td>' +
      '<td>' + jobTitle + '</td>' +
      '<td>' + annualSalary + '</td>' +
      '</tr>');

    var monthlySalaryExpenditures = annualSalary / 12;
    var previousSalaryTotal = $('#monthlyExpenses').text();
    var totalMonthlyExpenses = parseFloat(previousSalaryTotal) + monthlySalaryExpenditures;
    $('#monthlyExpenses').text(totalMonthlyExpenses);

    $('input').val('');
  });
});
