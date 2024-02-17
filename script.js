// function to show cookies
      function showCookies() {
         var show = document.getElementById("show");
         show.innerHTML = document.cookie;
      }

      // function to delete cookies
      function deleteCookies() {
         var Cookies = document.cookie.split(';');
 
         // set 1 Jan, 1970 expiry for every cookies
         for (var i = 0; i < Cookies.length; i++)
         document.cookie = Cookies[i] + "=;expires=" + new Date(0).toUTCString();
         showCookies();
      }
 
      // set object in the cookies on webpage load.
      window.onload = () => {
         let object = { name: "tutorialsPoint", site: "tutorialsPoint.com", }
         document.cookie = 'object=' + JSON.stringify(object);
      }


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
addDonation('Foulen ben Foulen', 20); // Example donation
addDonation('Foulen ben Foulen', 25); // Example donation
