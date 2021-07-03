
/*                          MENU-PHONE          */
{
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.hamburguer-menu').onclick = () => {
            $('.toggle').toggleClass('open');
            $('.nav-list').toggleClass('open');
        }
    })
}


/*							 QUIZZ					*/
{

	const questionsQuizz = [
	    ["Which is the Strain used for Tartelette de Limão?", "Super Lemon Haze"],
		["Which is the Strain used for -The Cake- ?", "White Widow"],
		["There are already countries where Edibles are legal?		True/False", "True"],
		["After someone eats a marijuana edible, he or she will feel “high”" +
		" immediately? True/False", "False"],
		["Can people get addicted to marijuana? True/False", "True"],
		["If marijuana is legal in your state, it is also legal for teens to consume marijuana" +
		" edibles? True/False", "False"],
		["All marijuana edibles have the same amount of THC? True/False", "False"],
		["Which was the first country who legalized marijuana", "Uruguay"],
		["Which is the Strain used for Caramel Cupcake?", "Amnesia Haze"],
		["Which is the Strain used for Chocolate Fondant?", "Super Skunk"]
    ];
	var questionNr = 1;
	var score = 0;

	function clickButton() {
		check();
		questionsQuizz.shift();
		questionNr++;
		setup();
	}

	function setup() {
		if (questionsQuizz.length !== 0) {
			document.getElementById("question-nr").innerHTML = "Question " + questionNr;
			document.getElementById('question').innerHTML = questionsQuizz[0][0];

		} else {
			document.getElementById("question-nr").innerHTML = "It's done Bro!🥂";
			document.getElementById("question").innerHTML = "Your score is: " + score + "/100";
			document.getElementById("text-field-quizz").remove();
			document.getElementById("button-quizz").remove();
			document.getElementById("points").remove();
		}

	}

	function check() {
		if (document.getElementById("text-field-quizz").value.toUpperCase().trim() ===
																	questionsQuizz[0][1].toUpperCase().trim()) {
			score += 10;
		}
		document.getElementById("text-field-quizz").value = "";
	}

	/* 		END QUIZZ*/
}