var score;
var cardsmatched;
var ui = $("#gameUI");
var uiIntro = $("#gameIntro");
var uiStats = $("#gameStats");
var uiComplete = $("#gameComplete");
var uiCards= $("#cards");
var uiReset = $(".gameReset");
var uiScore = $(".gameScore");
var uiPlay = $("#gamePlay");
var uiTimer = $("#timer");








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