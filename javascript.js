let password = "";
let passwordArray = [];
function passwordGenerate() {
  let passLength = document.getElementById("passLength").value;
  let numbers = document.getElementById("numbers").checked;
  let letters = document.getElementById("letters").checked;
  let upperCase = document.getElementById("upperCase").checked;
  let symbols = document.getElementById("symbols").checked;
  let maxPassLength = parseInt(
    document.getElementById("passLength").getAttribute("max")
  );
  if (passLength < 1 || passLength > maxPassLength) {
    alert("Password length must be between 1 and " + maxPassLength + ".");
    return;
  }
  if (numbers) {
    passwordArray.push(..."0123456789");
  }
  if (letters) {
    passwordArray.push(
      ..."abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
    );
  }
  if (upperCase) {
    passwordArray.push(
      ..."ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"
    );
  }
  if (symbols) {
    passwordArray.push(..."@#$%^&*()-_=+[]{}\\|;:',.<>/?");
  }
  for (let i = 0; i < passLength; i++) {
    let random = Math.floor(Math.random() * passwordArray.length);
    password += passwordArray[random];
  }
  document.getElementById("showPassword").innerHTML = password;
}
