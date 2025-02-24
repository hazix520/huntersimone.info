function drawFaces(level) {
  
  var num1 = 1
  var num2 = 2
  var num3 = 3
  var num4 = 4


  drawDecoys(num1)
	
  if(level > 50){
	  drawDecoys(num4)
  }
	
  if(level > 200){
	  drawDecoys(num3)
  }

  drawWanted()
	
  if(level > 20){
	  drawDecoys(num2)
  }
  
}

function drawWanted() {
  
	var xBuffer = 32
	var yBuffer = 48
	
	
	//draw wanted
  for (var i = 0; i < wanted.length; i++) {

    if (wanted[i].pat == "sineY") {
      wanted[i].y += Math.sin(counter / wanted[i].freq) * wanted[i].amp + wanted[i].speedy * wanted[i].yDir
    } else if (wanted[i].pat == "cosineY") {
      wanted[i].y += Math.cos(counter / wanted[i].freq) * wanted[i].amp + wanted[i].speedy * wanted[i].yDir
    } else {
      wanted[i].y += wanted[i].speedy * wanted[i].yDir
    }
	  
	  
    //Y Buffers depending on patType
	var posterArea = 220

	if (wanted[i].bounce == false) {
	  if (wanted[i].y > canvas.height + yBuffer) {
	    wanted[i].y = posterArea
	  }
	  if (wanted[i].y < posterArea -yBuffer) {
	    wanted[i].y = canvas.height + yBuffer
	  }
	}else{
		//bounce off top
		if (wanted[i].y > canvas.height) {
	    wanted[i].yDir = -1
	  }
	  if (wanted[i].y < posterArea) {
	    wanted[i].yDir =  1
	  }
	}
    

    if (wanted[i].pat == "sineX") {
      wanted[i].x += Math.sin(counter / wanted[i].freq) * wanted[i].amp + wanted[i].speedx * wanted[i].xDir
    } else if (wanted[i].pat == "cosineX") {
      wanted[i].x += Math.cos(counter / wanted[i].freq) * wanted[i].amp + wanted[i].speedx * wanted[i].xDir
    } else {
      wanted[i].x += wanted[i].speedx * wanted[i].xDir 
    }
	  
	  
	if (wanted[i].bounce == false) {
		//X Buffers
    if (wanted[i].x > canvas.width + xBuffer*2) {
      wanted[i].x = 0
    }
    if (wanted[i].x < -xBuffer) {
      wanted[i].x = canvas.width + xBuffer
    }
	}else{
		if (wanted[i].x > canvas.width + xBuffer) {
	    wanted[i].xDir = -1
	  }
	  if (wanted[i].x < xBuffer*2) {
	    wanted[i].xDir =  1
	  }
	}
    
	  
	  
	  
    ctx.save();
    ctx.beginPath();
    // ctx.arc(wanted[i].x, wanted[i].y, wanted[i].rad2, 0, Math.PI*2);
    ctx.translate(wanted[i].x, wanted[i].y);
	  //console.log(wanted[i].image)
    ctx.drawImage(wanted[i].image, -72, -72, 72, 72);
    ctx.closePath();
    ctx.fillStyle = wanted[i].col;
    ctx.fill();
    ctx.restore();

  }
}

function drawDecoys(num) {

	
	
  if (num == 1) {
    var array = faces1
  } else if (num == 2) {
    var array = faces2
  } else if (num == 3) {
    var array = faces3
  } else if (num == 4) {
    var array = faces4
  } 
//console.log(array)


	
  //draw array
  for (var i = 0; i < array.length; i++) {
    //moves face2 y axis
    //Determines pattern and moves face2 x axis
    if (array[i].pat == "sineY") {
      array[i].y += Math.sin(counter / array[i].freq) * array[i].amp + array[i].speedy * array[i].yDir
    } else if (array[i].pat == "cosineY") {
      array[i].y += Math.cos(counter / array[i].freq) * array[i].amp + array[i].speedy * array[i].yDir
    } else if (array[i].pat == "static") {
      array[i].y += 0
    } else {
      array[i].y += array[i].speedy * array[i].yDir
    }
	  
	 var yBuffer = 48
	 var posterArea = 220
	 
	 
	if (array[i].bounce == false) {
	  //y axis buffers
	  if (array[i].y > canvas.height + yBuffer) {
	    array[i].y = posterArea
	  }
	  if (array[i].y <  posterArea - yBuffer) {
	    array[i].y = canvas.height + yBuffer
	  }
	}else{
		//bounce off top
		if (array[i].y > canvas.height) {
	    array[i].yDir = -1
	  }
	  if (array[i].y < posterArea) {
	    array[i].yDir =  1
	  }
	}
    
    //Determines pattern and moves face1 x axis
    //console.log(array[i].pat)
    if (array[i].pat == "sineX") {
      array[i].x += Math.sin(counter / array[i].freq) * array[i].amp + array[i].speedx * array[i].xDir
    } else if (array[i].pat == "cosineX") {
      array[i].x += Math.cos(counter / array[i].freq) * array[i].amp + array[i].speedx * array[i].xDir
    } else if (array[i].pat == "static") {
      array[i].x += 0
    } else {
      array[i].x += array[i].speedx * array[i].xDir
    }
	  
	 var xBuffer = 32
	 
	if (array[i].bounce == false) {
	  //x axis buffers
	  if (array[i].x > canvas.width + xBuffer*2) {
	    array[i].x = 0
	  }
	  if (array[i].x < -xBuffer) {
	    array[i].x = canvas.width + xBuffer
	  }
	}else{
		if (array[i].x > canvas.width + xBuffer) {
	    array[i].xDir = -1
	  }
	  if (array[i].x < xBuffer*2) {
	    array[i].xDir =  1
	  }
	}
    

	  
	 
    //Draw Faces
    //aPat = Math.sin(counter/faces[i].freq)*faces[i].amp
    ctx.save();
    ctx.beginPath();
    ctx.translate(array[i].x, array[i].y);
    //console.log(Math.sin(counter/5)* 5 +(counter*30 - 30))
    ctx.drawImage(array[i].image, -72, -72, 72, 72);
    ctx.closePath();
    ctx.fillStyle = array[i].col;
    ctx.fill();
    ctx.restore();
	  


  }
}

