function Circle(point, r){
	this.point = point;
	this.r = r;

	this.draw = function(){
			CTX.beginPath();
			CTX.arc(this.point.x, this.point.y, this.r, 0, 2 * Math.PI);
			CTX.stroke();
};
}

function Point(x, y){

this.x = x;
this.y = y;
}
