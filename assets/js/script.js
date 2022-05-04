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
    passwordA.type = "password";
    btn.innerText = "Show Password";
  }
});

eventInputs.addEventListener("input", () => {
  const pwEqual = document.querySelector("#equal");
  const lower = document.querySelector("#lower");
  const upper = document.querySelector("#upper");
  const numbs = document.querySelector("#numbs");
  const pwLength = document.querySelector("#pw-length");
  const testLower = /[a-z]/;
  const testUpper = /[A-Z]/;
  const testNumber = /\d/;
  if (passwordA.value === passwordB.value) {
    pwEqual.innerText = "✅";
    if (testLower.test(passwordA.value)) {
      lower.innerText = "✅";
    }
    if (testUpper.test(passwordA.value)) {
      upper.innerText = "✅";
    }
    if (testNumber.test(passwordA.value)) {
      numbs.innerText = "✅";
    }
    if (passwordA.value.length > 9) {
      pwLength.innerText = "✅";
    }
  } else {
    pwEqual.innerText = "❌";
    lower.innerText = "❌";
    upper.innerText = "❌";
    numbs.innerText = "❌";
    pwLength.innerText = "❌";
  }
});

//✅
//❌
