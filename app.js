function checkPassword(form) {
  // get passwords from the field using their name attribute
  const password = form.password.value;
  const confirmPassword = form.password_conf.value;

  // check if both match using if-else condition
  if (password != confirmPassword) {
    alert("Error! Password did not match.");
    return false;
  } else {
    return true;
  }
}

const form = document.getElementById("form");

document.getElementById("submit").addEventListener("click", function () {
  checkPassword(form);
});

