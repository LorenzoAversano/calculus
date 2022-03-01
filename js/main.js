const els = { //Je liste tous les éléments que je veux utiliser et par défaut je les mets à 
    question: null,
    questionCount: null,
    questionScreen: null,
    answerTitle: null,
    answerDetails: null,
    answerScreen: null,
    possibilities: null,
    answerQuestion: null,
    nextQuestionBtn: null,
};
let question = null;
let questionNumber = 1; 
let questionNumberTotal = 5; // On souhaite avoir 5 questions 
let score = 0;

const init = () => { //Cette constante me permet de prendre les id que j'ai crée dans ma page HTML
    els.question = document.querySelector('#question'); 
    els.questionCount = document.querySelector('#question-count');
    els.questionScreen = document.querySelector('#question-screen');
    els.answerTitle = document.querySelector('#answer-title');
    els.answerQuestion = document.querySelector('#answer-question');
    els.answerDetails = document.querySelector('#answer-details');
    els.answerQuestion = document.querySelector('#answer-question');
    els.answerScreen = document.querySelector('#answer-screen');
    els.possibilities = document.querySelector('#possibilities');
    els.nextQuestionBtn = document.querySelector('#next');


    showNewQuestion();
    

    els.possibilities.addEventListener('click', ({ target }) => {
        giveAnswer(parseInt(target.innerHTML));
    });

    els.nextQuestionBtn.addEventListener('click', () => {  
        questionNumber++;
        if (questionNumber <= questionNumberTotal) {
            showNewQuestion();
            els.questionScreen.style.display = 'block';
            els.answerScreen.style.display = 'none';
        } else {
            els.questionScreen.style.display = 'none';
            els.answerScreen.style.display = 'block';
            els.nextQuestionBtn.style.display = 'none';

            els.answerTitle.innerHTML = 'Fécilitations !';
            els.answerQuestion.innerHTML = `Ton score est de : ${score} / ${questionNumberTotal}`;
            els.answerDetails.innerHTML = '';
            
        }
    });
};

const showNewQuestion = () => {
    question = generateQuestion();
    els.question.innerHTML = question.title;
    els.possibilities.innerHTML = question.possibilities.map((possibility) => {
        return `<li>${possibility}</li>`;
    }).join('');
};


//Cette constante montre la réponse à la question, si l'on a bon à la question on a un message "Good Job".
const giveAnswer = (userAnswer) => {
    if (userAnswer === question.answer) {
        els.answerTitle.innerHTML = 'Bien joué !';
        els.answerQuestion.innerHTML = '';
        els.answerDetails.innerHTML = '';
        score++;
    } else {
        els.answerTitle.innerHTML = 'Mauvaise réponse ';
        els.answerQuestion.innerHTML = question.title;
        els.answerDetails.innerHTML = `Tu as dis ${userAnswer}. La bonne réponse était  ${question.answer}`;
    }
    els.questionScreen.style.display = 'none';
    els.answerScreen.style.display = 'block';
}

window.onload = init; // Au chargement de la page on commence la fonction



function myFunction() {
	document.getElementById("question-screen").style.display = "block";
    document.getElementById("start").style.display = "none";
}