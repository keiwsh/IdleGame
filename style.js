// Initialize game state
let health = 100;
let money = 100;
let gold = 100;
let currentWeapon = "None";

// Function to update UI
function updateUI() {
  document.getElementById('healthText').textContent = health;
  document.getElementById('moneyText').textContent = money;
  document.getElementById('goldText').textContent = gold;
  document.getElementById('currentWeaponText').textContent = currentWeapon;
}



document.getElementById('button1').addEventListener('click', function() {
    // Reset the UI to its default state
    document.querySelector('.caveGameContainer').style.display = 'none'; // Hide the cave game container
    document.querySelector('.storeGameContainer').style.display = 'block'; // Show the store game container
    //document.querySelector('.storeGameContainer').style.backgroundColor = '#000'; // Optional: Reset any styles if needed
    document.querySelector('.storeGameContainer').style.color = '#fff'; // Optional: Reset any styles if needed

    // Reset the border style of the "Go to cave" button if needed
    document.getElementById('button2').style.border = 'none';

    // Update the src and visibility of the shop image
    const shopImage = document.querySelector('.shopImage'); // Ensure you have a reference to the correct image
    shopImage.src = 'Images/Shop.png';
    shopImage.style.display = 'block'; // Make the image visible
    shopImage.style.margin = '0 auto'; // Center the image
    shopImage.style.maxWidth = '100%'; // Ensure the image is responsive and fits the container

    alert('You are now in the shop!');
});



document.getElementById('button2').addEventListener('click', function() {
    // Reset the UI to its default state
    document.querySelector('.storeGameContainer').style.display = 'none'; // Hide the store game container
    document.querySelector('.caveGameContainer').style.display = 'block'; // Show the cave game container
    //document.querySelector('.caveGameContainer').style.backgroundColor = '#000'; // Optional: Reset any styles if needed
    document.querySelector('.caveGameContainer').style.color = '#fff'; // Optional: Reset any styles if needed

    // Reset the border style of the "Go to store" button if needed
    document.getElementById('button1').style.border = 'none';

    // Update the src and visibility of the cave image
    const caveImage = document.querySelector('.caveImage'); // Ensure you have a reference to the correct image
    caveImage.src = 'Images/Cave.png';
    caveImage.style.display = 'block'; // Make the image visible
    caveImage.style.margin = '0 auto'; // Center the image
    caveImage.style.maxWidth = '100%'; // Ensure the image is responsive and fits the container

    alert('You are now in the cave, ready to farm and loot!');
});

document.getElementById('button3').addEventListener('click', function() {
    document.querySelector('.caveGameContainer').style.display = 'none'; // Hide the cave game container
    document.querySelector('.homeGameContainer').style.display = 'block'; // Show the store game container
    document.querySelector('.homeGameContainer').style.color = '#fff'; // Optional: Reset any styles if needed

    document.getElementById('button2').style.border = 'none';

    const shopImage = document.querySelector('.homeImage'); 
    shopImage.src = 'Images/Home.png';
    shopImage.style.display = 'block'; // Make the image visible
    shopImage.style.margin = '0 auto'; // Center the image
    shopImage.style.maxWidth = '100%'; // Ensure the image is responsive and fits the container

    alert('You are now home and able to upgrade your equipment');
});

   updateUI();