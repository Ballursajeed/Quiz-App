//JavaScript
const questions=[
 {
 	question: "Who is the father of C programming?",
 	answers:[
     {text: "James clark",correct:false},
     {text: "Dennis Ritchie",correct:true},
     {text: "Anal Turing",correct:false},
     {text: "Ryan Dahl",correct:false},
 	]
},
 {
 	question: "Which Programming Language is used to built Facebook ?",
 	answers:[
     {text: "Java",correct:false},
    {text: "Python",correct:false},
      {text: "PHP",correct:true},
     {text: "C++",correct:false},
 	]
},
 {
 	question: "Who is the founder of GOOGLE?",
 	answers:[
     {text: "Sundar Pichai",correct:false},
     {text: "james clark",correct:false},
     {text: "Larry Page",correct:true},
     {text: "Mark Zuckerberg",correct:false},
 	]
},
{
 	question: "Who is the father of AI(Artificial Intelligence)?",
 	answers:[
     {text: "Jhon McCarthy",correct:true},
     {text: "Geoffrey Hinton",correct:false},
     {text: "Ryan Dahl",correct:false},
     {text: "Yann LeCun",correct:false},
 	]
},
{
 	question: "Who invented Python Programming Language?",
 	answers:[
     {text: "Brendan Eich",correct:false},
     {text: "Anal Turing",correct:false},
     {text: "Charles Babbage",correct:false},
     {text: "Guide van Rossum",correct:true},
 	]
},
{
 	question: "Who is the founder of Microsoft?",
 	answers:[
     {text: "Brendan Eich",correct:false},
     {text: "Bill Gates",correct:true},
     {text: "Mark Zuckerberg",correct:false},
     {text: "Elon Musk",correct:false},
 	]
}
];
 const questionElement=document.getElementById("question");
 const answerButtons =document.getElementById("answer-button");
 const nextButton=document.getElementById("next-btn");
 const name=document.getElementById("name").value;


 let currentQuestionIndex=0;
 let score=0;
 
 function startQuiz() {
 	  const name = document.getElementById("name").value;
  if (!name) {
    alert("Please enter your name.");
    return;
  }
   currentQuestionIndex=0;
   score=0;
   nextButton.innerHTML="Next";
   showQuestion(); 
 
 }
 function showQuestion() {
 	answerButtons.style.display="block";
 	 const name = document.getElementById("Name");
 	name.style.display="none";
 	resetState();
   let currentQuestion= questions[currentQuestionIndex];
   let questionNo = currentQuestionIndex+1;
   questionElement.innerHTML=questionNo+"."+currentQuestion.question;
   currentQuestion.answers.forEach(answer=>{
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
         button.dataset.correct=answer.correct;    
    }   
    button.addEventListener("click",selectAnswer);
   })
 }
 
 function resetState(){
  nextButton.style.display="none";
  while (answerButtons.firstChild){
  answerButtons.removeChild(answerButtons.firstChild);  
  } 
 }

function selectAnswer(e) {
  const selectedBtn=e.target;
  const isCorrect =selectedBtn.dataset.correct==="true";
  if (isCorrect) {
   selectedBtn.classList.add("correct");
   score++;
    }
    else {
  selectedBtn.classList.add("incorrect");       
    }
    Array.from(answerButtons.children).forEach(button =>{
if (button.dataset.correct==="true") {
	button.classList.add("correct");
}    
button.disabled=true;
    });
    nextButton.style.display="block";
} 
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
  	showQuestion();
}
else {
 showScore();
}
}

function showScore() {
  resetState();
   const name = document.getElementById("name").value;
   questionElement.innerHTML=` ${name} you scored ${score} out of ${questions.length}!`;
   console.log(name);
  nextButton.innerHTML="Play Again";
  nextButton.style.display="block";

}
 nextButton.addEventListener("click",()=>{
   if (currentQuestionIndex < questions.length) {
   	handleNextButton();
   }
   else {
 startQuiz();
   } 
 })


function handleEnter(event) {
  if (event.key === "Enter") {
    startQuiz();
  }
}
document.getElementById("submit").addEventListener("click",()=>{
   startQuiz();
})

