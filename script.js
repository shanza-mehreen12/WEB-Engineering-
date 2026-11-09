
// Select all cafe menu cards
let cards = document.querySelectorAll(".card");

// Add a button to every menu card
cards.forEach(function(card) {

    let button = document.createElement("button");

    button.innerText = "Add to Cart";

    button.onclick = function() {
        alert("Item added to your cart!");
    };

    card.appendChild(button);

});

