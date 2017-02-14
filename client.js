$(document).ready(function(){


  $('#submitButton').on('click', function(){
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();
    var employeeForm = firstName + ' ' + lastName + ' ' + idNumber + ' ' + jobTitle + ' ' + annualSalary;
    $('#nameContainer').append('<p>' + employeeForm + " " +
    '<button class="deleteButton">Delete</button></p>');
  });
  $('#submitButton').on('click', function() {
    var monthlySalaryExpenditures = parseInt($('#annualSalary').val()) / 12;
    $('#monthlySalaryCost').append(monthlySalaryExpenditures);
  });
  $('#submitButton').on('click', function(){
    $('input').val('')
  });
  $('#nameContainer').on('click', '.deleteButton', function(){
    $(this).parent().remove();
  });
});
