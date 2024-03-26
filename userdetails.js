function validateForm() {
    var name = document.getElementById("name").value;
    var matricno = document.getElementById("matricno").value;
    var newaddress = document.getElementById("newaddress").value;
    var homeaddress = document.getElementById("homeaddress").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var homephone = document.getElementById("homephone").value;

    var namePattern = /^[A-Za-z\s]+$/;
    var matricnoPattern = /^[0-9]+$/;
    var addressPattern = /^[A-Za-z\s]+$/;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    var phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    if (!namePattern.test(name)) {
        alert("Please enter a valid name.");
        return false;
    }

    if (!matricnoPattern.test(matricno)) {
        alert("Please enter a valid matric number.");
        return false;
    }

    if (!addressPattern.test(newaddress)) {
        alert("Please enter a valid current address.");
        return false;
    }

    if (homeaddress !== "" && !addressPattern.test(homeaddress)) {
        alert("Please enter a valid home address.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid Gmail address.");
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid mobile phone number (format: XXX-XXX-XXXX).");
        return false;
    }

    if (!phonePattern.test(homephone)) {
        alert("Please enter a valid home phone number (format: XXX-XXX-XXXX).");
        return false;
    }

    return true;
}
