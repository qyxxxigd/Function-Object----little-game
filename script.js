/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

*/
(function () {
    var Question = function(question, answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    var q1 = new Question("Is Javascript the most beautiful programming language?", ['Yes', 'No'], 0);
    var q2 = new Question("What is John's job?", ['designer', 'retired', 'teacher'], 1);
    var q3 = new Question("How long have you been learning Javascript?", ['1 year', '1 month', '1 week', '1 day'], 2);
    var questions = [q1, q2, q3];

    Question.prototype.displayQA = function(){
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++){
            console.log(i + '. ' + this.answers[i]);
        }
    }

    Question.prototype.chectInput = function(input, callback) {
        var sc;
        if (input === this.correctAnswer) {
            console.log('Correct!');
            sc = callback(true);
        } else {
            console.log('False!')
            sc = callback(false);
        }
        this.displayScore(sc);
    }
    
    Question.prototype.displayScore = function(score) {
        console.log('Score: ' + score);
        console.log('------------------------')
    }
    function score() {
        var sc = 0;
        return function(correct){
            if (correct) {
                sc ++;
            }
            return sc;
        }
    }
    var keepScore = score();
   
    function randomQuestion(questions) {
        var index = Math.floor(Math.random() * questions.length);
        questions[index].displayQA();

        var input = prompt('Please input the index of the correct answer: ');
        if (input !== 'exit'){          
            questions[index].chectInput(parseInt(input), keepScore);
            randomQuestion(questions);
        }
    }
    randomQuestion(questions);
})();



/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/
