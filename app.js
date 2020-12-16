console.log('helloooooo world');


var car = document.getElementById('car'),
    carStyle = car.style,
    steps = 5,
    positionX,
    positionY,
    scoreElement = document.getElementById('score'),
    score = 00000;


document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  //
  //  UP
  //
  if (e.keyCode == '38') {
    positionY = (parseInt( carStyle.bottom.replace('%', '')) + steps) + '%';
    console.log('UP ' + positionY);
    carStyle.bottom = positionY;
  }
  //
  //  DOWN
  //
  else if (e.keyCode == '40') {
    positionY = (parseInt( carStyle.bottom.replace('%', '')) - steps) + '%';
    console.log('DOWN ' + positionY);
    carStyle.bottom = positionY;
  }
  //
  //  LEFT
  //
  else if (e.keyCode == '37') {
    positionX = (parseInt( carStyle.left.replace('%', '')) - steps) + '%';
    console.log('LEFT ' + positionX);
    carStyle.left = positionX;
  }
  //
  //  RIGHT
  //
  else if (e.keyCode == '39') {
    positionX = (parseInt( carStyle.left.replace('%', '')) + steps) + '%';
    console.log('RIGHT ' + positionX);
    carStyle.left = positionX;
  }
  //
  //  JUMP
  //
  else if (e.keyCode == '32') {
    console.log('JUMP');

    car.classList.toggle('change-direction');
  }
}





//
//  Set default score
//
scoreElement.innerHTML = score + 1;

