
//A simple method using an Event listener to trigger bootstrap style to hide form and display thankyou message on form submission. 
document.addEventListener("DOMContentLoaded", function () {
    //Grab the necessary elements
    const form = document.getElementById("contact-form");
    const contactContainer = document.getElementById("contact-container");
    const thankYouCard = document.getElementById("thank-you-card");
    // Block the default form submission behavior (reload the or nagivate away)
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Hide the contact container and show the thank you card
        contactContainer.style.display = "none";
        thankYouCard.style.display = "block";
    });
});
