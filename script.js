fetch('https://example.com/data', {
    headers: {
        'Cache-Control': 'no-cache'
    }
})
.then(response => response.json())
.then(data => {
    // Handle the data returned from the server
})
.catch(error => {
    // Handle any errors that occur during the fetch
});

﻿// Define variables to hold the donation count and total amount
let donationCount = 0; // Example initial count
let totalAmount = 0; // Example initial total amount

// Function to update the donation count and total amount
function updateDonationStats() {
    document.getElementById('donor-count').textContent = donationCount;
    document.getElementById('total-amount').textContent = totalAmount;

}

// Function to add a new donation
function addDonation(name, amount) {
    // Increment donation count
    donationCount++;
    // Add amount to total
    totalAmount += amount;
    // Update UI
    updateDonationStats();
    // Add new donor to the list
    const donorList = document.getElementById('donor-list');
    const newDonation = document.createElement('li');
    newDonation.textContent = `${name} - ${amount} Dinars`;
    donorList.appendChild(newDonation);
}

// Update the UI with initial values
updateDonationStats();

// Example usage:
// Add a new donation
addDonation('Foulen ben Foulen', 100); // Example donation
addDonation('Foulen ben Foulen', 200); // Example donation
addDonation('Foulen ben Foulen', 207); // Example donation
