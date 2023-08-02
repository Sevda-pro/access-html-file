window.addEventListener("DOMContentLoaded", (e) => {
    let title = document.getElementById("desc");
    let submit = document.getElementById("submit");
    let newtext = document.getElementById("newtext");
    let currentValue = ""; // Store the current value

    submit.addEventListener("click", (e) => {
        e.preventDefault();

        let tvalue = title.value;
        currentValue = tvalue; // Update the current value with the new input
        newtext.innerHTML = `<p>${currentValue}</p>`;
    });
});