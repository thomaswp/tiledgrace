
function Sprite(path) {
	
	this.x = 0;
	this.y = 0;
	this.width = 0;
	this.height = 0;
	this.flip = false;
	this.message = "";
	this.timeouts = {};
	this.userCode = null;
	this.penTrails = [];
	this.penDown = false;
	
	var scale = 1;
	var ready = false;
	var image;
	var idealHeight = 350.0;
	
	
	image = new Image();
	image.onload = function () {
		ready = true;
		if (this.width == 0) this.width = image.width;
		if (this.height == 0) this.height = image.height;
	};
	image.src = path;
	
	this.draw = function(ctx) {
		if (!ready) return;
		if (this.penTrails.length > 0) {
			ctx.strokeStyle = "black";
			ctx.beginPath();
			for (var i = 0; i < this.penTrails.length; i++) {
				var trail = this.penTrails[i];
				ctx.moveTo(trail[0][0], trail[0][1]);
				for (var j = 1; j < trail.length; j++) {
					ctx.lineTo(trail[j][0], trail[j][1]);
				}
			}
			ctx.stroke();
		}
		scale = ctx.canvas.height / idealHeight;
		ctx.save();
		ctx.translate(-this.width / 2, -this.height / 2);
		if (this.flip) {
			ctx.scale(-1, 1);
			ctx.drawImage(image, -this.x - this.width, this.y, this.width, this.height);
		} else {
			ctx.drawImage(image, this.x, this.y, this.width, this.height);
		}
		ctx.restore();
		if (this.message.length > 0) {
			ctx.textAlign = "center";
			ctx.font = "bold 14pt Arial";
			ctx.fillStyle = "black";
			var maxWidth = 150;
			var lines = wrapText(ctx, this.message, maxWidth);
			var height = 20;
			var x = this.x + this.width * 0.3 + maxWidth / 2;
			var y = this.y - this.height * 0.3 - height * lines.length
			for (var i = 0; i < lines.length; i++) {
				ctx.fillText(lines[i], x, y);
				y += height;
			}
		}
		if (this.userCode != null) {
			ctx.textAlign = "left";
			ctx.font = "14pt Arial";
			var vx = 10, vy = 20;
			for (var v in this.userCode) {
				var value = this.userCode[v];
				if (typeof(value) === "function") continue;
				if (!isNaN(value)) value = Math.round(value * 1000) / 1000;
				ctx.fillText(v + " = " + value, vx - ctx.canvas.width / 2, vy - ctx.canvas.height / 2);
				vy += 20;
			};
		}
	};
	
	var wrapText = function(ctx, text, maxWidth) {
	    var words = text.split(' '),
	        lines = [],
	        line = "";
	    if (ctx.measureText(text).width < maxWidth) {
	        return [text];
	    }
	    while (words.length > 0) {
	        var split = false;
	        while (ctx.measureText(words[0]).width >= maxWidth) {
	            var tmp = words[0];
	            words[0] = tmp.slice(0, -1);
	            if (!split) {
	                split = true;
	                words.splice(1, 0, tmp.slice(-1));
	            } else {
	                words[1] = tmp.slice(-1) + words[1];
	            }
	        }
	        if (ctx.measureText(line + words[0]).width < maxWidth) {
	            line += words.shift() + " ";
	        } else {
	            lines.push(line);
	            line = "";
	        }
	        if (words.length === 0) {
	            lines.push(line);
	        }
	    }
	    return lines;
	}

	
	var sprite = this;
	
	this.test = function() {
		alert("!");
	}
	
	this.goTo = function(x, y) {
		x *= scale; y *= scale;
		sprite.x = x;
		sprite.y = y;
		if (sprite.penDown == true) {
			sprite.penTrails[sprite.penTrails.length - 1].push([sprite.x, sprite.y]);
		}
	};
	
	this.pickRandom = function(min, max) {
		return min + Math.floor((max - min + 1) * Math.random());
	};
	
	this.turnAround = function() {
		sprite.flip = !sprite.flip;
	};
	
	this.say = function(text) {
		sprite.message = text;
	};
	
	this.doLater = function(stuff, time) {
		time = Math.max(time, 0.1);
		if (sprite.timeouts[stuff]) {
			clearTimeout(sprite.timeouts[stuff]);
		}
		sprite.timeouts[stuff] = setTimeout(function() {
			stuff.call(sprite.userCode);
		}, time * 1000);
	};
	
	this.clear = function() {
		sprite.penTrails = [];
	}
	
	this.penDown = function() {
		sprite.penDown = true;
		sprite.penTrails.push([[sprite.x, sprite.y]]);
	}
	
	this.penUp = function() {
		sprite.penDown = false;
	}
	
	this.doClick = function(x, y) {
		x += this.width / 2;
		y += this.height / 2;
		if (x >= this.x && x < this.x + this.width &&
				y >= this.y && y < this.y + this.height) {
			try {
				//if(this.userCode != null && this.userCode.whenClicked != null) this.userCode.whenClicked();
				if (runningCode && runningCode.methods.whenClicked) {
					runningCode.methods.whenClicked([0]);
				}
			} catch (e) {
				console.log(e.message);
			}
		}
	};
	
	this.stop = function() {
		UserCode = null;
		this.userCode = null;
		for (timeout in this.timeouts) {
			clearTimeout(this.timeouts[timeout]);
		}
		this.timeouts = {};
		this.penTrail = [];
		this.penDown = false;
	}
	
	this.run = function(script) {
		this.stop();
		script = "function UserCode() { " + script + " };"
		try {
			eval(script);
			this.userCode = new UserCode();
			if (this.userCode.whenStarted) this.userCode.whenStarted();
		} catch (e) {
			console.log(e.message);
		}
	};
	
};