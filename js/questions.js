difficulty = document.getElementById('#difficulties');
//Je crée une constante pour généer une question
const generateQuestion = () => {
    const question = {};


    if (difficulty === "1") {
        var operators = ["+", "-"]; //Je prends différents opérateurs, ici addition, soustraction et multiplication.
    } 
    else if (difficulty === "2") {
        var operators = ["+", "-"];
    }
    else {
        var operators = ["+", "-","x" ];
    }

    var sOperator = operators[getRandomInt(0, operators.length - 1)]; //Je récupère au hasard un des opéarteurs
    var operands = [ //On cherche la fonction getRandomInt qui me prends un chiffre au hasard entre 1 et 9
        getRandomInt(1, 9),
        getRandomInt(1, 9)
    ];

    //Je crée maintenant ma question qui va être afficher
    
    question.title = `${operands[0]} ${sOperator} ${operands[1]}`;  // On prends l'opperand 0 soit le chiffre de gauche et on met un opérateur et enfin on prend l'opérand 1e soit le chiffre à gauche 
    var answer = getAnswer(operands, sOperator); // On affiche la réponse 
    question.answer = answer; 
    question.possibilities = getPossibilities(answer); // On prend différentes possibilité avec la réponse 

    console.table(question);

    return question;
};



//Cette constante a pour but d'afficher plusieurs possibilités
var getPossibilities = (answer) => {
    var answers = [answer];
    for (let i = 0; answers.length < 4; i++) { //On ne veut que 4 possibilités 
        const random = getRandomInt(-8, 81); // Ici on ne veut que des possibilités entre -8 et 81 car avec des chiffres entre 1 et 9 on ne peut pas arriver en dessous de -8 et 81 peu importe le type d'opérateur 
        if (answers.includes(random) === false) {  
            answers.push(random);
        }
    }

    answers.sort((a, b) => {
        return a - b;
    });

    return answers;
};



// Cette constante va nous permettre d'avoir la bonne réponse de chaque question avec les différents opérateurs possible.
const getAnswer = ([lOperator, rOperator], strOperator) => { 
    let answer;
    switch (strOperator) {
        case 'x':
            answer = lOperator * rOperator; // Ici on a dans le  cas ou c'est une multiplication
            break;
        case '-':
            answer = lOperator - rOperator; // Ici on a dans le  cas ou c'est une addition
            break;
        case '+':
            answer = lOperator + rOperator; // Ici on a dans le  cas ou c'est une soustraction
    }
    return answer;
};


// Je crée cette constante pour avoir des chiffres aléatoires
const getRandomInt = (min, max) => { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





// const getDifficulties = (answer) => {
//     const answers = [answer];
//     for (let i = 0; answers.length < 4; i++) {
//         const random = getRandomInt(-5, 81);
//         if (answers.includes(random) === false) {
//             answers.push(random);
//         }
//     }

//     answers.sort((a, b) => {
//         return a - b;
//     });

//     return answers;
// };

// const generateQuestionMedium = () => {
//     const question = {};

//     const operators = ['+', '-', 'x'];
//     const sOperator = operators[getRandomInt(0, operators.length - 1)];
//     const operands = [
//         getRandomInt(5, 20),
//         getRandomInt(5, 20)
//     ];

    
//     question.title = `${operands[0]} ${sOperator} ${operands[1]}`;
//     const answer = getAnswer(operands, sOperator);
//     question.answer = answer;
//     question.possibilities = getPossibilities(answer);

//     console.table(question);

//     return question;
// };