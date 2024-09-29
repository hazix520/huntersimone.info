///////////////////////////////////////////////////////////////////////
// DECLARE requestAnimFrame

var rAF = window.requestAnimFrame ||
window.mozRequestAnimFrame ||
window.webkitRequestAnimFrame ||
window.msRequestAnimFrame;

var fps = 30;

window.requestAnimFrame = (

function(callback) {

return rAF ||

function(callback) {
window.setTimeout(callback, 1000 / fps);
};

})();

///////////////////////////////////////////////////////////////////////
// DEFINE GLOBAL VARIABLES HERE

var canvas;
var ctx;
canvas = document.getElementById("fmxCanvas");
ctx = canvas.getContext("2d");

var canvas1;
var ctx1;
canvas1 = document.createElement("canvas");
ctx1 = canvas1.getContext("2d");

canvas1.width = 1100;
canvas1.height = 700;

var canvas2;
var ctx2;
canvas2 = document.createElement("canvas");
ctx2 = canvas2.getContext("2d");

canvas2.width = 1100;
canvas2.height = 700;

var canvas3;
var ctx3;
canvas3 = document.createElement("canvas");
ctx3 = canvas3.getContext("2d");

canvas3.width = 1100;
canvas3.height = 700;

var canvas4;
var ctx4;
canvas4 = document.createElement("canvas");
ctx4 = canvas4.getContext("2d");

canvas4.width = 1100;
canvas4.height = 700;

var display;
display = document.getElementById('display');

var counter;

///////////////////////////////////////////////////////////////////////
// DEFINE YOUR GLOBAL VARIABLES HERE
var mario = new Image();
	mario = document.getElementById('mario');
	
///////////////////////////////////////////////////////////////////////
// CALL THE EVENT LISTENERS

window.addEventListener("load", setup, false);
//////////////////////////////////////////////////////////////////////
// ADD EVENT LISTENERS

canvas.addEventListener("mousemove", mousePos, false);

//////////////////////////////////////////////////////////////////////
// MOUSE COORDINATES

var stage, mouseX, mouseY;

function mousePos(event) {
stage = canvas.getBoundingClientRect();
mouseX = event.clientX - stage.left;
mouseY = event.clientY - stage.top;
}

/////////////////////////////////////////////////////////////////////
// INITIALIZE THE STARTING FUNCTION

function setup() {

/////////////////////////////////////////////////////////////////////
// DECLARE STARTING VALUES OF GLOBAL VARIABLES

counter = 0;
mouseX = canvas.width/2;
mouseY = canvas.height/2;

/////////////////////////////////////////////////////////////////////
// CALL SUBSEQUENT FUNCTIONS, as many as you need

clear(); // COVER TRANSPARENT CANVAS OR CLEAR CANVAS

draw(); // THIS IS WHERE EVERYTHING HAPPENS

}

////////////////////////////////////////////////////////////////////
// CLEAR THE CANVAS FOR ANIMATION
// USE THIS AREA TO MODIFY BKGD

function clear() {

ctx.clearRect(0,0,canvas.width, canvas.height);
ctx1.clearRect(0,0,canvas.width, canvas.height);
ctx2.clearRect(0,0,canvas.width, canvas.height);

// clear additional ctxs here if you have more than canvas1

}

////////////////////////////////////////////////////////////////////
// THIS IS WHERE EVERYTHING HAPPENS

function draw() {

counter += 0.1; // EASIER FOR SINE COSINE FUNCTIONS

if (counter > Math.PI*200) { counter = 0; } // RESET COUNTER

clear(); // USE THIS TO REFRESH THE FRAME AND CLEAR CANVAS

////////////////////////////////////////////////////////////////////
// >>>START HERE>>>START HERE>>>START HERE>>>START HERE>>>START HERE

var skygrd = ctx.createRadialGradient(800,1000,1000,392,634,10)
	skygrd.addColorStop(0,"rgba(1,0,14,1.00)")
	skygrd.addColorStop(.9,"rgba(14,14,88,1.00)")
	skygrd.addColorStop(1,"rgba(81,81,255,1.00)")

var planetgrd = ctx.createLinearGradient(835,633,785,495)	
	planetgrd.addColorStop(0,"rgba(22,33,51,1.00)")
	planetgrd.addColorStop(.7,"rgba(17,75,92,1.00)")
	planetgrd.addColorStop(1,"rgba(220,220,220,1.00)")
//--------------------
//Sky
ctx.beginPath()
	ctx.rect(0,0,1100,700)
ctx.closePath()
	ctx.fillStyle = skygrd
	ctx.fill()
//--------------------------------
//Planet
 ctx.beginPath()
	ctx.moveTo(1100,416)
	ctx.quadraticCurveTo(609,548,331,700)
	ctx.lineTo(1200,800)
ctx.closePath()
	ctx.fillStyle = planetgrd
	ctx.fill()
	ctx.lineWidth = 2
	ctx.strokeStyle = "green"
	//ctx.stroke()

//ctx.drawImage(mario,50,60)
//-------------------------------------
//Mario Colors
var hairgrd1 = ctx1.createLinearGradient(598,449,590,422)
	hairgrd1.addColorStop(0,"rgba(121,111,146,1)")
	hairgrd1.addColorStop(.1,"rgba(57,1,4,1)")
	hairgrd1.addColorStop(1,"rgba(79,46,41,1)")
	
var hairgrd2 = ctx1.createLinearGradient(602,453,603,416)
	hairgrd2.addColorStop(0,"rgba(121,111,146,1)")
	hairgrd2.addColorStop(.1,"rgba(57,1,4,1)")
	hairgrd2.addColorStop(1,"rgba(79,46,41,1)")

var hairgrd3 = ctx1.createLinearGradient(668,412,657,359)
	hairgrd3.addColorStop(0,"rgba(121,111,146,1)")
	hairgrd3.addColorStop(.1,"rgba(57,1,4,1)")
	hairgrd3.addColorStop(1,"rgba(79,46,41,1)")

var headgrd1 = ctx1.createLinearGradient(648,428,579,305)
	headgrd1.addColorStop(0,"rgba(236,188,204,1)")
	headgrd1.addColorStop(.1,"rgba(139,81,119,1)")
	headgrd1.addColorStop(.5,"rgba(244,143,133,1)")
	headgrd1.addColorStop(.9, "rgba(223,152,150,1)")
	headgrd1.addColorStop(1,"rgba(255,252,237,1)")

var stachegrd1 = ctx1.createLinearGradient(628,363,554,305)
	stachegrd1.addColorStop(0,"rgba(3,2,0,1)")
	stachegrd1.addColorStop(1,"rgba(54,38,38,1)")

var meyegrd1 = ctx1.createLinearGradient(644,345,632,325)
	meyegrd1.addColorStop(0,"rgba(165,121,157,1)")
	meyegrd1.addColorStop(1,"rgba(253,251,255,1)")
var meyegrd2 = ctx1.createLinearGradient(644,345,632,325)
	meyegrd2.addColorStop(0,"rgba(10,73,153,1)")
	meyegrd2.addColorStop(1,"rgba(62,168,218,1)")
var meyegrd3 = ctx1.createRadialGradient(620,345,2,618,347,5)
	meyegrd3.addColorStop(0,"rgba(7,5,78,1)")
	meyegrd3.addColorStop(1,"rgba(0,6,36,1)")
	
var nosegrd = ctx1.createLinearGradient(600,326,547,284)
	nosegrd.addColorStop(0,"rgba(139,81,119,1)")
	nosegrd.addColorStop(.5,"rgba(244,143,133,1)")
	nosegrd.addColorStop(.7, "rgba(223,152,150)")
	nosegrd.addColorStop(1,"rgba(252,255,248,1)")
	
var eyebrowgrd = ctx1.createLinearGradient(669,316,653,328)
	eyebrowgrd.addColorStop(0,"rgba(102,21,30,1)")
	eyebrowgrd.addColorStop(.3,"rgba(39,8,6,1)")
	eyebrowgrd.addColorStop(1,"rgba(25,1,1,1)")
	
var hatgrd1 = ctx1.createLinearGradient(736,358,626,333)
	hatgrd1.addColorStop(0,"rgba(227,204,222,1)")
	hatgrd1.addColorStop(.1,"rgba(149,62,71,1)")
	hatgrd1.addColorStop(.3,"rgba(155,1,1,1)")
	hatgrd1.addColorStop(.5,"rgba(155,1,1,1)")
	hatgrd1.addColorStop(1,"rgba(228,2,14,1)")
	
var hatgrd2 = ctx1.createLinearGradient(672,373,612,277)
	hatgrd2.addColorStop(0,"rgba(155,1,1,1)")
	hatgrd2.addColorStop(.05,"rgba(239,158,160,1)")
	hatgrd2.addColorStop(.6,"rgba(228,2,14,1)")
	hatgrd2.addColorStop(1,"rgba(155,1,1,1)")

var hatgrd3 = ctx1.createLinearGradient(707,266,662,291)
	hatgrd3.addColorStop(0,"rgba(155,1,1,1)")
	hatgrd3.addColorStop(.05,"rgba(239,158,160,1)")
	hatgrd3.addColorStop(.6,"rgba(228,2,14,1)")
	hatgrd3.addColorStop(1,"rgba(155,1,1,1)")

var eargrd1 = ctx1.createLinearGradient(657,445,642,408)
	eargrd1.addColorStop(0,"rgba(175,73,69,1)")
	eargrd1.addColorStop(1,"rgba(200,130,150)")
var eargrd2 = ctx1.createLinearGradient(662,457,639,393)
	eargrd2.addColorStop(0,"rgba(236,188,204,1)")
	eargrd2.addColorStop(.2,"rgba(139,81,119,1)")
	eargrd2.addColorStop(.5,"rgba(139,81,119,1)")
	eargrd2.addColorStop(1,"rgba(244,143,133,1)")
	
//Mario
//M-B-hair1
ctx1.beginPath()
	ctx1.moveTo(571,425)
	ctx1.quadraticCurveTo(573,450,596,449)
	ctx1.quadraticCurveTo(618,433,599,418)
	ctx1.quadraticCurveTo(578,404,571,425)
ctx1.closePath()
	ctx1.fillStyle = hairgrd1
	ctx1.fill()
//M-B-hair2
ctx1.beginPath()
	ctx1.moveTo(595,415)
	ctx1.bezierCurveTo(570,417,606,466,621,448)
	ctx1.quadraticCurveTo(623,444,623,440)
	ctx1.quadraticCurveTo(649,419,595,415)
ctx1.closePath()
	ctx1.fillStyle = hairgrd2
	ctx1.fill()
//M-Head
ctx1.beginPath()
	ctx1.moveTo(586,420)
	ctx1.quadraticCurveTo(615,437,688,395)
	ctx1.quadraticCurveTo(702,268,643,275)
	ctx1.quadraticCurveTo(546,304,542,328)
	ctx1.quadraticCurveTo(528,374,586,420)
ctx1.closePath()
	ctx1.fillStyle = headgrd1
	ctx1.fill()
//M-Hair-3-above ear
ctx1.beginPath()
	ctx1.moveTo(685,366)
	ctx1.quadraticCurveTo(674,374,660,379)
	ctx1.bezierCurveTo(644,373,634,387,652,394)
	ctx1.bezierCurveTo(633,390,626,403,643,413)
	ctx1.quadraticCurveTo(705,414,685,366)
ctx1.closePath()
	ctx1.fillStyle = hairgrd3
	ctx1.fill()
//M-Ear
ctx1.beginPath()
	ctx1.moveTo(619,421)
	ctx1.bezierCurveTo(635,479,712,431,667,406)
	ctx1.quadraticCurveTo(647,402,637,409)
	ctx1.quadraticCurveTo(631,419,619,421)
ctx1.closePath()
	ctx1.fillStyle = eargrd2
	ctx1.fill()
//M-Inner-Ear
ctx1.beginPath()
	ctx1.arc(650,425,12,0*Math.PI,2*Math.PI)
ctx1.closePath()
	ctx1.fillStyle = eargrd1
	ctx1.fill()
//M-Hat top
ctx1.beginPath()
	ctx1.moveTo(702,401)
	ctx1.bezierCurveTo(754,325,727,250,659,258)
	ctx1.quadraticCurveTo(638,265,649,278)
	ctx1.quadraticCurveTo(690,296,676,370)
	ctx1.quadraticCurveTo(678,379,675,392)
	ctx1.quadraticCurveTo(662,425,677,429)
	ctx1.quadraticCurveTo(694,434,702,401)
ctx1.closePath()
	ctx1.fillStyle = hatgrd1
	ctx1.fill()
//M-Hat-M-Circle
ctx1.beginPath()
	ctx1.moveTo(679,293)
	ctx1.quadraticCurveTo(712,292,699,268)
	ctx1.quadraticCurveTo(683,256,662,263)
	ctx1.quadraticCurveTo(651,284,679,293)
ctx1.closePath()
	ctx1.fillStyle = "white"
	ctx1.fill()
//M-Hat-M
ctx1.beginPath()
	ctx1.moveTo(686,288)
	ctx1.lineTo(696,270)
	ctx1.lineTo(683,269)
	ctx1.lineTo(684,262)
	ctx1.lineTo(661,265)
	ctx1.lineTo(667,270)
	ctx1.lineTo(678,267)
	ctx1.lineTo(676,273)
	ctx1.lineTo(688,273)
	ctx1.lineTo(676,285)
	ctx1.lineTo(686,288)
ctx1.closePath()
	ctx1.fillStyle = hatgrd3
	ctx1.fill()
//M-Hat-Base-Highlight
//ctx1.beginPath()
//	ctx1.moveTo(685,359)
//	ctx1.quadraticCurveTo(692,297,676,293)
//	ctx1.quadraticCurveTo(678,352,685,359)
//ctx1.closePath()
//	ctx1.fillStyle = hatgrd
//	ctx1.fill()
//ctx1.drawImage(mario,50,60)
//M Hat Shadow
ctx1.beginPath()
	ctx1.moveTo(610,288)
	ctx1.quadraticCurveTo(645,296,660,380)
	ctx1.quadraticCurveTo(672,375,677,367)
	ctx1.quadraticCurveTo(684,309,664,292)
	ctx1.quadraticCurveTo(641,263,610,288)
ctx1.closePath()
//	ctx1.lineWidth = 1
//	ctx1.strokeStyle = "green"
//	ctx1.stroke()
	ctx1.fillStyle = "rgba(0,0,50,.04)"
	//ctx1.fill()
//M-Hat-Rim
ctx1.beginPath()
	ctx1.moveTo(676,370)
	ctx1.quadraticCurveTo(682,304,638,287)
	ctx1.quadraticCurveTo(630,275,598,296)
	ctx1.quadraticCurveTo(595,256,615,246)
	ctx1.quadraticCurveTo(656,231,680,297)
	ctx1.quadraticCurveTo(689,369,676,370)
ctx1.closePath()
	ctx1.fillStyle = hatgrd2
	ctx1.fill()
//M-Face
//M-L eyebrow
ctx1.beginPath()
	ctx1.moveTo(640,312)
	ctx1.quadraticCurveTo(667,316,666,338)
	ctx1.bezierCurveTo(683,326,664,301,640,312)
ctx1.closePath()
	ctx1.fillStyle = eyebrowgrd
	ctx1.fill()
//M-R eyebrow
ctx1.beginPath()
	ctx1.moveTo(622,297)
	ctx1.quadraticCurveTo(630,285,615,288)
	ctx1.bezierCurveTo(630,279,644,287,622,297)
ctx1.closePath()
	ctx1.fillStyle = eyebrowgrd
	ctx1.fill()
//Moustache
ctx1.beginPath()
	ctx1.moveTo(633,358)
	ctx1.quadraticCurveTo(619,378,603,358)
	ctx1.quadraticCurveTo(588,368,581,347)
	ctx1.quadraticCurveTo(561,345,559,330)
	ctx1.quadraticCurveTo(543,330,547,316)
	ctx1.quadraticCurveTo(548,305,565,301)
	ctx1.quadraticCurveTo(583,335,633,358)
//ctx1.closePath()
	ctx1.fillStyle = stachegrd1
	ctx1.fill()
//M-R-Eye
//White
ctx1.beginPath()
	ctx1.moveTo(604,310)
	ctx1.bezierCurveTo(628,304,615,287,600,297)
ctx1.closePath()
	ctx1.fillStyle = meyegrd1
	ctx1.fill()
//Blue
ctx1.beginPath()
	ctx1.arc(608,306,4,0,2*Math.PI)
//ctx1.closePath()
	ctx1.fillStyle = meyegrd2
	ctx1.fill()
//M-L-Eye
//white
ctx1.beginPath()
	ctx1.moveTo(606,337)
	ctx1.bezierCurveTo(646,287,666,350,624,351)
	ctx1.quadraticCurveTo(607,344,606,337)
ctx1.closePath()
	ctx1.fillStyle = meyegrd1
	ctx1.fill()
//blue
ctx1.beginPath()
	ctx1.moveTo(609,341)
	ctx1.bezierCurveTo(626,316,654,345,624,351)
	ctx1.quadraticCurveTo(606,345,609,341)
ctx1.closePath()
	ctx1.fillStyle = meyegrd2
	ctx1.fill()
//d-blue
ctx1.beginPath()
	ctx1.moveTo(612,345)
	ctx1.bezierCurveTo(627,327,643,341,623,351)
	ctx1.quadraticCurveTo(613,348,612,345)
ctx1.closePath()
	ctx1.fillStyle = meyegrd3
	ctx1.fill()
//highlight
ctx1.beginPath()
	ctx1.arc(628,341,2.5,0,2*Math.PI)
ctx1.closePath()
	ctx1.fillStyle = "rgba(203,192,232,1)"
	ctx1.fill()
//Nose
ctx1.beginPath()
	ctx1.moveTo(603,330)
	ctx1.bezierCurveTo(620,297,593,256,563,280)
	ctx1.bezierCurveTo(539,303,565,338,603,330)
ctx1.closePath()
	ctx1.fillStyle = nosegrd
	ctx1.fill()
//Mario-Body---------------------------
//ctx1.drawImage(mario,50,60)
var rbootgrd = ctx1.createLinearGradient(472,26,560,169)
	rbootgrd.addColorStop(0,"rgba(50,1,4,1)")
	rbootgrd.addColorStop(.8,"rgba(100,33,6,1)")
	rbootgrd.addColorStop(1,"rgba(182,167,174,1)")
var rbootgrd1 = ctx1.createLinearGradient(497,72,462,60)
	rbootgrd1.addColorStop(0,"rgba(68,38,36,1)")
	rbootgrd1.addColorStop(.5,"rgba(100,33,6,1)")
	rbootgrd1.addColorStop(1,"rgba(50,1,4,1)")
var rbootgrd2 = ctx1.createLinearGradient(544,108,451,109)
	rbootgrd2.addColorStop(0,"rgba(68,38,36,1)")
	rbootgrd2.addColorStop(.5,"rgba(100,33,6,1)")
	rbootgrd2.addColorStop(1,"rgba(50,1,4,1)")

var rleggrd1 = ctx1.createLinearGradient(372,193,492,219)
	rleggrd1.addColorStop(0,"rgba(206,209,242,1)")
	rleggrd1.addColorStop(.15,"rgba(3,20,108,1)")
	rleggrd1.addColorStop(.5,"rgba(3,20,108,1)")
	rleggrd1.addColorStop(.9,"rgba(5,49,158,1)")
	rleggrd1.addColorStop(1,"rgba(206,209,242,1)")
	
var lleggrd1 = ctx1.createLinearGradient(550,313,480,449)
	lleggrd1.addColorStop(0,"rgba(206,209,242,1)")
	lleggrd1.addColorStop(.15,"rgba(3,20,108,1)")
	lleggrd1.addColorStop(.5,"rgba(3,20,108,1)")
	lleggrd1.addColorStop(.9,"rgba(5,49,158,1)")
	lleggrd1.addColorStop(1,"rgba(206,209,242,1)")
	
var lleggrd2 = ctx1.createLinearGradient(549,295,507,449)
	lleggrd2.addColorStop(0,"rgba(206,209,242,1)")
	lleggrd2.addColorStop(.2,"rgba(3,20,108,1)")
	lleggrd2.addColorStop(.5,"rgba(3,20,108,1)")
	lleggrd2.addColorStop(.9,"rgba(5,49,158,1)")
	lleggrd2.addColorStop(1,"rgba(206,209,242,1)")
var lleggrd3 = ctx1.createLinearGradient(582,383,501,254)
	lleggrd3.addColorStop(0,"rgba(206,209,242,1)")
	lleggrd3.addColorStop(.5,"rgba(3,20,108,1)")
	lleggrd3.addColorStop(.9,"rgba(5,49,158,1)")
	lleggrd3.addColorStop(1,"rgba(206,209,242,1)")
var strapgrd = ctx1.createLinearGradient(615,433,501,254)
	strapgrd.addColorStop(0,"rgba(206,209,242,1)")
	strapgrd.addColorStop(.5,"rgba(3,20,108,1)")
	strapgrd.addColorStop(.9,"rgba(5,49,158,1)")
	strapgrd.addColorStop(1,"rgba(206,209,242,1)")
	
var lbootgrd1 = ctx1.createLinearGradient(489,318,430,247)
	lbootgrd1.addColorStop(0,"rgba(182,167,174,1)")
	lbootgrd1.addColorStop(.2,"rgba(100,33,6,1)")
	lbootgrd1.addColorStop(1,"rgba(50,1,4,1)")
var lbootgrd2 = ctx1.createLinearGradient(489,318,398,320)
	lbootgrd2.addColorStop(0,"rgba(78,38,39,1)")
	lbootgrd2.addColorStop(0.5,"rgba(78,38,39,1)")
	lbootgrd2.addColorStop(1,"rgba(134,90,91,1)")
var lbootgrd3 = ctx1.createLinearGradient(503,185,434,270)
	lbootgrd3.addColorStop(0,"rgba(78,38,39,1)")
	lbootgrd3.addColorStop(0.5,"rgba(78,38,39,1)")
	lbootgrd3.addColorStop(1,"rgba(134,90,91,1)")

var buttongrd = ctx1.createLinearGradient(553,361,552,307)
	buttongrd.addColorStop(0,"rgba(128,95,14,1)")
	buttongrd.addColorStop(0.5,"rgba(239,215,79,1)")
	buttongrd.addColorStop(1,"rgba(251,243,240,1)")

//ctx1.drawImage(mario,50,60)

var rglovegrd1 = ctx1.createLinearGradient(392,385,395,454)
	rglovegrd1.addColorStop(0,"rgba(253,255,249,1)")
	rglovegrd1.addColorStop(0.5,"rgba(182,159,203,1)")
	rglovegrd1.addColorStop(1,"rgba(111,121,190,1)")
var rglovegrd2 = ctx1.createLinearGradient(409,410,416,466)
	rglovegrd2.addColorStop(0,"rgba(253,255,249,1)")
	rglovegrd2.addColorStop(0.2,"rgba(209,210,228,1)")
	rglovegrd2.addColorStop(1,"rgba(111,121,190,1)")
var rglovegrd3 = ctx1.createLinearGradient(396,482,398,502)
	rglovegrd3.addColorStop(0,"rgba(253,255,249,1)")
	rglovegrd3.addColorStop(0.2,"rgba(209,210,228,1)")
	rglovegrd3.addColorStop(1,"rgba(111,121,190,1)")
var rglovegrd4 = ctx1.createLinearGradient(394,449,398,502)
	rglovegrd4.addColorStop(0,"rgba(253,255,249,1)")
	rglovegrd4.addColorStop(0.2,"rgba(209,210,228,1)")
	rglovegrd4.addColorStop(1,"rgba(111,121,190,1)")
var rarmgrd1 = ctx1.createLinearGradient(445,401,451,439)
	rarmgrd1.addColorStop(0,"rgba(243,30,36,1)")
	rarmgrd1.addColorStop(0.5,"rgba(157,1,2,1)")
	rarmgrd1.addColorStop(1,"rgba(121,1,3,1)")
//R Arm
//Fingers
ctx1.beginPath()
	ctx1.moveTo(406,473)
	ctx1.quadraticCurveTo(407,483,411,484)
	ctx1.bezierCurveTo(423,497,410,509,397,496)
	ctx1.quadraticCurveTo(387,471,406,473)
ctx1.closePath()
	ctx1.fillStyle = rglovegrd3
	ctx1.fill()
//F2
ctx1.beginPath()
	ctx1.moveTo(405,481)
	ctx1.bezierCurveTo(421,487,423,477,418,469)
	ctx1.quadraticCurveTo(392,463,405,481)
ctx1.closePath()
	ctx1.fillStyle = rglovegrd4
	ctx1.fill()
//F3
ctx1.beginPath()
	ctx1.moveTo(413,454)
	ctx1.quadraticCurveTo(421,465,411,464)
ctx1.closePath()
	ctx1.fillStyle = rglovegrd2
	ctx1.fill()
//R Hand
ctx1.beginPath()
	ctx1.moveTo(383,399)
	ctx1.quadraticCurveTo(378,397,373,396)
	ctx1.bezierCurveTo(371,374,340,385,358,410)
	ctx1.quadraticCurveTo(360,428,366,434)
	ctx1.quadraticCurveTo(362,464,382,482)
	ctx1.quadraticCurveTo(382,506,389,511)
	ctx1.bezierCurveTo(394,520,409,512,402,502)
	ctx1.quadraticCurveTo(397,493,402,481)
	ctx1.quadraticCurveTo(412,471,415,451)
	ctx1.quadraticCurveTo(411,407,383,399)
ctx1.closePath()
	ctx1.fillStyle = rglovegrd2
	ctx1.fill()
//R Glove Base
ctx1.beginPath()
	ctx1.moveTo(425,442)
	ctx1.quadraticCurveTo(410,472,381,426)
	ctx1.quadraticCurveTo(364,390,413,398)
	ctx1.quadraticCurveTo(431,413,425,442)
ctx1.closePath()
	ctx1.fillStyle = rglovegrd1
	ctx1.fill()
//R-Arm
ctx1.beginPath()
	ctx1.moveTo(475,428)
	ctx1.quadraticCurveTo(437,439,419,444)
	ctx1.quadraticCurveTo(399,439,395,420)
	ctx1.quadraticCurveTo(391,411,395,403)
	ctx1.quadraticCurveTo(453,383,438,394)
	ctx1.quadraticCurveTo(474,402,475,428)
ctx1.closePath()
	ctx1.fillStyle = rarmgrd1
	ctx1.fill()
	
//R-boot1
	ctx1.beginPath()
	ctx1.moveTo(492,79)
	ctx1.quadraticCurveTo(494,76,495,69)
	ctx1.quadraticCurveTo(468,41,441,38)
	ctx1.quadraticCurveTo(433,41,432,50)
ctx1.closePath()
	ctx1.fillStyle = rbootgrd1
	ctx1.fill()
//R-boot2
ctx1.beginPath()
	ctx1.moveTo(535,108)
	ctx1.quadraticCurveTo(541,108,542,101)
	ctx1.quadraticCurveTo(514,72,488,81)
ctx1.closePath()
	ctx1.fillStyle = rbootgrd2
	ctx1.fill()
//R-Foot
	ctx1.beginPath()
	ctx1.moveTo(416,110)
	ctx1.bezierCurveTo(407,92,411,63,431,48)
	ctx1.quadraticCurveTo(450,36,493,76)
	ctx1.quadraticCurveTo(527,88,541,106)
	ctx1.bezierCurveTo(555,151,518,184,477,160)
	ctx1.quadraticCurveTo(445,146,416,110)
ctx1.closePath()
	ctx1.fillStyle = rbootgrd
	ctx1.fill()
//L-Leg-shoulder
ctx1.beginPath()
	ctx1.moveTo(474,429)
	ctx1.quadraticCurveTo(501,441,517,439)
	ctx1.quadraticCurveTo(555,453,572,365)
	ctx1.quadraticCurveTo(562,323,543,312)
	ctx1.quadraticCurveTo(475,342,474,429)
ctx1.closePath()
	ctx1.fillStyle = lleggrd2
	ctx1.fill()
//L-Leg1---------------
ctx1.beginPath()
	ctx1.moveTo(395,385)
	ctx1.quadraticCurveTo(423,419,474,429)
	ctx1.quadraticCurveTo(540,359,513,319)
	ctx1.quadraticCurveTo(476,291,440,316)
	ctx1.quadraticCurveTo(398,309,395,385)
ctx1.closePath()
	ctx1.fillStyle = lleggrd1
	ctx1.fill()
//R-Leg
ctx1.beginPath()
	ctx1.moveTo(411,99)
	ctx1.bezierCurveTo(498,87,514,138,496,163)
	ctx1.quadraticCurveTo(465,249,440,316)
	ctx1.quadraticCurveTo(398,309,395,385)
	ctx1.quadraticCurveTo(362,352,377,289)
	ctx1.quadraticCurveTo(378,242,390,197)
	ctx1.quadraticCurveTo(393,152,406,114)
	ctx1.quadraticCurveTo(403,101,411,99)
ctx1.closePath()
	ctx1.fillStyle = rleggrd1
	ctx1.fill()
//L-leg2
ctx1.beginPath()
	ctx1.moveTo(493,369)
	ctx1.quadraticCurveTo(555,321,552,288)
	ctx1.quadraticCurveTo(542,261,521,256)
	ctx1.quadraticCurveTo(437,302,432,326)
	ctx1.quadraticCurveTo(437,334,457,330)
	ctx1.quadraticCurveTo(509,338,525,327)
	ctx1.quadraticCurveTo(501,361,493,369)
ctx1.closePath()
	ctx1.fillStyle = lleggrd3
	ctx1.fill()
//L-foot1
ctx1.beginPath()
	ctx1.moveTo(406,308)
	ctx1.quadraticCurveTo(429,342,476,312)
	ctx1.quadraticCurveTo(552,257,534,217)
	ctx1.quadraticCurveTo(518,181,477,183)
	ctx1.quadraticCurveTo(417,253,406,308)
ctx1.closePath()
	ctx1.fillStyle = lbootgrd1
	ctx1.fill()
//L-foot2
ctx1.beginPath()
	ctx1.moveTo(427,244)
	ctx1.lineTo(420,242)
	ctx1.bezierCurveTo(364,288,411,346,458,289)
ctx1.closePath()
	ctx1.fillStyle = lbootgrd2
	ctx1.fill()
//L-foot5
ctx1.beginPath()
	ctx1.moveTo(425,245)
	ctx1.bezierCurveTo(462,122,566,208,455,288)
ctx1.closePath()
	ctx1.fillStyle = "rgba(135,94,110,1)"
	ctx1.fill()
//L-foot4
ctx1.beginPath()
	ctx1.moveTo(425,245)
	ctx1.bezierCurveTo(462,122,554,207,455,288)
ctx1.closePath()
	ctx1.fillStyle = lbootgrd3
	ctx1.fill()
//Strap1
ctx1.beginPath()
	ctx1.moveTo(583,401)
	ctx1.quadraticCurveTo(588,365,543,325)
	ctx1.bezierCurveTo(532,326,534,342,541,349)
	ctx1.quadraticCurveTo(562,362,583,401)
ctx1.closePath()
	ctx1.fillStyle = strapgrd
	ctx1.fill()
//Button
ctx1.beginPath()
	ctx1.moveTo(540,335)
	ctx1.lineTo(545,346)
	ctx1.quadraticCurveTo(553,352,562,358)
	ctx1.bezierCurveTo(574,332,547,322,540,335)
ctx1.closePath()
	ctx1.fillStyle = buttongrd
	ctx1.fill()
//----------------------
//Mario L-Arm
//ctx1.drawImage(mario,50,60)
var larmgrd2 = ctx1.createLinearGradient(493,470,579,463)
	larmgrd2.addColorStop(0,"rgba(202,199,230,1)")
	larmgrd2.addColorStop(0.1,"rgba(139,0,7,1)")
	larmgrd2.addColorStop(0.7,"rgba(139,0,7,1)")
	larmgrd2.addColorStop(1,"rgba(190,40,50,1)")
var larmgrd3 = ctx1.createLinearGradient(534,451,552,640)
	larmgrd3.addColorStop(0,"rgba(255,243,251,1)")
	larmgrd3.addColorStop(0.1,"rgba(111,101,161,1)")
	//larmgrd3.addColorStop(0.3,"rgba(136,130,174,1)")
	larmgrd3.addColorStop(0.4,"rgba(73,73,145,1)")
	larmgrd3.addColorStop(0.9,"rgba(159,163,210,1)")
	larmgrd3.addColorStop(1,"rgba(118,110,157,1)")
var larmgrd4 = ctx1.createLinearGradient(587,427,428,685)
	larmgrd4.addColorStop(0,"rgba(255,243,251,1)")
	//larmgrd4.addColorStop(0.1,"rgba(111,101,161,1)")
	larmgrd4.addColorStop(0.26,"rgba(136,130,174,1)")
	larmgrd4.addColorStop(0.4,"rgba(73,73,145,1)")
	larmgrd4.addColorStop(0.9,"rgba(159,163,210,1)")
	larmgrd4.addColorStop(1,"rgba(118,110,157,1)")
	
//M L-Arm1
ctx1.beginPath()
	ctx1.moveTo(562,367)
	ctx1.bezierCurveTo(502,382,494,445,527,436)
	ctx1.quadraticCurveTo(612,428,562,367)
ctx1.closePath()
	ctx1.fillStyle = larmgrd2
	ctx1.fill()
//M L-Arm2
ctx1.beginPath()
	ctx1.moveTo(517,425)
	ctx1.quadraticCurveTo(524,452,526,468)
	ctx1.quadraticCurveTo(528,496,529,502)
	ctx1.quadraticCurveTo(571,516,592,494)
	ctx1.quadraticCurveTo(593,485,589,462)
	ctx1.quadraticCurveTo(587,418,581,398)
	ctx1.quadraticCurveTo(532,378,517,425)
ctx1.closePath()
	ctx1.fillStyle = larmgrd2
	ctx1.fill()
//L Hand1
ctx1.beginPath()
	ctx1.moveTo(524,541)
	ctx1.quadraticCurveTo(521,582,537,595)
	ctx1.quadraticCurveTo(536,605,539,607)
	ctx1.quadraticCurveTo(536,619,537,621)
	ctx1.bezierCurveTo(527,640,541,659,555,627)
	ctx1.quadraticCurveTo(559,618,559,598)
	ctx1.quadraticCurveTo(562,614,566,618)
	ctx1.quadraticCurveTo(565,632,568,634)
	ctx1.bezierCurveTo(565,641,587,662,588,632)
	ctx1.quadraticCurveTo(591,620,587,613)
	ctx1.quadraticCurveTo(584,605,582,598)
	ctx1.quadraticCurveTo(589,612,591,614)
	ctx1.quadraticCurveTo(592,626,600,633)
	ctx1.bezierCurveTo(606,646,628,651,622,626)
	ctx1.quadraticCurveTo(620,618,616,612)
	ctx1.quadraticCurveTo(614,601,610,596)
	ctx1.quadraticCurveTo(620,605,627,619)
	ctx1.bezierCurveTo(643,634,662,623,643,598)
	ctx1.quadraticCurveTo(641,587,627,579)
	ctx1.quadraticCurveTo(603,548,602,522)
	ctx1.quadraticCurveTo(611,506,590,493)
	ctx1.quadraticCurveTo(558,483,520,507)
	ctx1.quadraticCurveTo(510,522,524,541)
ctx1.closePath()
	ctx1.fillStyle = larmgrd3
	ctx1.fill()
//M-Thumb
ctx1.beginPath()
	ctx1.moveTo(557,556)
	ctx1.quadraticCurveTo(573,600,625,584)
	ctx1.quadraticCurveTo(651,596,669,587)
	ctx1.quadraticCurveTo(682,571,660,563)
	ctx1.bezierCurveTo(619,559,612,525,598,520)
	ctx1.quadraticCurveTo(548,507,557,556)
ctx1.closePath()
	ctx1.fillStyle = larmgrd4
	ctx1.fill()

//-------------------------------------
//W Luma
var wlumagrd1 = ctx2.createLinearGradient(851,544,724,564)
	wlumagrd1.addColorStop(0,"rgba(254,253,249,1)")
	wlumagrd1.addColorStop(.5,"rgba(251,200,181,1)")
	wlumagrd1.addColorStop(1,"rgba(184,135,120,1)")
var wlumagrd2 = ctx2.createLinearGradient(761,509,743,512)
	wlumagrd2.addColorStop(0,"rgba(254,253,249,1)")
	wlumagrd2.addColorStop(.5,"rgba(251,200,181,1)")
	wlumagrd2.addColorStop(1,"rgba(184,135,120,1)")
var wlumagrd3 = ctx2.createLinearGradient(746,562,749,589)
	wlumagrd3.addColorStop(0,"rgba(254,253,249,1)")
	wlumagrd3.addColorStop(.5,"rgba(251,200,181,1)")
	wlumagrd3.addColorStop(1,"rgba(184,135,120,1)")
var wlumagrd4 = ctx2.createRadialGradient(780,543,1.5,780,543,5)
	wlumagrd4.addColorStop(0,"rgba(202,198,199,1)")
	wlumagrd4.addColorStop(.1,"rgba(202,198,199,1)")
	wlumagrd4.addColorStop(1,"rgba(25,25,25,1)")
var wlumagrd5 = ctx2.createRadialGradient(749,529,1.5,749,529,5)
	wlumagrd5.addColorStop(0,"rgba(202,198,199,1)")
	wlumagrd5.addColorStop(.1,"rgba(202,198,199,1)")
	wlumagrd5.addColorStop(1,"rgba(25,25,25,1)")
//W-Luma R-Arm
ctx2.beginPath()
	ctx2.moveTo(749,497)
	ctx2.quadraticCurveTo(765,502,766,525)
	ctx2.quadraticCurveTo(762,547,744,532)
	ctx2.bezierCurveTo(735,520,742,495,749,497)
ctx2.closePath()
	ctx2.fillStyle = wlumagrd2
	ctx2.fill()
//W-Luma R-Leg
ctx2.beginPath()
	ctx2.lineTo(737,596)
	ctx2.quadraticCurveTo(746,598,755,577)
	ctx2.quadraticCurveTo(743,560,731,572)
	ctx2.quadraticCurveTo(727,587,737,596)
ctx2.closePath()
	ctx2.fillStyle = wlumagrd3
	ctx2.fill()
//W-Luma Main-Body
ctx2.beginPath()
	ctx2.lineTo(791,484)
	ctx2.bezierCurveTo(787,468,820,470,830,542)
	ctx2.quadraticCurveTo(856,551,861,559)
	ctx2.quadraticCurveTo(866,571,824,578)
	ctx2.bezierCurveTo(814,605,787,625,775,625)
	ctx2.quadraticCurveTo(764,621,766,604)
	ctx2.quadraticCurveTo(729,585,728,565)
	ctx2.bezierCurveTo(722,532,753,504,791,490)
	ctx2.quadraticCurveTo(799,486,791,484)
ctx2.closePath()
	ctx2.fillStyle = wlumagrd1
	ctx2.fill()
//W-Luma R-Eye
ctx2.beginPath()
	ctx2.moveTo(754,526)
	ctx2.bezierCurveTo(748,516,735,538,742,544)
	ctx2.bezierCurveTo(751,550,756,526,754,526)
ctx2.closePath()
	ctx2.fillStyle = wlumagrd5
	ctx2.fill()
//W-Luma Left-Eye
ctx2.beginPath()
	ctx2.moveTo(774,543)
	ctx2.quadraticCurveTo(766,552,770,559)
	ctx2.quadraticCurveTo(781,568,786,548)
	//ctx2.quadraticCurveTo(mouseX,mouseY,786,548)
	ctx2.bezierCurveTo(788,541,782,533,774,543)
ctx2.closePath()
	ctx2.fillStyle = wlumagrd4
	ctx2.fill()
	
//Y Luma Colors-----------------------------
var ylbodygrd1 = ctx3.createLinearGradient(938,152,745,112)
	ylbodygrd1.addColorStop(0,"rgba(177,130,26,1)")
	ylbodygrd1.addColorStop(0.3,"rgba(177,130,26,1)")
	ylbodygrd1.addColorStop(.9,"rgba(254,254,60,1)")
	ylbodygrd1.addColorStop(1,"rgba(255,251,239,1)")
var ylbodygrd2 = ctx3.createLinearGradient(815,81,769,103)
	ylbodygrd2.addColorStop(0,"rgba(177,130,26,1)")
	ylbodygrd2.addColorStop(0.1,"rgba(177,130,26,1)")
	ylbodygrd2.addColorStop(.9,"rgba(254,254,60,1)")
	ylbodygrd2.addColorStop(1,"rgba(255,251,239,1)")
var ylbodygrd3 = ctx3.createLinearGradient(760,162,726,177)
	ylbodygrd3.addColorStop(0,"rgba(255,251,239,1)")
	ylbodygrd3.addColorStop(.1,"rgba(254,254,60,1)")
	ylbodygrd3.addColorStop(0.9,"rgba(177,130,26,1)")
	ylbodygrd3.addColorStop(1,"rgba(177,130,26,1)")
var yleye1 = ctx3.createRadialGradient(793,103,2,793,103,8)
	yleye1.addColorStop(0,"rgba(232,200,211,1)")
	yleye1.addColorStop(.3,"rgba(24,3,0,1)")
	yleye1.addColorStop(1,"rgba(24,3,0,1)")
var yleye2 = ctx3.createRadialGradient(828,118,2,828,118,8)
	yleye2.addColorStop(0,"rgba(232,200,211,1)")
	yleye2.addColorStop(.3,"rgba(24,3,0,1)")
	yleye2.addColorStop(1,"rgba(24,3,0,1)")
//-------------------------------------------
//Y-Luma
//Y-Luma R-Leg
ctx2.beginPath()
	ctx2.moveTo(755,142)
	ctx2.bezierCurveTo(731,158,728,186,769,176)
	ctx2.quadraticCurveTo(790,146,755,142)
//ctx2.closePath()
	ctx2.fillStyle = ylbodygrd3
	ctx2.fill()
//Y-Luma R-Arm
ctx2.beginPath()
	ctx2.moveTo(766,110)
	ctx2.quadraticCurveTo(764,98,766,82)
	ctx2.bezierCurveTo(774,40,796,73,805,103)
	ctx2.quadraticCurveTo(794,138,766,110)
ctx2.closePath()
	ctx2.fillStyle = ylbodygrd2
	ctx2.fill()
//Y-Luma Main-Body
	ctx2.beginPath()
		ctx2.moveTo(863,165)
		ctx2.bezierCurveTo(833,234,808,227,796,193)
		ctx2.quadraticCurveTo(781,188,771,180)
		ctx2.bezierCurveTo(709,124,798,60,865,65)
		ctx2.bezierCurveTo(886,70,871,91,869,80)
		ctx2.bezierCurveTo(868,73,862,75,860,83)
		ctx2.quadraticCurveTo(869,108,871,122)
		/ctx2.bezierCurveTo(923,146,908,160,863,165)
ctx2.closePath()
	ctx2.fillStyle = ylbodygrd1
	ctx2.fill()
//Y-Luma Right-Eye
	ctx2.beginPath()
	ctx2.moveTo(780,122)
	ctx2.bezierCurveTo(776,110,787,97,795,98)
	ctx2.bezierCurveTo(808,104,790,131,780,122)
ctx2.closePath()
	ctx2.fillStyle = yleye1
	ctx2.fill()
//Y-Luma Left-Eye
ctx2.beginPath()
	ctx2.moveTo(830,113)
	ctx2.bezierCurveTo(820,112,811,133,819,139)
	ctx2.bezierCurveTo(828,144,843,117,830,113)
ctx2.closePath()
	ctx2.fillStyle = yleye2
	ctx2.fill()
//-------------------------------------------
//B-Luma
//ctx.drawImage(mario,50,60)
var blbodygrd1 = ctx2.createLinearGradient(131,246,195,228)
	blbodygrd1.addColorStop(0,"rgba(0,118,231,1)")
	blbodygrd1.addColorStop(0.1,"rgba(0,150,242,1)")
	blbodygrd1.addColorStop(0.3,"rgba(3,162,243,1)")
	blbodygrd1.addColorStop(1,"rgba(0,118,231,1)")
var blbodygrd2 = ctx2.createLinearGradient(175,235,205,230)
	blbodygrd2.addColorStop(0,"rgba(0,118,231,1)")
	blbodygrd2.addColorStop(0.1,"rgba(0,150,242,1)")
	blbodygrd2.addColorStop(0.3,"rgba(3,162,243,1)")
	blbodygrd2.addColorStop(1,"rgba(0,118,231,1)")
var blbodygrd3 = ctx2.createLinearGradient(236,234,206,242)
	blbodygrd3.addColorStop(0,"rgba(0,118,231,1)")
	blbodygrd3.addColorStop(0.5,"rgba(0,150,242,1)")
	blbodygrd3.addColorStop(1,"rgba(0,118,231,1)")
var bleye1 = ctx2.createRadialGradient(193,244,1.5,193,244,8)
	bleye1.addColorStop(0,"rgba(232,200,211,1)")
	bleye1.addColorStop(.3,"rgba(24,3,0,1)")
	bleye1.addColorStop(1,"rgba(24,3,0,1)")
var bleye2 = ctx2.createRadialGradient(190,271,1.5,190,271,8)
	bleye2.addColorStop(0,"rgba(232,200,211,1)")
	bleye2.addColorStop(.3,"rgba(24,3,0,1)")
	bleye2.addColorStop(1,"rgba(24,3,0,1)")
//B-Luma L-Leg
ctx2.beginPath()
	ctx2.moveTo(233,276)
	ctx2.quadraticCurveTo(241,272,247,261)
	ctx2.quadraticCurveTo(251,248,228,253)
	ctx2.quadraticCurveTo(220,266,233,276)
ctx2.closePath()
	ctx2.fillStyle = blbodygrd3
	ctx2.fill()
//B-Luma L-Arm
ctx2.beginPath()
	ctx2.moveTo(205,237)
	ctx2.quadraticCurveTo(192,217,187,217)
	ctx2.quadraticCurveTo(177,215,179,242)
	ctx2.quadraticCurveTo(193,257,205,237)
ctx2.closePath()
	ctx2.fillStyle = blbodygrd2
	ctx2.fill()
//B-Luma Main-Body
ctx2.beginPath()
	ctx2.moveTo(228,299)
	ctx2.bezierCurveTo(254,246,211,223,159,241)
	ctx2.quadraticCurveTo(148,243,156,234)
	ctx2.bezierCurveTo(154,220,141,235,142,247)
	ctx2.quadraticCurveTo(148,274,158,289)
	ctx2.quadraticCurveTo(143,310,148,315)
	ctx2.quadraticCurveTo(161,325,183,309)
	ctx2.quadraticCurveTo(220,325,231,310)
	ctx2.quadraticCurveTo(234,304,228,299)
ctx2.closePath()
	ctx2.fillStyle = blbodygrd1
	ctx2.fill()
//B-Luma Left-Eye
ctx2.beginPath()
	ctx2.moveTo(205,270)
	ctx2.bezierCurveTo(185,259,180,273,200,278)
	ctx2.quadraticCurveTo(211,279,205,270)
ctx2.closePath()
	ctx2.fillStyle = bleye2
	ctx2.fill()
//B-Luma Right-Eye
ctx2.beginPath()
	ctx2.moveTo(211,244)
	ctx2.bezierCurveTo(188,233,184,247,207,250)
	ctx2.quadraticCurveTo(215,249,211,244)
ctx2.closePath()
	ctx2.fillStyle = bleye1
	ctx2.fill()
//-------------------------------------------

//ctx.drawImage(mario,50,60)
ctx.drawImage(canvas1,(mouseX/-12)+45,(mouseY/-12)+30,canvas.width,canvas.height)
ctx.drawImage(canvas2,(mouseX/12)-45,(mouseY/12)-30,canvas.width,canvas.height)
	
	


// <<<END HERE<<<END HERE<<<END HERE<<<END HERE<<<END HERE<<<END HERE
///////////////////////////////////////////////////////////////////

// CREDITS

ctx.save();
var credits = "Hunter Simone, Mario Galaxy, FMX 310, SP 2022";
ctx.font = 'bold 12px Helvetica';
ctx.fillStyle = "rgba(0,0,0,1)"; // change the color here
ctx.shadowColor = "rgba(255,255,255,1)"; // change shadow color here
ctx.shadowBlur = 12;
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.fillText(credits, 10, canvas.height - 10); // CHANGE THE LOCATION HERE
ctx.restore();


/////////////////////////////////////////////////////////////////
// LAST LINE CREATES THE ANIMATION

requestAnimFrame(draw); // CALLS draw() every nth of a second

}