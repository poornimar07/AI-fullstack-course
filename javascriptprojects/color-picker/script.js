const picker = document.getElementById("colorpicker");
const hexbox = document.getElementById("hexbox");

picker.addEventListener("input", () => {
    const color = picker.value;
    hexbox.textContent = color;
    document.body.style.backgroundColor = color;
});


//RED Button

document.querySelector(".red").addEventListener("click", () => {
    document.body.style.backgroundColor = "#E63946";
    hexbox.textContent = "#E63946";
});

document.querySelector(".green").addEventListener("click", () => {
    document.body.style.backgroundColor = "#2A9D8F";
    hexbox.textContent = "#2A9D8F";
});

document.querySelector(".amber").addEventListener("click", () => {
    document.body.style.backgroundColor = "#F4A261";
    hexbox.textContent = "#F4A261";
});


   