var canva;
var quiz;
var question;
var contestant;
var contestantCount;
var gameState;
var database;

function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database();
  quiz= new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  
}
