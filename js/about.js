
 // VALIDATE FORM IN ABOUT US PAGE
function validateForm() {
    if (document.getElementById("name").value == "") {
        alert("Enter Details To Submit");
        return false;
    }

    if (document.getElementById("email").value == "") {
        alert("Enter email");
        return false;
    }

    if (document.getElementById("message").value == "") {
        alert("Enter message");
        return false;
    }

    alert("Your form has been submitted🌿!!");
    return true;
}
