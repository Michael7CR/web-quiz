const question= document.getElementById('question');
const choices= Array.from(document.getElementsByClassName('choices_Text'));

let currentquestion= {};
let acceptquestion=false;
let score=0;
let questioncounter=0;
let availablequestion=[];

let questions=[
   {
	   question:'Who among the following is considered as a father of artificial intelligence?',
	   choice1:'Charles Babbage',
	   choice2:'Lee De Forest',
	   choice3:'John McCarthy',
	   choice4:'JP Eckert',
	   answer:3,

   },  
   {
	   question:'Who programmed the first computer game Spacewar! in 1962?',
	   choice1:'Steave Russell',
	   choice2:'Konard Zuse',
       choice3:'Alan Emtage',
       choice4:'Tim Berners-Lee',
       answer:1,

   },
   {
	   question: 'Who created the C programming Language?',
	   choice1: 'Ken Thompson',
       choice2: 'Dennis Ritchie',
       choice3: 'Robin Milner',
       choice4:'Frieder Nake',
       answer:2,

   },
   {
	   question: 'Which one is the first high level programming language?',
       choice1: 'C',
       choice2: 'FORTRAN',
       choice3: 'COBOL',
       choice4: 'C++',
       answer:2,
   },
   {
	   question: 'Who developed Java Programming Language?',
       choice1:'James Gosling',
       choice2:'Douglas Engelbart',
       choice3:'Edmund M. Clarke',
       choice4:'James D. Foley',
       answer:1,
   },

];


const correct_bonus=10;
const max_questions=5;

startGame=()=>{
	questioncounter=0;
	score=0;
	availablequestion=[... questions];
	
	getnewquestion();

};
getnewquestion = () => {
	if(availablequestion.length===0 || questioncounter >= max_questions)
	{
		return window.location.assign("/end.html");
	}
	questioncounter++;
	const questionindex= Math.floor(Math.random()*availablequestion.length);
	currentquestion = availablequestion[questionindex];

	question.innerText=currentquestion.question;

	choices.forEach((choice) =>{
		const number=choice.dataset['number'];
		choice.innerText=currentquestion['choice' + number];

	});
    availablequestion.splice(questionindex,1);
    acceptinganswers=true;
};
choices.forEach((choice) =>{
	choice.addEventListener('click' ,(e)=>{
		
		if(!acceptinganswers) return;
		acceptinganswers=false;
		const selectedchoice=e.target;
		const selectedanswer= selectedchoice.dataset["number"]
		getnewquestion();
	});
});
startGame();