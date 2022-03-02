const els = { //Je liste tous les éléments que je veux utiliser et par défaut je les mets à 
    question: null,
    questionScreen: null,
    answerTitle: null,
    answerDetails: null,
    answerScreen: null,
    possibilities: null,
    answerQuestion: null,
    nextQuestionBtn: null,
};

let question = null;

const init = () => { //Cette constante me permet de prendre les id que j'ai crée dans ma page HTML
    els.question = document.querySelector('#question'); 
    els.questionScreen = document.querySelector('#question-screen');
    els.answerTitle = document.querySelector('#answer-title');
    els.answerQuestion = document.querySelector('#answer-question');
    els.answerDetails = document.querySelector('#answer-details');
    els.answerScreen = document.querySelector('#answer-screen');
    els.possibilities = document.querySelector('#possibilities');


    els.possibilities.addEventListener('click', ({ target }) => {
        giveAnswer(parseInt(target.innerHTML));
    });
};


//Cette constante montre la réponse à la question, si l'on a bon à la question on a un message "Good Job".
const giveAnswer = (userAnswer) => {
    if (userAnswer === question.answer) {
        els.answerTitle.innerHTML = 'Bien joué !';
        els.answerQuestion.innerHTML = '';
        els.answerDetails.innerHTML = '';
    } else {
        els.answerTitle.innerHTML = 'Mauvaise réponse ';
        els.answerQuestion.innerHTML = question.title;
        els.answerDetails.innerHTML = `Tu as dis ${userAnswer}. La bonne réponse était  ${question.answer}`;
    }
    els.questionScreen.style.display = 'none';
    els.answerScreen.style.display = 'block';
}

window.onload = init; // Au chargement de la page on commence la fonction


