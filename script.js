
let countField = document.querySelector(".count-field");
let previousEntries = document.querySelector(".previous-entries")
let btnIncrement = document.querySelector(".btn-increment");
let btnSave = document.querySelector(".btn-save");

let count = 0;

function increment() {
    count += 1;
    countField.textContent = count
}

function save() {
    let countStr = count + " - "
    previousEntries.textContent += countStr
    count = 0;
    countField.textContent = count
}

btnIncrement.addEventListener("click", increment);

btnSave.addEventListener("click", save);