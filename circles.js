function Circle(point, r, colour){
	this.point = point;
	this.r = r;
	this.colour  = colour;
	this.draw = function(){
		CTX.beginPath();
		CTX.fillStyle = colour;
		CTX.arc(this.point.x, this.point.y, this.r, 0, 2* Math.PI);
		CTX.fill();
		CTX.stroke()
};
}

function Point(x, y){

this.x = x;
this.y = y;
}
