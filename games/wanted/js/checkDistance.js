function checkDistance(){
	for(var i = 0; i< wanted.length;i++){
		
	var dX = mouseX-wanted[i].x + 36
	var dY = mouseY- wanted[i].y + 36
		
	var Dist = Math.sqrt(dX*dX + dY*dY)
		
	if (Dist < 60 && mouseX > 0 && mouseX < canvas.width && mouseY > 130 && mouseY < canvas.height) {
		level++
		wanted = []
		faces1 = []
		faces2 = []
		faces3 = []
		faces4 = []
		createFaces()
		timer+= 3
		document.getElementById('hit').play()
	}
	else if(mouseX > 0 && mouseX < canvas.width && mouseY > 130 && mouseY < canvas.height && level > 1){
		timer-= 5
		document.getElementById('miss').play()
	}
	}
}