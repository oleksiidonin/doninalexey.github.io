(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bottle = function() {
	this.initialize(img.bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,289,81);


(lib.loboBila = function() {
	this.initialize(img.loboBila);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,115);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Illustration
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(-150,-36.7,300,73.5), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AWDHsIAAjJIC9AAIAADJgAQiHsIAApGIgCAAIjYGuIhcAAIjYmuIgDAAIAAJGIi8AAIAAvXIDDAAIEAIyIAEAAID/oyIDEAAIAAPXgAAiHsIg1jOIkjAAIg0DOIjRAAIEjvXIDsAAIEjPXgAg4CDIhsmsIgCAAIhqGsIDYAAgAtxHsIAApGIgDAAIjYGuIhcAAIjYmuIgCAAIAAJGIi9AAIAAvXIDDAAIEBIyIACAAIEBoyIDDAAIAAPXgAWVC2IgSkqIAAl3IC7AAIAAFwIgSExg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-160,-49.1,320,98.4), null);


(lib.logoBila = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.loboBila();
	this.instance.parent = this;
	this.instance.setTransform(-60,-58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoBila, new cjs.Rectangle(-60,-58,120,115), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AImCJQgWgGgQgLQgDgGAAgVQAAgWADgDQAuAeAjAAQAVAAAMgKQALgJAAgPQAAgQgNgJQgKgGgigLQgkgMgRgNQgZgVAAgiQAAgkAZgXQAagZAtAAQAqAAAiAXQADAGAAAVQAAAWgDADQgsgdggAAQgTAAgLAJQgLAJAAAOQAAAPANAJQALAHAhAKQAkALARANQAaAWAAAkQAAAogdAWQgbAWgqAAQgWAAgXgGgAEPByQgegeAAg7IAAigQAcgGAbAGIAACoQAAAeAPARQAQASAcAAQAbAAAQgSQAPgRAAgeIAAioQAcgGAcAGIAACgQAAA7geAeQgdAdg3AAQg3AAgdgdgAiICJIAAkQQAbgGAbAGIAAEQQgNADgOAAQgNAAgOgDgAljCJIAAkQIC8AAQAEAWgEAXIiFAAIAABFIB3AAQAFAWgFAXIh3AAIAABxQgOADgOAAQgOAAgNgDgAnHCJIAAkQQAcgGAbAGIAAEQQgOADgNAAQgOAAgOgDgAglCJIAAkQIBiAAQBCAAAoAnQAnAmAAA6QAAA7gnAmQgoAohCAAgAAQBbIAtAAQAoAAAYgYQAZgYAAgrQAAgpgZgZQgYgYgoAAIgtAAgAq0CJIAAkQIByAAQAnAAAYATQAZAUAAAfQAAArgnASQAVAIAMAQQAMASAAAWQAAAjgZAVQgZAVgrAAgAp9BbIA5AAQATAAALgKQALgJAAgSQAAgkgqAAIg4AAgAp9gUIA3AAQARAAAKgJQAKgJAAgRQAAgQgKgKQgLgJgSAAIg1AAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-69.2,-14.3,138.6,28.6), null);


(lib.bottle_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bottle();
	this.instance.parent = this;
	this.instance.setTransform(-123,-35,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bottle_1, new cjs.Rectangle(-123,-35,246,69), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6CACE4").s().p("EgY/AyKMAAAhkTMAx/AAAMAAABkTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-160,-321,320,642.1), null);


(lib.b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKmFIQg7AAhBgLQgngGhNgRQhYgUgvgIQhRgMhQAAQhUAAhMAMQgtAHhQAUQhJARgnAHQhCALhFAAQhvAAhvgxQgUgJgcgRQgUgNgIgDQgNgGgLAAIgDAAQgSABgEAJIgEAFQgSAaggAAIh7AAQgXAAgTgNQgTgOgHgWQgWhIAAiXQAAiVAWhIQAHgWATgOQATgOAXAAIB7AAQAgAAASAaIAEAFQAEAJASACIADAAQALAAANgHQAIgDAUgMQAcgSAUgJQBygxBsAAQBFAABCALQAmAHBKASQBQATAtAHQBMANBUAAQBQAABRgNQAvgHBYgUQBPgSAlgGQBBgLA7AAIDwAAQAkAAAaBgQAZBhAACGQAACIgZBgQgaBggkAAgAE1DfQAxAIBaAUQBMARAkAGQA/ALA3AAIDXAAQAJAAAHgGQAGgGAAgIIAAoRQAAgIgGgFQgHgGgJAAIjXAAQg3AAg/AKQgkAGhMARQhaAVgxAHQhUANhTAAQhYAAhPgMQgugIhSgUQhIgRglgHQg/gKhBAAQhkAAhoAtQgNAGgeASQgYAOgMAFQgUAJgTAAIgFAAQgSgBgPgIQgPgIgIgMIgCgCIgBgDQgFgHgKAAIh9AAQgIAAgHAFQgGAGAAAIIAAGiQAAAIAGAFQAHAGAIAAIB9AAQAKAAAFgIIABgDIACgBQAIgNAPgIQAPgIASAAIAFgBQATAAAUAJQAMAFAYAPQAeASANAFQBoAuBkAAQBBAAA/gLQAlgGBIgSQBSgUAugHQBPgNBYAAQBTAABUANg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.b3, new cjs.Rectangle(-100.5,-32.8,201.1,65.6), null);


(lib.b2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKmFIQg7AAhBgLQgngGhNgRQhYgUgvgIQhRgMhQAAQhUAAhMAMQgtAHhQAUQhJARgnAHQhCALhFAAQhvAAhvgxQgUgJgcgRQgUgNgIgDQgNgGgLAAIgDAAQgSABgEAJIgEAFQgSAaggAAIh7AAQgXAAgTgNQgTgOgHgWQgWhIAAiXQAAiVAWhIQAHgWATgOQATgOAXAAIB7AAQAgAAASAaIAEAFQAEAJASACIADAAQALAAANgHQAIgDAUgMQAcgSAUgJQBygxBsAAQBFAABCALQAmAHBKASQBQATAtAHQBMANBUAAQBQAABRgNQAvgHBYgUQBPgSAlgGQBBgLA7AAIDwAAQAkAAAaBgQAZBhAACGQAACIgZBgQgaBggkAAgAE1DfQAxAIBaAUQBMARAkAGQA/ALA3AAIDXAAQAJAAAHgGQAGgGAAgIIAAoRQAAgIgGgFQgHgGgJAAIjXAAQg3AAg/AKQgkAGhMARQhaAVgxAHQhUANhTAAQhYAAhPgMQgugIhSgUQhIgRglgHQg/gKhBAAQhkAAhoAtQgNAGgeASQgYAOgMAFQgUAJgTAAIgFAAQgSgBgPgIQgPgIgIgMIgCgCIgBgDQgFgHgKAAIh9AAQgIAAgHAFQgGAGAAAIIAAGiQAAAIAGAFQAHAGAIAAIB9AAQAKAAAFgIIABgDIACgBQAIgNAPgIQAPgIASAAIAFgBQATAAAUAJQAMAFAYAPQAeASANAFQBoAuBkAAQBBAAA/gLQAlgGBIgSQBSgUAugHQBPgNBYAAQBTAABUANgAKmEEQgUAAgTgBQgEgBgDgDQgDgDAAgDIAAnwQAAgEADgDQADgDAEAAQATgCAUAAIDFAAQAEAAADADQADADAAAFIAAHyQAAAEgDADQgDADgEAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.b2, new cjs.Rectangle(-100.5,-32.8,201.1,65.6), null);


(lib.b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKmFIQg7AAhBgLQgngGhNgRQhYgUgvgIQhRgMhQAAQhUAAhMAMQgtAHhQAUQhJARgnAHQhCALhFAAQhvAAhvgxQgUgJgcgRQgUgNgIgDQgNgGgLAAIgDAAQgSABgEAJIgEAFQgSAaggAAIh7AAQgXAAgTgNQgTgOgHgWQgWhIAAiXQAAiVAWhIQAHgWATgOQATgOAXAAIB7AAQAgAAASAaIAEAFQAEAJASACIADAAQALAAANgHQAIgDAUgMQAcgSAUgJQBygxBsAAQBFAABCALQAmAHBKASQBQATAtAHQBMANBUAAQBQAABRgNQAvgHBYgUQBPgSAlgGQBBgLA7AAIDwAAQAkAAAaBgQAZBhAACGQAACIgZBgQgaBggkAAgAE1DfQAxAIBaAUQBMARAkAGQA/ALA3AAIDXAAQAJAAAHgGQAGgGAAgIIAAoRQAAgIgGgFQgHgGgJAAIjXAAQg3AAg/AKQgkAGhMARQhaAVgxAHQhUANhTAAQhYAAhPgMQgugIhSgUQhIgRglgHQg/gKhBAAQhkAAhoAtQgNAGgeASQgYAOgMAFQgUAJgTAAIgFAAQgSgBgPgIQgPgIgIgMIgCgCIgBgDQgFgHgKAAIh9AAQgIAAgHAFQgGAGAAAIIAAGiQAAAIAGAFQAHAGAIAAIB9AAQAKAAAFgIIABgDIACgBQAIgNAPgIQAPgIASAAIAFgBQATAAAUAJQAMAFAYAPQAeASANAFQBoAuBkAAQBBAAA/gLQAlgGBIgSQBSgUAugHQBPgNBYAAQBTAABUANgAKmEEQgUAAgTgBQgEgBgDgDQgDgDAAgDIAAnwQAAgEADgDQADgDAEAAQATgCAUAAIDFAAQAEAAADADQADADAAAFIAAHyQAAAEgDADQgDADgEAAgApHDZIgVgLQgFgDAAgGIAAmJQAAgFAFgEIAVgLQBigrBfAAIAbABQAEAAADADQADADAAAEIAAHxQAAAKgKABIgbAAQhfAAhigrgAkoD7QgEgDAAgFIAAnkQAAgFAEgDQAEgEAFABQAyAHBNAUQBCAQAqAIQAJACAAAIIAAGAQAAAIgJACQgqAHhCARQhXAUgoAGIgCAAQgEAAgDgCgAIzD6QgigGhLgQQhIgRg2gJQgJgCAAgJIAAl9QAAgIAJgCQA2gJBIgRQBLgRAigFQAFgBAEADQAEADAAAFIAAHeQAAAFgEADQgDACgDAAIgDAAgAANC9QgEgDAAgEIAAlqQAAgFAEgDQADgDAFAAQA6AHA/AAQA0AAA8gGQAFgBADAEQAEADAAAEIAAFpQAAAFgEADQgDADgFAAQg8gGg0AAQg/AAg6AGIgBAAQgEAAgDgDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.b1, new cjs.Rectangle(-100.5,-32.8,201.1,65.6), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// loboBila
	this.instance = new lib.logoBila();
	this.instance.parent = this;
	this.instance.setTransform(20.3,-236.3,1,1,0,0,0,0.3,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(199).to({alpha:0},9).to({_off:true},1).wait(85).to({_off:false},0).to({alpha:1},10).wait(1));

	// logo
	this.instance_1 = new lib.logo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-218.4,1.4,1.4,0,0,0,0,-0.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(209).to({_off:false},0).to({alpha:1},15).wait(60).to({alpha:0},10).to({_off:true},1).wait(10));

	// t2
	this.instance_2 = new lib.t2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,231.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(209).to({_off:false},0).to({alpha:1},15).wait(60).to({alpha:0},10).to({_off:true},1).wait(10));

	// bottle
	this.instance_3 = new lib.bottle_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0.8,-34.6,1.028,1.027,0,0,0,0.1,-0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(189).to({_off:false},0).to({alpha:1},10).wait(10).to({regX:0.3,regY:-0.2,scaleX:1.2,scaleY:1.2,rotation:90,y:6.6},15).wait(60).to({regX:0.1,regY:-0.1,scaleX:1.03,scaleY:1.03,rotation:0,y:-34.6},10).wait(5).to({alpha:0},5).wait(1));

	// bottleW
	this.instance_4 = new lib.b1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.4,-34.8,1.331,1.331,0,0,0,-0.1,-0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AOGG0QhOAAhXgOQg0gIhmgXQh1gbg/gKQhsgQhqAAQhwAAhmAQQg7AKhqAaQhhAXg1AJQhYAOhcAAQiTAAiThAQgcgMglgYQgbgQgKgEQgSgJgOAAIgEAAQgZACgFAMIgFAHQgXAigrAAIijAAQgfAAgZgSQgZgSgKgdQgehgAAjJQAAjHAehgQAKgdAZgTQAZgSAfAAICjAAQArAAAXAjIAFAHQAFAMAZACIAEAAQAOAAASgJQAKgEAbgRQAlgXAcgMQCWhBCQAAQBcAABYAOQAzAJBjAYQBqAaA7AJQBmARBwAAQBqAABsgRQA/gKB1gaQBpgYAxgIQBXgOBOAAIFAAAQAvAAAjCAQAiCAAACzQAAC1giB/QgjCAgvAAgAGbEpQBBAKB4AbQBlAXAxAIQBTAOBJAAIEfAAQAMAAAJgIQAHgHAAgLIAArAQAAgLgHgHQgJgIgMAAIkfAAQhJAAhTAOQgxAIhlAWQh4AchBAKQhvARhvAAQh2AAhpgRQg9gKhugaQhfgYgxgIQhUgOhXAAQiEAAiMA8QgQAIgoAYQggATgQAHQgaALgaAAIgHAAQgXgCgVgJQgTgLgLgRIgDgCIgCgEQgGgKgNAAIimAAQgLAAgJAIQgIAHAAALIAAIsQAAALAIAHQAJAHALAAICmAAQANAAAGgJIACgEIADgCQALgRATgLQAVgKAXgBIAHgBQAaAAAaAMQAQAHAgATQAoAYAQAHQCMA9CEAAQBXAABUgOQAxgJBfgXQBugbA9gJQBpgRB2AAQBvAABvARgAOGFaQgaAAgagCQgFAAgEgEQgFgEAAgFIAAqUQAAgGAFgDQAEgEAFgBQAagCAaAAIEGAAQAGAAAEAEQAEAEAAAGIAAKXQAAAGgEAEQgEAEgGAAgAmKFOQgGgEABgHIAAqEQgBgHAGgEQAEgFAIACQBCAJBnAaQBXAWA4AKQANADAAAKIAAIAQAAAKgNADQg4AKhXAWQh0Abg1AIIgCAAQgGAAgEgDgALtFMQgtgHhkgWQhggWhIgMQgMgDAAgLIAAn8QAAgLAMgDQBIgMBggWQBkgWAtgIQAHgBAFAEQAFAEAAAHIAAJ8QAAAHgFAEQgEADgEAAIgEgBgAARD8QgFgEAAgGIAAniQAAgGAFgEQAEgFAHABQBMAIBVAAQBGAABQgIQAFAAAFAEQAFAEgBAGIAAHhQABAGgFAEQgFAFgFgBQhQgIhGAAQhVAAhMAJIgCAAQgFAAgEgEg");
	this.shape.setTransform(-0.3,-34.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AOGG0QhOAAhXgOQg0gIhmgXQh1gbg/gKQhsgQhqAAQhwAAhmAQQg7AKhqAaQhhAXg1AJQhYAOhcAAQiTAAiThAQgcgMglgYQgbgQgKgEQgSgJgOAAIgEAAQgZACgFAMIgFAHQgXAigrAAIijAAQgfAAgZgSQgZgSgKgdQgehgAAjJQAAjHAehgQAKgdAZgTQAZgSAfAAICjAAQArAAAXAjIAFAHQAFAMAZACIAEAAQAOAAASgJQAKgEAbgRQAlgXAcgMQCWhBCQAAQBcAABYAOQAzAJBjAYQBqAaA7AJQBmARBwAAQBqAABsgRQA/gKB1gaQBpgYAxgIQBXgOBOAAIFAAAQAvAAAjCAQAiCAAACzQAAC1giB/QgjCAgvAAgAGbEpQBBAKB4AbQBlAXAxAIQBTAOBJAAIEfAAQAMAAAJgIQAHgHAAgLIAArAQAAgLgHgHQgJgIgMAAIkfAAQhJAAhTAOQgxAIhlAWQh4AchBAKQhvARhvAAQh2AAhpgRQg9gKhugaQhfgYgxgIQhUgOhXAAQiEAAiMA8QgQAIgoAYQggATgQAHQgaALgaAAIgHAAQgXgCgVgJQgTgLgLgRIgDgCIgCgEQgGgKgNAAIimAAQgLAAgJAIQgIAHAAALIAAIsQAAALAIAHQAJAHALAAICmAAQANAAAGgJIACgEIADgCQALgRATgLQAVgKAXgBIAHgBQAaAAAaAMQAQAHAgATQAoAYAQAHQCMA9CEAAQBXAABUgOQAxgJBfgXQBugbA9gJQBpgRB2AAQBvAABvARgAOGFaQgaAAgagCQgFAAgEgEQgFgEAAgFIAAqUQAAgGAFgDQAEgEAFgBQAagCAaAAIEGAAQAGAAAEAEQAEAEAAAGIAAKXQAAAGgEAEQgEAEgGAAgALtFMQgtgHhkgWQhggWhIgMQgMgDAAgLIAAn8QAAgLAMgDQBIgMBggWQBkgWAtgIQAHgBAFAEQAFAEAAAHIAAJ8QAAAHgFAEQgEADgEAAIgEgBgAARD8QgFgEAAgGIAAniQAAgGAFgEQAEgFAHABQBMAIBVAAQBGAABQgIQAFAAAFAEQAFAEgBAGIAAHhQABAGgFAEQgFAFgFgBQhQgIhGAAQhVAAhMAJIgCAAQgFAAgEgEg");
	this.shape_1.setTransform(-0.3,-34.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AOGG0QhOAAhXgOQg0gIhmgXQh1gbg/gKQhsgQhqAAQhwAAhmAQQg7AKhqAaQhhAXg1AJQhYAOhcAAQiTAAiThAQgcgMglgYQgbgQgKgEQgSgJgOAAIgEAAQgZACgFAMIgFAHQgXAigrAAIijAAQgfAAgZgSQgZgSgKgdQgehgAAjJQAAjHAehgQAKgdAZgTQAZgSAfAAICjAAQArAAAXAjIAFAHQAFAMAZACIAEAAQAOAAASgJQAKgEAbgRQAlgXAcgMQCWhBCQAAQBcAABYAOQAzAJBjAYQBqAaA7AJQBmARBwAAQBqAABsgRQA/gKB1gaQBpgYAxgIQBXgOBOAAIFAAAQAvAAAjCAQAiCAAACzQAAC1giB/QgjCAgvAAgAGbEpQBBAKB4AbQBlAXAxAIQBTAOBJAAIEfAAQAMAAAJgIQAHgHAAgLIAArAQAAgLgHgHQgJgIgMAAIkfAAQhJAAhTAOQgxAIhlAWQh4AchBAKQhvARhvAAQh2AAhpgRQg9gKhugaQhfgYgxgIQhUgOhXAAQiEAAiMA8QgQAIgoAYQggATgQAHQgaALgaAAIgHAAQgXgCgVgJQgTgLgLgRIgDgCIgCgEQgGgKgNAAIimAAQgLAAgJAIQgIAHAAALIAAIsQAAALAIAHQAJAHALAAICmAAQANAAAGgJIACgEIADgCQALgRATgLQAVgKAXgBIAHgBQAaAAAaAMQAQAHAgATQAoAYAQAHQCMA9CEAAQBXAABUgOQAxgJBfgXQBugbA9gJQBpgRB2AAQBvAABvARgAOGFaQgaAAgagCQgFAAgEgEQgFgEAAgFIAAqUQAAgGAFgDQAEgEAFgBQAagCAaAAIEGAAQAGAAAEAEQAEAEAAAGIAAKXQAAAGgEAEQgEAEgGAAgALtFMQgtgHhkgWQhggWhIgMQgMgDAAgLIAAn8QAAgLAMgDQBIgMBggWQBkgWAtgIQAHgBAFAEQAFAEAAAHIAAJ8QAAAHgFAEQgEADgEAAIgEgBg");
	this.shape_2.setTransform(-0.3,-34.8);

	this.instance_5 = new lib.b2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.4,-34.8,1.331,1.331,0,0,0,-0.1,-0.1);

	this.instance_6 = new lib.b3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-0.4,-34.8,1.331,1.331,0,0,0,-0.1,-0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.shape}]},85).to({state:[{t:this.shape_1}]},20).to({state:[{t:this.shape_2}]},20).to({state:[{t:this.instance_5}]},20).to({state:[{t:this.instance_6}]},20).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},11).to({state:[{t:this.instance_6}]},10).to({state:[]},1).to({state:[{t:this.instance_4}]},89).to({state:[{t:this.instance_4}]},5).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},85).wait(209).to({_off:false,alpha:0},0).to({alpha:1},5).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(165).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).wait(11).to({alpha:0},10).to({_off:true},1).wait(100));

	// t1
	this.instance_7 = new lib.t1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,177.4,0.425,0.424);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1,scaleY:1},5,cjs.Ease.get(-1)).wait(5).to({scaleX:0.43,scaleY:0.42},5,cjs.Ease.get(1)).wait(5).to({scaleX:1,scaleY:1},5,cjs.Ease.get(-1)).wait(5).to({scaleX:0.43,scaleY:0.42},5,cjs.Ease.get(1)).wait(5).to({scaleX:1,scaleY:1},5,cjs.Ease.get(-1)).wait(5).to({scaleX:0.43,scaleY:0.42},5,cjs.Ease.get(1)).wait(5).to({scaleX:1,scaleY:1},5,cjs.Ease.get(-1)).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.9,scaleY:0.9},0).wait(1).to({scaleX:0.91,scaleY:0.91},0).wait(1).to({scaleX:0.92,scaleY:0.92},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).to({scaleX:0.02,scaleY:0.02},14).to({_off:true},1).wait(94).to({_off:false,scaleX:0.43,scaleY:0.42,alpha:0},0).to({alpha:1},10).wait(1));

	// bg
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(305));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-321,320,642.1);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(2,1,1).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// banner
	this.instance = new lib.banner();
	this.instance.parent = this;
	this.instance.setTransform(150,300,0.938,0.938);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,299,302,602);
// library properties:
lib.properties = {
	id: '4B8A1E72CECD4473A823D1B6321B489C',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bottle.png", id:"bottle"},
		{src:"images/loboBila.png", id:"loboBila"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4B8A1E72CECD4473A823D1B6321B489C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;