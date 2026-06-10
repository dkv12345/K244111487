function validateRegistration() {
    var user = document.getElementById("txtUser").value;
    var pass = document.getElementById("txtPass").value;
    var repass = document.getElementById("txtRePass").value;

    if (user == "" || pass == "") {
        document.getElementById("message").innerHTML = "All fields are required!";
    } 
    else if (pass != repass) {
        document.getElementById("message").innerHTML = "Passwords do not match!";
    } 
    else {
        document.getElementById("message").innerHTML = "Congratulations " + user + ", registration successful!";
        document.getElementById("message").style.color = "green";
    }
}