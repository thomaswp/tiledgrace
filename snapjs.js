function SnapJS() { };

SnapJS.aspect = 1; //4 / 3.0;

SnapJS.start = function(canvas) {
	SnapJS.canvas = canvas;
	SnapJS.sprites = [];

	//var baseWidth = 250;
	//$(canvas).attr("width", baseWidth);
	//$(canvas).attr("height", baseWidth / SnapJS.aspect);
	SnapJS.aspect = $(canvas).attr("width") / $(canvas).attr("height")

	$(canvas).click(function(e) {
		var x = e.pageX - $(canvas).position().left - SnapJS.canvas.clientWidth / 2;
		var y = e.pageY - $(canvas).position().top - SnapJS.canvas.clientHeight / 2;
		logEvent("gameClick", {x: x, y: y});
		for (var i = 0; i < SnapJS.sprites.length; i++) {
			SnapJS.sprites[i].doClick(x, y);
		}
	});

	window.setInterval(SnapJS.draw, 1000/30);
};

SnapJS.draw = function() {
	var ctx = SnapJS.canvas.getContext("2d");
	ctx.clearRect(0, 0, SnapJS.canvas.width, SnapJS.canvas.height);
	ctx.save();
	ctx.translate(SnapJS.canvas.width / 2, SnapJS.canvas.height / 2);
	for (var i = 0; i < SnapJS.sprites.length; i++) {
		SnapJS.sprites[i].draw(ctx);
	}
	ctx.restore();
};

SnapJS.addSprite = function(sprite) {
	SnapJS.sprites.push(sprite);
};
