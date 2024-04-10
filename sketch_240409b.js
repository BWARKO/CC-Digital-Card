let rain = []; 

function preload() {
  font = loadFont('font.ttf');
}

function setup() {
  createCanvas(900, 602).center('horizontal');
  frameRate(60);
  
  for (let i = 0; i < 100; i++) {
    rain.push(new Rain());
  }
}


function draw() {
  background(255, 255, 255);
  
  /* pinkish cloud shade */
  fill(255, 192, 203, 100)
  noStroke()
  beginShape();
  curveVertex(0, 50);
  curveVertex(0, 400);
  curveVertex(800, 190);
  curveVertex(300, 75);
  endShape(CLOSE);
  
  /* sun cloud shade */
  fill(255, 255, 255, 190)
  noStroke()
  beginShape();
  curveVertex(75, 190);
  curveVertex(150, 220);
  curveVertex(200, 190);
  curveVertex(75, 170);
  endShape(CLOSE);
  
  /* clouds shade */
  fill(200, 200, 155, 100)
  noStroke()
  beginShape();
  curveVertex(0, 340);
  curveVertex(200, 350);
  curveVertex(700, 400);
  curveVertex(700, 160);
  curveVertex(0, 115);
  endShape(CLOSE);
  
  // rain
  for (let i = 0; i < rain.length; i++) {
    fill(0, 0, 100, 255)
    rain[i].move()
    rain[i].display()
    rain[i].reset()
  }
  
  fill(90, 90, 90, 200)
  noStroke()
  beginShape();
  curveVertex(0, 115);
  curveVertex(150, 120);
  curveVertex(275, 140);
  curveVertex(400, 140);
  curveVertex(600, 175);
  curveVertex(750, 175);
  curveVertex(950, 190);
  vertex(900, 0);
  vertex(0, 0);
  endShape(CLOSE);
  
  fill(90, 90, 90, 100)
  noStroke()
  beginShape();
  curveVertex(50, 260);
  curveVertex(275, 300);
  curveVertex(275, 250);
  curveVertex(700, 275);
  curveVertex(700, 400);
  curveVertex(900, 400);
  curveVertex(950, 190);
  curveVertex(350, 195);
  curveVertex(120, 250);
  endShape(CLOSE);
  
  // trees
  fill(90, 120, 90, 255)
  rect(635, 325, 2, 30)
  triangle(630, 345, 635, 310, 640, 345)
  triangle(620, 345, 635, 340, 640, 345)
  triangle(620, 330, 630, 335, 650, 330)
  triangle(620, 322, 633, 327, 650, 325)
  triangle(615, 335, 635, 340, 650, 335)
  triangle(625, 335, 635, 345, 655, 340)

  
  // landscape
  fill(90, 120, 90, 255)
  noStroke()
  beginShape();
  curveVertex(150, 400);
  curveVertex(200, 650);
  curveVertex(950, 475);
  curveVertex(500, 335);
  endShape(CLOSE);
  
  fill(80, 110, 80, 255)
  noStroke()
  beginShape();
  curveVertex(0, 340);
  curveVertex(0, 650);
  curveVertex(950, 650);
  curveVertex(450, 400);
  endShape(CLOSE);
  
  fill(40, 100, 40, 255)
  noStroke()
  beginShape();
  curveVertex(0, 450);
  curveVertex(0, 650);
  curveVertex(950, 650);
  curveVertex(950, 360);
  curveVertex(360, 380);
  endShape(CLOSE);
  
  // grass close
  fill(20, 90, 20, 255)
  noStroke()
  beginShape();
  curveVertex(360, 650);
  curveVertex(950, 650);
  curveVertex(1200, 410);
  curveVertex(355, 410);
  endShape(CLOSE);
  
  fill(10, 80, 32, 255)
  noStroke()
  beginShape();
  curveVertex(0, 480);
  curveVertex(0, 650);
  curveVertex(950, 650);
  curveVertex(950, 440);
  endShape(CLOSE);
  
  // fog effect
  fill(150, 150, 150, 25)
  rect(0, 0, 950, 650);
  
  // text
  textAlign(CENTER, BOTTOM);
  textFont(font)
  textSize(64);
  fill(0);
  text('SORRY YOU HAD A BAD DAY! ;C', 450, 575);
}

class Rain {
  constructor() {
    this.x = random(width);
    this.y = random(height) - 650;
    this.speed = 5;
  }

  move() {
    this.y += this.speed;
  }

  display() {
    rect(this.x, this.y, 2, 5);
  }
  
  reset() {
    if (this.y >= 350) {
      this.y = -10
      this.x = random(width)
    }
  }
}
