/* variable array should work no matter how man questions and answers are added */
var _questions = [{
    question: "Who Developed JavaScript?",
    answers: [" NetScape ", " Zerox ", " Microsoft ", " IBM "],
    correct: 0
  },
  {
    question: "What is 6+7+'2'?",
    answers: [" 15 ", " 672 ", " 132 ", " 69 "],
    correct: 2
  },
  {
    question: "Is Javascript case sensitive?",
    answers: [" yes ", " no ",],
    correct: 0
  },
  {
      question: "Which type of pop up does javascript utilize?",
      answers: [" prompt ", " confirm ", " alert ", " all of the above ", " none of the above "],
      correct: 3
  },
  {
      question: "Which of the following is used for multi line comments?",
      answers: [" << ", " // ", " () ", " / ", " /* "],
      correct: 4
  }
];


var questionNumber = 0;
var totalScore = 0;
var generateQuestion = "";
var initials = ""

/* quiz handler loop */
$(document).ready(function() {
  generateQs = function() {
    if (questionNumber === _questions.length) {
      $("input[value=Submit]").remove();
      $("#question").text(" Done! Your score is" + " " + totalScore);
        $("_scores").html("names", ":", "totalScore")
    } else {
      $("#question").text(_questions[questionNumber].question);
      for (var i = 0; i < _questions[questionNumber]['answers'].length; i++) {
        $('#answer').append('<input type="radio" name="buttons">' + _questions[questionNumber]['answers'][i] + '</input');
      }
    }
  }
  generateQs();

});



/* verifys answers */

var checkQuestions = function() {
  var lenG = document.getElementsByName("buttons").length;
  console.log(lenG);
  var correctAnswer = _questions[questionNumber]['correct'];
  for (var i = 0; i < lenG; i++) {
    if (document.getElementsByName("buttons")[i].checked === true) {
      console.log(i);
      console.log(document.getElementsByName("buttons")[i].checked);
      if (i === correctAnswer) {
        totalScore += 1;
        alert("Correct! Your Score!:" + " " + totalScore);
      } else {
        alert("Wrong! Your Score!:" + " " + totalScore);
        document.getElementById()
      }
    }


  }
  /* next question */
  questionNumber = questionNumber + 1;
  $("#answer").empty();
  generateQs();


}


