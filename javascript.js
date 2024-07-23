function decline(){
    alert("Question Declined");
}

let questions = [
   "what is your name",
   "what is your age",
   "what is your profession",
   "who is the prime minister of india",
   "who is the president of india",
   "who is the chief minister of tamilnadu",
   "who is the chief minister of kerala",
]

function accept(){
   let question = document.querySelector("#in").value;
   question = question.toLowerCase();
   if(questions.includes(question)) window.alert("Your question accepted ");
   else window.alert("Your question is Rejected");
}