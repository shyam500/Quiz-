const questions = [
    {
        q: 'How many colors are in a rainbow?',
        a: 8,
        b: 7,
        c: 5,
        correct: 'b'
    },
    {
        q: 'Which animal is known as the ship of the desert?',
        a: 'camel',
        b: 'cat',
        c: 'elephant',
        correct: 'a',
    },
    {
        q: 'In which direction does the sun rise ?',
        a: 'west',
        b: 'north',
        c: 'east',
        correct: 'c'
    },
    {
        q: 'which month of year have the least number of days ?',
        a: 'february',
        b: 'december',
        c: 'july',
        correct: 'a',
    },
    {
        q: 'What type os gas does plants absorb ?',
        a: 'carbon dioxide',
        b: 'oxygen',
        c: 'nitrogen',
        correct: 'a',
    }
];

const aLabel = document.querySelector('#al');
const bLabel = document.querySelector('#bl');
const cLabel = document.querySelector('#cl');

const quest = document.querySelector('#quest');

const inp_parent = document.querySelector('#inps');

let current_quest = 0;
let points = 0;

inp_parent.addEventListener('click', e => {
    if (e.target.type === 'radio') {
        quizFunc(e.target.id)
    };
});

// setting questions and answers
uiFunc(quest, questions[current_quest].q);
uiFunc(aLabel, questions[current_quest].a);
uiFunc(bLabel, questions[current_quest].b);
uiFunc(cLabel, questions[current_quest].c);

// decides what to do when a btn is pressed
function quizFunc(val) {
    if (current_quest + 1 === questions.length) {
        alert(`Quiz finished,You have earned ${points} points`);
        window.location.reload();
    } else {
        if (val === questions[current_quest].correct) {
            console.log(current_quest);
            points += 1;
        }
        current_quest += 1;
        changeQuestionsFunc();
    };
};


function changeQuestionsFunc() {
    uiFunc(quest, questions[current_quest].q);
    uiFunc(aLabel, questions[current_quest].a);
    uiFunc(bLabel, questions[current_quest].b);
    uiFunc(cLabel, questions[current_quest].c);
};


function uiFunc(element, text) {
    element.textContent = text;
};
