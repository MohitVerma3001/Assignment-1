/*
	WEB 303
	Starting file for Assignment 1 
	Mohit Verma
*/

$(function () {
  function dollar(x, y) {
    var z = x * y;
    return (z / 100).toFixed(2);
  }

  $("#salary, #percent").keyup(function () {
    var salary = $("#salary").val();
    var percent = $("#percent").val();
    var spend = $("#spend").text();
    spend = "$" + String(dollar(salary, percent));
    $("#spend").html(spend);

  });
});
