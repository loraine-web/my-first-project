// Search button
function searchDestination() {
    const input = document.querySelector(".search input");

    if (input.value.trim() === "") {
        alert("Please enter a destination.");
    } else {
        alert("Searching for: " + input.value);
    }
}

// Card buttons
const cardButtons = document.querySelectorAll(".card button");

cardButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const card = button.parentElement;
        const destination = card.querySelector("h2").textContent;

        alert("You selected: " + destination);
    });
});

// Holiday package button
const offerButton = document.querySelector(".offer button");

offerButton.addEventListener("click", function() {
    alert("Welcome! Let's explore our holiday packages.");
});