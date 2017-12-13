var score;
var cardsmatched;
var ui = $("#gameUI");
var uiIntro =$("#gameIntro");
var uiStats = $("#gameStats");
var uiComplete = $("#gameComplete");
var uiCards = $("#cards");
var uiScore = $(".gameScore");
var uiReset = $(".gameReset");
var uiPlay = $("#gamePlay");
var uiTimer = $("#timer");

var matchingGame = {};
matchingGame.deck = ['grilledfish', 'grilledfish','barbacoa', 'barbacoa','tripa', 'tripa','bajafish', 'bajafish','carneasada', 'carneasada','carnitas', 'carnitas', 'chorizoasado','chorizoasado','shrimptaco','shrimptaco','decabeza','decabeza','alpastor', 'alpastor','dorados','dorados', 'lengua','lengua','chicharron','chicharron','sudados','sudados', 'polloasado','polloasado',];

$(function(){
    init();
});

function init() {
                uiComplete.hide();
                uiCards.hide();
                playGame = false;
                uiPlay.click(function(e){
                    e.preventDefault();
                    uiIntro.hide();
                    startGame();
                });

                uiReset.click(function(e){
                e.preventDefault();
                uiComplete.hide();
                reStartGame();
            
            });
}

function startGame(){
        uiTimer.show();
        uiScore.html("0 seconds");
        uiStats.show();
        uiCards.show();
        score = 0;
        cardsmatched= 0;

}





function selectCard(){
    if($(".card-flipped").size()> 1){
        return;
    }
    $(this).addClass("card-flipped");
    if($(".card-flipped").size() == 2) {
        setTimeout(checkPattern, 1000);
    }
    }
}













// var faces =[
//     getImage("/images/tripa.jpg"),
//     getImage("/images/bajafish.jpg"),
//     getImage("/images/barbacoa.jpg"),
//     getImage("/images/carneasada.jpg"),
//     getImage("/images/carnitas.jpg"),
//     getImage("/images/grilledfish.jpg"),
//     getImage("/images/polloasado.jpg"),
//     getImage("/images/dorados.jpg"),
//     getImage("/images/shrimptaco.jpg"),
//     getImage("/images/decabeza.jpg"),
//     getImage("/images/alpastor.jpg"),
//     getImage("/images/chorizoasado.jpg"),
//     getImage("/images/chicharron.jpg:"),
//     getImage("/images/lengua.jpg"),
//     getImage("/images/sudados.jpg"),
// ]