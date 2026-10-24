// Show the "other" field if other is selected
const meetSelect = document.getElementById("meet-question");
meetSelect.addEventListener("change", (e) => {
  if (e.target.value == "other") {
    document.getElementById("other").style.display = "block";
  } else {
    document.getElementById("other").style.display = "none";
  }
});

// Show the email format buttons if add to mailing list is selected
const emailCheckbox = document.getElementById("mailing-list");
emailCheckbox.addEventListener("change", (e) => {
  if (e.target.checked == true) {
    document.getElementById("email-format").style.display = "block";
  } else {
    document.getElementById("email-format").style.display = "none";
  }
});

document.getElementById("main-form").onsubmit = () => {
  // Reset Validaton
  let isValid = true;

  // Initalize variables
  let fname = document.getElementById("fname").value.trim();
  let lname = document.getElementById("lname").value.trim();
  let email = document.getElementById("email").value.trim();
  let checkboxSelected = document.getElementById("mailing-list").checked;
  let linkedinURL = document.getElementById("linkedin-url").value.trim();
  let meetQuestion = document.getElementById("meet-question").value;

  // Clear errors
  clearErrors();

  // Validate First Name
  if (fname == "") {
    document.getElementById("err-fname").style.display = "block";
    isValid = false;
  }

  // Validate Last Name
  if (lname == "") {
    document.getElementById("err-lname").style.display = "block";
    isValid = false;
  }

  // Validate Email
  if (checkboxSelected || email != "") {
    if (email == "") {
      document.getElementById("err-email").style.display = "block";
      document.getElementById("err-email").textContent =
        "Please enter an email address.";
      isValid = false;
    } else if (!validateEmail(email)) {
      document.getElementById("err-email").style.display = "block";
      document.getElementById("err-email").textContent =
        "Please enter a valid email address.";
    }
  }

  // Validate Linkedin URL
  if (linkedinURL != "") {
    if (!linkedinURL.toLowerCase().startsWith("https://linkedin.com/in/")) {
      document.getElementById("err-linkedin").style.display = "block";
      isValid = false;
    }
  }

  // Validate Meeting Question
  if (meetQuestion == "none") {
    document.getElementById("err-meet").style.display = "block";
    isValid = false;
  }

  return isValid;
};

function clearErrors() {
  let errors = document.getElementsByClassName("err");
  for (let i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }
}

function validateEmail(email) {
  // Define the regular expression pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}
