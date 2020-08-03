var scoreController = (function(){

    var arrQuestions, obj;  

    //Constructor to create new questions
    var Questions = function(question,answer,correctAns){
        this.question = question;
        this.answer = answer; 
        this.correctAns = correctAns; 
    }
    // new objects
    var q1 = new Questions("Who is currently the best player in the world?", ["playerPics/Correct0.webp", "playerPics/Soccer1.webp", "playerPics/Soccer2.webp", "playerPics/Soccer3.webp"], "0");
    var q2 = new Questions("Who is the best team currently?", ["teamPics/Team0.png","teamPics/Team1.png","teamPics/Team2.png","teamPics/Team3.png"], "3");
    


    var data = {
        score: 0,  
        array: {
            questions: [q1,q2],
        },
    };


    



    return {
        getData: function(){
           return data; 
        },
        getObject: function(){
            return {
                object: data.array.questions[Math.floor(Math.random() * 2)]
            } 
        },
        testing: function(){
            return q1; 
        }




    }
})();






var UIController = (function(){


    return {

        displayQuestion: function(obj){

            document.querySelector('.title-question').textContent = obj.question; 

            for(i = 0; i < 4; i++){
                document.getElementById("pic-" + i).src = obj.answer[i]; 
            }

        },


        displayScore: function(score){

            document.querySelector(".player-current-score").textContent = score; 
        },

        showTry: function(){
            document.querySelector('.try-again').style.display = 'block'; 
        },
        hideTry: function(){
            document.querySelector('.try-again').style.display = 'none';
        }, 

        showPlusOne: function(){
            document.querySelector('.plus-one').style.display = 'block';
            document.querySelector('.correct').style.display = 'block';
        },
        hidePlusOne: function(){
            document.querySelector('.plus-one').style.display = 'none';
            document.querySelector('.correct').style.display = 'none';
        }


    }

})();




var controller = (function(scoreCtrl, UICtrl){
    var tempObject, newObject, newData, globalScore, shuffledArr; 


    // get the score/array from the score controller
    newData = scoreCtrl.getData(); 
    globalScore = newData.score; 
    

// function to shuffle the array so that the buttons are not in the same spot all the time 
    var shuffle = function (obj){
    
    var j, x, i;
    for (i = obj.answer.length- 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = obj.answer[i];
        obj.answer[i] = obj.answer[j];
        obj.answer[j] = x;
    }
    return obj.answer;
    
    }


    var checkAns = function(){
        

    }
    




    var setupEventListeners = function(){
        document.getElementById('pic-0').addEventListener('click',function(){
            
            var n = document.getElementById('pic-0').src; 
            var tempAns, 

            tempAns = false; 
        

            for(i = 0; i < n.length; i++){
                if(newObject.correctAns === n[i]){
                    tempAns = true; 
                }

           }
           // if the answer is correct, shuffle questions and show another one
           if(tempAns){
            globalScore++; 
            UICtrl.hideTry();
            UICtrl.showPlusOne(); 
            setTimeout(UICtrl.hidePlusOne, 1000); 
            resetQuestion(); 
            UICtrl.displayScore(globalScore); 
        }
        else if(tempAns === false){
            UICtrl.showTry(); 
            setTimeout(UICtrl.hideTry,1000); 
        }

            
         
        });



        document.getElementById('pic-1').addEventListener('click',function(){
            
            var n = document.getElementById('pic-1').src; 
            var tempAns, 

            tempAns = false; 
            

            for(i = 0; i < n.length; i++){
                if(newObject.correctAns === n[i]){
                    tempAns = true; 
                }

           }

           if(tempAns){
            globalScore++; 
            UICtrl.hideTry(); 
            UICtrl.showPlusOne(); 
            setTimeout(UICtrl.hidePlusOne, 1000); 
            resetQuestion(); 
            UICtrl.displayScore(globalScore); 
        }
        else if(tempAns === false){
            UICtrl.showTry(); 
            setTimeout(UICtrl.hideTry,1000); 
        }

           
         
        });



        document.getElementById('pic-2').addEventListener('click',function(){
            
            var n = document.getElementById('pic-2').src; 
            var tempAns,

            tempAns = false; 
             

            for(i = 0; i < n.length; i++){
                if(newObject.correctAns === n[i]){
                    tempAns = true; 
                }

           }

           if(tempAns){
            globalScore++; 
            UICtrl.hideTry(); 
            UICtrl.showPlusOne(); 
            setTimeout(UICtrl.hidePlusOne, 1000); 
            resetQuestion(); 
            UICtrl.displayScore(globalScore); 
        }
        else if(tempAns === false){
            UICtrl.showTry(); 
            setTimeout(UICtrl.hideTry,1000); 
        }

           
            
         
        });



        document.getElementById('pic-3').addEventListener('click',function(){
            
            var n = document.getElementById('pic-3').src; 
            var tempAns,  

            tempAns = false; 
            

            for(i = 0; i < n.length; i++){
                if(newObject.correctAns === n[i]){
                    tempAns = true; 
                }

           }

           if(tempAns){
               globalScore++; 
               UICtrl.hideTry(); 
               UICtrl.showPlusOne(); 
               setTimeout(UICtrl.hidePlusOne, 1000); 
               resetQuestion(); 
               UICtrl.displayScore(globalScore); 
               
           }
           else if(tempAns === false){
            UICtrl.showTry();
            setTimeout(UICtrl.hideTry,1000);  
        }
 
         
        });
    }

    var resetQuestion = function(){
    // cretes a random question from our array
    tempObject = scoreCtrl.getObject();
    newObject = tempObject.object;

    // shuffle the array from the chosen object 
    shuffledArr = shuffle(newObject);  


    // display the question and shuffled answers
    UICtrl.displayQuestion(newObject)
}


 

    
    // function to have the other functions
    var init2 = function(){

        // cretes a random question from our array
        tempObject = scoreCtrl.getObject();
        newObject = tempObject.object;

        // shuffle the array from the chosen object 
        shuffledArr = shuffle(newObject);  


        // display the question and shuffled answers
        UICtrl.displayQuestion(newObject); 

        // setting up event listeners

        setupEventListeners(); 
        tempAns = false; 
        

        // checking if user chose the correct answer


    }


    


    return {
        init: function(){
           init2(); 
           
            
        }
    }


})(scoreController, UIController); 

controller.init(); 

