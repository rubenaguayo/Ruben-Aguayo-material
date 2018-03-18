
var rover = {
 direction: 'N',
 x: 0,
 y: 0,
 travelLog: [[0,0]]
};

function turnLeft(rover){
  switch (rover.direction){
    case 'N':
    console.log('W');
    rover.direction = 'W';
    break;
    case 'W':
    console.log('S');
    rover.direction = 'S';
    break;
    case 'S':
    console.log('E');
    rover.direction = 'E';
    break;
    case 'E':
    console.log('N');
    rover.direction = 'N';
    break;
    default:  
    console.log('wrong direction. Redirected to direction north');
    console.log('N');
    rover.direction = 'N';
    break; 
  }
  console.log("turnLeft was called! DIRECTION: "+rover.direction);
}

function turnRight(rover){
  switch (rover.direction){
    case 'N':
    console.log('E');
    rover.direction = 'E';
    break;
    case 'W':
    console.log('N');
    rover.direction = 'N';
    break;
    case 'S':
    console.log('W');
    rover.direction = 'W';
    break;
    case 'E':
    console.log('S');
    rover.direction = 'S';
    break;
    default:
    console.log('wrong direction. Redirected to direction north');
    console.log('N');
    rover.direction = 'N';
    break; 
  }
  console.log("turnRIGHT was called! DIRECTION: "+rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called")
  
  var hasMoved = false;

  switch(rover.direction){
    case 'N':
    if(rover.y > 0){  
      rover.y -= 1;
      hasMoved = true;
    }
    break;
    case 'W':
    if(rover.x > 0){  
      rover.x -= 1;
      hasMoved = true;
    }
    break;
    case 'S':
    if(rover.y < 9){  
      rover.y += 1;
      hasMoved = true;
    }
    break;
    case 'E':
    if(rover.x < 9){  
      rover.x += 1;
      hasmoved = true;
    }
    break;
  }
  if(hasmoved){
    var travellogItinerary = rover.travelLog.length;  
    rover.travelLog[travellogItinerary] = []; 
    rover.travelLog[travellogItinerary][0] = rover.x;
    rover.travelLog[travellogItinerary][1] = rover.y;
  }
console.log("Rover position is: ["+rover.x+","+rover.y+"]");
}

function commands (rover,movements) {

  for(i=0;i<movements.length;i++){

    switch(movements[i]){
      case 'f':
        moveForward(rover);
      break;
      case 'r':
        turnRight(rover);
      break;
      case 'l':
        turnLeft(rover);
      break;
    }

  }

  for(j=0;j<rover.travelLog.length;j++){
    console.log("["+rover.travelLog[j][0]+", "+rover.travelLog[j][1]+"]");  
  }
}