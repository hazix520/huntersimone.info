function createFaces(level) {

  var num1 = 1
  var num2 = 2
  var num3 = 3
  var num4 = 4
  //var num5 = 5

 
  var bounce
	
  if (Math.random() > 0.5) {
    bounce = false
  } else {
    bounce = true
  }
  
  //determines which image will be wanted
  var wantedImg = Math.round(Math.random() * (img.length -1))
  
  createDecoys(num1, wantedImg, bounce);  
  createWanted(wantedImg, bounce);
	
  createDecoys(num2, wantedImg, bounce);
  createDecoys(num3, wantedImg, bounce);
  createDecoys(num4, wantedImg, bounce);
}

function createWanted(wantedImg,bounce) {

  //possible patterns
  var patterns = new Array()
  
  var patTypeNo = Math.random()
  var speedy = 1
  var speedx = 1
	
  if (!bounce) {
    patterns[0] = "static"
    patterns[1] = "sineX"
    patterns[2] = "cosineX"
    patterns[3] = "sineY"
    patterns[4] = "cosineY"
    patterns[5] = "linear"
  }
	else if(bounce){
		patterns[0] = "linear"
		bounce = true
		var speedy = Math.random() + 1
    	var speedx = Math.random() + 1
	}
  
  
  

  //wanted pattern
  var patternW = patterns[Math.round(Math.random() * patterns.length - 1)]
  var freqW = Math.random() * 0.5 + 0.5
  var ampW = 8 * Math.random() + 5
  //wanted face
  for (var i = 0; i < 1; i++) {

    var wface = new Object()

    var startXPos = Math.round(Math.random() * canvas.width);
    var startYPos = Math.round(Math.random() * 450) +220;

    var image = img[wantedImg]

    if (patternW == "static") {
      patternW = "linear"
    }

    //x + y direction
	var xDirW, yDirW
    if (Math.random() > 0.49) {
      xDirW = 1
    } else {
      xDirW = -1
    }
    if (Math.random() > 0.49) {
      yDirW = 1
    } else {
      yDirW = -1
    }

    wface.x = startXPos
    wface.y = startYPos
    wface.xDir = xDirW
    wface.yDir = yDirW
    wface.pat = patternW
    wface.image = image
    wface.speedy = speedy
    wface.speedx = speedx
    wface.freq = freqW
    wface.amp = ampW
	wface.bounce = bounce

	wanted = new Array
    wanted[i] = wface

    
  }
}

function createDecoys(num, wantedImg,bounce) {

  //possible patterns
var patterns = new Array()
var speedy = 1
var speedx = 1

if (!bounce) {
  patterns[0] = "static"
  patterns[1] = "sineX"
  patterns[2] = "cosineX"
  patterns[3] = "sineY"
  patterns[4] = "cosineY"
  patterns[5] = "linear"
}else if (bounce){
	patterns[0] = "linear"
	var speedy = Math.random() + 1
    var speedx = Math.random() + 1
}
  

  //used to increase amount as level increases
  var levelMul
  var levelBoost
  if (level <= 50) {
    levelMult = level / 50
	levelBoost = level + 1
  } else{
    levelMult = (level-50)/50
	  levelBoost = level-50
  }


  //f1 variables
  var amount1 = Math.round(Math.random() * 10 * levelMult + levelBoost)
  //var amount1 = 10
  //f1 pattern
  var pattern1 = patterns[Math.round(Math.random() * (patterns.length - 1))]
  //f1 amp
  var amp1 = 8 * Math.random() + 5
  //f1 freq
  var freq1 = Math.random() * 0.5 + 0.5
  //f1 directions
  var xDir1, yDir1
  if (Math.random() > 0.49) {
    xDir1 = 1
  } else {
    xDir1 = -1
  }
  if (Math.random() > 0.49) {
    yDir1 = 1
  } else {
    yDir1 = -1
  }
  //image1
  var image1 = imageGen(image1, num, wantedImg)
  //console.log("img " +image1)

  //Faces 1
  for (var i = 0; i < amount1; i++) {

    var face = new Object()
    //Generate variables
    //starting positions
    var startXPos = Math.round(Math.random() * canvas.width);
    var startYPos = Math.round(Math.random() * 450) +220;
    //determines image that is != wanted image
    var image = img[image1]
    //bounce dir
		if (bounce) {
		  if (Math.random() > 0.49) {
		    xDir1 = 1
		  } else {
		    xDir1 = -1
		  }
		  if (Math.random() > 0.49) {
		    yDir1 = 1
		  } else {
		    yDir1 = -1
		  }
		}
    

    //console.log(Math.sin(counter/1))
    face.amp = amp1
    face.freq = freq1 
    face.x = startXPos
    face.y = startYPos
    face.xDir = xDir1
    face.yDir = yDir1
    face.pat = pattern1
    face.image = image
    face.speedy = speedy
    face.speedx = speedx
	face.bounce = bounce

    if (num == 1) {
		faces1[i] = face
		//console.log("faces created for faces1")
    } else if (num == 2) {
		faces2[i] = face
		//console.log("faces created for faces2")
    } else if (num == 3) {
      faces3[i] = face
		//console.log("faces created for faces3")
    } else if (num == 4) {
      faces4[i] = face
		//console.log("faces created for faces4")
    } 

  }

}

function imageGen(image1, num, wantedImg) {

  if (wantedImg + num < 5) {
    image1 = wantedImg + num
  } else {
    image1 = wantedImg + num - 5
  }
	//console.log("level " +level + "----------------")
	//console.log("wanted " + wantedImg)
	//console.log("num " + num)
	//console.log("img " +image1)

  return image1
}
