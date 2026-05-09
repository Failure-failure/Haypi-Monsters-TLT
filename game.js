let playerHp = 100;
let enemyHp = 100;

function attack() {
  // Player attacks
  let damage = Math.floor(Math.random() * 20) + 5;
  enemyHp -= damage;

  document.getElementById("log").innerText =
    `You dealt ${damage} damage!`;

  updateUI();

  if (enemyHp <= 0) {
    document.getElementById("log").innerText = "You win!";
    return;
  }

  // Enemy attacks back
  setTimeout(enemyAttack, 500);
}

function enemyAttack() {
  let damage = Math.floor(Math.random() * 15) + 3;
  playerHp -= damage;

  document.getElementById("log").innerText =
    `Enemy dealt ${damage} damage!`;

  updateUI();

  if (playerHp <= 0) {
    document.getElementById("log").innerText = "You lost!";
  }
}

function updateUI() {
  document.getElementById("playerHp").innerText = `HP: ${playerHp}`;
  document.getElementById("enemyHp").innerText = `HP: ${enemyHp}`;
}
