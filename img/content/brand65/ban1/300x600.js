(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.ball1 = function() {
	this.initialize(img.ball1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150,200);


(lib.ball2 = function() {
	this.initialize(img.ball2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,148);


(lib.Image1 = function() {
	this.initialize(img.Image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,200);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,358);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,276);


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);// helper functions:

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


(lib.us2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIAIIgEgCQAAAAgBgBQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAgBQAAAAAAAAQgBgBAAgBQAAAAAAgBQgBgCAAAAQAAAAAAgBQAAAAAAAAQABgBAAABQADgDAEgCQAFgCAFADIAGAEQAEABADAAQAAgBABAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAgBgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIgDAAQACgDAEACQAGAEgDAHQgCAFgGACQgEACgFAAQgEAAgGgDg");
	this.shape.setTransform(6.5,-1.5,3.678,3.679);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.us2, new cjs.Rectangle(-0.7,-5.4,14.6,8), null);


(lib.us1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AglAqQghgHgCgeQAAgRANgIQAHgDAKADIgEACQgHAAgEAIQgCAFAEAGQAHAPAPgJQAPgGAJgNIANgTQAPgOARADQAMAAANAIQAEACAEAGQAHAIgHAMQgIABgHAGIgWAXQgJAJgXAHQgNADgKAAQgHAAgHgBg");
	this.shape.setTransform(-6.6,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.us1, new cjs.Rectangle(-13.8,-3.1,14.5,8.7), null);


(lib.t4_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE70B").s().p("AhFhcQAWgMAkgJQAjgJAXAIQAcAJAEAfQAGAmgbAdQgYAZgoAKIgSADIgDBKIg0ANgAgDhIQgKACgGADIgDA3IAQgDQAQgEAKgMQAJgMgCgNQgDgRgQAAQgFAAgGABg");
	this.shape.setTransform(62.7,-15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE70B").s().p("AhCBmQgbgSgFgmQgEgdAGgbQAHgbAPgWQAcgmAugMQAogKAbASQAaASAGAnQAEAcgGAbQgGAcgQAVQgbAmgwAMQgNAEgMAAQgXAAgSgMgAAAhAQgQAFgMAQQgJANgEAWQgEAUADASQADAVALAJQAMAKASgFQAQgEALgQQAJgNAEgXQADgUgCgSQgFgkgaAAQgGAAgGABg");
	this.shape_1.setTransform(42.2,-11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE70B").s().p("AgbguIg0AOIACgwICegoIgDAvIg1AOIgICnIg0ANg");
	this.shape_2.setTransform(23.4,-7.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE70B").s().p("AhIBxIALgvQAaAHAbgHQALgDAHgGQAIgHgBgJQgBgHgIgEQgGgDgPgEQgVgGgLgHQgRgLgDgTQgEggAXgaQAVgYAlgKQAggIAVAFIgKAwQgSgFgXAGQgNADgGAHQgGAGABAHQABAHAJAEIAWAHQAtALAFAgQAFAjgZAaQgWAYgkAJQgWAFgRAAQgPAAgMgEg");
	this.shape_3.setTransform(6.1,-2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE70B").s().p("AhQhVIA/gQIAaA5QAQAiAOAlIABgBQgEghADguIADg/IAxgNIgKDXIg3AOIgeg+QgVgpgLgeIgBAAQABAcgDA+IgCA9IgxALg");
	this.shape_4.setTransform(-18.1,3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE70B").s().p("AhCBlQgbgSgFgmQgEgcAGgbQAGgcAQgVQAbgmAvgMQAogKAbASQAaARAGAnQAIA9ggAsQgcAmgvAMQgNAEgMAAQgXAAgSgNgAAAhAQgQAEgMARQgKANgDAWQgEATADATQACAVAMAJQAMAKASgFQAPgFAMgPQAJgOAEgXQADgTgDgSQgFglgZAAQgGAAgGACg");
	this.shape_5.setTransform(-39.8,9.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE70B").s().p("AhQhVIA/gQIAbA5QATAqALAdIAAgBQgDgiACgtIADg/IAxgNIgKDXIg3AOIgeg+QgZg1gGgSIgCABQABAZgCBBIgDA7IgxANg");
	this.shape_6.setTransform(-61.5,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(10,1,1).p("AgThDQAGgDAKgCQAagHAEAXQACANgJAMQgKAMgQAEQgHACgJABgAhPB2IA0gNIADhKQAMgBAGgCQAogKAYgZQAbgdgGgmQgEgfgcgJQgXgIgjAJQgkAJgWAMg");
	this.shape_7.setTransform(62.7,-15.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE70B").s().p("AhFhcQAWgMAkgJQAjgJAXAIQAcAJAEAfQAGAmgbAdQgYAZgoAKIgSADIgDBKIg0ANgAgDhIQgKACgGADIgDA3IAQgDQAQgEAKgMQAJgMgCgNQgDgRgQAAQgFAAgGABg");
	this.shape_8.setTransform(62.7,-15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(10,1,1).p("AAAhtQguAMgcAmQgPAWgHAbQgGAbAEAdQAFAmAbASQAbASAngKQAwgMAbgmQAQgVAGgcQAGgbgEgcQgGgngagSQgbgSgoAKgAAAhAQAkgJAHAsQACASgDAUQgEAXgJANQgLAQgQAEQgSAFgMgKQgLgJgDgVQgDgSAEgUQAEgWAJgNQAMgQAQgFg");
	this.shape_9.setTransform(42.2,-11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE70B").s().p("AhCBmQgbgSgFgmQgEgdAGgbQAHgbAPgWQAcgmAugMQAogKAbASQAaASAGAnQAEAcgGAbQgGAcgQAVQgbAmgwAMQgNAEgMAAQgXAAgSgMgAAAhAQgQAFgMAQQgJANgEAWQgEAUADASQADAVALAJQAMAKASgFQAQgEALgQQAJgNAEgXQADgUgCgSQgFgkgaAAQgGAAgGABg");
	this.shape_10.setTransform(42.2,-11.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(10,1,1).p("AgjB5IA0gNIAIinIA1gOIACgvIidAoIgCAwIA0gOg");
	this.shape_11.setTransform(23.4,-7.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE70B").s().p("AgbguIg0AOIACgwICegoIgDAvIg1AOIgICnIg0ANg");
	this.shape_12.setTransform(23.4,-7.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(10,1,1).p("AhIBxQAYAJAqgKQAkgJAWgYQAZgagFgjQgFgggtgLQgTgFgDgCQgJgEgBgHQgBgHAGgGQAGgHANgDQAXgGASAFIAKgwQgVgFggAIQglAKgVAYQgXAaAEAgQADATARALQALAHAVAGQAPAEAGADQAIAEABAHQABAJgIAHQgHAGgLADQgbAHgagHg");
	this.shape_13.setTransform(6.1,-2.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE70B").s().p("AhIBxIALgvQAaAHAbgHQALgDAHgGQAIgHgBgJQgBgHgIgEQgGgDgPgEQgVgGgLgHQgRgLgDgTQgEggAXgaQAVgYAlgKQAggIAVAFIgKAwQgSgFgXAGQgNADgGAHQgGAGABAHQABAHAJAEIAWAHQAtALAFAgQAFAjgZAaQgWAYgkAJQgWAFgRAAQgPAAgMgEg");
	this.shape_14.setTransform(6.1,-2.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(10,1,1).p("AgpB2IACg8QADg/gBgbIABgBQALAeAVApIAeA+IA3gNIAKjXIgxAMIgDA/QgDAuAEAhIgBABQgOgmgQghIgag5Ig/AQIgKDWg");
	this.shape_15.setTransform(-18.1,3.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE70B").s().p("AhQhVIA/gQIAaA5QAQAiAOAlIABgBQgEghADguIADg/IAxgNIgKDXIg3AOIgeg+QgVgpgLgeIgBAAQABAcgDA+IgCA9IgxALg");
	this.shape_16.setTransform(-18.1,3.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(10,1,1).p("AAAhtQgvAMgbAmQgQAVgGAcQgGAbAEAcQAFAmAbASQAbATAngKQAvgMAcgmQAggsgIg9QgGgngagRQgbgSgoAKgAAAhAQAkgKAGAtQADASgDATQgEAXgJAOQgMAPgPAFQgSAFgMgKQgMgJgCgVQgDgTAEgTQADgWAKgNQAMgRAQgEg");
	this.shape_17.setTransform(-39.8,9.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE70B").s().p("AhCBlQgbgSgFgmQgEgcAGgbQAGgcAQgVQAbgmAvgMQAogKAbASQAaARAGAnQAIA9ggAsQgcAmgvAMQgNAEgMAAQgXAAgSgNgAAAhAQgQAEgMARQgKANgDAWQgEATADATQACAVAMAJQAMAKASgFQAPgFAMgPQAJgOAEgXQADgTgDgSQgFglgZAAQgGAAgGACg");
	this.shape_18.setTransform(-39.8,9.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(10,1,1).p("AgpB1IADg7QAChBgBgZIACgBQAGASAZA1IAeA+IA3gOIAKjXIgxANIgDA/QgCAtADAiIAAABQgLgdgTgqIgbg5Ig/AQIgKDXg");
	this.shape_19.setTransform(-61.5,14.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE70B").s().p("AhQhVIA/gQIAbA5QATAqALAdIAAgBQgDgiACgtIADg/IAxgNIgKDXIg3AOIgeg+QgZg1gGgSIgCABQABAZgCBBIgDA7IgxANg");
	this.shape_20.setTransform(-61.5,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4_3, new cjs.Rectangle(-75.6,-32.6,151.4,65.3), null);


(lib.t4_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE70B").s().p("Ag8CEQgjgXgHgzQgLhPAzg7QAngtA+gQQAogKAYAGIgKA6QgUgEggAIQgeAIgSAUQgUAUgEAcIBmgaIgBA2IhiAZIAAAEQADARARALQAUAMAdgHQAdgIAXgPIAMA1QgKAIgVAIQgUAJgTAEQgWAGgSAAQggAAgXgQg");
	this.shape.setTransform(65.5,-16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE70B").s().p("AheCiIAEg5QAKABAOgEQAVgFAHgTQAEgKgEgKIhSigIBLgTIAgBQIASAzIACgBIAjiYIBPgUIg3CiQgRAugIAVQgQAigSAWQgWAbgmAKQgQAFgNAAIgMgCg");
	this.shape_1.setTransform(42.7,-10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE70B").s().p("AhlhuIBEgRIgHBxIAGgBIBCiBIBTgVIhbCRQARAGANAVQAJAOAMAhQASAvAIALIhHASQgIgMgPgtQgIgXgGgIQgLgMgRAEIgGACIgGBxIhDARg");
	this.shape_2.setTransform(18.3,-3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE70B").s().p("AgfiJIBXgWIBCEBIhHASIgMg+IhGASIgSBFIhIASgAgTARIAwgNIgVhjIAAAAg");
	this.shape_3.setTransform(-8.2,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE70B").s().p("Ah2hqIBcgYIAOBPIAIAqQAFAbACAVIACgBQAIgoASg+IAYhWIBcgYIABESIhCARIABhjQABg5ADg4IgBAAQgQBAgQA1IggBoIg0ANIgmjEIAAABIgRDWIg+AQg");
	this.shape_4.setTransform(-37.9,10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE70B").s().p("Ag4CHQgngXgHg0QgHguAPgoQAOgmAfgcQAlgjA3gOQAmgKAXAFIgKA7QgHgBgLABQgPABgPADQghAJgSAWQggAkAHAyQAEAeAVAMQATANAfgIQAegHASgNIAMA1QgZASgtALQgVAFgSAAQgdAAgXgNg");
	this.shape_5.setTransform(-65.5,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(10,1,1).p("ABniRQgYgGgoAKQg+AQgnAtQgzA7ALBPQAHAzAjAXQAmAZA5gPQATgEAUgJQAVgIAKgIIgMg1QgXAPgdAIQgdAHgUgMQgRgLgDgRIAAgEIBigZIABg2IhmAaQAEgcAUgUQASgUAegIQAggIAUAEg");
	this.shape_6.setTransform(65.5,-16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE70B").s().p("Ag8CEQgjgXgHgzQgLhPAzg7QAngtA+gQQAogKAYAGIgKA6QgUgEggAIQgeAIgSAUQgUAUgEAcIBmgaIgBA2IhiAZIAAAEQADARARALQAUAMAdgHQAdgIAXgPIAMA1QgKAIgVAIQgUAJgTAEQgWAGgSAAQggAAgXgQg");
	this.shape_7.setTransform(65.5,-16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(10,1,1).p("Ah4hmIBSCgQAEAKgEAKQgHATgVAFQgOAEgKgBIgEA5QAQAEAagHQAlgKAWgbQATgWAPgiQAJgVAQguIA3iiIhOAUIgkCYIgCABQgMgigGgRIgfhQg");
	this.shape_8.setTransform(42.7,-10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE70B").s().p("AheCiIAEg5QAKABAOgEQAVgFAHgTQAEgKgEgKIhSigIBLgTIAgBQIASAzIACgBIAjiYIBPgUIg3CiQgRAugIAVQgQAigSAWQgWAbgmAKQgQAFgNAAIgMgCg");
	this.shape_9.setTransform(42.7,-10.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(10,1,1).p("AhlhuIgOEUIBEgRIAFhxIAHgCQARgEAKAMQAHAIAIAXQAQAtAHAMIBGgSQgHgLgSgvQgMghgKgOQgNgVgQgGIBbiRIhTAVIhCCBIgGABIAGhxg");
	this.shape_10.setTransform(18.3,-3.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE70B").s().p("AhlhuIBEgRIgHBxIAGgBIBCiBIBTgVIhbCRQARAGANAVQAJAOAMAhQASAvAIALIhHASQgIgMgPgtQgIgXgGgIQgLgMgRAEIgGACIgGBxIhDARg");
	this.shape_11.setTransform(18.3,-3.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(10,1,1).p("AAnA2IAMA+IBHgSIhCkAIhXAWIhaEoIBIgTIAShFgAgTARIAbhwIAAAAIAVBkg");
	this.shape_12.setTransform(-8.2,3.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE70B").s().p("AgfiJIBXgWIBCEBIhHASIgMg+IhGASIgSBFIhIASgAgTARIAwgNIgVhjIAAAAg");
	this.shape_13.setTransform(-8.2,3.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(10,1,1).p("ACUBjIAAkRIhdAYIgYBWQgSA+gIAoIgBAAQgDgUgFgbQgIgpAAgCIgOhOIhcAYIgdEYIA+gQIARjWIAAgBIAnDEIA0gOIAfhmQAQg3AQhAIACAAQgDA5gBA5IgCBig");
	this.shape_14.setTransform(-37.9,10.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE70B").s().p("Ah2hqIBcgYIAOBPIAIAqQAFAbACAVIACgBQAIgoASg+IAYhWIBcgYIABESIhCARIABhjQABg5ADg4IgBAAQgQBAgQA1IggBoIg0ANIgmjEIAAABIgRDWIg+AQg");
	this.shape_15.setTransform(-37.9,10.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(10,1,1).p("ABdA9QgSANgeAHQgfAIgTgNQgVgMgEgeQgHgyAggkQASgWAhgJQAPgDAPgBQALgBAHABIAKg7QgXgFgmAKQg3AOglAjQgfAcgOAmQgPAoAHAuQAHA0AnAXQAlAWA2gOQAtgLAZgSg");
	this.shape_16.setTransform(-65.5,16.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE70B").s().p("Ag4CHQgngXgHg0QgHguAPgoQAOgmAfgcQAlgjA3gOQAmgKAXAFIgKA7QgHgBgLABQgPABgPADQghAJgSAWQggAkAHAyQAEAeAVAMQATANAfgIQAegHASgNIAMA1QgZASgtALQgVAFgSAAQgdAAgXgNg");
	this.shape_17.setTransform(-65.5,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4_2, new cjs.Rectangle(-81,-36.3,162,72.6), null);


(lib.t4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE70B").s().p("Ag4CHQgngWgHg1QgHguAPgoQAOgmAfgcQAlgjA3gOQAmgKAXAFIgKA7QgUgDgcAIQgfAHgUAXQggAkAHAyQAFAeAUAMQATANAfgIQAegHASgNIAMA1QgYASguALQgVAFgSAAQgdAAgXgNg");
	this.shape.setTransform(54.2,-15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE70B").s().p("AgbiBIBEgRIgOEUIhCARg");
	this.shape_1.setTransform(36.3,-9.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE70B").s().p("AgoAHIhAh1IBIgSIAkBTIABAAIAjhlIBQgUIhNCaIBGB5IhJASIgohWIgBAAIglBqIhRAUg");
	this.shape_2.setTransform(18.6,-5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE70B").s().p("AggiIIBYgXIBCEBIhHASIgMg+IhGASIgSBFIhIATgAAHhfIgMA7IgOA1IAwgNIgKgvIgLg0g");
	this.shape_3.setTransform(-6.1,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE70B").s().p("AhZh2QAbgPAvgMQAugMAdAKQAjAMAGAoQAHAwgiAmQgeAgg1AOIgWAEIgFBfIhCAQgAgFhdQgOAEgGADIgEBHQALgBAKgDQAUgFANgQQAMgPgDgRQgDgXgWAAQgHAAgHACg");
	this.shape_4.setTransform(-27.3,7.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE70B").s().p("AgfiIIBXgXIBCEBIhHASIgNg+IhEASIgSBFIhJATgAAIhfIgbBwIAwgNIgUhjg");
	this.shape_5.setTransform(-52.5,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(10,1,1).p("ABdA9QgSANgeAHQgfAIgTgNQgUgMgFgeQgHgyAggkQAUgXAfgHQAcgIAUADIAKg7QgXgFgmAKQg3AOglAjQgfAcgOAmQgPAoAHAuQAHA1AnAWQAmAWA1gOQAugLAYgSg");
	this.shape_6.setTransform(54.2,-15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE70B").s().p("Ag4CHQgngWgHg1QgHguAPgoQAOgmAfgcQAlgjA3gOQAmgKAXAFIgKA7QgUgDgcAIQgfAHgUAXQggAkAHAyQAFAeAUAMQATANAfgIQAegHASgNIAMA1QgYASguALQgVAFgSAAQgdAAgXgNg");
	this.shape_7.setTransform(54.2,-15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(10,1,1).p("AgbiBIgMEUIBCgRIANkUg");
	this.shape_8.setTransform(36.3,-9.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE70B").s().p("AgbiBIBEgRIgOEUIhCARg");
	this.shape_9.setTransform(36.3,-9.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(10,1,1).p("ABxBtIhGh5IBNiaIhQAUIgjBlIgBAAIgkhTIhIASIBAB1IhPCgIBRgUIAlhqIABAAIAoBWg");
	this.shape_10.setTransform(18.6,-5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE70B").s().p("AgoAHIhAh1IBIgSIAkBTIABAAIAjhlIBQgUIhNCaIBGB5IhJASIgohWIgBAAIglBqIhRAUg");
	this.shape_11.setTransform(18.6,-5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(10,1,1).p("AgTARIAOg1QAIgpAEgRIABgBQABADAKAyIAKAvgAAnA3IAMA9IBHgSIhCkBIhYAWIhZEpIBIgTIAShFg");
	this.shape_12.setTransform(-6.1,2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE70B").s().p("AggiIIBYgXIBCEBIhHASIgMg+IhGASIgSBFIhIATgAAHhfIgMA7IgOA1IAwgNIgKgvIgLg0g");
	this.shape_13.setTransform(-6.1,2.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(10,1,1).p("AhmCYIBCgQIAFhfIAWgEQA1gOAeggQAigmgHgwQgGgogjgMQgdgKguAMQgvAMgbAPgAgZhWQAGgDAOgEQAjgIAEAdQADARgMAPQgNAQgUAFQgKADgLABg");
	this.shape_14.setTransform(-27.3,7.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE70B").s().p("AhZh2QAbgPAvgMQAugMAdAKQAjAMAGAoQAHAwgiAmQgeAgg1AOIgWAEIgFBfIhCAQgAgFhdQgOAEgGADIgEBHQALgBAKgDQAUgFANgQQAMgPgDgRQgDgXgWAAQgHAAgHACg");
	this.shape_15.setTransform(-27.3,7.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(10,1,1).p("AAnA3IAMA9IBHgSIhCkAIhXAWIhaEoIBJgTIAShFgAgTARIAbhvIABgBIAUBkg");
	this.shape_16.setTransform(-52.5,13.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE70B").s().p("AgfiIIBXgXIBCEBIhHASIgNg+IhEASIgSBFIhJATgAAIhfIgbBwIAwgNIgUhjg");
	this.shape_17.setTransform(-52.5,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4_1, new cjs.Rectangle(-69.7,-34.8,139.5,69.6), null);


(lib.t3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE70B").s().p("AhbhgIBHgPIgOBLQgMA+gSBPIABAAQASgkAwhUIA/h0IBSgTIg4E1IhGAPIANhKQAOhNANgyIgBAAQgbA4giA9Ig6BnIhZAUgAgei0IAygMQgEAbASgEQARgEAGgbIA0gMQgOA8hBAPQgNADgKAAQgnAAACgug");
	this.shape.setTransform(67.8,-15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE70B").s().p("AgJiRIBLgRIg5E0IhKARg");
	this.shape_1.setTransform(46.5,-7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE70B").s().p("AAzB4IjFAtIA4k1IBLgRIgsDyIBXgUIAsjyIBLgRIgsD1IAdgEIggCOIg8ANg");
	this.shape_2.setTransform(24.5,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE70B").s().p("AhvCPQghgbAAg3QAAgoAPgnQAOgoAZgeQAug1BCgQQA5gNAhAbQAhAbAAA4QAAAqgOAmQgOAogZAeQgtA1hCAPIgBAAQgSAEgPAAQgiAAgYgTgAANhcQggAIgYAsQgVAoAAApQAAAeAOAOQAOAOAbgGIAAAAQAfgHAXgtQAUgpAAgoQAAg2gmAAQgGAAgIACg");
	this.shape_3.setTransform(-6,4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE70B").s().p("Ahth7IBlgWIADBXIAFBlIAAAAQASg1AZg8IAnhgIBmgXIgpExIhJARIARhvQAHgvAOhPIgBAAQgYA/gdBEIgwByIg7ANIgFhlIgFh2IgBAAIgzDvIhEAQg");
	this.shape_4.setTransform(-41.1,12.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE70B").s().p("AhAiFIC5gpIgMBCIhuAZIgKA0IBpgYIgNBBIhnAYIgKA6IB0gaIgNBDIi/Arg");
	this.shape_5.setTransform(-70.4,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(10,1,1).p("AhbhfIg4E0IBZgUIA6hmQAig+Abg4IABAAQgNAygOBOIgNBKIBGgQIA4k0IhSASIg/B0QgwBUgSAkIgBAAQAShOAMg/IAOhMgAgei0QgDA5A/gOQBBgPAOg8Ig0AMQgGAcgRADQgSAFAEgcg");
	this.shape_6.setTransform(67.8,-15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE70B").s().p("AhbhgIBHgPIgOBLQgMA+gSBPIABAAQASgkAwhUIA/h0IBSgTIg4E1IhGAPIANhKQAOhNANgyIgBAAQgbA4giA9Ig6BnIhZAUgAgei0IAygMQgEAbASgEQARgEAGgbIA0gMQgOA8hBAPQgNADgKAAQgnAAACgug");
	this.shape_7.setTransform(67.8,-15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(10,1,1).p("AgJiRIg4E0IBKgRIA5k0g");
	this.shape_8.setTransform(46.5,-7.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE70B").s().p("AgJiRIBLgRIg5E0IhKARg");
	this.shape_9.setTransform(46.5,-7.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(10,1,1).p("AhaiQIg4E0IDFgtIgLBQIA8gOIAgiOIgdAEIAsj1IhLASIgsDxIhXAUIAsjyg");
	this.shape_10.setTransform(24.5,-0.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE70B").s().p("AAzB4IjFAtIA4k1IBLgRIgsDyIBXgUIAsjyIBLgRIgsD1IAdgEIggCOIg8ANg");
	this.shape_11.setTransform(24.5,-0.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(10,1,1).p("AgTCeQBCgPAtg1QAZgeAOgoQAOgmAAgqQAAg4ghgbQghgbg5ANQhCAQguA1QgZAegOAoQgPAnAAAoQAAA3AhAbQAjAcA4gNgAgJBdQgbAGgOgOQgOgOAAgeQAAgpAVgoQAYgsAggIQA0gMAABAQAAAogUApQgXAtgfAHg");
	this.shape_12.setTransform(-6,4.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE70B").s().p("AhvCPQghgbAAg3QAAgoAPgnQAOgoAZgeQAug1BCgQQA5gNAhAbQAhAbAAA4QAAAqgOAmQgOAogZAeQgtA1hCAPIgBAAQgSAEgPAAQgiAAgYgTgAANhcQggAIgYAsQgVAoAAApQAAAeAOAOQAOAOAbgGIAAAAQAfgHAXgtQAUgpAAgoQAAg2gmAAQgGAAgIACg");
	this.shape_13.setTransform(-6,4.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(10,1,1).p("ACPB0IApkxIhmAXIgnBgQgZA8gSA1IAAAAQAAgRgFhUIgDhXIhlAWIhKE5IBFgQIAyjvIABAAQADBXACAfIAGBlIA6gNIAwhzQAdhDAYg/IACAAQgPBPgHAwIgRBug");
	this.shape_14.setTransform(-41.1,12.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE70B").s().p("Ahth7IBlgWIADBXIAFBlIAAAAQASg1AZg8IAnhgIBmgXIgpExIhJARIARhvQAHgvAOhPIgBAAQgYA/gdBEIgwByIg7ANIgFhlIgFh2IgBAAIgzDvIhEAQg");
	this.shape_15.setTransform(-41.1,12.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(10,1,1).p("ABeg3IhoAYIAKg0IBtgZIAMhDIi5ArIg4E0IDAgrIAMhDIh0AbIAKg7IBngXg");
	this.shape_16.setTransform(-70.4,19);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE70B").s().p("AhAiFIC5gpIgMBCIhuAZIgKA0IBpgYIgNBBIhnAYIgKA6IB0gaIgNBDIi/Arg");
	this.shape_17.setTransform(-70.4,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_4, new cjs.Rectangle(-87.5,-41.6,175.1,83.2), null);


(lib.t3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE70B").s().p("AiLCxIAMhAQALACAPgEQALgCAKgIQAJgHAEgJQAHgMgFgLIg+i0IBUgTIAVBbIAMA4IADAAIAWhCIAlhnIBYgTIhTCyQgZAzgNAXQgUAmgXAYQgdAegpAJQgRAEgNAAQgIAAgHgCg");
	this.shape.setTransform(70.7,-19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE70B").s().p("AhIiEQAmgRAtgKQAZgFARgBQASgCAQAFQASADAKAMQAMANAAAUQAAAbgRAWQgPAUgZANIAAABQAVACAMAOQAMAPAAAWQAAAsgrAlQgmAhhQASQgzALgdABgAgOARIgPAEIgOBJIAXgEQAXgFAPgNQARgPAAgTQAAgYgbAAQgJAAgNADgAAPhlQgPACgHAEIgLA8IASgFQAXgFANgLQAOgMABgQQAAgNgLgEQgFgCgGAAQgGAAgIACg");
	this.shape_1.setTransform(42.5,-12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE70B").s().p("AhbhfIBHgQIgOBLQgJAygVBbIABAAQATgkAvhUIA/h0IBSgTIg4E1IhGAQIANhKQAShbAJglIgBABQgeA9gfA3Ig6BnIhZAUgAgei0IAygMQgDAbARgEQARgEAGgbIA0gMQgOA8hBAPQgNADgKAAQgnAAACgug");
	this.shape_2.setTransform(15,-10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE70B").s().p("AAGiYIBigWIAfEgIhPASIgDhFIhNARIgeBNIhQASgAAqhoIgtB7IA1gMIgDg1IgEg7g");
	this.shape_3.setTransform(-16.4,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE70B").s().p("AhIiGQAggQAygLQA1gMAcAMQAlAOAAAtQAAA3gqAoQgkAjg8AOIgYADIgUBqIhJARgAANhmIgVAGIgPBPIAXgDQAWgGAQgRQAPgRAAgSQAAgagYAAQgHAAgJACg");
	this.shape_4.setTransform(-38.4,5.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE70B").s().p("AiKBTIAYgIQAbguAOglQASgwAHgoIAPhSIDDgsIgsD0IAegEIggCOIg8AOIALhPIiVAiIgVBRIg7ANgAAWh+IgGAjQgIAmgPAuQgOAigPAdIBQgSIAfiwg");
	this.shape_5.setTransform(-68.3,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(10,1,1).p("Ah/h2IA/C0QAEALgHAMQgFAJgIAHQgKAIgLACQgPAEgLgCIgMBAQARAEAcgGQApgJAdgeQAWgYAVgmQANgXAZgzIBTiyIhXATIgmBnQgGAPgQAzIgCAAQgJgogEgQIgVhbg");
	this.shape_6.setTransform(70.7,-19.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE70B").s().p("AiLCxIAMhAQALACAPgEQALgCAKgIQAJgHAEgJQAHgMgFgLIg+i0IBUgTIAVBbIAMA4IADAAIAWhCIAlhnIBYgTIhTCyQgZAzgNAXQgUAmgXAYQgdAegpAJQgRAEgNAAQgIAAgHgCg");
	this.shape_7.setTransform(70.7,-19.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(10,1,1).p("Ah+CmQAdgBAzgLQBQgSAnghQAqglAAgsQAAgWgMgPQgMgOgWgCIAAgBQAagNAPgUQARgWAAgbQAAgUgMgNQgKgMgSgDQgPgFgTACQgQABgZAFQguAKgmARgAgHhfQAHgEAOgCQAQgEAKAEQAKAEAAANQAAAQgNAMQgOALgXAFIgSAFgAgeAVIAQgEQAxgMAAAhQAAATgRAPQgPANgYAFQgQAEgFAAg");
	this.shape_8.setTransform(42.5,-12.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE70B").s().p("AhIiEQAmgRAtgKQAZgFARgBQASgCAQAFQASADAKAMQAMANAAAUQAAAbgRAWQgPAUgZANIAAABQAVACAMAOQAMAPAAAWQAAAsgrAlQgmAhhQASQgzALgdABgAgOARIgPAEIgOBJIAXgEQAXgFAPgNQARgPAAgTQAAgYgbAAQgJAAgNADgAAPhlQgPACgHAEIgLA8IASgFQAXgFANgLQAOgMABgQQAAgNgLgEQgFgCgGAAQgGAAgIACg");
	this.shape_9.setTransform(42.5,-12.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(10,1,1).p("Agei0QgDA5A/gOQBBgPAOg8Ig0AMQgGAbgRAEQgRAEADgbgAhbhfIg4E0IBZgUIA6hnQAfg3Aeg9IABgBQgJAlgSBbIgNBKIBGgQIA4k1IhSATIg/B0QgvBUgTAkIgBAAQAVhbAJgyIAOhLg");
	this.shape_10.setTransform(15,-10.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE70B").s().p("AhbhfIBHgQIgOBLQgJAygVBbIABAAQATgkAvhUIA/h0IBSgTIg4E1IhGAQIANhKQAShbAJglIgBABQgeA9gfA3Ig6BnIhZAUgAgei0IAygMQgDAbARgEQARgEAGgbIA0gMQgOA8hBAPQgNADgKAAQgnAAACgug");
	this.shape_11.setTransform(15,-10.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(10,1,1).p("AgDATIAth7IABgBQABAJADAyIADA1gAA1A/IADBFIBPgSIgfkgIhiAWIiMFHIBQgSIAehNg");
	this.shape_12.setTransform(-16.4,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE70B").s().p("AAGiYIBigWIAfEgIhPASIgDhFIhNARIgeBNIhQASgAAqhoIgtB7IA1gMIgDg1IgEg7g");
	this.shape_13.setTransform(-16.4,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(10,1,1).p("Ah/CoIBJgRIAUhqQANgBALgCQA8gOAkgjQAqgoAAg3QAAgtglgOQgcgMg1AMQgyALggAQgAgIhgQAOgFAHgBQAogKAAAiQAAASgPARQgQARgWAGQgKACgNABg");
	this.shape_14.setTransform(-38.4,5.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE70B").s().p("AhIiGQAggQAygLQA1gMAcAMQAlAOAAAtQAAA3gqAoQgkAjg8AOIgYADIgUBqIhJARgAANhmIgVAGIgPBPIAXgDQAWgGAQgRQAPgRAAgSQAAgagYAAQgHAAgJACg");
	this.shape_15.setTransform(-38.4,5.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(10,1,1).p("AghiyIgPBSQgHAogSAwQgPAlgaAuIgZAIIgXCMIA7gNIAVhRICVgiIgLBPIA8gOIAgiOIgdAEIAsj0gAAWh+IA1gMIgfCwIhRASQAQgdAOgiQAPguAHgmg");
	this.shape_16.setTransform(-68.3,15.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE70B").s().p("AiKBTIAYgIQAbguAOglQASgwAHgoIAPhSIDDgsIgsD0IAegEIggCOIg8AOIALhPIiVAiIgVBRIg7ANgAAWh+IgGAjQgIAmgPAuQgOAigPAdIBQgSIAfiwg");
	this.shape_17.setTransform(-68.3,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_3, new cjs.Rectangle(-89.6,-42.7,179.3,85.5), null);


(lib.t3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE70B").s().p("AiLCxIANhAQAMACAOgEQAVgEANgWQAGgLgEgMIg/i0IBUgTIAVBbQAGAaAGAeIADAAIAWhCIAmhnIBXgTIhTCyQgZAzgNAXQgUAmgYAYQgcAegpAJQgRAEgNAAQgIAAgHgCg");
	this.shape.setTransform(59.5,-12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE70B").s().p("Ahbh/IBKgQIgYB+IAGgBIBbiOIBdgVIh4CfQAQAHALAYQAHAQAIAlQANA3AGALIhNARQgGgLgKg0QgFgbgHgJQgJgNgTAEIgHACIgYB+IhJARg");
	this.shape_1.setTransform(31,-5.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE70B").s().p("AAGiYIBigWIAfEgIhPASIgDhFIhOASIgdBMIhRASgAAqhoIgtB8IA1gNIgHhwg");
	this.shape_2.setTransform(-0.3,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE70B").s().p("Ahuh7IBmgWIADBXIAEBlIABAAQAPgsAchFIAnhgIBmgXIgpExIhJARIARhuQALhKAKg1IgBAAQggBSgVAwIgxBzIg6ANIgFhmIgFh1IgBAAIgzDwIhEAPg");
	this.shape_3.setTransform(-31.2,8.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE70B").s().p("AhXCTQgmgaAAg6QAAg0AWgsQAUgqAlgfQAugmA9gOQApgJAYAGIgTBCQgYgDgcAGQgjAIgZAYQgnAnAAA5QAAAhAUAPQAUAOAhgIQAfgHAXgNIAFA7QgcASgzAMQgUAFgSAAQgiAAgYgRg");
	this.shape_4.setTransform(-60.8,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(10,1,1).p("Ah/h2IA/C0QAEAMgGALQgNAWgVAEQgOAEgMgCIgNBAQAQAEAdgGQApgJAcgeQAYgYAUgmQANgXAZgzIBTiyIhXATIgmBnQgEAJgSA5IgDAAQgGgegGgaIgVhbg");
	this.shape_5.setTransform(59.5,-12.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE70B").s().p("AiLCxIANhAQAMACAOgEQAVgEANgWQAGgLgEgMIg/i0IBUgTIAVBbQAGAaAGAeIADAAIAWhCIAmhnIBXgTIhTCyQgZAzgNAXQgUAmgYAYQgcAegpAJQgRAEgNAAQgIAAgHgCg");
	this.shape_6.setTransform(59.5,-12.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(10,1,1).p("Ahbh/Ig4E1IBKgRIAXh+IAHgCQATgEAJANQAHAJAFAbQAKA0AGALIBNgRQgGgLgMg3QgJglgHgQQgKgYgRgHIB3ifIhcAVIhaCOIgHABIAYh+g");
	this.shape_7.setTransform(31,-5.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE70B").s().p("Ahbh/IBKgQIgYB+IAGgBIBbiOIBdgVIh4CfQAQAHALAYQAHAQAIAlQANA3AGALIhNARQgGgLgKg0QgFgbgHgJQgJgNgTAEIgHACIgYB+IhJARg");
	this.shape_8.setTransform(31,-5.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(10,1,1).p("AA1A/IADBFIBPgSIggkgIhiAWIiLFHIBQgSIAehMgAgDAUIAth8IABgBIAHBwg");
	this.shape_9.setTransform(-0.3,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE70B").s().p("AAGiYIBigWIAfEgIhPASIgDhFIhOASIgdBMIhRASgAAqhoIgtB8IA1gNIgHhwg");
	this.shape_10.setTransform(-0.3,1.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(10,1,1).p("ACPB0IApkxIhmAXIgnBgQgcBEgPAtIgBAAQAAgQgEhVIgDhXIhmAXIhJE4IBEgPIAzjwIABAAQADBXACAfIAFBlIA6gNIAxhyQAVgxAghSIABAAQgKA2gLBJIgRBug");
	this.shape_11.setTransform(-31.2,8.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE70B").s().p("Ahuh7IBmgWIADBXIAEBlIABAAQAPgsAchFIAnhgIBmgXIgpExIhJARIARhuQALhKAKg1IgBAAQggBSgVAwIgxBzIg6ANIgFhmIgFh1IgBAAIgzDwIhEAPg");
	this.shape_12.setTransform(-31.2,8.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(10,1,1).p("ABTBGQgXANgfAHQghAIgUgOQgUgPAAghQAAg5AngnQAZgYAjgIQAcgGAYADIAThCQgYgGgpAJQg9AOguAmQglAfgUAqQgWAsAAA0QAAA6AmAaQAlAaA7gOQAzgMAcgSg");
	this.shape_13.setTransform(-60.8,14);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE70B").s().p("AhXCTQgmgaAAg6QAAg0AWgsQAUgqAlgfQAugmA9gOQApgJAYAGIgTBCQgYgDgcAGQgjAIgZAYQgnAnAAA5QAAAhAUAPQAUAOAhgIQAfgHAXgNIAFA7QgcASgzAMQgUAFgSAAQgiAAgYgRg");
	this.shape_14.setTransform(-60.8,14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_2, new cjs.Rectangle(-78.4,-35.3,156.9,70.7), null);


(lib.t3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE70B").s().p("AhAiFIC5gqIgMBDIhuAZIgJA0IBngYIgMBBIhoAYIgKA6IB0gaIgMBCIi/Asg");
	this.shape.setTransform(67.2,-15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE70B").s().p("AiOhzIBJgQIgsDxIA9gOIAtjxIBIgRIgtDyIA+gOIAtjyIBJgQIg4E0IlWBNg");
	this.shape_1.setTransform(35.3,-7.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE70B").s().p("AhAiQIBKgRIgUBpQANgGATgFQAsgKAbARQAcARAAArQAAAqgdAiQgrA1haAVQgyALgcABgAgBgCIgUAGIgPBUIATgDQAWgFAQgPQATgRAAgWQAAgSgMgIQgHgEgKAAIgMACg");
	this.shape_2.setTransform(1,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE70B").s().p("AiaB8QAegKAQgWQAXggAMg9IAZiJIDLguIg4E0IhLARIAsjyIg6AOIgMBBQgLA6gNAjQgOAngWAaQggAlg1AMg");
	this.shape_3.setTransform(-26.4,6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE70B").s().p("AgJiRIBLgRIg5E0IhKARg");
	this.shape_4.setTransform(-46.7,10.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE70B").s().p("AhEiDIDBgsIgMBEIh2AbIgIAqQAPgHAQgEQAqgJAbAPQAcARAAApQAAAxgoAnQgpAqhMARQguALgkACgAgEAMQgJACgLAFIgPBUIAUgDQAVgFAQgPQASgSAAgWQAAgRgLgIQgIgEgKAAIgLABg");
	this.shape_5.setTransform(-66.8,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(10,1,1).p("ABdg3IhoAYIAKg0IBtgZIANhDIi5AqIg4E1IC/gsIAMhCIh0AaIAKg6IBogYg");
	this.shape_6.setTransform(67.2,-15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE70B").s().p("AhAiFIC5gqIgMBDIhuAZIgJA0IBngYIgMBBIhoAYIgKA6IB0gaIgMBCIi/Asg");
	this.shape_7.setTransform(67.2,-15.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(10,1,1).p("AiOhzIg5E0IFWhNIA5k0IhKAQIgsDyIg+AOIAtjyIhJARIgsDxIg9AOIAsjxg");
	this.shape_8.setTransform(35.3,-7.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE70B").s().p("AiOhzIBJgQIgsDxIA9gOIAtjxIBIgRIgtDyIA+gOIAtjyIBJgQIg4E0IlWBNg");
	this.shape_9.setTransform(35.3,-7.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(10,1,1).p("AgVAEQAPgFAGgBQARgEAMAGQALAIAAASQAAAWgTARQgQAPgWAFQgPADgEAAgAhAiQIg3EyQAcgBAxgLQBbgVArg1QAdgiAAgqQAAgrgcgRQgbgRgsAKQgTAFgMAGIAThpg");
	this.shape_10.setTransform(1,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE70B").s().p("AhAiQIBKgRIgUBpQANgGATgFQAsgKAbARQAcARAAArQAAAqgdAiQgrA1haAVQgyALgcABgAgBgCIgUAGIgPBUIATgDQAWgFAQgPQATgRAAgWQAAgSgMgIQgHgEgKAAIgMACg");
	this.shape_11.setTransform(1,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(10,1,1).p("AgwiKIgZCKQgMA8gXAgQgQAWgeAKIAHA9QA1gMAgglQAWgaAOgmQANgjALg7IAMhBIA6gNIgsDxIBLgRIA4k0g");
	this.shape_12.setTransform(-26.4,6.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE70B").s().p("AiaB8QAegKAQgWQAXggAMg9IAZiJIDLguIg4E0IhLARIAsjyIg6AOIgMBBQgLA6gNAjQgOAngWAaQggAlg1AMg");
	this.shape_13.setTransform(-26.4,6.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(10,1,1).p("AgJiRIg4E0IBKgRIA5k0g");
	this.shape_14.setTransform(-46.7,10.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE70B").s().p("AgJiRIBLgRIg5E0IhKARg");
	this.shape_15.setTransform(-46.7,10.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(10,1,1).p("AhEiDIg4EzQAjgDAvgLQBLgRArgpQAngoAAgxQAAgogcgSQgbgPgqAKQgQADgPAHIAIgqIB2gcIAMhDgAgYATQALgFAKgCQAQgEALAHQAMAIAAASQAAAVgSARQgRAQgUAFQgQADgEAAg");
	this.shape_16.setTransform(-66.8,15.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE70B").s().p("AhEiDIDBgsIgMBEIh2AbIgIAqQAPgHAQgEQAqgJAbAPQAcARAAApQAAAxgoAnQgpAqhMARQguALgkACgAgEAMQgJACgLAFIgPBUIAUgDQAVgFAQgPQASgSAAgWQAAgRgLgIQgIgEgKAAIgLABg");
	this.shape_17.setTransform(-66.8,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3_1, new cjs.Rectangle(-84.2,-37.6,168.6,75.3), null);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE70B").s().p("AhQkNICLgfIhQG7IDNgvIgXB/IlYBPg");
	this.shape.setTransform(51.3,-11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE70B").s().p("AhSAMIhdj0ICSgiIAxCsIACAAIBhjOIClgmIjDE6IBmD+IiUAiIg4i0IgBABQgTAmghBJIgyBpIinAmg");
	this.shape_1.setTransform(8.3,-3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE70B").s().p("AhRANIhej1ICSgiIAxCsIACAAIAzhsIAuhiIClgmIjDE6IBnD+IiUAiIg5izIgBAAIg0BvIgyBpIinAmg");
	this.shape_2.setTransform(-41.1,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(10,1,1).p("Ai2EtIFXhOIAXh/IjNAvIBPm8IiKAgg");
	this.shape_3.setTransform(51.3,-11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE70B").s().p("AhQkNICLgfIhQG7IDNgvIgXB/IlYBPg");
	this.shape_4.setTransform(51.3,-11.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(10,1,1).p("AC/DmIhmj+IDDk6IilAmIhhDOIgCAAIgxisIiSAiIBdD0IjJFHICmgmIAzhpQAhhJATgmIACgBIA3C0g");
	this.shape_5.setTransform(8.3,-3.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE70B").s().p("AhSAMIhdj0ICSgiIAxCsIACAAIBhjOIClgmIjDE6IBmD+IiUAiIg4i0IgBABQgTAmghBJIgyBpIinAmg");
	this.shape_6.setTransform(8.3,-3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(10,1,1).p("ADADmIhnj+IDDk6IilAmIguBhQgQAigiBLIgDAAIgwisIiTAhIBdD2IjJFGICmgmIAzhpQAihJASgmIACgBIA3C0g");
	this.shape_7.setTransform(-41.1,8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE70B").s().p("AhRANIhej1ICSgiIAxCsIACAAIAzhsIAuhiIClgmIjDE6IBnD+IiUAiIg5izIgBAAIg0BvIgyBpIinAmg");
	this.shape_8.setTransform(-41.1,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-74.5,-46.9,149.1,93.8), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE70B").s().p("AgIiGIBFgQIg0EdIhFAQg");
	this.shape.setTransform(71.5,-16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE70B").s().p("AAvBvIi2ApIA0kcIBFgQIgoDfIBPgSIApjfIBGgQIgpDhIAagDIgdCDIg3ANg");
	this.shape_1.setTransform(51.2,-10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE70B").s().p("AAMApIgBAAQgQANghAIQgjAIgTgMQgVgNAAgeQAAgKAEgVIAQhWIBFgQIgPBQQgCAMAAAIQAAAYAhgGQATgFALgJIAXh4IBFgQIg0EdIhFAQg");
	this.shape_2.setTransform(26.4,-7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE70B").s().p("AAFiMIBbgVIAdEKIhJARIgEhAIhGAQIgcBHIhKARgAAnhgIgqByIAxgMIgDgwIgDg3g");
	this.shape_3.setTransform(0,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE70B").s().p("AhTh0IDbgzIgzEdIhFAPIAojfIhRATIgpDfIhFAQg");
	this.shape_4.setTransform(-23.9,5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE70B").s().p("AhCh6QAhgOArgKQAXgGAQgBQARgBAOAEQARADAJALQALAMAAATQAAAYgQAVQgOASgXANIAAABQAUABALANQALANAAAVQAAAognAjQgjAehKASQgyALgYAAgAgNAQIgOADIgMBEIAUgEQAWgFAOgMQAQgNAAgSQAAgWgZAAQgJAAgMADgAANheIgUAHIgKA3IARgEQAVgFANgLQAMgLAAgOQAAgSgTAAIgOABg");
	this.shape_5.setTransform(-65.8,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(10,1,1).p("AgIiGIg0EdIBFgQIA0kdg");
	this.shape_6.setTransform(71.5,-16.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE70B").s().p("AgIiGIBFgQIg0EdIhFAQg");
	this.shape_7.setTransform(71.5,-16.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(10,1,1).p("AhTiEIg0EdIC2gqIgKBJIA3gNIAdiDIgaADIApjhIhGAQIgpDfIhPASIAojfg");
	this.shape_8.setTransform(51.2,-10);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE70B").s().p("AAvBvIi2ApIA0kcIBFgQIgoDfIBPgSIApjfIBGgQIgpDhIAagDIgdCDIg3ANg");
	this.shape_9.setTransform(51.2,-10);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(10,1,1).p("AhdhmIgQBWQgDAVAAAKQAAAeAUANQATAMAjgIQAhgIARgNIABAAIgUBuIBFgQIA0kdIhFAQIgWB4QgMAJgTAFQghAGAAgYQAAgIACgMIAPhQg");
	this.shape_10.setTransform(26.4,-7.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE70B").s().p("AAMApIgBAAQgQANghAIQgjAIgTgMQgVgNAAgeQAAgKAEgVIAQhWIBFgQIgPBQQgCAMAAAIQAAAYAhgGQATgFALgJIAXh4IBFgQIg0EdIhFAQg");
	this.shape_11.setTransform(26.4,-7.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(10,1,1).p("AAwA6IAEBAIBJgRIgdkKIhbAVIiBEuIBKgRIAchHgAgDASIAqhyIABgBQABARACAmIADAwg");
	this.shape_12.setTransform(0,0.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE70B").s().p("AAFiMIBbgVIAdEKIhJARIgEhAIhGAQIgcBHIhKARgAAnhgIgqByIAxgMIgDgwIgDg3g");
	this.shape_13.setTransform(0,0.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(10,1,1).p("AhUh0Ig0EcIBGgQIApjfIBSgTIgqDfIBGgPIA0kdg");
	this.shape_14.setTransform(-23.9,5.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE70B").s().p("AhTh0IDbgzIgzEdIhFAPIAojfIhRATIgpDfIhFAQg");
	this.shape_15.setTransform(-23.9,5.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(10,1,1).p("Ah0CaQAYAAAygLQBKgSAjgeQAngjAAgoQAAgVgLgNQgLgNgUgBIAAgBQAXgNAOgSQAQgVAAgYQAAgTgLgMQgJgLgRgDQgOgEgRABQgQABgXAGQgrAKghAOgAgHhXIAUgHQAhgHAAAYQAAAOgMALQgNALgVAFIgRAEgAgbATIAOgDQAugLAAAeQAAASgQANQgOAMgWAFQgPAEgFAAg");
	this.shape_16.setTransform(-65.8,15.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE70B").s().p("AhCh6QAhgOArgKQAXgGAQgBQARgBAOAEQARADAJALQALAMAAATQAAAYgQAVQgOASgXANIAAABQAUABALANQALANAAAVQAAAognAjQgjAehKASQgyALgYAAgAgNAQIgOADIgMBEIAUgEQAWgFAOgMQAQgNAAgSQAAgWgZAAQgJAAgMADgAANheIgUAHIgKA3IARgEQAVgFANgLQAMgLAAgOQAAgSgTAAIgOABg");
	this.shape_17.setTransform(-65.8,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-82.5,-36.3,165.1,72.6), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE70B").s().p("AggCWQgMgKAAgUQAAgUAMgQQANgPATgFQAUgFANAKQAMAKAAAUQAAAUgMAPQgMAQgVAFIAAAAQgGABgGAAQgLAAgJgGgAgoiIIBRgTIgLDEIg6AOg");
	this.shape.setTransform(103.7,-24.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE70B").s().p("AhhCxIAFhCQAJABARgEQAZgGAHgTQADgFgEgGIhki4IBZgVIA4COIACAAIAPg+IAahoIBTgTIg0CbQgSAxgLAaQgQAlgPAXQggAvgzAMQgQAEgOAAIgIAAg");
	this.shape_1.setTransform(84.1,-20.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE70B").s().p("Ah9h2IBOgSIAAB4IAEgBIBIiJIBhgXIhkCZQAYACAPAPQANAMAJAZQAVA+AOAbIhVAUQgHgLgFgRIgJgeQgIgZgJgKQgMgOgUAFIgOADIAAB4IhOASg");
	this.shape_2.setTransform(57.2,-13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE70B").s().p("Ah/h2IBQgSIAABtIBfgWIAAhtIBQgTIAAEnIhQATIAAh1IhfAWIAAB1IhQATg");
	this.shape_3.setTransform(26.4,-6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE70B").s().p("Ah+h1IBJgRIAABIQAAAtgEBcIACAAQARguAjhKIAxhxIBRgTIAAEnIhIASIAAhHQAAhOAFgxIgBAAQgVA/gcA4IgtBkIhbAVg");
	this.shape_4.setTransform(-4.6,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE70B").s().p("Ah0h9QAkgPA6gOQAggIATgBQAVgCARAFQASAEALAMQALAOAAAVQABAsgxAeIAAABQAbABAPAPQAQAQAAAZQAAAnghAiQgkAjhWAUQgvALgfACgAgSARIgTAEIAABHQAHgBAPgEQAVgFANgLQAPgNAAgTQgBgSgPgFQgGgCgJAAQgJAAgMADgAgLhjIgaAHIAAA6IAQgEQAwgMAAgeQAAgVgWAAQgGAAgKACg");
	this.shape_5.setTransform(-33.4,8.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE70B").s().p("AhsCGQglgiAAhAQAAhCAog1QApg2BCgQQBFgQAmAkQAkAhAAA/QAABHgoA0QgnAzhEARQgUAFgSAAQgoAAgcgZgAAAhaQgbAHgRAdQgRAdAAAoQAAApARAUQARAVAcgHQAcgHAQgdQARgdgBgnQABgogRgUQgNgRgTAAIgNABg");
	this.shape_6.setTransform(-63.9,15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE70B").s().p("Ah/h1IBQgTIAABuIBfgXIAAhuIBQgSIAAEnIhQATIAAh2IhfAXIAAB2IhQASg");
	this.shape_7.setTransform(-95.5,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(10,1,1).p("AAeApIALjEIhRATIAMC/gAAACbQAVgFAMgQQAMgPAAgUQAAgUgMgKQgNgKgUAFQgTAFgNAPQgMAQAAAUQAAAUAMAKQANAKATgFg");
	this.shape_8.setTransform(103.7,-24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFE70B").s().p("AggCWQgMgKAAgUQAAgUAMgQQANgPATgFQAUgFANAKQAMAKAAAUQAAAUgMAPQgMAQgVAFIAAAAQgGABgGAAQgLAAgJgGgAgoiIIBRgTIgLDEIg6AOg");
	this.shape_9.setTransform(103.7,-24.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(10,1,1).p("AiHhwIBkC4QAEAGgDAFQgHATgZAGQgRAEgJgBIgFBCQASABAUgFQAzgMAggvQAPgXAQglQALgaASgxIA0ibIhTATIgaBoQgIAcgHAiIgCAAIg4iOg");
	this.shape_10.setTransform(84.1,-20.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFE70B").s().p("AhhCxIAFhCQAJABARgEQAZgGAHgTQADgFgEgGIhki4IBZgVIA4COIACAAIAPg+IAahoIBTgTIg0CbQgSAxgLAaQgQAlgPAXQggAvgzAMQgQAEgOAAIgIAAg");
	this.shape_11.setTransform(84.1,-20.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(10,1,1).p("Ah9h2IAAEoIBOgTIAAh3IAOgDQAUgFAMAOQAJAKAIAZIAJAeQAFARAHALIBVgUQgOgagVg/QgJgZgNgMQgPgPgYgCIBkiZIhhAWIhICJIgEABIAAh3g");
	this.shape_12.setTransform(57.2,-13.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFE70B").s().p("Ah9h2IBOgSIAAB4IAEgBIBIiJIBhgXIhkCZQAYACAPAPQANAMAJAZQAVA+AOAbIhVAUQgHgLgFgRIgJgeQgIgZgJgKQgMgOgUAFIgOADIAAB4IhOASg");
	this.shape_13.setTransform(57.2,-13.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(10,1,1).p("Ah/h2IAAEoIBQgTIAAh1IBfgXIAAB2IBQgTIAAkoIhQATIAABuIhfAWIAAhtg");
	this.shape_14.setTransform(26.4,-6.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFE70B").s().p("Ah/h2IBQgSIAABtIBfgWIAAhtIBQgTIAAEnIhQATIAAh1IhfAWIAAB1IhQATg");
	this.shape_15.setTransform(26.4,-6.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(10,1,1).p("Ah+h1IAAEnIBbgVIAthkQAcg4AVg/IABAAQgFAxAABOIAABHIBIgSIAAknIhRATIgxBxQgjBKgRAuIgCAAQAEhcAAgtIAAhIg");
	this.shape_16.setTransform(-4.6,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFE70B").s().p("Ah+h1IBJgRIAABIQAAAtgEBcIACAAQARguAjhKIAxhxIBRgTIAAEnIhIASIAAhHQAAhOAFgxIgBAAQgVA/gcA4IgtBkIhbAVg");
	this.shape_17.setTransform(-4.6,1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(10,1,1).p("Ah0CkQAfgCAvgLQBXgUAjgjQAhgiAAgnQAAgZgPgQQgPgPgcgBIAAgBQAxgeAAgsQAAgVgMgOQgLgMgSgEQgQgFgWACQgTABggAIQg5AOglAPgAglhcQALgEAOgDQAogKAAAdQAAAegyAMIgPAEgAglAVIATgEQAXgGAOAFQAPAFAAASQAAATgPANQgNALgUAFQgQAEgHABg");
	this.shape_18.setTransform(-33.4,8.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFE70B").s().p("Ah0h9QAkgPA6gOQAggIATgBQAVgCARAFQASAEALAMQALAOAAAVQABAsgxAeIAAABQAbABAPAPQAQAQAAAZQAAAnghAiQgkAjhWAUQgvALgfACgAgSARIgTAEIAABHQAHgBAPgEQAVgFANgLQAPgNAAgTQgBgSgPgFQgGgCgJAAQgJAAgMADgAgLhjIgaAHIAAA6IAQgEQAwgMAAgeQAAgVgWAAQgGAAgKACg");
	this.shape_19.setTransform(-33.4,8.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(10,1,1).p("AACiZQhCAQgpA2QgoA1AABCQAABAAlAiQAnAjBDgPQBDgRAogzQAog0AAhHQAAg/gkghQgngkhEAQgAAAhaQAdgGAQAWQAQAUAAAoQAAAngQAdQgQAdgcAHQgcAHgRgVQgQgUAAgpQAAgoAQgdQARgdAbgHg");
	this.shape_20.setTransform(-63.9,15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFE70B").s().p("AhsCGQglgiAAhAQAAhCAog1QApg2BCgQQBFgQAmAkQAkAhAAA/QAABHgoA0QgnAzhEARQgUAFgSAAQgoAAgcgZgAAAhaQgbAHgRAdQgRAdAAAoQAAApARAUQARAVAcgHQAcgHAQgdQARgdgBgnQABgogRgUQgNgRgTAAIgNABg");
	this.shape_21.setTransform(-63.9,15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(10,1,1).p("Ah/h1IAAEnIBQgSIAAh2IBfgXIAAB2IBQgTIAAknIhQASIAABuIhfAXIAAhug");
	this.shape_22.setTransform(-95.5,22.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFE70B").s().p("Ah/h1IBQgTIAABuIBfgXIAAhuIBQgSIAAEnIhQATIAAh2IhfAXIAAB2IhQASg");
	this.shape_23.setTransform(-95.5,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-113.2,-45.2,226.5,90.5), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFE70B").s().p("AhOCMQgpgfABhGQAAg/AmgzQAsg7BOgSQAwgLAdAIIgPBAQgbgGggAIQghAIgVAWQgSATgGAbIB+geIAAA9Ih9AeQAEAaAWAKQAVAKAkgIQAdgHAZgPIALA5QgfAWgtALQgbAGgWAAQgqAAgbgUg");
	this.shape.setTransform(106.4,-26.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE70B").s().p("AhhCxIAFhCQAJABARgEQAagGAGgTQADgGgEgFIhli4IBagVIAkBZQAJAUALAhIACAAIAPg+IAahoIBTgTIg0CbQgjBhgZAmQggAvgzAMQgRAEgNAAIgIAAg");
	this.shape_1.setTransform(80.5,-19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE70B").s().p("Agog+IhLASIAAhDIDng3IAABDIhNASIAADlIhPATg");
	this.shape_2.setTransform(53.4,-13.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFE70B").s().p("Ah/h1IBQgTIAABuIBggXIAAhuIBPgSIAAEnIhPATIAAh1IhgAWIAAB2IhQASg");
	this.shape_3.setTransform(25.3,-6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFE70B").s().p("Ahjh9IDBgtIAABAIhxAbIAAAwIBpgZIAABAIhpAZIAAA2IB2gcIAABBIjGAvg");
	this.shape_4.setTransform(-1.8,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE70B").s().p("AhuCaIAQhBQANADASABQAYABATgEQAWgGAMgKQAOgMAAgPQAAggg2ANIghAHIAAg5IAhgIQAtgLAAgdQAAgMgLgFQgKgEgTAEQgdAHgmAZIgSg0QAsgiA3gNQAygMAeAQQAcAOAAAhQAAAbgQAWQgPAVgbANIAAABQAcgDATAOQAVANAAAcQAAAugrAiQgjAcgxAMQgeAHgXAAQgXAAgSgGg");
	this.shape_5.setTransform(-27,6.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFE70B").s().p("Ahih8IC/guIAABBIhwAbIAAAvIBqgZIAAA/IhqAZIAAA3IB2gcIAABBIjFAvg");
	this.shape_6.setTransform(-51.3,11.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFE70B").s().p("Ahwh/QAmgPA8gOQA/gPAeAQQAQAIAJAQQAJARAAAXQAAAvgdAgQgiAmhAAQIgTADIAABlIhPATgAgJhiQgPAEgJAEIAABMIASgEQAXgFANgPQAOgOAAgTQAAgRgLgHQgHgFgLAAQgGAAgJACg");
	this.shape_7.setTransform(-76.5,18.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFE70B").s().p("Ah8h2ID5g7IAAEoIhPATIAAjnIhaAVIAADnIhQATg");
	this.shape_8.setTransform(-105.7,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(10,1,1).p("AB3ibQgdgIgxALQhNASgsA7QgnAzAAA/QAABGApAfQAqAfBMgRQAtgLAegWIgLg5QgYAPgdAHQgkAIgVgKQgWgKgEgaIB9geIAAg9Ih+AeQAFgbATgTQAUgWAigIQAggIAbAGg");
	this.shape_9.setTransform(106.4,-26.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE70B").s().p("AhOCMQgpgfABhGQAAg/AmgzQAsg7BOgSQAwgLAdAIIgPBAQgbgGggAIQghAIgVAWQgSATgGAbIB+geIAAA9Ih9AeQAEAaAWAKQAVAKAkgIQAdgHAZgPIALA5QgfAWgtALQgbAGgWAAQgqAAgbgUg");
	this.shape_10.setTransform(106.4,-26.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(10,1,1).p("AiHhwIBkC4QADAFgBAGQgHATgaAGQgRAEgJgBIgFBCQAPABAXgFQAzgMAggvQAagmAihhIA1ibIhUATIgaBoQgHAcgIAiIgCAAQgLghgIgUIgkhZg");
	this.shape_11.setTransform(80.5,-19.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFE70B").s().p("AhhCxIAFhCQAJABARgEQAagGAGgTQADgGgEgFIhli4IBagVIAkBZQAJAUALAhIACAAIAPg+IAahoIBTgTIg0CbQgjBhgZAmQggAvgzAMQgRAEgNAAIgIAAg");
	this.shape_12.setTransform(80.5,-19.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(10,1,1).p("AgoCnIBPgTIAAjlIBNgSIAAhDIjnA3IAABDIBLgSg");
	this.shape_13.setTransform(53.4,-13.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE70B").s().p("Agog+IhLASIAAhDIDng3IAABDIhNASIAADlIhPATg");
	this.shape_14.setTransform(53.4,-13.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(10,1,1).p("Ah/h1IAAEnIBQgSIAAh2IBfgWIAAB1IBQgTIAAknIhQASIAABuIhfAXIAAhug");
	this.shape_15.setTransform(25.3,-6.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFE70B").s().p("Ah/h1IBQgTIAABuIBggXIAAhuIBPgSIAAEnIhPATIAAh1IhgAWIAAB2IhQASg");
	this.shape_16.setTransform(25.3,-6.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(10,1,1).p("ABWg4IhpAZIAAgwIBwgbIAAhAIjAAtIAAEoIDHgvIAAhBIh3AcIAAg2IBpgZg");
	this.shape_17.setTransform(-1.8,0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFE70B").s().p("Ahjh9IDBgtIAABAIhxAbIAAAwIBpgZIAABAIhpAZIAAA2IB2gcIAABBIjGAvg");
	this.shape_18.setTransform(-1.8,0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(10,1,1).p("AhYg3QAmgZAdgHQATgEAKAEQALAFAAAMQAAAdgtALIghAIIAAA5IAhgHQA2gNAAAgQAAAPgOAMQgMAKgWAGQgTAEgYgBQgSgBgNgDIgQBBQAkANA6gOQAxgMAjgcQArgiAAguQAAgcgVgNQgTgOgcADIAAgBQAbgNAPgVQAQgWAAgbQAAghgcgOQgegQgyAMQg3ANgsAig");
	this.shape_19.setTransform(-27,6.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFE70B").s().p("AhuCaIAQhBQANADASABQAYABATgEQAWgGAMgKQAOgMAAgPQAAggg2ANIghAHIAAg5IAhgIQAtgLAAgdQAAgMgLgFQgKgEgTAEQgdAHgmAZIgSg0QAsgiA3gNQAygMAeAQQAcAOAAAhQAAAbgQAWQgPAVgbANIAAABQAcgDATAOQAVANAAAcQAAAugrAiQgjAcgxAMQgeAHgXAAQgXAAgSgGg");
	this.shape_20.setTransform(-27,6.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(10,1,1).p("ABXg4IhqAaIAAgxIBwgaIAAhBIi/AtIAAEoIDFgvIAAhBIh2AcIAAg2IBqgZg");
	this.shape_21.setTransform(-51.3,11.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFE70B").s().p("Ahih8IC/guIAABBIhwAbIAAAvIBqgZIAAA/IhqAZIAAA3IB2gcIAABBIjFAvg");
	this.shape_22.setTransform(-51.3,11.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(10,1,1).p("AhwClIBPgTIAAhlIATgDQBAgQAigmQAdggAAgvQAAgXgJgRQgJgQgQgIQgegQg/APQg8AOgmAPgAghhaQAJgEAPgEQAVgFAMAIQALAHAAARQAAATgOAOQgNAPgXAFIgSAEg");
	this.shape_23.setTransform(-76.5,18.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFE70B").s().p("Ahwh/QAmgPA8gOQA/gPAeAQQAQAIAJAQQAJARAAAXQAAAvgdAgQgiAmhAAQIgTADIAABlIhPATgAgJhiQgPAEgJAEIAABMIASgEQAXgFANgPQAOgOAAgTQAAgRgLgHQgHgFgLAAQgGAAgJACg");
	this.shape_24.setTransform(-76.5,18.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(10,1,1).p("Ah8h2IAAEoIBQgTIAAjnIBagVIAADnIBPgTIAAkog");
	this.shape_25.setTransform(-105.7,24.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFE70B").s().p("Ah8h2ID5g7IAAEoIhPATIAAjnIhaAVIAADnIhQATg");
	this.shape_26.setTransform(-105.7,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-123.2,-47.3,246.6,94.7), null);


(lib.ochki_white = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdAsQgOgCgEgUIgDgXIAAgMQAHgFANgFQALgEAIgBQAjgEALAOQAKANgIAhQgSARgeAAIgSgBgABFAhQgngCgDgZIgDgfQAGgPAkgEQAggCAKAMQALAMgFAjQgGAUgiAAIgFAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ochki_white, new cjs.Rectangle(-11.5,-4.5,23.1,9.1), null);


(lib.img4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img4();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img4_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.img3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-138);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img3_1, new cjs.Rectangle(-150,-138,300,276), null);


(lib.img2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img2_1, new cjs.Rectangle(-150,-179,300,358), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-150,-150,300,300), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_5
	this.instance = new lib.Image1();
	this.instance.parent = this;
	this.instance.setTransform(0,0.6,0.112,0.112,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,16.3,23), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0065B7").s().p("AjFGhQhCgOhTAGQgqACgdAGIAAtRIMpAAQAKAQAKBUQAHA6gCAYIgPCUQgMB4g/B/Qg4BxhPBZQhBBIh/ALQgXADgaAAQhFAAhPgQg");
	this.shape.setTransform(-108.2,-256.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#098B6B").s().p("EgrpAS4Ilz8QQAyg1BXhMQCviXC7hyQJYluHzCQQEKBMEgC4QBUA2CTBnQCUBoBDArQDxCbC7AbQDvAkEHiLQCzheEgjNQD6iwCdhDQDyhnFEgLQF1gNI8BmQGPBIARFsQANEkjnHQQilFMkPGBQiHDBhmB+Mgr+ACpg");
	this.shape_1.setTransform(39.5,312.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0CC6AB").s().p("AlHFIQiIiIAAjAQAAi/CIiIQCHiIDAAAQDBAACHCIQCICIAAC/QAADAiICIQiHCIjBAAQjAAAiHiIg");
	this.shape_2.setTransform(-128,-45.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Слой_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#098B6B").s().p("AnIQ6QjThYijikQijiihZjTQhcjaAAjvQAAjuBcjbQBZjSCjijQCjijDThYQDahdDuAAQDvAADbBdQDTBYCiCjQCiCjBZDSQBdDbAADuQAADvhdDaQhZDTiiCiQiiCkjTBYQjbBdjvAAQjuAAjahdg");
	this.shape_3.setTransform(156.6,-232.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Слой_7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#098B6B").s().p("AolCQIAfoaIQsD8IggIZg");
	this.shape_4.setTransform(48.1,36);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Слой_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#109E7A").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-277,-350.4,633.1,789), null);


(lib.ball4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AikDhIAAnBIFJAAIAAHBg");
	mask.setTransform(44.1,-52.4);

	// Слой_1
	this.instance = new lib.ball2();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-74);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball4, new cjs.Rectangle(27.5,-74,33.1,44.1), null);


(lib.ball3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkcFeIAAq8II5AAIAAK8g");
	mask.setTransform(35,40.6);

	// Слой_1
	this.instance = new lib.ball2();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-74);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball3, new cjs.Rectangle(6.5,5.5,55,68.5), null);


(lib.ball2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("An4MHIAA4NIPxAAIAAL5In0MUg");
	mask.setTransform(-21.4,-14.4);

	// Слой_1
	this.instance = new lib.ball2();
	this.instance.parent = this;
	this.instance.setTransform(-61.5,-74);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball2_1, new cjs.Rectangle(-61.5,-74,90.6,137.2), null);


(lib.ball1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.ball1();
	this.instance.parent = this;
	this.instance.setTransform(-75,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ball1_1, new cjs.Rectangle(-75,-100,150,200), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgYA1QgTgSgDgYQgDgUAIgaQAJgdAQgFQATgGANAjIADAIIANADQADAHgEAMIAIAJQALAQgDAZQgEAbgYADIgHABQgTAAgRgSg");
	mask.setTransform(8.9,11.2);

	// Слой_3
	this.instance = new lib.ClipGroup_0();
	this.instance.parent = this;
	this.instance.setTransform(8.1,11.5,1,1,0,0,0,8.1,11.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(4.2,4.1,9.5,14.2), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.us2();
	this.instance.parent = this;
	this.instance.setTransform(-48.8,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.1,rotation:-15,x:-48.9,y:35.7},5).wait(13).to({regX:0,rotation:0,x:-48.8,y:35.6},5).wait(2));

	// Слой_2
	this.instance_1 = new lib.us1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-48.8,35.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:21.7},5).wait(13).to({rotation:0},5).wait(2));

	// Слой_5
	this.instance_2 = new lib.ochki_white();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-51.6,23.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({alpha:1},8).wait(5).to({alpha:0},7).wait(2));

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcAOQgEgCgBgMIgBAAIgBgFIACAAQAIgFAFgBQAGgBAJADIAFgCIAGABQAIgFAGAAQAFAAAJADIABAAIABAFIgBABQABALgDADQgFADgHAAQgIABgEgEQgFgDgBgLIgDAAIgCABQABALgDAEQgEAEgHABIgEABQgFAAgEgCgAgTgIQADABAEAEQAFAEABAGQADgIgDgEQgDgDgHAAIgDAAgAARgLQADABAFADQAFAFACAFQABgJgDgDQgCgCgFAAIgGAAg");
	this.shape.setTransform(-52,23.9,3.678,3.679);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(26));

	// Слой_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHACIgEgCIABAAIAEAAQAFACACgBQAEgBAFgDQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAQgDAGgIAAIgBAAQgDAAgEgCg");
	this.shape_1.setTransform(-47.3,40.7,3.678,3.679);

	this.instance_3 = new lib.ClipGroup();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-52.9,30.8,3.678,3.679,0,0,0,8.1,11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161628").s().p("AAAgBIABAAIAAADIgBAAIAAAAg");
	this.shape_2.setTransform(-51.8,23.5,3.678,3.679);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AADBSQgOgDgNgLIgKgKIgJgLQgHgLgEgPIgCgPIAAgNQABgOAEgMQADgMAHgNIAJgLQAGgGAHgEIAJgCQAEgCAFABQAHACAGAFQAHAGAIAOQAIAPALAcIAHAVIAEAXQABAPgDALQgDAHgFAGQgFAFgJADQgHADgHABIgEAAIgMgBgAgLhDQgIAFgFAMQgFAKgBALQgCAKAAANQAAALACAKQAEAMAEAIQAGAKAHAIQAJAIAJAEQAKAEALgDQAGgBAEgDQAEgEADgFQAEgJAAgMQABgJgDgNQgBgLgFgKQgJgYgLgQQgJgMgHgEQgEgDgFAAQgFAAgEADg");
	this.shape_3.setTransform(-51.9,29.4,3.678,3.679);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#161628").s().p("AgWA0QgRgTgDgZQgDgUAGgYQAHgcAQgFQAYgIAcBDQAKAYgCAXQgBAegYADIgHABQgSAAgQgTg");
	this.shape_4.setTransform(-48.8,28.7,3.678,3.679);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglgjIAlgKQARgDAKACQANAEgBAMQAAALgPAHIAAACIAKACQAKADAAAKQgCAZguALIgnAHgAgCAFIgKACIgBAPIAKgCQAQgEAAgHQABgFgIAAIgIABgAAAgZIgKACIgBAMIAKgCQAKgCABgHQAAgEgGAAIgEABg");
	this.shape_5.setTransform(-15.4,27.8,3.678,3.679);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglgjIAlgKQARgDAKACQANAEgBAMQAAALgPAHIAAACIAKACQAKAEAAAJQgCAZguALIgnAHgAgCAFIgKACIgBAPIAKgCQAQgEAAgHQABgFgIAAIgIABgAAAgZIgKACIgBAMIAKgCQAKgDABgFQAAgFgFAAIgFABg");
	this.shape_6.setTransform(51.8,13.1,3.678,3.679);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkAnQgMgKABgUQABgTANgOQAOgPAWgFQAXgFAMAMQALAKgCATQgBARgLAOQgOAQgXAFIgNACQgNAAgIgHgAABgWQgPAEgBAUQgCAYAQgDQAJgDAEgHQADgFABgJQABgVgMAAIgEAAg");
	this.shape_7.setTransform(18.2,19.3,3.678,3.679);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhlA9IgPAEQgyALgJAAIgQADIAAgSIAIiRIAJgDQAOgFAtgKIAPgDQAegDAQALQAJgUAYgFIAEgBQAQgCALALQADACABAEQAXgeAvgLIALgBQAfgEAWAQIAMAJIgaAeIAYgEIgEBVQARABAIAIQAJAJAAAOQgBAHgDAHIABABQAIAJgBANQgCAlg6ANIgnAHIgYAEQgNAHgNADIgHABQgVACgPgKQgOASgjAIQgjAIgEAAIgSADgAhihaIgOACQgZAGghAJIgHCHIA6gLQBHgQADgoQAAgRgPgGIgPgEIAAgCQAVgLABgSQABgRgOgHQgIgEgMAAIgMABgAgng+IgFBeIAtgKIABhdgABgiIIgIACQgsAJgTAbQgPAVgCAhQgCAeAQAOQAQAOAfgEIANgCQAggHAZgTIAEhDIhBAKIgFAjIAZgFIAAANQgMAGgEAAIgEABQgYADACggQABgWAIgLQAGgIANgDIAEgBQAPgCAIAHIAcghQgMgJgTAAIgMAAgAgQhsIgCAAQgLADgIAIQgGAHAAAIQgBAHAGADQAFAEAJgBIAEAAQALgDAHgIQAFgHABgHQAAgHgFgEQgFgDgGAAIgEAAgAiDgCIAZgFQAPgCAAAJQgBAMgZAFIgPAEgAiAg1IAVgEQAKgBAAAIQAAAKgRAEIgPADg");
	this.shape_8.setTransform(2.3,-4.1,3.678,3.679);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhWAxIAngKQAogIgBAYQgBALgOAIIAAABIAKACQAKAEgBALQgCAbgvAJIgmAIgAgzBcIgJACIgBAPIAJgCQARgEABgHQAAgFgIAAIgJABgAgxA8IgJACIgBAMIAKgCQALgDAAgGQAAgEgFAAIgGABgAAGBnQgLgKABgVQABgUAMgPQANgPAXgFQAYgFAMAMQAKALgBATQgBASgLAPQgOAQgYAGIgNABQgNAAgIgHgAAsAoQgKACgEAIQgDAFgBAKQgBAZAQgDQAQgEABgWQADgWgMAAIgFABgABgAJIAmgJQARgEAKADQANACgBANQgBAMgOAHIAAABIAKACQAKAEAAALQgCAagwALIgmAHgACDAzIgKADIgBAPIAKgDQARgEAAgHQAAgFgHAAIgJABgACFATIgKACIgBANIAKgCQALgDABgGQAAgEgFAAIgGAAgAiqhIQAggJAagFQAZgGAQAFQATAFgBAVQgBARgWAMIAAACIAQADQAPAHgBARQgDAohHAQIg5ALgAh1gEIgOADIgCAXIAPgDQAagGAAgMQAAgHgLAAQgFAAgJACgAhyg2IgPADIgBATIAPgDQARgDABgKQAAgGgEgBIgDgBIgKACgAgog8IApgKIAABeIguAKgAAZAEQgUgNACghQACgiAPgUQAUgbArgKQAVgEARAFQAJADAFAEIgcAhQgKgIgSADQgMADgHAJQgHAKgBAWQgBARAHAIQAGAHANgDQAEgBAMgFIABgNIgZAFIAFgjIBBgLIgEBDQgaATggAIQgNADgLAAQgTAAgNgJgAgmhGQgGgEAAgHQAAgIAHgHQAHgIALgCQAJgDAHAFQAHAEgBAIQAAAHgFAHQgIAIgLACIgGABQgGAAgFgDg");
	this.shape_9.setTransform(2.4,-4.6,3.678,3.679);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#161727").s().p("AABA9QgNgEgMgLQgLgLgFgJQgKgUAAgkIACghIAZAkIBKgQIgEBYIAAABQgGAOgRADIgHABQgIAAgIgDg");
	this.shape_10.setTransform(-49.7,31.6,3.678,3.679);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#161628").s().p("AgEAFQAEgGAEgEIAAABIAAADIgBADIgCADIgBABIgEgBg");
	this.shape_11.setTransform(-66.2,29.2,3.678,3.679);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance_3},{t:this.shape_1}]}).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.7,-59.9,155.8,132.9);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-56.2,-147.8,1,1,0,0,0,-4.9,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({startPosition:0},0).to({scaleX:0.9,scaleY:0.9,x:-79.2,y:-230.8},10,cjs.Ease.cubicInOut).wait(19).to({mode:"synched",loop:false},0).wait(31).to({mode:"single"},0).to({regX:-5.2,regY:6.2,scaleX:0.4,scaleY:0.4,x:-113.3,y:-258.8,mode:"synched",startPosition:25,loop:false},10,cjs.Ease.cubicInOut).wait(140).to({startPosition:25},0).to({regX:-4.9,regY:6.5,scaleX:1,scaleY:1,x:-4.2,y:-163.8,mode:"single",startPosition:0},10,cjs.Ease.cubicInOut).wait(65).to({startPosition:0},0).to({x:-56.2,y:-147.8},10,cjs.Ease.cubicInOut).wait(1));

	// t4_3
	this.instance_1 = new lib.t4_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-227,2.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(285).to({_off:false},0).to({x:12.1,y:-57.6},10,cjs.Ease.cubicOut).wait(30).to({x:243.2,y:-116.1},10,cjs.Ease.cubicIn).to({_off:true},1).wait(10));

	// t4_2
	this.instance_2 = new lib.t4_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-232,-36.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(280).to({_off:false},0).to({x:7.1,y:-97.4},10,cjs.Ease.cubicOut).wait(35).to({x:238.2,y:-155.9},10,cjs.Ease.cubicIn).to({_off:true},1).wait(10));

	// t4_1
	this.instance_3 = new lib.t4_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-254.4,-186.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(270).to({_off:false},0).to({x:-15.3,y:-246.6},10,cjs.Ease.cubicOut).wait(45).to({x:215.8,y:-305.1},10,cjs.Ease.cubicIn).to({_off:true},1).wait(10));

	// img4
	this.instance_4 = new lib.img4_1();
	this.instance_4.parent = this;
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(260).to({_off:false},0).to({alpha:1},10).wait(65).to({alpha:0},10).wait(1));

	// t3_4
	this.instance_5 = new lib.t3_4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-241.2,-60.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(225).to({_off:false},0).to({x:1.3,y:-114.7},10,cjs.Ease.cubicOut).to({_off:true},36).wait(75));

	// t3_3
	this.instance_6 = new lib.t3_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-239.6,-53.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(180).to({_off:false},0).to({x:2.8,y:-107.9},10,cjs.Ease.cubicOut).wait(25).to({x:241.9,y:-161.8},10,cjs.Ease.cubicIn).to({_off:true},1).wait(120));

	// t3_2
	this.instance_7 = new lib.t3_2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-247.2,-56.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(135).to({_off:false},0).to({x:-4.8,y:-111},10,cjs.Ease.cubicOut).wait(25).to({x:234.3,y:-164.9},10,cjs.Ease.cubicIn).to({_off:true},1).wait(165));

	// t3_1
	this.instance_8 = new lib.t3_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-244.4,-109.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(130).to({_off:false},0).to({x:-2,y:-163.7},10,cjs.Ease.cubicOut).to({_off:true},131).wait(75));

	// t2_2
	this.instance_9 = new lib.t2_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-246.1,-63.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(75).to({_off:false},0).to({x:-9.1,y:-118.2},10,cjs.Ease.cubicOut).wait(25).to({x:224.9,y:-171.2},10,cjs.Ease.cubicIn).to({_off:true},1).wait(225));

	// t2_1
	this.instance_10 = new lib.t2_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-233.8,-125.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(70).to({_off:false},0).to({x:3.2,y:-180},10,cjs.Ease.cubicOut).wait(30).to({x:237.2,y:-233},10,cjs.Ease.cubicIn).to({_off:true},1).wait(225));

	// t1_2
	this.instance_11 = new lib.t1_2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-283.3,39.8);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(15).to({_off:false},0).to({x:-10,y:-25.5},10,cjs.Ease.cubicOut).wait(25).to({x:268,y:-91.5},10,cjs.Ease.cubicIn).to({_off:true},1).wait(285));

	// t1_1
	this.instance_12 = new lib.t1_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-273.3,-15);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(10).to({_off:false},0).to({x:0,y:-80.3},10,cjs.Ease.cubicOut).wait(30).to({x:278,y:-146.3},10,cjs.Ease.cubicIn).to({_off:true},1).wait(285));

	// ball1
	this.instance_13 = new lib.ball1_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-75,92);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(120).to({_off:false},0).to({x:-1},150).to({_off:true},1).wait(75));

	// ball2
	this.instance_14 = new lib.ball2_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(45,129);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(120).to({_off:false},0).to({x:89},150).to({_off:true},1).wait(75));

	// ball2
	this.instance_15 = new lib.ball3();
	this.instance_15.parent = this;
	this.instance_15.setTransform(45,129);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(120).to({_off:false},0).to({x:79},150).to({_off:true},1).wait(75));

	// ball2
	this.instance_16 = new lib.ball4();
	this.instance_16.parent = this;
	this.instance_16.setTransform(45,129);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(120).to({_off:false},0).to({x:109},150).to({_off:true},1).wait(75));

	// img3
	this.instance_17 = new lib.img3_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,162);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(120).to({_off:false},0).to({alpha:1},10).to({_off:true},141).wait(75));

	// img2
	this.instance_18 = new lib.img2_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(0,121);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(60).to({_off:false},0).to({alpha:1},10).wait(40).to({alpha:0},10).to({_off:true},1).wait(225));

	// img1
	this.instance_19 = new lib.img1_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(0,150);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({alpha:1},10).wait(40).to({alpha:0},10).to({_off:true},1).wait(285));

	// bg
	this.instance_20 = new lib.bg();
	this.instance_20.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(346));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-277,-350.4,633.1,789);


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
	this.instance.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23,249.6,633.1,789);
// library properties:
lib.properties = {
	id: '682430CAB92149578D8E268F0C5BA31A',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ball1.png", id:"ball1"},
		{src:"images/ball2.png", id:"ball2"},
		{src:"images/Image1.png", id:"Image1"},
		{src:"images/img1.png", id:"img1"},
		{src:"images/img2.png", id:"img2"},
		{src:"images/img3.png", id:"img3"},
		{src:"images/img4.jpg", id:"img4"}
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
an.compositions['682430CAB92149578D8E268F0C5BA31A'] = {
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