
const options = document.querySelectorAll(".option");
const totalDisplay = document.getElementById("total");

options.forEach((option) => {
    option.addEventListener("click", () => {
        options.forEach((o) => o.classList.remove("selected"));
        option.classList.add("selected");
        const radioButton = option.querySelector('input[type="radio"]');
        if (radioButton) {
            radioButton.checked = true;
        }
        const price = option.getAttribute("data-price");
        totalDisplay.textContent = price;
    });
});
