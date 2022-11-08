(function() {

	const prompt = document.getElementById("prompt"),
	io = document.getElementById("io");

	let lockAnswerStep = -1,
	randomSteps = true;

	document.body.addEventListener("keydown", function(e) {
		if (e.keyCode === 13) answer(document.getElementById('prompt').value)
	});

	prompt.addEventListener("input", function(e) {
		e.target.value = formatAnswer(e.target.value);
	});

	function randomQuestion() {
		currentAngle = Math.floor( Math.random() * possibleAngles.length );
		if (lockAnswerStep === -1) currentAnswerStep = randomSteps ? Math.floor(Math.random() * 4) : 0;
		else currentAnswerStep = lockAnswerStep;
		updateIO();
	}

	function updateIO() {
		const angle = possibleAngles[currentAngle][0];
		io.textContent = `α = ${angle}\n${"rad( cos( sen( tan(".split(" ")[currentAnswerStep]}${typeof possibleAngles[currentAngle][5] != "undefined" && currentAnswerStep != 0 ? possibleAngles[currentAngle][5] : angle}) = ?`
	}

	function answer(ans) {
		ans = ans.replaceAll(/\s/g, "");
		let correctAnswer = possibleAngles[currentAngle][currentAnswerStep + 1];

		if (correctAnswer === ans) {
			if (lockAnswerStep === -1 && !randomSteps) currentAnswerStep++;
			if (lockAnswerStep != -1 || randomSteps || currentAnswerStep === 4 && !randomSteps) randomQuestion();
			updateIO();
		}
		else {
			updateIO();
			io.textContent += `\nIncorrect! It's ${correctAnswer}`;
		}
		prompt.value = "";

	}

	function formatAnswer(ans) {
		return ans.replaceAll("p", "π").replaceAll("v", "√").replaceAll(/[a-zA-Z_\s]/g, "")
	}


	const possibleAngles = [ 
		"0° 0 1 0 0",
		"30° π/6 √3/2 1/2 √3/3",
		"45° π/4 √2/2 √2/2 1",
		"60° π/3 1/2 √3/2 √3 90°-30°",
		"90° π/2 0 1 -",
	   "120° 2/3π -1/2 √3/2 -√3 90°+30°",
	   "135° 3/4π -√2/2 √2/2 -1 90°+45°",
	   "150° 5/6π -√3/2 1/2 -√3/3 180°-30°",
	   "180° π -1 0 0",
	   "270° 3/2π 0 -1 -",
	   "360° 2π 1 0 0"
	].map(v => v.split(" "));

	prompt.value = "";
	randomQuestion();

})()