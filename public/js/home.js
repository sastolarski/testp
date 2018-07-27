function login() {
  var login = {
    username: $("#username")
      .val()
      .trim(),
    password: $("#password")
      .val()
      .trim()
  };
  if (login.username === "" || login.password === "") {
    return alert("Please enter username and password");
  }
  console.log(login);
  $.ajax("/login", {
    type: "POST",
    data: login
  }).then(function() {
    window.location.href = "/menu";
  });
}

function register() {
  var register = {
    username: $("#username")
      .val()
      .trim(),
    password: $("#password")
      .val()
      .trim()
  };
  if (login.username === "" || login.password === "") {
    return alert("Please enter username and password");
  }
  $.ajax("/register", {
    type: "POST",
    data: register
  }).then(function() {
    window.location.href = "/menu";
  });
}

// Ensure the page is loaded before beginning
$(document).ready(function() {
  //
  $("html").on("click", ".login", function(event) {
    event.preventDefault();
    login();
  });
  $("html").on("click", ".register", function(event) {
    event.preventDefault();
    register();
  });
});
