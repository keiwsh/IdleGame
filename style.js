// Initialize game state
let health = 100;
let money = 100;
let gold = 100;
let currentWeapon = "None";

// Function to update UI
/**
 * Updates the UI with the current values of health, money, gold, and currentWeapon.
 */
function updateUI() {
  document.getElementById('healthText').textContent = health;
  document.getElementById('moneyText').textContent = money;
  document.getElementById('goldText').textContent = gold;
  document.getElementById('currentWeaponText').textContent = currentWeapon;
}

// Hide all sections
function hideAllSections() {
  document.querySelector('.storeGameContainer').style.display = 'none';
  document.querySelector('.caveGameContainer').style.display = 'none';
  document.querySelector('.homeGameContainer').style.display = 'none';
}

// Show store section
document.getElementById('button1').addEventListener('click', function() {
  hideAllSections();
  document.querySelector('.storeGameContainer').style.display = 'block';
  alert('You are now in the shop!');
});

// Show cave section
document.getElementById('button2').addEventListener('click', function() {
  hideAllSections();
  document.querySelector('.caveGameContainer').style.display = 'block';
  alert('You are now in the cave, ready to farm and loot!');
});

// Show home section for upgrades
document.getElementById('button3').addEventListener('click', function() {
  hideAllSections();
  document.querySelector('.homeGameContainer').style.display = 'block';
  alert('You are now home and able to upgrade your equipment');
});

updateUI();