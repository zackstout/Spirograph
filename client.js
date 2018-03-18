
var angle;
var center1 = {x: 0, y: 0};
var angle1;
allPoints = [];
var radius1;
var radius2;

var center2 = {x: 0, y:0};
var radius3;
var angle2;

var tripleDeep = false;

function setup() {
  createCanvas(800, 800);
  background(101);
  angle = 0;
  angle1 = 0;
  angle2 = 0;
  radius1 = 200;
  radius2 = 52;
  radius3 = 25;

  push();
  translate(width/2, height/2);
  rotate(angle);
  ellipse(radius1, 0, 5, 5);
  pop();
}

function draw() {
  background(101);

  push();
  translate(width/2, height/2);
  rotate(angle);
  center1.x = radius1 * Math.cos(angle);
  center1.y = radius1 * Math.sin(angle);
  fill('red');
  ellipse(radius1, 0, 5, 5);
  pop();

  push();
  var x1 = width/2 + center1.x;
  var y1 = height/2 + center1.y;
  // Ok if we do this, we draw the original planet's path:
  // allPoints.push({x: x1, y: y1});

  center2.x = x1 + radius2 * Math.cos(angle1);
  center2.y = y1 + radius2 * Math.sin(angle1);
  if (!tripleDeep) {
    allPoints.push({x: center2.x, y: center2.y});

  }
  translate(x1, y1);
  rotate(angle1);
  fill('red');
  ellipse(radius2, 0, 4, 4);
  pop();


  // well it's working.....I have no idea why this is the proper translation though:
  push();
  var x2 =  center2.x;
  var y2 =  center2.y;

  if (tripleDeep) {
    allPoints.push({x: x2 + radius3 * Math.cos(angle2), y: y2 + radius3 * Math.sin(angle2)});

  }

  translate(x2, y2);
  rotate(angle2);
  fill('blue');
  ellipse(radius3, 0, 4, 4);
  pop();

  // console.log(x2, y2);




  // console.log(center1);


  // if angle1 is n*angle, then will createa  flower with (n - 1) petals!!!
  angle += 0.01;
  angle1 += 0.04;
  angle2 += 0.08;


  allPoints.forEach(function(point) {
    noStroke();
    fill(253);
    ellipse(point.x, point.y, 2, 2);
  });
}
