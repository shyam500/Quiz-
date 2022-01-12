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

uiFunc(quest, questions[current_quest].q);
uiFunc(aLabel, questions[current_quest].a);
uiFunc(bLabel, questions[current_quest].b);
uiFunc(cLabel, questions[current_quest].c);

console.log(questions.length);

function uiFunc(element, text) {
    element.textContent = text;
}

inp_parent.addEventListener('click', e => {
    if (e.target.type === 'radio') {
        quizFunc(e.target.id)
    };
});


function quizFunc(val) {
    if (val === questions[current_quest].correct) {
        points += 1;
    }
    if (current_quest >= questions.length + 1){
        alert(`Your point is `)
        console.log(current_quest);
        console.log(questions[current_quest]);
        current_quest += 1;
    }
    // if (current_quest === questions.length + 1) {
    //     current_quest = 0;
    // } else {
    //     current_quest += 1;
    // };
    
    console.log(current_quest);
};