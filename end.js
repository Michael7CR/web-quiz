const username=document.getElementById('username');
const savescoreBtn=document.getElementById("savescoreBtn");
const finalScore=document.getElementById("finalScore");
const mostRecentScore=localStorage.getItem("mostRecentScore");
const highscores=JSON.parse(localStorage.getItem("highscores")) ||[];



const MAX_HIGH_SCORES=3;
console.log(highscores)

finalScore.innerText = "You Scored " +mostRecentScore;


username.addEventListener("keyup",() =>{
	
	savescoreBtn.disabled =!username.value;
});

savehighscore = e=>{
	console.log("clicked the save button!");
	e.preventDefault();
	const score ={
		score:(mostRecentScore),
		name:username.value

	};
	highscores.push(score);
	highscores.sort( (a,b) => b.score - a.score)
	highscores.splice(5)

	localStorage.setItem("highscores",JSON.stringify(highscores));
	window.location.assign("quiz app home page.html");
	console.log(highscores);
};


