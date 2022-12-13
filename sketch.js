
var dog,happyDog,database,foodS,foodStock;
var dogImg,happyDogImg

function preload()
{
	
  dogImg=loadImage("./images/dogImg.png");
  happyDogImg=loadImage("./images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(230,250,20,20);
  dog.addImage(dogImg);
  dog.scale=0.2;
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  foodS=foodS-1;
  dog.addImage(happyDogImg);
}

  drawSprites();
  textSize(24)
  fill("red"); 
  text("Food remaining:"+foodS,150,180)
  text("Press UP ARROW key to feed Drago milk",20,20)
   
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
