function showClue(challengeNumber) {
    const checkbox = document.getElementById(`task${challengeNumber}`);
    const clue = document.getElementById(`clue${challengeNumber}`);
    
    if (checkbox.checked) {
        clue.style.display = 'block';
    } else {
        clue.style.display = 'none';
    }
}
