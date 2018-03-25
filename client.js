
var angle;
var center1 = {x: 0, y: 0};
var angle1;
allPoints = [];
var radius1;
var radius2;

var center2 = {x: 0, y:0};
var radius3;
var angle2;

var center3 = {x: 0, y:0};
var radius4;
var angle3;

var center4 = {x:0, y:0};

var tripleDeep = false;
var quadDeep = true;


$(document).ready(function() {
  console.log('hi i am ready');
  
  $('#lvls').change(function() {
    $('#levels').empty();
    var int = parseInt($('#lvls').val());

    // Validate input:
    if (int > 5) {
      alert('Please enter a value between 1 and 5.');
    }

    // Create moon input fields:
    for (var i=0; i < int; i++) {
      $("#levels").append("<p>Radius: <input type='number' id='rad'" + i + "></p> <p>Oribtal Speed: <input type='number' id='speed'" + i + "></p><br>");
    }

  });
});

function setup() {
  createCanvas(800, 800);
  background(101);
  angle = 0;
  angle1 = 0;
  angle2 = 0;
  angle3 = 0;
  radius1 = 200;
  radius2 = 62;
  radius3 = 35;
  radius4 = 22;

  push();
  translate(width/2, height/2);
  rotate(angle);
  ellipse(radius1, 0, 5, 5);
  pop();
}

function draw() {
  background(101);

  // Original planet;
  push();
  translate(width/2, height/2);
  rotate(angle);
  center1.x = radius1 * Math.cos(angle);
  center1.y = radius1 * Math.sin(angle);
  fill('red');
  ellipse(radius1, 0, 5, 5);
  pop();

  // First moon:
  push();
  var x1 = width/2 + center1.x;
  var y1 = height/2 + center1.y;
  // Ok if we do this, we draw the original planet's path:
  // allPoints.push({x: x1, y: y1});

  center2.x = x1 + radius2 * Math.cos(angle1);
  center2.y = y1 + radius2 * Math.sin(angle1);
  if (!tripleDeep && !quadDeep) {
    allPoints.push({x: center2.x, y: center2.y});
  }
  translate(x1, y1);
  rotate(angle1);
  fill('red');
  ellipse(radius2, 0, 4, 4);
  pop();


  // Second moon:
  // well it's working.....I have no idea why this is the proper translation though:
  push();
  var x2 =  center2.x;
  var y2 =  center2.y;

  center3.x = x2 + radius3 * Math.cos(angle2);
  center3.y = y2 + radius3 * Math.sin(angle2);

  if (tripleDeep) {
    allPoints.push({x: center3.x, y: center3.y});
  }

  translate(x2, y2);
  rotate(angle2);
  fill('blue');
  ellipse(radius3, 0, 4, 4);
  pop();


  // Third moon:
  push();
  var x3 =  center3.x;
  var y3 =  center3.y;

  center4.x = x3 + radius4 * Math.cos(angle3);
  center4.y = y3 + radius4 * Math.sin(angle3);

  if (quadDeep) {
    allPoints.push({x: center4.x, y: center4.y});
  }

  translate(x3, y3);
  rotate(angle3);
  fill('purple');
  ellipse(radius4, 0, 4, 4);
  pop();



  // if angle1 is n*angle, then will createa  flower with (n - 1) petals!!!
  angle += 0.01;
  angle1 += 0.042;
  angle2 += 0.05;
  angle3 += 0.06;


  allPoints.forEach(function(point) {
    noStroke();
    fill(253);
    ellipse(point.x, point.y, 2, 2);
  });
} // end draw
