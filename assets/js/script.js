const passwordA = document.querySelector("#password-a");
const passwordB = document.querySelector("#password-b");
const btn = document.querySelector("#show-hide-pw");
const eventInputs = document.querySelector("#inputs");

btn.addEventListener("click", () => {
    if (passwordA.type === "password") {
        passwordA.type = "text";
        passwordB.type = "text";
        btn.innerText = "Hide Password";
    } else {
        passwordA.type = "password";
        passwordB.type = "password";
        btn.innerText = "Show Password";
    }
});

eventInputs.addEventListener("input", checkPasswords);

function checkPasswords() {
    if (checkEqual()) {
        checkCharacter("a-z", "lower");
        checkCharacter("A-Z", "upper");
        checkCharacter("0-9", "numbs");
        checkLength();
    } else {
        const checks = document.querySelectorAll(".check");

        checks.forEach((check) => (check.innerText = "❌"));
    }
}

function checkEqual() {
    const pwEqual = document.querySelector("#equal");

    if (passwordA.value === passwordB.value && passwordA.value.length > 0) {
        pwEqual.innerText = "✅";
        return true;
    } else {
        return false;
    }
}

function checkCharacter(regex, area) {
    const characters = new RegExp(`[${regex}]`);
    const check = document.querySelector(`#${area}`);

    if (characters.test(passwordA.value)) {
        check.innerText = "✅";
    }
}

function checkLength() {
    const pwLength = document.querySelector("#pw-length");

    if (passwordA.value.length > 9) {
        pwLength.innerText = "✅";
    }
}

//✅
//❌
