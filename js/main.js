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
matchingGame.deck = ['nopales', 'grilledfish','tripa','bajafish','barbacoa','carneasada','carnitas', 'chorizoasado','shrimptaco', 'decabeza','alpastor','dorados', 'lengua','chicharron','sudados', 'polloasado',];

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

function getFirstTwelve(playDeck) {
    // Takes first 12 values from playDeck array and inserts them in a new array called firstTwelve
    var firstTwelve = playDeck.slice(0,12);
    // Creates an empty array into which each of the values inside firstTwelve will be pushed twice below
    var doubleFirstTwelve = [];
    // Creates a counter variable to keep track of the iterations through the while loop below
    var j = 0;
    // Initiates a while loop that will only loop twice
    while( j < 2 ) {
        // Initiates for loop that will iterate through the length of the firstTwelve array. It will run through this for loop twice since it's inside a while loop that will run twice
        for(var i = 0; i < firstTwelve.length; i++) {
           // Pushes each value of the firstTwelve array into the doubleFirstTwelve array. it will do this twice because it's inside the while loop
           doubleFirstTwelve.push(firstTwelve[i])
        }
        // Increments the j counter so that the while loop will no loger execute once j equals 2
        j++;
    }
    // doubleFirstTwelve now has 24 values, but it's just an ordered list of 12 values twice in that order, so we want to call your shuffle function again on this new array and return that shuffled doubleFirstTwelve array back to the shuffledNewDeck variable inside startGame
    return doubleFirstTwelve.sort(shuffle);
}

function startGame(){
        uiTimer.show();
        uiScore.html("0 seconds");
        uiStats.show();
        uiCards.show();
        score = 0;
        cardsmatched= 0;
        if (playGame == false) {
            playGame = true;
                var playDeck = matchingGame.deck.sort(shuffle);
                console.log(playDeck)
                var shuffledDeck = getFirstTwelve(playDeck);
                for (var i=0; i<23; i++){
                    $(".card:first-child").clone().appendTo("#cards");
                    console.log ($(".card:first-child"));
                } 
                uiCards.children().each(function(index) {
                    $(this).css({
                        "left" : ($(this).width() + 20) * (index % 6),
                        "top" : ($(this).height() + 20) * Math.floor(index / 6)
                    });
                    var pattern = shuffledDeck.pop();
                    $(this).find(".back").addClass(pattern);
                    $(this).attr("data-pattern",pattern);
                    $(this).click(selectCard);
                });
            timer();
        };
}
 function timer(){
     if (playGame){
         scoreTimeout = setTimeout(function(){
             uiScore.html(++score, "seconds");
             timer();
         }, 1000);
     };
 };

function shuffle() {
    return 0.5 - Math.random();
}



function selectCard(){
    if($(".card-flipped").size() > 1) {
        return;
    }
    $(this).addClass("card-flipped");
    if($(".card-flipped").size() == 2) {
        setTimeout(checkPattern, 1000);
    };
};

function checkPattern() {
	if (isMatchPattern()) {
		$(".card-flipped").removeClass("card-flipped").addClass("card-removed");
			if(document.webkitTransitionEnd){
				$(".card-removed").bind("webkitTransitionEnd",	removeTookCards);
			}else{
				removeTookCards();
			}
		} else {
		$(".card-flipped").removeClass("card-flipped");
	}
}
    

    function isMatchPattern(){
        var cards = $(".card-flipped");
        var pattern = $(cards[0]).data("pattern");
        var anotherPattern = $(cards[1]).data("pattern");
        return (pattern == anotherPattern);

    }

    function removeTookCards() {
        if (cardsmatched < 11) {
            cardsmatched++;
            $(".card-removed").remove();
        }else{
            $(".card-removed").remove();
            uiCards.hide();
            uiComplete.show();
            clearTimeout(scoreTimeout);

        }
        }
    
function reStartGame(){
        playGame = false;
        uiCards.html("<div class='card'><div class='face front'></div><div class='face back'></div></div>");
        clearTimeout(scoreTimeout);
        matchingGame.deck = ['nopales', 'grilledfish','tripa','bajafish','barbacoa','carneasada','carnitas', 'chorizoasado','shrimptaco', 'decabeza','alpastor','dorados', 'lengua','chicharron','sudados', 'polloasado',];
        startGame();
}













