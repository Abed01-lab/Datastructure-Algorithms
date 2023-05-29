// Regular expression example
const text = "Hello, my name is John. I have 2 cats and 3 dogs.";
const pattern = /[a-zA-Z]+/g; // Matches one or more alphabetic characters

const matches = text.match(pattern);
// console.log(matches); // Output: ["Hello", "my", "name", "is", "John", "I", "have", "cats", "and", "dogs"]

// Finite state automaton example
function runAutomaton(email) {
  let currentState = "A"
  let isFaulty = false
	while(currentState !== "finished") {
		switch (currentState) {
			case "A":
				if (/@/.test(email)) currentState = "B"
				else isFaulty = true
				break;
			case "B":
				if (/\./.test(email)) currentState = "C"
				else isFaulty = true
				break;
			case "C":
				if (/\.[a-zA-Z]{3}$/.test(email)) currentState = "finished"
				else isFaulty = true
				break;
			default:
				break;
		}

		if(isFaulty) break;
		if(currentState === "finished") break;
	}

	if (currentState === "finished") return true
	else return false
}

console.log(runAutomaton("abedharirii@gmail.com")); // Output: true
console.log(runAutomaton("abedha55ririi@gmail.coms")); // Output: false
