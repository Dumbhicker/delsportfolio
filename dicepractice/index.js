function submitGuess() {
    const guess = parseInt(document.getElementById("guessInput").value);
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const errorMessage = document.getElementById("errorMessage");
    const successMessage = document.getElementById("successMessage");
    const retryButton = document.getElementById("retryButton");
    const diceValues = [];
    const petalsCount = [2, 4]; // Petals count for dice 3 and 5

    // Generate dice values
    for (let i = 0; i < 6; i++) {
        let value = Math.floor(Math.random() * 6) + 1;
        diceValues.push(value);
    }

    // Calculate total petals count
    const totalPetals = diceValues.reduce((total, value) => {
        if (value === 3 || value === 5) {
            return total + petalsCount[value === 3 ? 0 : 1];
        }
        return total;
    }, 0);

    // Display result and images
    diceResult.textContent = 'Total Petals: ' + totalPetals;
    diceImages.innerHTML = diceValues.map(function(value) {
        return '<img src="dice_img/dice' + value + '.png">';
    }).join('');

    // Check if guess is correct
    const isCorrect = totalPetals === guess;

    // Display error message if guess is wrong
    if (!isCorrect) {
        errorMessage.textContent = 'Incorrect guess! Try again.';
        successMessage.textContent = ''; // Clear error message
        retryButton.style.display = 'inline'; // Show retry button
    } else {
        successMessage.textContent = 'Congratulations your guess is right!!';
        errorMessage.textContent = ''; // Clear error message
        retryButton.style.display = 'none'; // Hide retry button
    }
}

function retry() {
    document.getElementById("errorMessage").textContent = ''; // Clear error message
    document.getElementById("successMessage").textContent = ''; 
    document.getElementById("retryButton").style.display = 'none'; // Hide retry button
    document.getElementById("guessInput").value = ''; // Clear guess input field
}
