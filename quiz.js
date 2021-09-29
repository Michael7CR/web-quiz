const startbutton=document.getElementById('start-btn')
const nextbutton=document.getElementById('next-btn')

const questioncontainerElement = document.getElementById ('question-container') 
const questionElement =document.getElementById('question')
const answerButonElement = document.getElementById('answer-buttons')
let shuffleQuestions,currentquestionindex
let quizScore=0;

startbutton.addEventListener.('click',startGame)
nextbutton.addEventListener('click',() =>{
	currentquestionindex++
	setnextquestion()
}

function startGame(){
	startbutton.classList.add('hide')
	shuffleQuestions=question.sort(()=>Math.random())
	currentquestionindex=0;
	questioncontainerElement.classList.remove('hide')
	setnextquestion()
	quizScore=0

}

function setnextquestion(){
	resetstate();
	showQuestion(shuffleQuestions[currentquestionindex])
}

function showQuestion(question){
	questionElement.innerText=question.question;
	question.answers.forEach((answers)=>{
		const button=document.createElement('button')
		button.innerText=answer.text;
		button.classList.add('btn')
		if(answer.correct){
			button.dataset.correct=answer.correct
		}
		button.addEventListener('click',selectanswer)
		answerButonElement.appendChild(button)
	})
}

function resetstate(){
	clearstatusclass(document.body)
	nextbutton.classList.add('hide')
	while(answerButonElement.firstchild){
		answerButonElement.removechild(answerButonElement.firstchild)
	}

}


function selectanswer(e){
	const selectedButton = e.target
	const correct= selectedButton.dataset.correct

	setstatusclass(document.body,correct)
	array.from(answerButonElement.children.forEach((button)=>{
		setstatusclass(button,button.dataset.correct)
	})
	if(shuffleQuestions.length > currentquestionindex+1){
		nextbutton.classList.remove("hide")
		}else{
			startbutton.innerText ="restart"
			startbutton.classList.remove("hide")

		}if(selectedButton.dataset=correct){
			quizScore++

		}
		document.getElementById('right-answers').innerText=quizScore

}




function setstatusclass(element,correct){
	clearstatusclass(element)

	if(correct){
		element.classList.add("correct")

	}else{
		element.classList.add("wrong")
	}
}




function clearstatusclass(element){
	element.classList.remove('correct')
	element.classList.remove('wrong')
}





const questions=[
{
	question: 'who is the father of our Nation?'
	answers:[
	{text:'gandhi',correct:true}
	{text:'nehru',correct:false}
	{text:'bharathiyar',correct:false}
	{text:'subash chandra bose',correct:false}
],

} ,
{

question: 'who was the first president of india?'
	answers:[
	{text:'gandhi',correct:false}
	{text:'Dr.Rajendra Prasad',correct:true}
	{text: 'rajiv gandhi',correct:false}
	{text:'subash chandra bose',correct:false}
	],
},
{

question:'which is the sensitive part in our body?'
	answers:[
	{text:'lungs',correct:false}
	{text: 'skin',correct:true}
	{text: 'hear',correct:false}
	{text:'nose',correct:false}
],
},
{

question:'who invented computer?'
	answers:[
	{text:'charles babbage',correct:true}
	{text: 'Newton',correct:false}
	{text: 'Bill gates',correct:false}
	{text:'Nikolas Tesla',correct:false}
],
},
{

question:'Baby of Horse is called?'
	answers:[
	{text:'kitten',correct:false}
	{text: 'puppy',correct:false}
	{text:'colt',correct:true}
	{text: 'cub',correct:false}
],
},





]