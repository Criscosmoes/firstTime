var scoreController = (function(){






});




var UIController = (function(){
   

var Data = {
        Arrays: {
            soccer: ["playerPics/Soccer0.webp", "playerPics/Soccer1.webp", "playerPics/Soccer2.webp", "playerPics/Soccer3.webp"],
            team: ["teamPics/Team0.png","teamPics/Team1.png","teamPics/Team2.png","teamPics/Team3.png"],
        },
        Questions: ["Who is currently the best player in the world?", "Who is the best team in the world? ", "What is the superior place to eat? "]

}



return {
    hideAnswers: function(){

        for(i = 0; i < 4; i++){
            document.getElementById('pic-' + i).style.display = 'none';
        }
    },
    
    DisplayAnswers: function(nameOfArray){
        for(i = 0; i < 4; i++){
            document.getElementById('pic-' + i).src = Arrays[nameOfArray][i];
            document.getElementById('pic-' + i).style.display = 'block';
        
        }
    },

    getArrPictures: function() {
        return Pictures
    },

}

});






var controller = (function(UICtrl, scoreCtrl){

//pics a number 0-4
var dice = Math.floor(Math.random() * 5);
         
// function that shuffles your array. 
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}



var everything = function () {

}
    

return {
    init: function(){
        UICtrl.hideAnswers(); 
        randomQuestion(); 
        UICtrl.DisplayAnswers(); 


    }
}

})(UIController, scoreController);



