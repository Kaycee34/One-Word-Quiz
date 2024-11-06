// create a variable for the questions and their answers
const questions = [
    {
        questions: 'whats the tallest moutain in the world?',
        answer: 'everest',
        score: 5
    },
    {
        questions: 'the I in IGHub stands for what?',
        answer: 'innovation',
        score: 5
    },
    {
        questions: 'what food ingredient ehances taste?',
        answer: 'salt',
        score: 5
    },
    {
        questions: 'what food ingredient ehances taste?',
        answer: 'salt',
        score: 5
    }
]

let totalscore = 0;

for (let i = 0; i < questions.length; i++) {
    const x = questions[i]
   const userInput = prompt(x.questions)

   if (userInput === x.answer){
    alert(`correct! you score is ${totalscore + x.score}`)

    totalscore = totalscore + x.score;
}else {
    alert(`nope! the correct answer is ${x.answer}. your score is ${totalscore + x.score}`)
}
}


let fruits = ["apple", "orange"]