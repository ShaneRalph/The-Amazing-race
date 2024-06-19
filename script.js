document.addEventListener("DOMContentLoaded", function() {
    // Initially hide all challenges except the first one
    for (let i = 2; i <= 5; i++) {
        document.getElementById(`challenge${i}`).style.display = 'none';
    }

    // Function to show the next challenge when the current one is completed
    function showNextChallenge(challengeNumber) {
        const checkbox = document.getElementById(`task${challengeNumber}`);
        const clue = document.getElementById(`clue${challengeNumber}`);
        const nextChallenge = document.getElementById(`challenge${challengeNumber + 1}`);
        
        if (checkbox.checked) {
            clue.style.display = 'block';
            if (nextChallenge) {
                nextChallenge.style.display = 'block';
            }
        } else {
            clue.style.display = 'none';
            if (nextChallenge) {
                nextChallenge.style.display = 'none';
                // Uncheck and hide all subsequent challenges
                for (let i = challengeNumber + 1; i <= 5; i++) {
                    document.getElementById(`task${i}`).checked = false;
                    document.getElementById(`clue${i}`).style.display = 'none';
                    document.getElementById(`challenge${i}`).style.display = 'none';
                }
            }
        }
    }

    // Attach the showNextChallenge function to each checkbox
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`task${i}`).addEventListener('change', function() {
            showNextChallenge(i);
        });
    }
});
