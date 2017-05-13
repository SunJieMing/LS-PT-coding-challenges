const rockPaperScissors = () => {
	const choices = ['rock', 'paper', 'scissors'];
	const possibilities = [];

	const findPossibilities = (potentialRound, roundNumber) => {
		for (let i = 0; i < choices.length; i++) {
			potentialRound.push(choices[i]);
			if (roundNumber === 3) {
				possibilities.push(potentialRound.slice());
			} else {
				findPossibilities(potentialRound, roundNumber + 1);
			}
			potentialRound.pop();
		}
	};

	findPossibilities([], 1);

	return possibilities;
};
