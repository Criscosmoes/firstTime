var scoreController = (function(){

});



var controller = (function(){

    var ans, arrQuestions, obj, id, correct;    

    var Questions = function(question,answer,correctAns,){
        this.question = question;
        this.answer = answer; 
        this.correctAns = correctAns; 
    }
    
    var q1 = new Questions("Who is currently the best player in the world?", ["playerPics/Soccer0.webp", "playerPics/Soccer1.webp", "playerPics/Soccer2.webp", "playerPics/Soccer3.webp"], "0");
    var q2 = new Questions("Who is the best team currently?", ["teamPics/Team0.png","teamPics/Team1.png","teamPics/Team2.png","teamPics/Team3.png"], "3");
    
    arrQuestions = [q1, q2]; 
    var globalScore = 0; 
    
    obj = arrQuestions[Math.floor(Math.random() * 4)]; 

    
    
    var displayQuestion = function(obj){

        // display question
        document.querySelector('.title-question').textContent = obj.question; 

        // display the answers
        for(i = 0; i < 4; i++){
        document.getElementById("pic-" + i).src = obj.answer[i]; 
        }
    } 

    var setupEventListeners = function(obj){

        document.getElementById('pic-0').addEventListener('click', function(){
            


            var n = document.getElementById('pic-0').src;

            var id = n.search(obj.correctAns);

            if(id !== -1){
                correct = "correct";
            }
            else {
                correct = "wrong"; 
            }

            checkAnswer(correct)


        }); 

        document.getElementById('pic-1').addEventListener('click', function(){
            


            var n = document.getElementById('pic-1').src;

            id = n.search(obj.correctAns);
             

            if(id !== -1){
                correct = "correct";
            }
            else {
                correct = "wrong"; 
            }

            checkAnswer(correct)

        }); 

        document.getElementById('pic-2').addEventListener('click', function(){
            


            var n = document.getElementById('pic-2').src;

            var id = n.search(obj.correctAns);
             
            if(id !== -1){
                correct = "correct";
            }
            else {
                correct = "wrong"; 
            }

            checkAnswer(correct)

        }); 

        document.getElementById('pic-3').addEventListener('click', function(){
            


            var n = document.getElementById('pic-3').src;

            var id = n.search(obj.correctAns);
            
            if(id !== -1){
                correct = "correct";
            }
            else {
                correct = "wrong"; 
            }

            checkAnswer(correct)

        }); 

    }

    var checkAnswer = function(correct){

        if(correct === 'correct'){
            globalScore += 1; 
        }
        else if(correct !== 'correct'){
            globalScore -= 1; 
        }



       showScoreUI(globalScore);
    }

    var changeScoreUI = function(obj){

    }

    


    var shuffle = function (obj){
        
        var j, x, i;
        for (i = obj.answer.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = obj.answer[i];
            obj.answer[i] = obj.answer[j];
            obj.answer[j] = x;
        }
        return obj.answer;
        
    }


    var showScoreUI = function(globalScore){

        document.querySelector('.player-current-score').textContent = globalScore; 
    }

    return {
        init: function(){
            shuffle(obj); 
            displayQuestion(obj); 
            setupEventListeners(obj);
            

        }
    }



})();

controller.init(); 
