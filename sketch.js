let shapeX=100
let shapeSize=100
let bubbleSize=100
let fishImage
let fishX=500
let timer=0
let increment=1.5
let rosesImage
let backImage

function preload () {
  rosesImage=loadImage("roses.GIF")
  backImage = loadImage("background.gif")
}

function setup () {
  createCanvas (windowWidth, windowHeight);
}

function draw() {
  background (167, 184, 209);
  timer=timer + increment

  let min=minute()
  textSize (60)
    text (min, 40, 50)

    let sec=second()
    textSize (60)
    text (sec, 40, 100)

    image(backImage, 0, 0, windowWidth, windowHeight)
    image(rosesImage, windowWidth/2, windowHeight/2, rosesImage.width/4, rosesImage.height/4)
}

function mouseClicked () {
  fill (0,0,0)
  bubbleSize=0
  shapeSize=100

}