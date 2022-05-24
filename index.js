const mysidebar = document.getElementById("sidebar");
$(document).ready(function () {
  $("#btn").click(function () {
    $("#sidebar").toggle();
  });
});

function myFunction() {
  var element = document.getElementById("showMore");
  element.classList.toggle("moreactive");
}
