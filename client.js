$(document).ready(function(){
  $('#submitButton').on('click', function(){
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();

    $('employeeTable').append('<tr>'
      '<td>' + firstName + '</td>'
      '<td>' + lastName + '</td>'
      '<td>'+ idNumber + '</td>'
      '<td>' + jobTitle + '</td>'
      '<td>' + annualSalary + '</td>'
      '<td>< button class="deleteButton" data-salary"' + annualSalary + '">Delete ' + firstName + '</button></td' + '</tr>');


    var monthlySalaryExpenditures = parseInt($('#annualSalary').val()) / 12;
    $('#monthlySalaryCost').append(monthlySalaryExpenditures);


    $('input').val('')
  });

  $('#nameContainer').on('click', '.deleteButton', function(){
    $(this).parent().remove();
  });
});
