/*
function questionstest() {



    var q = document.getElementById(question1.quest);
    q.innerHTML = questions();
    var a1 = document.getElementById(question1.alt.alt1);
    a1.innerHTML = alt1;
    var a2 = document.getElementById(question1.alt.alt2);
    a2.innerHTML = alt2;
    var a3 = document.getElementById(question1.alt.alt3);
    a3.innerHTML = alt3;



var question1={

    quest: "Which is Sweden's largest animal?",
    answer: "MOOSE",

     alt{

     }



};

var question2={

    quest: "Which is Sweden's largest animal?",
    answer: "MOOSE",

    alt{
        alt1: "Cat",
        alt2: "Dog",
        alt3: "Moose"

    }



};

*/
/*
var QuizGame ={

    questions:{
        quest1: "Which is Sweden's largest animal?",
        quest2: "Which is Sweden's largest animal?",
        quest3: "Which is Sweden's largest animal?",
        quest4: "Which is Sweden's largest animal?",
        quest5: "Which is Sweden's largest animal?"
    },
    answers:{
        quest1: "moose",
        quest2: "moose",
        quest3: "moose",
        quest4: "moose",
        quest5: "moose"

    },
    alternative:{
        quest1:{
            alt1:"Cat",
            alt2:"Dog",
            alt3:"Moose"
        },
        quest2:{
            alt1:"Cat",
            alt2:"Dog",
            alt3:"Moose"
        },
        quest3:{
            alt1:"Cat",
            alt2:"Dog",
            alt3:"Moose"
        },
        quest4:{
            alt1:"Cat",
            alt2:"Dog",
            alt3:"Moose"
        },
        quest5:{
            alt1:"Cat",
            alt2:"Dog",
            alt3:"Moose"
        }


    }

};*/


/*
  var questions = {
        quest1: "Which is Sweden's largest animal?",
        quest2: "Which is Sweds largest animal?",
        quest3: "Which i largest animal?",
        quest4: "Which is Sw largest animal?",
        quest5: "Whiis Sweds largest animal?"
    };
    var answers ={
        quest1: "moose",
        quest2: "moose",
        quest3: "moose",
        quest4: "moose",
        quest5: "moose"

    };
    var alternative ={
        quest1:{
            alt1:"Cat",
            alt2:"Dog",
            alt3:"Moose"
        },
        quest2:{
            alt1:"Cat",
            alt2:"Dog",
            alt3:"Moose"
        },
        quest3:{
            alt1:"Cat",
            alt2:"Dog",
            alt3:"Moose"
        },
        quest4:{
            alt1:"Cat",
            alt2:"Dog",
            alt3:"Moose"
        },
        quest5:{
            alt1:"Cat",
            alt2:"Dog",
            alt3:"Moose"
        }


    };


*/
/*
var questions = [
    "1.Which is Sweden's largest animal?",
    "2.vad heter jag",
    "3.Which is 's largest animal?",
    "4.Whn's largest animal?",
    "5.Which is Swelargest animal?"
];

var answers = [
    "moosvrve",
    "movrvorse",
    "morvose",
    "morvrose",
    "morvrvose"
];

var alternative1 = [
    "Carrt",
    "Crrat",
    "Cavvvt",
    "Cavvt",
    "Crrat"
];
var alternative2 = [
    "dorrg",
    "dovvg",
    "dorrg",
    "vv",
    "vvr"
];

var alternative3 = [
    "Morrvose",
    "Moorrse",
    "Moose",
    "rr",
    "vv"
];
*/
(function () {
    var questions = [{
        question: "What is 2*5?",
        choices: [2, 5, 10, 15, 20],
        correctAnswer: 2
    }, {
        question: "What is 3*6?",
        choices: [3, 6, 9, 12, 18],
        correctAnswer: 4
    }, {
        question: "What is 8*9?",
        choices: [72, 99, 108, 134, 156],
        correctAnswer: 0
    }, {
        question: "What is 1*7?",
        choices: [4, 5, 6, 7, 8],
        correctAnswer: 3
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }];

    var questionCounter =0;
    var selections = [];



    var name;
    var age;
    var message;
    var fraga;
    var a1;
    var a2;
    var a3;
    var ratt = 0;
    var antalFragor = 0;
    var i=0;


    while (i <= 4) {
        fraga = (question[i]);
        a1 = (alternative1[i]);
        a2 = (alternative2[i]);
        a3 = (alternative3[i]);



        var elQuestion = document.getElementById('question');
        elQuestion.textContent = fraga;
        console.log(fraga);
        var elAlt1 = document.getElementById('alt1');
        elAlt1.textContent = a1;
        console.log(a1);
        var elAlt2 = document.getElementById('alt2');
        elAlt2.textContent = a2;
        console.log(a2);
        var elAlt3 = document.getElementById('alt3');
        elAlt3.textContent = a3;
        console.log(a3);

}




/*(function(){
    var form =document.getElementById("login");

    addEvent(form, 'submit', funktion(e){
        e.preventDefault();
        var elements = this.elements;
        var username = elements.username.value;
        var msg      = 'Welcome ' + username;
        document.getElementById('main').textContent =msg;

    });
}());
*/










