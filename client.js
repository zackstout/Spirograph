
var angle;
var center1 = {x: 0, y: 0};
var angle1;
allPoints = [];


function setup() {
  createCanvas(800, 800);
  background(101);
  angle = 0;
  angle1 = 0;


  push();
  translate(width/2, height/2);
  rotate(angle);
  ellipse(150, 0, 5, 5);
  pop();
}

function draw() {
  background(101);

  push();
  translate(width/2, height/2);
  rotate(angle);

  center1.x = 150 * Math.cos(angle);
  center1.y = 150 * Math.sin(angle);
  ellipse(150, 0, 5, 5);

  // push();
  // translate(center1.x, center1.y);
  // rotate(angle1);
  // ellipse(40, 0, 4, 4);
  //
  // pop();
  pop();

  push();
  var x1 = width/2 + center1.x;
  var y1 = height/2 + center1.y;
  // Ok if we do this, we draw the original planet's path:
  // allPoints.push({x: x1, y: y1});

  allPoints.push({x: x1 + 40 * Math.cos(angle1), y: y1 + 40 * Math.sin(angle1)});

  translate(x1, y1);
  rotate(angle1);
  ellipse(40, 0, 4, 4);
  pop();

  // console.log(center1);

  angle += 0.01;
  angle1 += 0.05;


  allPoints.forEach(function(point) {
    noStroke();
    ellipse(point.x, point.y, 2, 2);
  });
}
