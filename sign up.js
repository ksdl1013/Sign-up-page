function showPassword() {
    let psw = document.getElementById("password");
    if (psw.type === "password") {
        psw.type = "text";
    }
    else if (psw.type === "text") {
        psw.type = "password";
    }
}

function checkPassword() {
    let password = document.getElementById("password");
    let re_password = document.getElementById("re_password");
    const validity_str = "The two passwords entered are not matching!";

    if (password.value != re_password.value) {
        re_password.setCustomValidity(validity_str);
    }
    else {
        re_password.setCustomValidity('');
    }
}

password.onchange = checkPassword;
re_password.onkeyup = checkPassword;