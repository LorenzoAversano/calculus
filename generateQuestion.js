const generateQuestion = () => {
    const question = {};

    const operators = ['+', '-', 'x'];
    const sOperator = operators[getRandomInt(0, operators.length - 1)];
    const operands = [
        getRandomInt(1, 9),
        getRandomInt(1, 9)
    ];

    
    question.title = `${operands[0]} ${sOperator} ${operands[1]}`;
    const answer = getAnswer(operands, sOperator);
    question.answer = answer;
    question.possibilities = getPossibilities(answer);

    console.table(question);

    return question;
};

const generateQuestionMedium = () => {
    const question = {};

    const operators = ['+', '-', 'x'];
    const sOperator = operators[getRandomInt(0, operators.length - 1)];
    const operands = [
        getRandomInt(5, 20),
        getRandomInt(5, 20)
    ];

    
    question.title = `${operands[0]} ${sOperator} ${operands[1]}`;
    const answer = getAnswer(operands, sOperator);
    question.answer = answer;
    question.possibilities = getPossibilities(answer);

    console.table(question);

    return question;
};

const getPossibilities = (answer) => {
    const answers = [answer];
    for (let i = 0; answers.length < 4; i++) {
        const random = getRandomInt(-5, 81);
        if (answers.includes(random) === false) {
            answers.push(random);
        }
    }

    answers.sort((a, b) => {
        return a - b;
    });

    return answers;
};

const getAnswer = ([lOperator, rOperator], strOperator) => {
    let answer;
    switch (strOperator) {
        case 'x':
            answer = lOperator * rOperator;
            break;
        case '-':
            answer = lOperator - rOperator;
            break;
        case '+':
            answer = lOperator + rOperator;
    }
    return answer;
};

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