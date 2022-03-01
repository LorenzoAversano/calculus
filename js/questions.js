easy = document.getElementById('#easy');
medium = document.getElementById('#medium');
//Je crée une constante pour généer une question
const generateQuestion = () => {
    const question = {};


    if (easy === "1") {
        var operators = ["+", "-"]; //Je prends différents opérateurs, ici addition, soustraction et multiplication.
        var operands = [ //On cherche la fonction getRandomInt qui me prends un chiffre au hasard entre 1 et 9
            getRandomInt(1, 9),
            getRandomInt(1, 9)
        ];
    } 
    else if (medium=== "2") {
        var operators = ["+", "-"];
        var operands = [ //On cherche la fonction getRandomInt qui me prends un chiffre au hasard entre 1 et 9
            getRandomInt(50, 59),
            getRandomInt(51, 99)
        ];
    }
    else {
        var operators = ["+", "-", "x" ];
        var operands = [ //On cherche la fonction getRandomInt qui me prends un chiffre au hasard entre 1 et 9
            getRandomInt(1, 30),
            getRandomInt(1, 30)
        ];
    }

    var sOperator = operators[getRandomInt(0, operators.length - 1)]; //Je récupère au hasard un des opéarteurs

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
        const random = getRandomInt(-500, 500);
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





