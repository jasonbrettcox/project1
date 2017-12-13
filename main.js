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

var Card = function (x, y){
    this.x = x;
    this.y = y;
    width = 100;
}
var cards = [];
var num_cols = 6 ;
var num_rows = 4;
for( var i = 0; i <num_cols; i++ ){
   for (var j =0; j < num_rows;j ++){
        cards.push(new Card(i * 78 + 10, j * 78 + 40))
   }
}

Card.prototype.drawFaceDown = function(){
    Card.setAttribute("src", "/images/cardback.jpg");
   ("/images/cardback.jpg"), 
//    this.x, this.y, this.width, this.width);
};
for (var i = 0; i < cards.length; i++) {
    cards[i].drawFaceDown()
};