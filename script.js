document.getElementById("jobForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();
  let error = document.getElementById("error-msg");

  if (!name || !email || !phone || !message) {
    error.textContent = "All fields are required!";
    return;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    error.textContent = "Please enter a valid email!";
    return;
  }

  error.textContent = "Form submitted successfully!";
});
