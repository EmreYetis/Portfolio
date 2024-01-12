const currentYear = new Date().getFullYear();
const copyright = document.querySelector("#copyright");
const oldText = copyright.textContent;
const newText = oldText.replace(/2022/, currentYear);
copyright.textContent = newText;

document.getElementById("currentYear").innerText = currentYear;
