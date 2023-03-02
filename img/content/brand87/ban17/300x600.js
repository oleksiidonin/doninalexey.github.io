(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bgImg1 = function() {
	this.initialize(img.bgImg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg2 = function() {
	this.initialize(img.bgImg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg3 = function() {
	this.initialize(img.bgImg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bgImg4 = function() {
	this.initialize(img.bgImg4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,378,754);


(lib.bgImg5 = function() {
	this.initialize(img.bgImg5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,214);


(lib.car2 = function() {
	this.initialize(img.car2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,378,236);


(lib.logoZnak = function() {
	this.initialize(img.logoZnak);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,115);


(lib.road1 = function() {
	this.initialize(img.road1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.road2 = function() {
	this.initialize(img.road2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.road3 = function() {
	this.initialize(img.road3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.wheel = function() {
	this.initialize(img.wheel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,58);// helper functions:

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


(lib.yarisB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAwQgSgBgPgOQgOgOAAgTQABgTANgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgTAAIgBAAg");
	this.shape.setTransform(39.2,-16.9,0.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag5CAIgDgCQgEgDABgMIAXiaIASh6IBWAAIgmFLQgugNglgZg");
	this.shape_1.setTransform(37.6,1.9,0.8,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiTBKQhPhJgqhEQgzhVgGhfICCAAQAECVBnBkIAagZQB9iCBnhYQAIgGAMAAICMgBIgKAIQjACUiMCYQhUBbg7BZIgFAFQgDAEgFAAIh4AAg");
	this.shape_2.setTransform(-48.5,-0.9,0.8,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AE/D9Qh3gRhPhaIhUhgQgVgaggABIglAAIggDMIgCAFQgCADgEAAIhXAAIAfjAIg5AKIg1AJQgLACgBALIgZCXQAAAEgDADQgDACgEAAIhVAAIAYiXIgOADQiVAlhaA9QgKAIgrAkQgIAGgJAAIhwAAQAjguASgVQCNipDPiiIB4hZQASgOAbAHQARADgDATIgmDxIAxgHIA9gJQALgBACgLIAnjuIC/ABQA4AAAtASQA3AXAGA2QAGAwghAiQgdAfg/AcIgeANIA0A4IAsAxQAbAcAUARQCKBxCwhCQAXgJAUgTQAVgTAEgaQADgZgPgYQgKgPgqgwQgygzgWgbQgigqAKgwQAJgtAugYQAmgTA8gDQBOgFBUAQQALACABAJIAFAxIg2gLQglgGgYgBQgigCgbAGIgNACQg0ARAPA1QAIAdAaAaIAjAjQAYAWAMANQApArANAXQAYApgKAnQgLAmgpAaQgwAehNAMQhGAMhGAAQg5AAg5gIgAnHgjQgsAsg/BLIDEg3QAJgDACgKIAYicQg9Arg/A+gAgPjLQgEADAAAJIgMBPIgLBRQA2ABAqgNQA0gPAagkQAcgngTgmQgRgkgxABQg0ABgZgBIgDAAQgGAAgEADg");
	this.shape_3.setTransform(10.3,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.yarisB, new cjs.Rectangle(-74.6,-20.8,149.2,41.7), null);


(lib.yaris = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAwQgSgBgPgOQgOgOAAgTQABgTANgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgTAAIgBAAg");
	this.shape.setTransform(39.2,-16.9,0.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5CAIgDgCQgEgDABgMIAXiaIASh6IBWAAIgmFLQgugNglgZg");
	this.shape_1.setTransform(37.6,1.9,0.8,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiTBKQhPhJgqhEQgzhVgGhfICCAAQAECVBnBkIAagZQB9iCBnhYQAIgGAMAAICMgBIgKAIQjACUiMCYQhUBbg7BZIgFAFQgDAEgFAAIh4AAg");
	this.shape_2.setTransform(-48.5,-0.9,0.8,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AE/D9Qh3gRhPhaIhUhgQgVgaggABIglAAIggDMIgCAFQgCADgEAAIhXAAIAfjAIg5AKIg1AJQgLACgBALIgZCXQAAAEgDADQgDACgEAAIhVAAIAYiXIgOADQiVAlhaA9QgKAIgrAkQgIAGgJAAIhwAAQAjguASgVQCNipDPiiIB4hZQASgOAbAHQARADgDATIgmDxIAxgHIA9gJQALgBACgLIAnjuIC/ABQA4AAAtASQA3AXAGA2QAGAwghAiQgdAfg/AcIgeANIA0A4IAsAxQAbAcAUARQCKBxCwhCQAXgJAUgTQAVgTAEgaQADgZgPgYQgKgPgqgwQgygzgWgbQgigqAKgwQAJgtAugYQAmgTA8gDQBOgFBUAQQALACABAJIAFAxIg2gLQglgGgYgBQgigCgbAGIgNACQg0ARAPA1QAIAdAaAaIAjAjQAYAWAMANQApArANAXQAYApgKAnQgLAmgpAaQgwAehNAMQhGAMhGAAQg5AAg5gIgAnHgjQgsAsg/BLIDEg3QAJgDACgKIAYicQg9Arg/A+gAgPjLQgEADAAAJIgMBPIgLBRQA2ABAqgNQA0gPAagkQAcgngTgmQgRgkgxABQg0ABgZgBIgDAAQgGAAgEADg");
	this.shape_3.setTransform(10.3,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.yaris, new cjs.Rectangle(-74.6,-20.8,149.2,41.7), null);


(lib.wheelMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wheel();
	this.instance.parent = this;
	this.instance.setTransform(-29,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.wheelMc, new cjs.Rectangle(-29,-29,58,58), null);


(lib.urText2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFmDQIgKgCIACgKIAIAAIAIACIAKgCIAGgIIACgKIgGACIgKgCIgGgEIgEgGIgQg+IAMgCIAQA6IACAEIAEACIAKAAIAQhAIAMACIgUBSIgEAKIgGAGIgIAEgAqFDQIgIgCIACgKIAIAAIAIACIAKgCIAIgSIgIACIgIgCIgGgEIgEgGIgEgKIgMg0IAMgCIAOA0IAAAGIAGAGIAMAAIAQhAIAMACIgUBSIgEAKIgGAGIgIAEgANkDCIAAgSIg6AAIAAhIIAMAAIAAA+IAkAAIAAg+IAMAAIAAA+IAKAAIAAAcgACyDCIAAgSIg0AAIAAAQIgMAAIAAgaIAIAAIAKgWIAAgGIACgKIAAgYIAuAAIAAA+IAKAAIAAAcgACQCUIgIASIAgAAIAAgyIgWAAgAk3DCIAAgSIg6AAIAAhIIAOAAIAAA+IAiAAIAAg+IAOAAIAAA+IAIAAIAAAcgARSCwIgCgGIACgIIAGgCIAIACIACAIIgCAGIgIAEgAQSCwIgKgGQgGgCAAgIIgEgOIgOAAIAAAeIgMAAIAAhIIAMAAIAAAgIAOAAIAEgOIAGgKIAKgGIAOgEIAQAEIAKAIIAGAMIACAOIgCAQIgGAMIgKAIIgQAEgAQSB4QgGAKAAAMQAAAMAGAIQAEAGAKAAQAKAAAGgGQAEgGAAgOQAAgQgEgGQgGgGgKAAQgKAAgEAGgAOsCwIgMgIIgGgMIgCgOIAEgQIAGgMIAMgIIAQgEIAOACIAMAEIgEAKIgMgEIgKAAQgKAAgGAGIgIAQIAkAAIAAAKIgkAAQAEAOAEACQAGAGAKAAIAKAAIAMgEIAEAKIgMAEIgOACgAMMCsIgYAIIgKgCIgIgEIgGgGIgCgKIACgMIAIgGIAIgEIAKgCIAUAAIAAgEIgEgMQgCgEgKAAIgKAAIgMAEIgEgKIAMgEIAQgCIAOACIAIAGIAEAKIAAAsIAGAIIgIAIgALsCUIgEAIIACAGIACAEIAGACIAGAAIAKgCIAIgEIAAgSIgUAAgAIUCwIgMgIIgGgKIgCgQIACgQIAIgMIAKgIIAQgEQAQAAAGAKQAIAIAAASIgGAIIguAAQAAAKAGAGQAGAGAMAAIAMAAIAEgCIAIgCIAEAKIgMAEIgQACgAIUB4IgGAOIAmAAIAAgKIgEgGIgGgEIgIAAQgIAAgGAGgADWCwIgKgIIgGgMIgCgOIACgQIAGgMIAMgIIAQgEIAOAEIAMAIIAGAMIACAOIgCAQIgGAMIgKAIIgQAEgADWB4IgEAWIAEAUQAGAGAMAAQAKAAAGgGIAEgUIgEgWQgGgGgKAAQgMAAgGAGgAAgCwQgEAAgGgGIgGgKIgCgOIgPAAIAAAeIgMAAIAAhIIAMAAIAAAgIAPAAIACgOIAGgKIAMgGIAOgEIAOAEIAMAIIAGAMIAAAeIgGAMIgMAIIgOAEgAAgB4QgGAKAAAMQAAAMAGAIQAGAGAKAAQAMAAACgGQAGgIAAgMQAAgMgGgKQgCgGgMAAQgMAAgEAGgAhPCwIgMgIIgGgMIgCgOIACgQIAIgMIAKgIIAQgEIAQAEIAKAIIAGAMIACAOIgCAQIgGAMIgKAIIgQAEgAhPB4QgGAKAAAMQAAAMAGAIQAGAGAKAAQAKAAAGgGQAGgIAAgMQAAgMgGgKQgGgGgKAAQgKAAgGAGgAmNCsIgYAIIgKgCIgIgEIgGgGIgCgKIACgMIAGgGIAIgEIAKgCIAUAAIAAgEIgEgMQgCgEgKAAIgKAAIgMAEIgCgKIAKgEIAQgCIAOACIAIAGIAEAKIACAKIAAAiIAGAIIgKAIgAmtCUQgGAEAAAEIACAGIAEAEIAEACIAGAAIAKgCIAIgEIAAgSIgSAAgAoVCsIgYAIIgKgCIgIgEIgGgGIgCgKIACgMIAGgGIAKgEIAKgCIAUAAIAAgEIgEgMQgCgEgKAAIgKAAIgMAEIgEgKIAMgEIAOgCIAQACIAIAGIAEAKIAAAsIAGAIIgIAIgAo1CUIgEAIIACAGIACAEIAGACIAEAAIAMgCIAIgEIAAgSIgUAAgAtbCwIgMgIIgGgMIgCgOIACgQIAIgMQACgEAKgEIAQgEIAOACIAKAEIgEAKIgKgEIgKAAIgKACIgIAGIgEAIIgCAMQAAAMAGAIQAGAGAKAAIAMAAIAMgEIAEAKIgMAEIgQACgAvtCwIgKgIQgGgCAAgIIgCgQIACgQIAGgMIAKgIIAQgEQAOAAAKAKQAIAMAAAOIgGAIIguAAQAAAKAGAGQAGAGAKAAIAMAAIAMgEIAEAKIgMAEIgQACgAvLCGIgCgKIgEgGIgGgEIgGAAQgKAAgEAGQgGAEAAAKIAmAAgAEuCSIgIAAIAAAeIgOAAIAAhIIAOAAIAAAeIAKAAIACgEIAMgS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KIAGgSIACgKIAAgYIAtAAIAAA+IAKAAIAAAcgAgXiDIgCAKIgEAIIAfAAIAAgyIgVAAQAAAWgEAKgAKGhnIgCgGIACgIIAGgCIAIACIACAIIgCAGIgIAEgAJIhnIgKgIQgGgCAAgIIgCgQIACgQIAGgMIAKgIIAQgEQAOAAAKAKQAGAKAAAQIgGAIIguAAIAIAQQAGAGAKAAIAMAAIAMgEIAEAKIgMAEIgQACgAJqiRIgCgKIgEgGIgGgEIgGAAQgKAAgGAGIgGAOIAoAAgAHMhrIgYAIIgKgCIgIgEIgGgGIgCgKIACgMIAGgGIAKgEIAKgCIASAAIAAgEIgCgMQgEgEgIAAIgMAAIgKAEIgEgKIAMgEIAOgCIAOACIAIAGIAEAKIACAKIAAAiIAGAIIgKAIgAGsiDQgEACAAAGIAAAGIAEAEIAEACIAGAAIAMgCIAIgEIAAgSIgUAAgAEQhnQgIgEgCgEIgGgMIgCgOIACgQIAGgMIAMgIIAOgEIAQAEIAMAIIAGAMIACAOIgCAQIgGAMIgMAIQgIAEgIAAgAEQifQgGAKAAAMQAAAMAGAIQAGAGAKAAQAOAAACgGQAGgIAAgMQAAgMgGgKQgCgGgOAAQgKAAgGAGgAAyhnQgKgEgCgEQgGgCAAgIIgCgQIACgQIAGgMIAKgIIAQgEQAOAAAKAKQAIAMAAAOIgGAIIguAAQAAAKAGAGQAGAGAKAAIAMAAIAMgEIAEAKIgMAEIgQACgABSiRIgCgKIgEgGIgGgEIgGAAQgKAAgEAGQgGAEAAAKIAmAAgAhrhnIgMgIIgGgMIgCgOIAEgQIAGgMQACgEAIgEIAQgEIAQAEQAIAEACAEIAIAMIACAOIgCAQIgGAMIgMAIIgQAEgAhrifQgGAKAAAMQAAAMAGAIQAGAGAKAAQAKAAAGgGQAGgIAAgMQAAgMgGgKQgGgGgKAAQgKAAgGAGgApVhnIgMgIIgGgKIgCgQIACgQIAGgMIAMgIIAOgEQASAAAGAKQAIAIAAASIgGAIIguAAQAAAKAGAGQAGAGAKAAIAMAAIAOgEIACAKIgMAEIgQACgApVifQgGAEAAAKIAmAAIAAgKIgEgGIgGgEIgIAAQgIAAgGAGgArnhrIgYAIIgKgCIgIgEIgGgGIgCgKIACgMIAGgGIAKgEIAKgCIAUAAIAAgEIgEgMQgCgEgKAAIgKAAIgMAEIgEgKIAMgEIAOgCIAOACIAKAGIAEAKIAAAsIAGAIIgIAIgAsHiDIgEAIIACAGIACAEIAGACIAEAAIAMgCIAIgEIAAgSIgUAAgAuphnQgIgEgCgEIgGgOIgCgUIAGggIAKgKIAOgIIAUgGIACgGIAMAEIgCAEIAAAEIgCAEIgIAEIgEAAIgMAEIgKACIgGAGIgEAGIgCAKIAMgIIAOgCIAOACIAKAIIAGAKIAAAMIgCAOQAAAKgGACIgKAIIgQAEgAujibIgGAEIgEAEIAAAGIAEAUIAGAIIAMACQAKAAAGgGQAGgGAAgOQAAgWgUAAgAv5hnQgIgEgCgEIgGgMIgCgOIACgQIAGgMIAMgIIAOgEIAQAEIAMAIIAGAMIACAOIgCAQIgGAMIgMAIIgQAEgAv5ifQgGAKAAAMQAAAMAGAIQAGAGAKAAQAOAAACgGQAGgIAAgMQAAgMgGgKQgCgGgOAAQgKAAgGAGgABkhvIAGgEIAEgCIACgEIACgGIAEgwIAwAAIAABIIgOAAIAAg8IgWAAIgEAkIgCAKIgIAMIgIAEgAkRhnIgOgGIAGgKIAGAEIAMAEIAGAAQAIAAAEgEQAEgCAAgGIgCgIIgMgCIgSAAIAAgMIAQAAIAMgCIACgIQAAgGgEgCIgKgCIgMACIgKAEIgEgKIAEgCIAYgGQAOAAAGAGQAGAGAAAIQAAAKgKAGIAKAIIACAKQAAAKgIAGQgGAGgQAAgAl9hvIAGgEIAEgCIACgEIACgGIAAgEIgKgGIgEgOQAAgMAIgGQAGgGAOAAIAeAAIAABIIgOAAIAAgaIgQAAIgIASIgGAGIgKAEgAlrihQgEACAAAIIAAAEIAEAEIAEACIAWAAIAAgWIgQAAgAqRiFIgKAAIAAAeIgMAAIAAgeIgKAAIgYAgIgIgIIAWggIgCAAIAAgCIgKgUIgIAAIAAgKIAEgCIACAAIAIACIAQAcIAKAAIAAgeIAMAAIAAAeIAKAAIAMgWIAEgGIAIgCIAEAAIAEACIgCAKIgGAAIgEAEIgGAQIgCACIgCAAIAYAgIgKAIgAxRhnIgQgIIAGgKIAGAEIAIAEIAIAAIAIACIASgEIAGgGIACgKIgCgGIgEgGIgIgEIgMgCIgQAAIAAgKIAQAAIAKgCIAIgEIAEgGIAAgGIgCgIIgEgGIgOgEIgcAIIgGgIIAGgEIAIgCIAIgEIAMAAIAQACIAKAGIAGAIIACAKIgCAIIgEAIIgEAEIgGAEIAIAEIAGAEIAEAIIACAIIgEAMQAAAEgGAGIgOAGIgQACgAIahnIAAggIgkAAIAAAgIgMAAIAAhIIAMAAIAAAeIAkAAIAAgeIAMAAIAABIgAFShnIAAhIIAiAAIASAEIAEAGIACAIIgCAKIgGAGIAEACIAEAEIAEAMQAAAKgGAGIgSAEgAFghxIAWAAIAIgCQAEgCAAgGIgCgIIgIgEIgYAAgAFgiRIASAAIAKgCIACgIIgCgGIgKgCIgSAAgAC4hnIAAhIIAMAAIAAAeIAUAAIAOACIAIAEIAEAIIACAIQAAAMgIACQgGAGgMAAgADEhxIAWAAIAIgCIAEgIIgEgKIgMgCIgSAAgAiZhnIAAgwIgSAaIgMAAIgGgGIgMgUIAAAwIgMAAIAAhIIAMAAIAWAkIAAACIAEAAIACgCIAUgkIAMAAIAABIgAmZhnIAAggIgkAAIAAAgIgMAAIAAhIIAMAAIAAAeIAkAAIAAgeIAMAAIAABIgAnphnIAAggIgkAAIAAAgIgMAAIAAhIIAMAAIAAAeIAkAAIAAgeIAOAAIAABIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText2, new cjs.Rectangle(-112.2,-20.8,224.4,41.6), null);


(lib.t2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAPAmIAAgnIgdAgIAAAHIgIAAIAAg5IAIAAIAAAoIAdggIAAgIIAHAAIAAA5gAgIgbQgFgDgBgEIAHgDQAAADACADQAEABABAAQADAAAEgBIADgGIAGADIgCAEIgEADIgEADIgGAAQgDAAgFgDg");
	this.shape.setTransform(79.9,-1.6,2.778,2.778);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDAdIAAg5IAHAAIAAA5g");
	this.shape_1.setTransform(68.1,0.8,2.778,2.778);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFACIgJAAIAAAaIgIAAIAAg4IAIAAIAAAZIAFAAIAEgBIABgBIACgCIAKgQIADgEIAFgCIADABIACAAIgBAGIgEABQAAAAgBAAQAAABgBAAQAAAAAAABQgBAAAAAAIgMASIAAAAIAWAaIgGAFg");
	this.shape_2.setTransform(57.7,1,2.778,2.778);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLAcQgGgDgDgEIgFgJQgBgGAAgGQAAgFACgGQABgEADgFQAFgFAEgCQAGgCAFAAQAGAAAGACQAFADAEAEQAEAGABADIABALQAAAHgCAFQgBAEgDAFQgEAEgFADQgEACgIAAQgHAAgEgCgAgHgVQgEACgCAEIgEAGIgBAJIABAKIAEAHIAGAFIAHABQAFABADgCIAGgFIAEgHIABgKIgBgJIgEgGQgCgEgEgCQgDgBgFAAQgEAAgDABg");
	this.shape_3.setTransform(40.3,0.9,2.778,2.778);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPAdIAAgyIgcAAIAAAyIgIAAIAAg5IArAAIAAA5g");
	this.shape_4.setTransform(23,0.8,2.778,2.778);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgIAcQgFgCgEgEQgDgEgCgGQgBgFAAgHQAAgHACgEQABgGAEgEQAFgEAEgCQAFgCAHAAIALABIAIADIgDAFIgEgBIgIgBIgEAAQgJgBgGAHQgFAFAAALQAAANAFAFQAGAFAIAAIAKAAIAIgDIACAGIgJADIgLABQgIAAgEgCg");
	this.shape_5.setTransform(6.7,0.9,2.778,2.778);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgJAcQgFgDgDgDQgDgEgCgGIgBgMQAAgFACgGQADgHACgDQAEgEAFgCQAFgCAHAAIAKABIAIADIgBAFIgNgCIgEAAQgIAAgGAEQgFAGgBAJIAXAAIAAAGIgXAAQABAVATgBIAEAAIAFAAIAIgDIACAGIgJADIgLABQgHAAgGgCg");
	this.shape_6.setTransform(-15.3,0.9,2.778,2.778);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPAdIABgGIACAAIADAAIADAAIADgBIACgCIABgEIAAgBQgEAAgCgCQgDgBgCgGIgLggIAHgDIALAgIADAEIAEABIANglIAHACIgPArIgDAHIgEADIgEADIgGABg");
	this.shape_7.setTransform(-30.2,0.9,2.778,2.778);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTAdIAAg5IAUAAIAHABQAEABADACQADADABADQABAEAAAFQAAAEgBADQgBACgDACIgHAEIgIABIgLAAIAAAWgAgLABIALAAIAEAAIAEgBIADgEQACgCAAgDQAAgEgCgDQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAgBAAIgEgCIgEgBIgLAAg");
	this.shape_8.setTransform(-44.6,0.8,2.778,2.778);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAOAKIgbAAIgHAUIgGgCIAQgzIADgDIADgCIAEgBIAFABIAEACIACADIARAzIgIACgAAMAEIgHgVIgCgEIgDgBIgCABIgCAEIgHAVIAXAAg");
	this.shape_9.setTransform(-61,0.8,2.778,2.778);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AATAiIAAgLIglAAIAAALIgIAAIAAgSIAFAAIADgEIACgFIACgHIAFghIAfAAIAAAxIAFAAIAAASgAgGACIgCAGIgBAEIgDAEIAbAAIAAgrIgRAAg");
	this.shape_10.setTransform(-78.6,2.4,2.778,2.778);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_3, new cjs.Rectangle(-86.1,-12,172.2,24), null);


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUAdIAAg5IAIAAIAAAXIAOAAQAJAAAFAFQAFAEAAAHQAAAJgFAEQgGAFgKAAgAgMAWIAMAAIAEAAIAFgCQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIABgGIgBgFIgDgDIgEgCIgFAAIgMAAg");
	this.shape.setTransform(75.1,-0.1,2.778,2.778);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDAdIAAgyIgSAAIAAgHIArAAIAAAHIgSAAIAAAyg");
	this.shape_1.setTransform(59.9,-0.1,2.778,2.778);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAcQgGgCgDgEQgEgFAAgFQgCgFAAgHQAAgGACgFQADgHACgDQAFgEAEgCQAFgCAHAAIALABIAIACIgCAGIgJgCIgEAAIgEAAQgJAAgGAFQgFAHAAAKQAAALAFAHQAFAFAKABIAEAAIAFgBIAIgDIACAGIgJADIgLABQgHAAgFgCg");
	this.shape_2.setTransform(44.2,0,2.778,2.778);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAdIAAg5IAHAAIAAA5g");
	this.shape_3.setTransform(32.7,-0.1,2.778,2.778);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAZIAdAAIAAgZIAHAAIAAA5g");
	this.shape_4.setTransform(21,-0.1,2.778,2.778);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAKIgbAAIgGAUIgIgCIAQgvIABgEIADgDIAEgCIADgBIAFABIADACIADADIACAEIAOAvIgHACgAAMAEIgHgVIgCgEIgDgBIgCABIgCAEIgHAVIAXAAg");
	this.shape_5.setTransform(4,-0.1,2.778,2.778);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVAdIAAg5IAcABIAFADQADABACADQABADABAEIgBAEIgBADIgDADIgDACIAEABIADADIADAEIABAGQAAADgCADIgDAGQgCACgFABIgIABgAgOAXIAQAAQAFAAADgDQAEgCAAgGIgBgDIgCgDIgBgCIgDgBIgEgBIgRAAgAgOgDIAOAAIADgBIAFgCIACgCIAAgFQAAgFgDgCQgEgBgFAAIgMAAg");
	this.shape_6.setTransform(-11.9,-0.1,2.778,2.778);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLAbQgGgBgDgFQgDgEgCgFQgBgGAAgGIABgLQACgFAEgEQADgEAFgDQAGgCAFAAQAHAAAFACQAFACADAFQAEAEACAFIABALQAAAGgBAGQgBADgFAGQgCAEgGACQgFADgHAAQgHAAgEgDgAgIgVQgDACgCAEQgDAEgBACQgBAFAAAEQAAAFABAEIAEAIIAFAFQAEABAEABQAFgBADgBIAGgFIAEgIIAAgJIAAgJIgEgGQgCgEgEgCQgCgBgGAAQgEAAgEABg");
	this.shape_7.setTransform(-29.1,0,2.778,2.778);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUAdIAAg5IAVAAIAHABQADABADACIAFAGQACAFAAAEQAAADgCAEIgFAEQgCADgEABIgIABIgMAAIAAAWgAgMABIAMAAIAEAAIAEgBIADgEIABgFIgBgHIgDgDIgEgCIgFgBIgLAAg");
	this.shape_8.setTransform(-45.2,-0.1,2.778,2.778);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTAdIAAg5IAmAAIAAAHIgeAAIAAASIAXAAIAAAFIgXAAIAAAUIAfAAIAAAHg");
	this.shape_9.setTransform(-59.9,-0.1,2.778,2.778);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFACIgIAAIAAAaIgIAAIAAg4IAIAAIAAAZIAEAAIACgBIACAAIADgDIAJgQIAEgEQADgCADAAIABAAIADABIgBAGIgEABIgDACIgLAQIgBACIgBAAIAXAaIgGAFg");
	this.shape_10.setTransform(-74.8,0,2.778,2.778);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-81,-8.3,162.1,16.7), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAOAKIgbAAIgGAUIgIgCIAQgvIABgEIADgDIADgCIAEgBIAFABIAEACIAEAHIAPAvIgIACgAAMAEIgHgVIgCgEIgDgBIgCABIgCAEIgHAVIAXAAg");
	this.shape.setTransform(48.9,-1.5,2.778,2.778);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgHAAIAAg5IAHAAIAAAZIAdAAIAAgZIAIAAIAAA5g");
	this.shape_1.setTransform(31.9,-1.5,2.778,2.778);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAPAdIAAgbIgdAAIAAAbIgIAAIAAg5IAIAAIAAAZIAdAAIAAgZIAIAAIAAA5g");
	this.shape_2.setTransform(15,-1.5,2.778,2.778);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAdIAAg5IAHAAIAAA5g");
	this.shape_3.setTransform(3.3,-1.5,2.778,2.778);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAUAdIAAgrIgNAVIgCACIgCABIgDAAIgCAAIgBgBIgDgCIgDgEIgKgRIAAArIgIAAIAAg5IAIAAIASAeIABABIACgBIASgeIAHAAIAAA5g");
	this.shape_4.setTransform(-9.8,-1.5,2.778,2.778);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AATAiIAAgLIglAAIAAALIgIAAIAAgSIAEAAIAEgDIADgGIACgHIAEghIAfAAIAAAxIAFAAIAAASgAgGACIgBAGIgDAFIgCADIAaAAIAAgrIgQAAg");
	this.shape_5.setTransform(-28.3,0.1,2.778,2.778);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgDAdIAAg5IAHAAIAAA5g");
	this.shape_6.setTransform(-39.9,-1.5,2.778,2.778);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAdIAAg5IAbABIAHADIAEAEQACADAAAEIgBAEIgCADIgCADIgDACIAEABQABAAAAAAQABABAAAAQABAAAAABQAAAAABABIACAEIABAGQAAADgBADQgCAEgDACQgCACgDABIgIABgAgNAXIAPAAQAFAAAEgDQADgCAAgGIgBgDIgBgDIgCgCIgDgBIgEgBIgQAAgAgNgDIANAAIADgBIAEgCIADgCIABgFQgBgFgDgCQgEgBgFAAIgLAAg");
	this.shape_7.setTransform(-50.5,-1.5,2.778,2.778);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-56.6,-9.7,113.2,19.5), null);


(lib.t1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUAUIAGgFIADgDIABgEIABgDIgEgCIgEgDIgCgEIgBgGIABgIQACgDADgDIAGgDIAIgCIAVAAIAAA5IgMAAIAAgVIgIAAIgCAKIgCAFIgFAEIgHAEgAgCgSIgDABIgCADIgBAEQAAAEADACQACACAEAAIAIAAIAAgRIgIAAg");
	this.shape.setTransform(36.9,-1.2,2.778,2.778);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMAdIAAgYIgXAAIAAAYIgMAAIAAg5IAMAAIAAAXIAXAAIAAgXIAMAAIAAA5g");
	this.shape_1.setTransform(20.9,-1.5,2.778,2.778);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAPAiIAAgLIgdAAIAAALIgNAAIAAgVIAGAAIACgDIAFgLIADggIAiAAIAAAuIAFAAIAAAVgAgEAFQgBAFgCADIASAAIAAgkIgLAAg");
	this.shape_2.setTransform(3.4,0.1,2.778,2.778);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMAbQgFgBgEgFIgEgKQgCgFAAgGIACgKQABgFADgFQAFgFAEgCQAHgCAFAAQAHAAAGACQAGADADAEQACADADAHIABAKQAAAGgBAFQgCAEgDAGQgFAFgFABQgEADgIAAQgIAAgEgDgAgGgRIgFAEQgCADgBAEIAAAGIAAAHQABAEACADIAFAEQADACADAAQAEAAADgCQADgBACgDQACgDAAgEIABgHIgBgGQAAgEgCgDQgCgDgDgBQgDgBgEgBQgDABgDABg");
	this.shape_3.setTransform(-13.8,-1.4,2.778,2.778);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWAiIAAgLIg3AAIAAg4IAMAAIAAAuIAOAAIAAguIALAAIAAAuIANAAIAAguIANAAIAAAuIAEAAIAAAVg");
	this.shape_4.setTransform(-33.3,0.1,2.778,2.778);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_2, new cjs.Rectangle(-42.8,-9.7,85.6,19.5), null);


(lib.t1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWAdIAAg5IAWAAIAIABIAGADQADABABADQACADAAAEQAAAFgCACIgFAFIAEABQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABIACAEIABAFQAAAEgCADIgEAGQgCACgEABIgIABgAgKATIAPAAIADgCIACgCIABgDIgBgEIgDgCIgDgCIgOAAgAgKgEIAKAAQADAAACgCQADgCAAgDQAAgEgDgBQgDgCgEAAIgIAAg");
	this.shape.setTransform(109.4,1,2.778,2.778);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AALAmIAAghIgWAZIAAAIIgLAAIAAg4IALAAIAAAgIAWgXIAAgJIANAAIAAA4gAgEgYIgFgCIgDgEIgCgEIAIgDIACAEIAEABQADABACgCIACgEIAIADIgBAEIgEAEIgFACIgFABg");
	this.shape_1.setTransform(92.7,-1.6,2.778,2.778);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AALANIgWAAIgFARIgMgDIAPgtIABgEQABgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAIAFgCIAFgBIAFAAIAEADIADAEIABAEIAPAtIgNADgAAIACIgFgSIgBgCIgCgBIgBABIgBACIgFASIAPAAg");
	this.shape_2.setTransform(75.4,1,2.778,2.778);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAdIAAg5IAVAAIAIABIAGAEIAFAGQABADAAAFQAAAFgBADIgFAFIgGAEQgEABgFAAIgIAAIAAAUgAgIAAIAIAAIADAAIADgCIACgCIABgFIgBgEQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgDgCIgLAAg");
	this.shape_3.setTransform(60.7,1,2.778,2.778);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAPAiIAAgLIgdAAIAAALIgNAAIAAgVIAGAAIACgEIACgEIAGgmIAiAAIAAAuIAEAAIAAAVgAgCgFIgCAKIgDAIIASAAIAAgkIgLAAg");
	this.shape_4.setTransform(43.9,2.6,2.778,2.778);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAFIAAgJIAZAAIAAAJg");
	this.shape_5.setTransform(30.9,2.2,2.778,2.778);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAEAeQgIAAgFgCQgEgCgFgEQgDgFgBgFQgCgFAAgHQAAgGACgFQADgHACgCQAEgEAGgDQAGgCAGAAIALABIAJADIgFAKIgEgCIgIgCIgDAAQgIAAgEAGQgFAFABAIQgBAKAFAFQAFAFAHAAIAIgBIAJgEIADAKIgFACIgKADg");
	this.shape_6.setTransform(18.4,1,2.778,2.778);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUAdIAAg5IAoAAIAAAKIgcAAIAAANIAWAAIAAAJIgWAAIAAAPIAdAAIAAAKg");
	this.shape_7.setTransform(3.4,1,2.778,2.778);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUAdIAAg5IAVAAIAIABIAGAEIAEAGQACACAAAGQAAAFgBADIgFAFIgHAEQgDABgFAAIgJAAIAAAUgAgJAAIAJAAIADAAIADgCIACgCIABgFIgBgEQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgDgCIgMAAg");
	this.shape_8.setTransform(-11.3,1,2.778,2.778);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFAdIAAgvIgRAAIAAgKIAtAAIAAAKIgRAAIAAAvg");
	this.shape_9.setTransform(-26.4,1,2.778,2.778);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAEAeQgIAAgEgCQgFgCgEgEQgEgFgCgFQgBgFAAgHQAAgEACgHQADgHACgCQAEgEAGgDQAHgCAFAAIALABIAJADIgFAKIgEgCIgIgCIgDAAQgIAAgEAGQgEAEAAAJQAAALAEAEQAFAFAGAAIAJgBIAIgEIAEAKIgFACIgEACIgGABg");
	this.shape_10.setTransform(-42.2,1,2.778,2.778);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AALAdIAAggIgVAYIAAAIIgMAAIAAg5IAMAAIAAAhIAVgYIAAgJIANAAIAAA5g");
	this.shape_11.setTransform(-58.9,1,2.778,2.778);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgFAdIAAgvIgRAAIAAgKIAtAAIAAAKIgRAAIAAAvg");
	this.shape_12.setTransform(-74.6,1,2.778,2.778);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAMAdIAAgYIgXAAIAAAYIgMAAIAAg5IAMAAIAAAXIAXAAIAAgXIAMAAIAAA5g");
	this.shape_13.setTransform(-90.5,1,2.778,2.778);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AALANIgVAAIgGARIgMgDIAPgtIACgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAFgCIAEgBIAGAAIAEADIADAEIACAEIANAtIgLADgAAIACIgFgSIgCgCIgBgBIgBABIgBACIgGASIAQAAg");
	this.shape_14.setTransform(-107.9,1,2.778,2.778);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1_1, new cjs.Rectangle(-115.8,-12.1,231.6,24.3), null);


(lib.road3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.road3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.road3_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.road2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.road2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.road2_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.road1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.road1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.road1_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.ofDistr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A2A2A2").s().p("AACAEIgCgBIgBABIgVAcIgGgEIAWgcIgTgbIAGgEIASAaIABABIACgBIACgDIARgXIAGAEIgTAbIAVAcIgHAEg");
	this.shape.setTransform(132,41.6,2.757,2.758);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2A2A2").s().p("AgUAYIADgCIAEgDIACgEIACgGIABgFIgFgCIgEgCIgCgFIgBgGQgBgGACgDQABgDAEgDIAGgEIAIgBIAWAAIAAA9IgJAAIAAgYIgNAAIgDALIgEAGIgEAFIgGAEgAgEgYIgEADIgDADIgBAGIABAGIADADIAFACIAQABIAAgYIgNAAg");
	this.shape_1.setTransform(116.3,41.8,2.757,2.758);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A2A2A2").s().p("AgZAYIAEgCIADgDIACgEQACgCAAgEIAFgoIAjAAIAAA9IgJAAIAAg2IgTAAIgFAqQgBADgCACIgEAFIgHAEg");
	this.shape_2.setTransform(100.6,41.8,2.757,2.758);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A2A2A2").s().p("AghAfIAAg9IAIAAIAAA2IAWAAIAAg2IAHAAIAAA2IAWAAIAAg2IAIAAIAAA9g");
	this.shape_3.setTransform(82.2,41.6,2.757,2.758);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A2A2A2").s().p("AAQAoIAAgqIgfAjIAAAHIgIAAIAAg9IAIAAIAAArIAfgiIAAgJIAIAAIAAA9gAgJgdQgEgDgCgFIAHgDQABAEACACQADACADAAQADAAADgCQADgDABgDIAGADIgCAFIgDADIgFACIgGACQgEAAgGgEg");
	this.shape_4.setTransform(58.3,39,2.757,2.758);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A2A2A2").s().p("AAQAfIAAgqIgfAjIAAAHIgIAAIAAg9IAIAAIAAArIAfgiIAAgJIAIAAIAAA9g");
	this.shape_5.setTransform(41.6,41.6,2.757,2.758);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A2A2A2").s().p("AAdAlIAAgMIhBAAIAAg9IAIAAIAAA2IAWAAIAAg2IAIAAIAAA2IAVAAIAAg2IAIAAIAAA2IAGAAIAAATg");
	this.shape_6.setTransform(22.5,43.2,2.757,2.758);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A2A2A2").s().p("AAPALIgdAAIgHAVIgIgCIASg3IADgDIAEgCIAEgBIAFABIAEACIADADIACAFIAQAyIgIACgAANAEIgIgXIgCgEIgDgBIgCABIgCAEIgIAXIAZAAg");
	this.shape_7.setTransform(2.3,41.6,2.757,2.758);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A2A2A2").s().p("AgVAfIAAg9IAWAAIAIABQADAAAEADIAFAHQABADAAAGQAAAEgBAEIgFAEIgHAFQgDABgGAAIgMAAIAAAXgAgMABIAMAAIAEgBIAEAAQADgCABgDQABgCABgDQgBgFgBgCIgDgEIgFgCIgEgBIgMAAg");
	this.shape_8.setTransform(-11.2,41.6,2.757,2.758);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A2A2A2").s().p("AgGACIgJAAIAAAcIgIAAIAAg9IAIAAIAAAbIAIAAIACAAIABgBIAMgUIAEgEQACgCAEAAIACAAIACAAIgBAIIgEAAIgDACIgMASIAAABIgBABIAXAcIgGAFg");
	this.shape_9.setTransform(-25.8,41.7,2.757,2.758);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A2A2A2").s().p("AAQAfIAAgqIgfAjIAAAHIgIAAIAAg9IAIAAIAAArIAfgiIAAgJIAIAAIAAA9g");
	this.shape_10.setTransform(-47,41.6,2.757,2.758);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A2A2A2").s().p("AAUAlIAAgMIgoAAIAAAMIgIAAIAAgTIAFAAIADgFIADgFIAEgRIADgbIAiAAIAAA2IAFAAIAAATgAgGACIgFAMIgCAEIAcAAIAAgvIgSAAg");
	this.shape_11.setTransform(-63.8,43.2,2.757,2.758);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A2A2A2").s().p("AAMACIgIAAIAAAcIgHAAIAAgcIgIAAIgWAeIgHgFIAWgcIgBgBIgBgBIgJgSIgCgBIgDgBIgCAAIgBgIIACAAIADAAQADAAACABQADADABACIALAUIABABIACAAIAGAAIAAgbIAHAAIAAAbIAGAAIACAAIABgBIALgUQABgCADgDQACgBADAAIADAAIACAAIgBAIIgCAAIgDABIgCABIgJASIgBABIgBABIAWAcIgHAFg");
	this.shape_12.setTransform(-83.1,41.7,2.757,2.758);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A2A2A2").s().p("AgXAfIAAg9IAXAAIAHABIAHACQADACACAEQABADAAAEIAAAEIgCADQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABIgDACIAEABIAEACIADAFIABAHIgCAHIgEAGIgGADIgJABgAgOAYIAQAAQAHAAADgDQADgCAAgFIgBgFQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAIgDgDIgCgBIgEgBIgSAAgAgOgEIAOAAIAEgBIAEgBIADgDIABgFQAAgGgEgBQgEgDgGAAIgMAAg");
	this.shape_13.setTransform(-101.7,41.6,2.757,2.758);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A2A2A2").s().p("AAPALIgdAAIgHAVIgIgCIARgyIABgFIADgDIAEgCIAEgBIAGABIADACIADADIACAFIAQAyIgIACgAANAEIgIgXIgCgEQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgCABIgCAEIgIAXIAZAAg");
	this.shape_14.setTransform(-118.2,41.6,2.757,2.758);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A2A2A2").s().p("AgNAeIgJgEIAEgGIAIAEIAKACIAFgBIAFgCIADgEQACgCAAgDIgBgFIgCgDIgFgDIgRAAIAAgGIAKAAIAFgBIAFgDIACgDIABgEIgBgFIgDgDIgFgCIgEgBIgIACIgIADIgDgGIADgBIAEgCIAGgBIAGgBIAJABIAHADQACADABADQACADAAADIgBAGIgCADIgDAEIgEACIAFAAIADADIADAFIABAGIgCAHQgBADgDADQgEADgEAAQgEACgFAAQgHAAgGgCg");
	this.shape_15.setTransform(-133.7,41.6,2.757,2.758);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAHAOIgFACIgFABIgEgBIgEgCIgDgDQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgGIADgBIAEgDIALAAIAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgDgBIgEABIgFABIgCgHIAGgCIAGAAIAGAAIAEADIACAFIABAFIAAALIADAEIgHAFgAgEADQgBABAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQAAAAABAAIADABIACAAIADgCIAAgGIgFAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_16.setTransform(60,-22,2.778,2.778);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAHANIgFACIgFABIgFgBIgEgDIgCgEIgBgFIAAgTIAJAAIAAATQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAIADABIADAAIADgCIAAgWIAJAAIAAAYIACAEIgGAFg");
	this.shape_17.setTransform(49.9,-21.8,2.778,2.778);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgDAEQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAQAAAAAAABQABAAAAAAIABADIgBAEQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_18.setTransform(42,-18.9,2.778,2.778);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAHAOIgFACIgEABIgFgBIgEgCIgDgDIgBgEIABgGIADgBIAEgDIALAAIAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAIgCgBIgEABIgGABIgCgHIAGgCIAGAAIAGAAIAEADIACAFIABAFIAAALIADAEIgGAFgAgEADIgBADQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABAAIADABIACAAIADgCIAAgGIgFAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_19.setTransform(34.5,-22,2.778,2.778);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AADAVIgEgBIgDgBIgDgEIgBgFIAAgNIgDAAIAAgIIADAAIAAgJIAIAAIAAAJIAKAAIAAAIIgKAAIAAAMQAAAAABABQAAABAAAAQAAABAAAAQABAAAAAAIADABIADAAIADgBIACAHIgHACg");
	this.shape_20.setTransform(25.7,-23.2,2.778,2.778);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGAQIgFgEIgEgFIgBgHIABgGIAEgFIAFgEIAGgBIAIABIAFAEIADAFIABAGIgBAHQgBACgDADIgEAEIgIABgAgEgGQgCACAAAEQAAAFACACQABACADAAQAEAAACgCQACgEAAgDQAAgIgIAAQgDAAgBACg");
	this.shape_21.setTransform(16.4,-22.1,2.778,2.778);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAWIABgIIAEABIAEABIADgBIABgCIAAgDIgEAAIgDgCIgCgDIgCgEIgFgVIAJgCIAFAVIABACIACABIABAAIAGgYIAJACIgJAjQgBAEgDACQgDACgEAAg");
	this.shape_22.setTransform(6,-20.3,2.778,2.778);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGAQQgEgCgBgCIgEgFIgBgHQAAgDACgDQABgDACgCIAFgEIAGgBIAIABIAFAEIADAFIABAGIgBAHIgEAFQgBACgEACIgHABgAgEgGQgCADAAADQAAADACAEQABACADAAQAEAAABgCQACgCAAgFQAAgIgHAAQgDAAgBACg");
	this.shape_23.setTransform(-4.5,-22.1,2.778,2.778);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AADAVIgEgBIgDgBIgCgEIgBgFIAAgNIgFAAIAAgIIAFAAIAAgJIAIAAIAAAJIAJAAIAAAIIgJAAIAAAMQAAAAAAABQAAABAAAAQAAABAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAIACAAIAEgBIACAHIgIACg");
	this.shape_24.setTransform(-13.5,-23.2,2.778,2.778);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgDAEQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAAAAAABQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_25.setTransform(-19.8,-18.9,2.778,2.778);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAEAQIgEgCIgDACIgFABIgEgBIgEgCIgCgDIgBgDIgDgXIAJgBIACAXIABABIABABIABAAIADAAIACAAIAAgYIAIAAIAAAYIABAAIACAAIADgBIAAgBIADgXIAJABIgDAXIgBADIgCADIgDACIgFABg");
	this.shape_26.setTransform(-28.8,-22,2.778,2.778);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAEAQIgEgCIgDACIgEABIgGgBIgDgCIgCgDIgBgDIgDgXIAJgBIADAXIAAABIADABIACAAIACAAIAAgYIAHAAIAAAYIACAAIADAAIABAAIABgBIABgBIACgXIAJABIgCAXIgBADIgCADIgEACIgFABg");
	this.shape_27.setTransform(-43.2,-22,2.778,2.778);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAEAQIgEgCIgDACIgFABIgFgBIgEgCIgCgDIgBgDIgCgXIAJgBIACAXIABABIACABIADAAIACAAIAAgYIAIAAIAAAYIAAAAIADAAIADgBIAAgBIADgXIAJABIgDAXIgBADIgCADIgDACIgGABg");
	this.shape_28.setTransform(-57.5,-22,2.778,2.778);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAAAJIAKgIIAAgBIgBAAIgJgIIACgEIANAJIABADQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAIgNAKgAgPAJIAKgIIABgBIgBAAIgKgIIADgEIAMAJIAAADIAAADIgMAKg");
	this.shape_29.setTransform(80.4,-40.3,2.778,2.778);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAIAOIgFACIgFABIgFAAIgDgCIgDgDIgBgFIABgFIADgCIAEgBIAEgBIAIAAIAAgCQAAgEgCgCQgBgBgDAAIgEABIgGABIgBgEIALgDIAGABIAEADQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIABAGIAAANIADAEIgEADgAgGADQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIABACIABACIAFACIAEgCIADgCIAAgIIgHAAQgBAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_30.setTransform(69.8,-39.9,2.778,2.778);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAIAQIAAgOIgPAAIAAAOIgGAAIAAgfIAGAAIAAANIAPAAIAAgNIAGAAIAAAfg");
	this.shape_31.setTransform(59.6,-39.9,2.778,2.778);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgBAXIAAgbIgDAAIAAgEIAJAAIAAAfgAAFgPIgBgDIABgDIACgBQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIABADIgBADQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAgAgJgPIgBgDIABgDIADgBQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIABADIgBADQAAAAAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAg");
	this.shape_32.setTransform(51.9,-41.8,2.778,2.778);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAHAOIgEACIgFABIgEAAIgFgCIgCgDIAAgFIABgFIACgCIAEgBIAEgBIAIAAIAAgCQAAgEgBgCQgCgBgDAAIgEABIgGABIgBgEIAFgCIAGgBIAGABIAEADIACADIAAAGIAAANIACAEIgDADgAgGADQAAAAgBABQAAAAAAABQAAAAAAABQgBAAAAABIABACIACACIAEACIAEgCIADgCIAAgIIgHAAIgFACg");
	this.shape_33.setTransform(45,-39.9,2.778,2.778);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgNAXIAAgmIgCgFIAFgCIACADIAFgCIAFgBQAGAAAEAEQAEAFAAAIIgBAGQgBADgCACIgFAEIgHABIgDAAIgEgBIAAANgAgDgQIgEACIAAATIADABIAEAAIADgBIAEgCIACgDIABgFIgBgGIgCgDIgDgCIgDgBg");
	this.shape_34.setTransform(34.8,-38.2,2.778,2.778);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgCACIgFAAIAAAOIgFAAIAAgfIAFAAIAAANIAEAAIABgBIABgBIAFgIIACgCIADgBIABAAIACAAIgBAFIgBAAIgBAAIgBABIgGAIIgBABIAMANIgEADg");
	this.shape_35.setTransform(25.7,-39.9,2.778,2.778);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgJAXIgCgBIAAgEIACAAIAFAAIACAAIACgCIAAgDIAAgBQgCAAgCgCQgDgBgBgDIgJgZIAFgDIAJAYIACAEIADABIAKgdIAGACIgMAhIgCAFIgDADIgDABIgEABg");
	this.shape_36.setTransform(15.3,-41.7,2.778,2.778);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgJADIAAgFIATAAIAAAFg");
	this.shape_37.setTransform(6.4,-40.9,2.778,2.778);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAIAOIgFACQgBABgEAAIgEAAIgEgCIgDgDIgBgFIABgFIADgCIAEgBIAFgBIAHAAIAAgCQAAgEgBgCQgCgBgDAAIgEABIgGABIgBgEIAFgCIAGgBIAGABIAEADIACADIAAAGIAAANIADAEIgEADgAgGADQAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAABIACAEIAFACIAEgCIADgCIAAgIIgHAAIgFACg");
	this.shape_38.setTransform(-2.6,-39.9,2.778,2.778);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgCAQIAAgaIgLAAIAAgFIAbAAIAAAFIgLAAIAAAag");
	this.shape_39.setTransform(-11.5,-39.9,2.778,2.778);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgHAQIgEgDQgDgDAAgDIgBgHIACgGIACgFIAFgEQADgBADAAQAEAAADABIAFAEIADAFIABAGIgBAHIgDAFQgBACgEACIgHABIgHgBgAgGgIQgDADAAAFQAAAGADADQACAEAEAAQAFAAACgEQADgDgBgGQABgGgDgCQgCgDgFAAQgEAAgCADg");
	this.shape_40.setTransform(-20.6,-39.9,2.778,2.778);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAIAXIAAgUIgPAQIAAAEIgGAAIAAgfIAGAAIAAAUIAPgPIAAgFIAGAAIAAAfgAgGgPQgDgBgCgFIAFgBIADADQAAABABAAQAAAAABAAQAAABABAAQAAAAAAAAQADAAACgCIACgDIAFABIgBAEIgDACIgDACIgFAAQgEAAgCgCg");
	this.shape_41.setTransform(-30.9,-42,2.778,2.778);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgGAQIgFgDIgDgGIgBgHIABgGQABgDACgCIAFgEQADgBADAAQAEAAADABIAFAEQACACABADIABAGIgBAHQgBADgCACQgBACgEACIgHABIgGgBgAgGgIQgDADAAAFQAAAFADAEQACAEAEAAQAFAAACgEQADgEAAgFQAAgFgDgDQgCgDgFAAQgEAAgCADg");
	this.shape_42.setTransform(-41.4,-39.9,2.778,2.778);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgCAWIAAgnIgPAAIAAgFIAjAAIAAAFIgPAAIAAAng");
	this.shape_43.setTransform(-49.6,-41.7,2.778,2.778);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAAAEIAAgEQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAIADgEIAJgGIACAEIgIAGIgCACIAAAAIAAABIALAIIgDAEgAgLAGIgDgCIgBgEIABgCIAEgEIAIgGIADAEIgKAIIgBAAIABABIAKAIIgDAEg");
	this.shape_44.setTransform(-58.5,-40.3,2.778,2.778);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgCAWIAAgsIAFAAIAAAsg");
	this.shape_45.setTransform(-70.3,-41.7,2.778,2.778);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgCAWIAAgsIAFAAIAAAsg");
	this.shape_46.setTransform(-75,-41.7,2.778,2.778);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AALAWIAAgnIgVAAIAAAnIgGAAIAAgsIAhAAIAAAsg");
	this.shape_47.setTransform(-83.6,-41.7,2.778,2.778);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgNAXIAAgmIgCgFIAFgCIACADIAFgCIAFgBQAGAAAEAEQAEAFAAAIIgBAGQgBADgCACIgFAEIgHABIgDAAIgEgBIAAANgAgDgQIgEACIAAATIADABIAEAAIADgBIAEgCIACgDIABgFIgBgGIgCgDIgDgCIgDgBg");
	this.shape_48.setTransform(98.9,-56,2.778,2.778);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgGAQIgFgEIgDgFIgBgHIABgGQABgDACgCIAFgEQADgBADAAQAEAAADABIAFAEQACACABADIABAGIgBAHIgDAFIgFAEIgHABIgGgBgAgGgIQgDADAAAFQAAAFADAEQACADAEAAQAFAAACgDQADgEAAgFQAAgFgDgDQgCgDgFAAQgEAAgCADg");
	this.shape_49.setTransform(88.5,-57.7,2.778,2.778);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgCAQIAAgaIgLAAIAAgFIAbAAIAAAFIgLAAIAAAag");
	this.shape_50.setTransform(79.3,-57.7,2.778,2.778);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAAAQQgCgBgCgCIgCgFIgCgGIgGAAIAAAOIgGAAIAAgfIAGAAIAAAOIAGAAIACgGQABgDACgBQABgCACgCQADgBADAAQAEAAADABQAEACABACQACACABADIAAAGIAAAHIgDAFIgFAEQgBABgGAAIgGgBgAAAgIQgCADAAAFQAAAFACAEQACADAEAAQAFAAACgDQADgEAAgFQAAgFgDgDQgCgDgFAAQgFAAgBADg");
	this.shape_51.setTransform(68.2,-57.7,2.778,2.778);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgDAHIACgHIgCgBIAAgCIAAgDIADgBIAEABIABADIgBABIAAACIgDAGIgBACg");
	this.shape_52.setTransform(58.7,-63.6,2.778,2.778);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgHAXIgEgEIgDgHIgBgIIABgHIACgGIAEgFIAGgDIADgBIADgBIACgBIACgDIAFACIgBACIgBACIgBABIgDACIgCAAIgCABIgDABIgDABIgDACIgCADIgBAEIAFgDQADgBADAAQADAAADABIAEADIADAEIABAFIgBAHQgBADgCACIgFAEIgHABIgHgBgAgBgBIgDABIgDABIgCACIAAACIABAFQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAIAEABQAEAAADgDQADgDAAgFQAAgJgJAAg");
	this.shape_53.setTransform(51.1,-59.6,2.778,2.778);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAIAQIAAgTIgPAOIAAAFIgGAAIAAgfIAGAAIAAAUIAPgPIAAgFIAGAAIAAAfg");
	this.shape_54.setTransform(40.7,-57.7,2.778,2.778);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgNAXIAAgmIgCgFIAFgCIACADIAFgCIAFgBQAHAAADAEQAEAEAAAJIgBAGQgBADgCACIgFAEIgHABIgDAAIgEgBIAAANgAgDgQIgEACIAAATIAEABIADAAIAEgBIADgCIACgDIABgFIgBgGIgCgDIgDgCIgDgBg");
	this.shape_55.setTransform(30.3,-56,2.778,2.778);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgCAQIAAgaIgLAAIAAgFIAbAAIAAAFIgLAAIAAAag");
	this.shape_56.setTransform(21,-57.7,2.778,2.778);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgFAQIgEgEIgDgFIgBgHIABgGIADgFIAFgEQAEgBACAAIAHABIAFABIgCAFIgFgBIgFgBIgDABIgEACIgCAFIAAADQAAAGACADQADADAEAAIAFAAIAFgCIACAFIgFACIgHAAIgHgBg");
	this.shape_57.setTransform(12.3,-57.7,2.778,2.778);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAIAQIAAgTIgPAOIAAAFIgGAAIAAgfIAGAAIAAAUIAPgPIAAgFIAGAAIAAAfg");
	this.shape_58.setTransform(2.4,-57.7,2.778,2.778);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAMAUIAAgIIgXAAIAAAHIgFAAIAAgMIAEAAIACgEIACgEIABgMIAAgGIAUAAIAAAaIAEAAIAAANgAgCAAIgCAEIgCADIANAAIAAgVIgIAAQAAAIgBAGg");
	this.shape_59.setTransform(-7.8,-56.7,2.778,2.778);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAIAXIAAgUIgPAQIAAAEIgGAAIAAgfIAGAAIAAAUIAPgPIAAgFIAGAAIAAAfgAgGgPQgEgCAAgEIAEgBIADADQAAABABAAQAAAAABAAQAAABABAAQAAAAAAAAQAEAAABgCIADgDIAEABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgDACIgDACIgFAAQgEAAgCgCg");
	this.shape_60.setTransform(-21.6,-59.7,2.778,2.778);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAIAQIAAgTIgPAOIAAAFIgGAAIAAgfIAGAAIAAAUIAPgPIAAgFIAGAAIAAAfg");
	this.shape_61.setTransform(-31.9,-57.7,2.778,2.778);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAIAQIAAgOIgPAAIAAAOIgGAAIAAgfIAGAAIAAANIAPAAIAAgNIAGAAIAAAfg");
	this.shape_62.setTransform(-42.2,-57.7,2.778,2.778);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAIAXIAAgUIgPAQIAAAEIgGAAIAAgfIAGAAIAAAUIAPgPIAAgFIAGAAIAAAfgAgGgPQgEgCAAgEIAEgBIADADQAAABABAAQAAAAABAAQAAABABAAQAAAAAAAAQAEAAABgCIADgDIAEABQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgDACIgDACIgFAAQgEAAgCgCg");
	this.shape_63.setTransform(-52.5,-59.7,2.778,2.778);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAAAXIAAgbIgEAAIAAgEIAIAAIAAAfgAgBgPIgBgCIABgDIACgCQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIgBACQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_64.setTransform(-60.2,-59.6,2.778,2.778);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AALAUIAAgIIgZAAIAAgfIAFAAIAAAaIAPAAIAAgaIAGAAIAAAaIADAAIAAANg");
	this.shape_65.setTransform(-67,-56.7,2.778,2.778);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAAAXIAAgbIgEAAIAAgEIAIAAIAAAfgAgBgPIgBgCIABgDQAAgBABAAQAAAAAAAAQAAgBAAAAQABAAAAAAIADACIABADIgBACIgDACQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBAAAAgBg");
	this.shape_66.setTransform(-75.2,-59.6,2.778,2.778);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgBAdIAAgMQgFAAgEgCIgFgDIgDgFIgBgHIABgFIADgFIAGgEQACgBAGAAIAAgNIAEAAIAAANQAFAAACABIAGAEQACACABADQACADgBACIAAAGIgEAFQgBADgEABQgEACgEAAIAAAMgAADAMQAGAAACgEQADgCAAgGQABgJgMgCgAgLgHQgCACgBAFQABAGACADQADADAHAAIAAgXQgHABgDADg");
	this.shape_67.setTransform(-83.9,-57.6,2.778,2.778);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgJAWIgGgGQgDgEgBgDQgBgEAAgFQAAgEABgEIAEgHQADgEAEgBQADgCAFAAQAGAAAEACQAEABACAEQADAEABADQABAEAAAEQAAAFgBAEQgBADgDAEIgGAGQgFABgFAAQgEAAgFgBgAgFgQIgFAEIgDAGIgBAGIABAHIADAGQACADADABQACABADAAQAEAAACgBIAFgEIADgGIABgHIgBgGIgDgGIgFgEQgCgBgEAAQgDAAgCABg");
	this.shape_68.setTransform(-97.3,-59.4,2.778,2.778);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ofDistr, new cjs.Rectangle(-140,-66.2,280,119.7), null);


(lib.logoZnak_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logoZnak();
	this.instance.parent = this;
	this.instance.setTransform(-83,-57.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logoZnak_1, new cjs.Rectangle(-83,-57.5,166,115), null);


(lib.car2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.car2();
	this.instance.parent = this;
	this.instance.setTransform(-189,-118);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car2_1, new cjs.Rectangle(-189,-118,378,236), null);


(lib.car_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.car();
	this.instance.parent = this;
	this.instance.setTransform(-72,-107);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.car_1, new cjs.Rectangle(-72,-107,144,214), null);


(lib.bgImg5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg5();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg5_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bgImg4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg4();
	this.instance.parent = this;
	this.instance.setTransform(-189,-377);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg4_1, new cjs.Rectangle(-189,-377,378,754), null);


(lib.bgImg3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg3_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bgImg2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg2_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bgImg1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bgImg1();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg1_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.wheel_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.wheelMc();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-29,58,58);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4
	this.instance = new lib.logoZnak_1();
	this.instance.parent = this;
	this.instance.setTransform(0.9,-70.7,0.7,0.7,0,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// ALWAYS A BETTER WAY
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A2A2A2").s().p("AgJBGIAAgwIgIgDIgFgGIgFgHIghhEIAQgHIAiBGIAEAEIADACIADAAIAEAAIADgCIAEgFIAihFIAQAHIggBBIgGAJQgDAEgDACQgCACgGACIAAAwg");
	this.shape.setTransform(59.5,144.5,1.111,1.111);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2A2A2").s().p("AAhAZIhCAAIgPAuIgRgEIAkhxIAEgKIAFgIQAEgDAFgBQAFgCAGAAQAIAAADACQAFABAEADQAEADACAFIAEAKIAkBxIgSAEgAgGg0QgDADgDAGIgQA0IA4AAIgRg0QgCgGgCgDQgCgCgFAAQgFAAgBACg");
	this.shape_1.setTransform(46.3,144.5,1.111,1.111,0,0,0,-0.1,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A2A2A2").s().p("AAAA/IgNAGQgHACgKAAQgTAAgJgKQgJgKgCgRIgNhlIATgDIAMBlQABAIACAEQACAFAEADIAHAEIAJABQAKAAAIgHIAAh2IARAAIAAB2QAFAEAEABQAEACAGAAIAIgBIAIgEQADgDACgFQACgEABgIIAMhlIATADIgMBlIgEAQQgCAGgGAFQgEAFgHACQgGADgLAAQgTAAgMgIg");
	this.shape_2.setTransform(29.4,144.7,1.111,1.111);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A2A2A2").s().p("AgKAUIgEgDIgGgBIgGAAIAAAzIgdAAIAAiIIA1AAQAJAAAIACQAKACAFAFQAGADAEAJQAEAIAAAKQAAAIgCAGQgCAGgFAGQgDAEgGAEQgGADgFACIAGAEIAjAqIgWAPgAgagGIASAAQAKAAAGgFQAHgFAAgKQAAgGgCgEQgBgDgEgDIgHgDIgJgBIgSAAg");
	this.shape_3.setTransform(8.6,144.8,1.111,1.111);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A2A2A2").s().p("AgxBFIAAiJIBiAAIAAAZIhGAAIAAAdIA2AAIAAAYIg2AAIAAAjIBIAAIAAAYg");
	this.shape_4.setTransform(-5.5,144.6,1.111,1.111);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A2A2A2").s().p("AgOBFIAAhwIgoAAIAAgZIBuAAIAAAZIgqAAIAABwg");
	this.shape_5.setTransform(-19.1,144.6,1.111,1.111);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A2A2A2").s().p("AgNBFIAAhwIgqAAIAAgZIBvAAIAAAZIgqAAIAABwg");
	this.shape_6.setTransform(-32.3,144.6,1.111,1.111);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A2A2A2").s().p("AgyBFIAAiJIBjAAIAAAZIhGAAIAAAdIA2AAIAAAYIg2AAIAAAjIBIAAIAAAYg");
	this.shape_7.setTransform(-45.4,144.6,1.111,1.111);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A2A2A2").s().p("Ag2BFIAAiJIA2AAQALAAAIACQAIACAHAEQAHAFADAGQAEAGgBAKQAAAFgBAEQAAAFgDADIgGAHIgFAFIAIAEQAEACADAFQAEADACAGQACAGgBAGQAAAKgDAIQgDAHgHAFQgFAGgKACQgKADgKAAgAgZAtIAcAAQAKAAAFgEQAHgDAAgKQAAgGgCgDQgCgEgEgCQgEgCgEgBIgiAAgAgZgNIAYAAQAIABAFgEQAHgEgBgIQAAgKgGgDQgGgDgMAAIgTAAg");
	this.shape_8.setTransform(-59.2,144.6,1.111,1.111);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A2A2A2").s().p("AAhAZIhBAAIgPAuIgSgEIAkhxIAEgKQACgEAEgEQAEgDAEgBQAFgCAGAAQAIAAAEACQAEABAFADQAEADABAFIAFAKIAjBxIgSAEgAgGg0QgCADgDAGIgRA0IA4AAIgQg0QgCgGgDgDQgCgCgFAAQgEAAgCACg");
	this.shape_9.setTransform(34,120,1.111,1.111);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A2A2A2").s().p("AgiBFIgTgFIAFgQQAWAIAXAAQASABAKgIQAJgGAAgMQAAgGgDgFQgCgEgGgDIgLgEIgdgHQgJgCgGgDQgHgEgEgHQgFgHAAgKQAAgIAEgIQADgHAGgGQAHgFALgDQAKgDAOAAQANAAALACQALACAJAFIgEAOIgUgFQgJgCgNAAQgPAAgKAFQgIAGAAALQAAAHADADQACAEAGADIALAEIAcAGQAKADAGADQAHAFAEAGQAFAIAAAKQAAAVgPALQgOALgcAAQgSAAgNgDg");
	this.shape_10.setTransform(15.2,120,1.111,1.111,0,0,0,-0.1,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A2A2A2").s().p("AgJBGIAAgwIgIgDIgFgGIgFgHIghhEIARgHIAhBGIAEAEIADACIADAAIAEAAIADgCQACgBACgEIAihFIAQAHIgmBKIgGAGIgIAEIAAAwg");
	this.shape_11.setTransform(1.7,119.9,1.111,1.111,0,0,0,-0.1,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A2A2A2").s().p("AAhAZIhCAAIgPAuIgRgEIAkhxIAEgKQACgEAEgEQADgDAFgBQAFgCAGAAQAIAAAEACQAFABAEADQADAEACAEIAFAKIAjBxIgSAEgAgGg0QgEAEgBAFIgRA0IA5AAIgRg0QgBgFgEgEQgDgCgEAAQgEAAgCACg");
	this.shape_12.setTransform(-11.3,120,1.111,1.111);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A2A2A2").s().p("AAAA/IgOAGQgFACgLAAQgTAAgKgKQgIgKgDgRIgMhlIATgDIALBlIAEAMQACAFAEADQAEADADABIAJABQAKAAAHgHIAAh2IASAAIAAB2QAEAEAEABQAFACAGAAIAIgBQAEgBAEgDQADgDACgFQADgFABgHIALhlIATADIgMBlQgBAHgDAJQgCAFgFAGQgGAFgHACQgFADgLAAQgUAAgLgIg");
	this.shape_13.setTransform(-28.3,120,1.111,1.111,0,0,0,-0.1,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A2A2A2").s().p("AgvBFIAAiJIASAAIAAB5IBNAAIAAAQg");
	this.shape_14.setTransform(-43.4,120.1,1.111,1.111,0,0,0,-0.1,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A2A2A2").s().p("AAhAZIhCAAIgOAuIgSgEIAkhxIAEgKIAGgIQADgDAFgBQAEgCAHAAQAIAAADACQAFABAEADQAEADACAFIAEAKIAkBxIgTAEgAgHg0QgCADgCAGIgRA0IA4AAIgRg0QgCgGgCgDQgDgCgEAAQgEAAgDACg");
	this.shape_15.setTransform(-57.9,120,1.111,1.111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Toyota brand signature
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DB001A").s().p("AgVBjIAAhLIhOh6IA1AAIAuBUIAyhUIAyAAIhOB6IAABLg");
	this.shape_16.setTransform(-10.9,-11.3,1.111,1.111,0,0,0,-0.1,-0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DB001A").s().p("AhKBKQgegfAAgrQAAgrAegeQAfgfArgBQArABAfAfQAfAeAAArQAAArgfAfQgfAfgrABQgrgBgfgfgAgpguQgRATAAAbQAAAbARAUQASATAXABQAYgBARgTQARgUAAgbQAAgbgRgTQgRgUgYAAQgYAAgRAUg");
	this.shape_17.setTransform(-33.7,-11.5,1.111,1.111);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DB001A").s().p("AgVBjIAAihIg9AAIAAgkIClAAIAAAkIg9AAIAAChg");
	this.shape_18.setTransform(-56,-11.3,1.111,1.111,0,0,0,-0.1,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DB001A").s().p("AA5BjIgRgtIhPAAIgRAtIg1AAIBUjFIA2AAIBRDFgAgZAVIA2AAIgchHg");
	this.shape_19.setTransform(54.3,-11.3,1.111,1.111,0,0,0,-0.1,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DB001A").s().p("AgUBjIAAihIhAAAIAAgkICpAAIAAAkIg9AAIAAChg");
	this.shape_20.setTransform(34.6,-11.3,1.111,1.111,0,0,0,-0.1,-0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DB001A").s().p("AhKBKQgfgfABgrQgBgrAfgeQAfgfArgBQArABAfAfQAfAeABArQgBArgfAfQgfAfgrABQgrgBgfgfgAgpguQgRATABAbQgBAbARAUQARATAYABQAYgBARgTQARgUABgbQgBgbgRgTQgRgUgYAAQgYAAgRAUg");
	this.shape_21.setTransform(12.3,-11.5,1.111,1.111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// Слой 1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AtvbgMAAAg2/IbfAAMAAAA2/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-88,-176,176,352.1), null);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(93,-225.9,0.419,0.419,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(245).to({regX:0.1,scaleX:1,scaleY:1,x:0.1,y:-123.4},12).wait(52).to({regX:0,scaleX:0.42,scaleY:0.42,x:93,y:-225.9},10).wait(7));

	// bg
	this.instance_1 = new lib.bg();
	this.instance_1.parent = this;
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(309).to({_off:false},0).to({alpha:1},10).to({alpha:0},6).wait(1));

	// ofDistr
	this.instance_2 = new lib.ofDistr();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,232.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(257).to({_off:false},0).to({alpha:1},10).wait(42).to({alpha:0},10).wait(7));

	// bgImg5
	this.instance_3 = new lib.bgImg5_1();
	this.instance_3.parent = this;
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(235).to({_off:false},0).to({alpha:1},10).to({_off:true},74).wait(7));

	// yaris
	this.instance_4 = new lib.yaris();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1.9,254.8,0.804,0.803);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95).to({alpha:0},3).to({_off:true},1).wait(220).to({_off:false,alpha:1},0).wait(7));

	// t2_3
	this.instance_5 = new lib.t2_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-296.9,-63.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(195).to({_off:false},0).to({x:-32.9},10,cjs.Ease.get(1)).to({_off:true},40).wait(81));

	// t2_2
	this.instance_6 = new lib.t2_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-301.9,-90.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(190).to({_off:false},0).to({x:-37.9},10,cjs.Ease.get(1)).to({_off:true},45).wait(81));

	// t2_1
	this.instance_7 = new lib.t2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-326.4,-116.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(185).to({_off:false},0).to({x:-62.4},10,cjs.Ease.get(1)).to({_off:true},50).wait(81));

	// t1_2
	this.instance_8 = new lib.t1_2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-340.2,-89);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(125).to({_off:false},0).to({x:-76.2},10,cjs.Ease.get(1)).wait(30).to({alpha:0},10).to({_off:true},1).wait(150));

	// t1_1
	this.instance_9 = new lib.t1_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-267.2,-119.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(120).to({_off:false},0).to({x:-3.2},10,cjs.Ease.get(1)).wait(35).to({alpha:0},10).to({_off:true},1).wait(150));

	// yarisB
	this.instance_10 = new lib.yarisB();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-57.5,-169.7,0.804,0.803);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(98).to({_off:false},0).to({alpha:1},3).to({_off:true},144).wait(81));

	// bg
	this.instance_11 = new lib.bg();
	this.instance_11.parent = this;
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(95).to({_off:false},0).to({alpha:1},3).to({alpha:0},3).to({_off:true},144).wait(81));

	// urText2
	this.instance_12 = new lib.urText2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-28,268.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(98).to({_off:false},0).to({_off:true},147).wait(81));

	// wheel
	this.instance_13 = new lib.wheel_1("synched",0,false);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-282.8,129.1,0.593,0.786,0,0,0,-0.2,0.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(105).to({_off:false},0).to({scaleX:0.74,scaleY:0.98,x:-44.6,y:159.6,startPosition:15},15,cjs.Ease.get(1)).wait(45).to({startPosition:15},0).to({scaleX:0.67,scaleY:0.89,x:-26.5,y:159.3},9,cjs.Ease.get(-1)).to({scaleX:0.59,scaleY:0.78,x:-4.3,y:158.8},11,cjs.Ease.get(1)).to({_off:true},60).wait(81));

	// car2
	this.instance_14 = new lib.car2_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-276.2,83.6,0.8,0.8,0,0,0,-0.2,0.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(105).to({_off:false},0).to({regX:-0.1,scaleX:1,scaleY:1,x:-36.3,y:102.7},15,cjs.Ease.get(1)).wait(45).to({scaleX:0.91,scaleY:0.91,x:-18.9,y:107.6},9,cjs.Ease.get(-1)).to({regY:0,scaleX:0.8,scaleY:0.8,x:2.3,y:113.5},11,cjs.Ease.get(1)).to({_off:true},60).wait(81));

	// car
	this.instance_15 = new lib.car_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(248.1,95.4,1,1,105,0,0,-0.1,-0.1);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(71).to({_off:false},0).wait(1).to({scaleX:1,scaleY:1,rotation:106.3,x:235.4,y:98.5},0).wait(1).to({rotation:107.8,x:222.2,y:100.5},0).wait(1).to({rotation:109.3,x:209.2,y:101.7},0).wait(1).to({rotation:110.8,x:196.3,y:102.4},0).wait(1).to({rotation:112.3,x:183.4,y:102.6},0).wait(1).to({rotation:113.8,x:170.6},0).wait(1).to({rotation:115.3,x:157.8,y:102.2},0).wait(1).to({rotation:116.6,x:145,y:101.6},0).wait(1).to({rotation:118.1,x:132.4,y:100.6},0).wait(1).to({rotation:119.6,x:119.6,y:99.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:121.1,x:107,y:97.6},0).wait(1).to({rotation:122.6,x:94.3,y:95.6},0).wait(1).to({rotation:124.1,x:81.7,y:93.3},0).wait(1).to({rotation:125.6,x:69.3,y:90.7},0).wait(1).to({rotation:127.1,x:57,y:87.7},0).wait(1).to({rotation:128.4,x:44.8,y:84.3},0).wait(1).to({rotation:129.9,x:32.7,y:80.6},0).wait(1).to({rotation:131.4,x:20.7,y:76.4},0).wait(1).to({rotation:132.9,x:8.9,y:71.7},0).wait(1).to({rotation:134.4,x:-2.7,y:66.5},0).wait(1).to({rotation:135.9,x:-14,y:60.7},0).wait(1).to({regX:0,regY:0,rotation:137.4,x:-25.2,y:54.4},0).wait(1).to({regX:-0.1,regY:-0.1,rotation:138.9,x:-35.7,y:47.4},0).wait(1).to({rotation:140.2,x:-45.9,y:39.8},0).wait(1).to({regX:0,scaleX:1,scaleY:1,rotation:141.7,x:-58.3,y:34.3},0).to({_off:true},1).wait(229));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_71 = new cjs.Graphics().p("EgLZAu4MAAAhdvMAu4AAAMAAABdvg");
	var mask_graphics_72 = new cjs.Graphics().p("EgL9Au4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_73 = new cjs.Graphics().p("EgMhAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_74 = new cjs.Graphics().p("EgNFAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_75 = new cjs.Graphics().p("EgNpAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_76 = new cjs.Graphics().p("EgONAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_77 = new cjs.Graphics().p("EgOxAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_78 = new cjs.Graphics().p("EgPVAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_79 = new cjs.Graphics().p("EgP5Au4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_80 = new cjs.Graphics().p("EgQdAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_81 = new cjs.Graphics().p("EgRBAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_82 = new cjs.Graphics().p("EgRlAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_83 = new cjs.Graphics().p("EgSJAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_84 = new cjs.Graphics().p("EgStAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_85 = new cjs.Graphics().p("EgTRAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_86 = new cjs.Graphics().p("EgT1Au4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_87 = new cjs.Graphics().p("EgUZAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_88 = new cjs.Graphics().p("EgU9Au4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_89 = new cjs.Graphics().p("EgVhAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_90 = new cjs.Graphics().p("EgWFAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_91 = new cjs.Graphics().p("EgWpAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_92 = new cjs.Graphics().p("EgXNAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_93 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_94 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_95 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_graphics_96 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(71).to({graphics:mask_graphics_71,x:227.1,y:-12}).wait(1).to({graphics:mask_graphics_72,x:223.4,y:-12}).wait(1).to({graphics:mask_graphics_73,x:219.8,y:-12}).wait(1).to({graphics:mask_graphics_74,x:216.2,y:-12}).wait(1).to({graphics:mask_graphics_75,x:212.6,y:-12}).wait(1).to({graphics:mask_graphics_76,x:209,y:-12}).wait(1).to({graphics:mask_graphics_77,x:205.4,y:-12}).wait(1).to({graphics:mask_graphics_78,x:201.8,y:-12}).wait(1).to({graphics:mask_graphics_79,x:198.2,y:-12}).wait(1).to({graphics:mask_graphics_80,x:194.6,y:-12}).wait(1).to({graphics:mask_graphics_81,x:191,y:-12}).wait(1).to({graphics:mask_graphics_82,x:187.4,y:-12}).wait(1).to({graphics:mask_graphics_83,x:183.8,y:-12}).wait(1).to({graphics:mask_graphics_84,x:180.2,y:-12}).wait(1).to({graphics:mask_graphics_85,x:176.6,y:-12}).wait(1).to({graphics:mask_graphics_86,x:173,y:-12}).wait(1).to({graphics:mask_graphics_87,x:169.4,y:-12}).wait(1).to({graphics:mask_graphics_88,x:165.8,y:-12}).wait(1).to({graphics:mask_graphics_89,x:162.2,y:-12}).wait(1).to({graphics:mask_graphics_90,x:158.6,y:-12}).wait(1).to({graphics:mask_graphics_91,x:155,y:-12}).wait(1).to({graphics:mask_graphics_92,x:151.4,y:-12}).wait(1).to({graphics:mask_graphics_93,x:145.7,y:-12}).wait(1).to({graphics:mask_graphics_94,x:138.5,y:-12}).wait(1).to({graphics:mask_graphics_95,x:131.3,y:-12}).wait(1).to({graphics:mask_graphics_96,x:124.1,y:-12}).wait(1).to({graphics:null,x:0,y:0}).wait(229));

	// road1
	this.instance_16 = new lib.road3_1();
	this.instance_16.parent = this;
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(71).to({_off:false},0).to({_off:true},26).wait(229));

	// bgImg1
	this.instance_17 = new lib.bgImg3_1();
	this.instance_17.parent = this;
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(66).to({_off:false},0).to({alpha:1},5).to({_off:true},26).wait(229));

	// car
	this.instance_18 = new lib.car_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-242.5,-276.5,1,1,-34.8,0,0,-0.1,-0.1);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(35).to({_off:false},0).wait(1).to({scaleX:1,scaleY:1,rotation:-33.8,x:-231.5,y:-270.1},0).wait(1).to({rotation:-32.8,x:-220.6,y:-263.4},0).wait(1).to({rotation:-31.8,x:-209.8,y:-256.5},0).wait(1).to({rotation:-30.8,x:-199.3,y:-249.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-29.8,x:-188.8,y:-242},0).wait(1).to({rotation:-28.8,x:-178.5,y:-234.5},0).wait(1).to({rotation:-27.8,x:-168.4,y:-226.7},0).wait(1).to({rotation:-26.8,x:-158.5,y:-218.9},0).wait(1).to({rotation:-25.8,x:-148.7,y:-210.7},0).wait(1).to({rotation:-25,x:-139,y:-202.3},0).wait(1).to({rotation:-24,x:-129.6,y:-193.8},0).wait(1).to({rotation:-23,x:-120.3,y:-185},0).wait(1).to({regY:-0.2,rotation:-22,x:-111.3,y:-176.2},0).wait(1).to({regY:-0.1,rotation:-21,x:-102.4,y:-167},0).wait(1).to({rotation:-20.1,x:-93.7,y:-157.6},0).wait(1).to({rotation:-19.1,x:-85.2,y:-148.1},0).wait(1).to({regX:0,rotation:-18.1,x:-76.9,y:-138.5},0).wait(1).to({regX:-0.1,rotation:-17.1,x:-68.9,y:-128.5},0).wait(1).to({rotation:-16.1,x:-61.2,y:-118.5},0).wait(1).to({rotation:-15.1,x:-53.5,y:-108.3},0).wait(1).to({rotation:-14.3,x:-46.1,y:-97.9},0).wait(1).to({rotation:-13.3,x:-39.1,y:-87.3},0).wait(1).to({rotation:-12.3,x:-32.3,y:-76.5},0).wait(1).to({rotation:-11.3,x:-25.6,y:-65.7},0).wait(1).to({rotation:-10.3,x:-19.4,y:-54.6},0).wait(1).to({rotation:-9.3,x:-13.3,y:-43.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-8.3,x:-7.5,y:-32},0).wait(1).to({rotation:-7.3,x:-2,y:-20.5},0).wait(1).to({rotation:-6.3,x:3.2,y:-8.8},0).wait(1).to({regX:0,rotation:-5.3,x:8.1,y:2.9},0).wait(1).to({regX:-0.1,rotation:-4.3,x:12.7,y:14.8},0).wait(1).to({regX:0,rotation:-3.5,x:17.1,y:26.8},0).wait(1).to({regY:0,rotation:-2.5,x:21.1,y:39},0).wait(1).to({rotation:-1.5,x:24.9,y:51.2},0).wait(1).to({rotation:-0.6,x:29.7,y:63.1},0).to({_off:true},1).wait(255));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_35 = new cjs.Graphics().p("Egq4AbVMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EgqEAb/MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_37 = new cjs.Graphics().p("EgpPAcoMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_38 = new cjs.Graphics().p("EgobAdSMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_39 = new cjs.Graphics().p("EgnmAd7MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_40 = new cjs.Graphics().p("EgmxAelMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_41 = new cjs.Graphics().p("Egl9AfOMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EglIAf4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_43 = new cjs.Graphics().p("EgkUAghMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_44 = new cjs.Graphics().p("EgjfAhKMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EgiqAh0MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_46 = new cjs.Graphics().p("Egh2AidMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_47 = new cjs.Graphics().p("EghBAjHMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_48 = new cjs.Graphics().p("EggNAjwMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EgfYAkaMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_50 = new cjs.Graphics().p("EgekAlDMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EgdvAltMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_52 = new cjs.Graphics().p("Egc6AmWMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_53 = new cjs.Graphics().p("EgcGAm/MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_54 = new cjs.Graphics().p("EgbRAnpMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EgadAoSMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EgZoAo8MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_57 = new cjs.Graphics().p("EgY0AplMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_58 = new cjs.Graphics().p("EgX/AqPMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EgXbAq4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EgXbAriMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_61 = new cjs.Graphics().p("EgXbAsLMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EgXbAs0MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EgXbAteMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_64 = new cjs.Graphics().p("EgXbAuHMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EgXbAuxMAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_66 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_67 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(35).to({graphics:mask_1_graphics_35,x:-274.5,y:-425}).wait(1).to({graphics:mask_1_graphics_36,x:-269.3,y:-420.9}).wait(1).to({graphics:mask_1_graphics_37,x:-264,y:-416.8}).wait(1).to({graphics:mask_1_graphics_38,x:-258.8,y:-412.6}).wait(1).to({graphics:mask_1_graphics_39,x:-253.5,y:-408.5}).wait(1).to({graphics:mask_1_graphics_40,x:-248.2,y:-404.3}).wait(1).to({graphics:mask_1_graphics_41,x:-243,y:-400.2}).wait(1).to({graphics:mask_1_graphics_42,x:-237.7,y:-396}).wait(1).to({graphics:mask_1_graphics_43,x:-232.5,y:-391.9}).wait(1).to({graphics:mask_1_graphics_44,x:-227.2,y:-387.8}).wait(1).to({graphics:mask_1_graphics_45,x:-221.9,y:-383.6}).wait(1).to({graphics:mask_1_graphics_46,x:-216.7,y:-379.5}).wait(1).to({graphics:mask_1_graphics_47,x:-211.4,y:-375.3}).wait(1).to({graphics:mask_1_graphics_48,x:-206.2,y:-371.2}).wait(1).to({graphics:mask_1_graphics_49,x:-200.9,y:-367}).wait(1).to({graphics:mask_1_graphics_50,x:-195.7,y:-362.9}).wait(1).to({graphics:mask_1_graphics_51,x:-190.4,y:-358.7}).wait(1).to({graphics:mask_1_graphics_52,x:-185.1,y:-354.6}).wait(1).to({graphics:mask_1_graphics_53,x:-179.9,y:-350.5}).wait(1).to({graphics:mask_1_graphics_54,x:-174.6,y:-346.3}).wait(1).to({graphics:mask_1_graphics_55,x:-169.4,y:-342.2}).wait(1).to({graphics:mask_1_graphics_56,x:-164.1,y:-338}).wait(1).to({graphics:mask_1_graphics_57,x:-158.9,y:-333.9}).wait(1).to({graphics:mask_1_graphics_58,x:-153.6,y:-329.7}).wait(1).to({graphics:mask_1_graphics_59,x:-146.7,y:-325.6}).wait(1).to({graphics:mask_1_graphics_60,x:-136.2,y:-321.4}).wait(1).to({graphics:mask_1_graphics_61,x:-125.6,y:-317.3}).wait(1).to({graphics:mask_1_graphics_62,x:-115.1,y:-313.2}).wait(1).to({graphics:mask_1_graphics_63,x:-104.6,y:-309}).wait(1).to({graphics:mask_1_graphics_64,x:-94.1,y:-304.9}).wait(1).to({graphics:mask_1_graphics_65,x:-83.6,y:-300.7}).wait(1).to({graphics:mask_1_graphics_66,x:-73.1,y:-293.2}).wait(1).to({graphics:mask_1_graphics_67,x:-62.5,y:-284.9}).wait(1).to({graphics:mask_1_graphics_68,x:-52,y:-276.6}).wait(1).to({graphics:mask_1_graphics_69,x:-41.5,y:-268.3}).wait(1).to({graphics:mask_1_graphics_70,x:-31,y:-260}).wait(1).to({graphics:null,x:0,y:0}).wait(255));

	// road1
	this.instance_19 = new lib.road2_1();
	this.instance_19.parent = this;
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(35).to({_off:false},0).to({_off:true},36).wait(255));

	// bgImg1
	this.instance_20 = new lib.bgImg2_1();
	this.instance_20.parent = this;
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(30).to({_off:false},0).to({alpha:1},5).to({_off:true},36).wait(255));

	// car
	this.instance_21 = new lib.car_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-249.8,-79.9,1,1,-75);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(9).to({_off:false},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:1,scaleY:1,rotation:-73.7,x:-238.5,y:-82.3},0).wait(1).to({regX:0,regY:0,rotation:-72.4,x:-227,y:-84.4},0).wait(1).to({rotation:-70.9,x:-215.5,y:-86.2},0).wait(1).to({regX:-0.1,regY:-0.1,rotation:-69.7,x:-204.1,y:-87.8},0).wait(1).to({rotation:-68.2,x:-192.5,y:-89.1},0).wait(1).to({regX:0,regY:0,rotation:-66.9,x:-180.8,y:-90.2},0).wait(1).to({regX:-0.1,regY:-0.1,rotation:-65.4,x:-169.3,y:-90.9},0).wait(1).to({rotation:-64.2,x:-157.6,y:-91.5},0).wait(1).to({rotation:-62.7,x:-146,y:-91.6},0).wait(1).to({rotation:-61.4,x:-134.5,y:-91.5},0).wait(1).to({rotation:-59.9,x:-122.9,y:-91.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-58.6,x:-111.3,y:-90.4},0).wait(1).to({regX:0,regY:0,rotation:-57.2,x:-99.6,y:-89.4},0).wait(1).to({regX:-0.1,regY:-0.1,rotation:-55.9,x:-88.3,y:-87.8},0).wait(1).to({rotation:-54.4,x:-76.8,y:-86},0).wait(1).to({rotation:-53.1,x:-65.4,y:-83.7},0).wait(1).to({rotation:-51.6,x:-54.1,y:-81.1},0).wait(1).to({regX:0,regY:0,rotation:-50.4,x:-42.7,y:-77.9},0).wait(1).to({regX:-0.1,regY:-0.1,rotation:-48.9,x:-31.8,y:-74.2},0).wait(1).to({regX:0,regY:0,rotation:-47.6,x:-20.7,y:-70.2},0).wait(1).to({rotation:-46.1,x:-10,y:-65.6},0).wait(1).to({rotation:-44.8,x:0.4,y:-60.6},0).wait(1).to({rotation:-43.4,x:10.6,y:-55},0).wait(1).to({rotation:-42.1,x:20.6,y:-48.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-40.6,x:30.3,y:-42.4},0).to({_off:true},1).wait(291));

	// mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_9 = new cjs.Graphics().p("EgjJAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_10 = new cjs.Graphics().p("EgiuAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_11 = new cjs.Graphics().p("EgiTAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_12 = new cjs.Graphics().p("Egh5Au4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_13 = new cjs.Graphics().p("EgheAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_14 = new cjs.Graphics().p("EghDAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_15 = new cjs.Graphics().p("EggoAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_16 = new cjs.Graphics().p("EggNAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_17 = new cjs.Graphics().p("EgfzAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_18 = new cjs.Graphics().p("EgfYAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_19 = new cjs.Graphics().p("Ege9Au4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_20 = new cjs.Graphics().p("EgeiAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_21 = new cjs.Graphics().p("EgeHAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_22 = new cjs.Graphics().p("EgdsAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_23 = new cjs.Graphics().p("EgdSAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_24 = new cjs.Graphics().p("Egc3Au4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_25 = new cjs.Graphics().p("EgccAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_26 = new cjs.Graphics().p("EgcBAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_27 = new cjs.Graphics().p("EgbmAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_28 = new cjs.Graphics().p("EgbMAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_29 = new cjs.Graphics().p("EgaxAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_30 = new cjs.Graphics().p("EgaWAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_31 = new cjs.Graphics().p("EgZ7Au4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_32 = new cjs.Graphics().p("EgZgAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_33 = new cjs.Graphics().p("EgZGAu4MAAAhdvMAu3AAAMAAABdvg");
	var mask_2_graphics_34 = new cjs.Graphics().p("EgYrAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_2_graphics_9,x:-225,y:-54}).wait(1).to({graphics:mask_2_graphics_10,x:-222.3,y:-54}).wait(1).to({graphics:mask_2_graphics_11,x:-219.6,y:-54}).wait(1).to({graphics:mask_2_graphics_12,x:-217,y:-54}).wait(1).to({graphics:mask_2_graphics_13,x:-214.3,y:-54}).wait(1).to({graphics:mask_2_graphics_14,x:-211.6,y:-54}).wait(1).to({graphics:mask_2_graphics_15,x:-208.9,y:-54}).wait(1).to({graphics:mask_2_graphics_16,x:-206.2,y:-54}).wait(1).to({graphics:mask_2_graphics_17,x:-203.6,y:-54}).wait(1).to({graphics:mask_2_graphics_18,x:-200.9,y:-54}).wait(1).to({graphics:mask_2_graphics_19,x:-198.2,y:-54}).wait(1).to({graphics:mask_2_graphics_20,x:-195.5,y:-54}).wait(1).to({graphics:mask_2_graphics_21,x:-192.8,y:-54}).wait(1).to({graphics:mask_2_graphics_22,x:-190.1,y:-54}).wait(1).to({graphics:mask_2_graphics_23,x:-187.5,y:-54}).wait(1).to({graphics:mask_2_graphics_24,x:-184.8,y:-54}).wait(1).to({graphics:mask_2_graphics_25,x:-182.1,y:-54}).wait(1).to({graphics:mask_2_graphics_26,x:-179.4,y:-54}).wait(1).to({graphics:mask_2_graphics_27,x:-176.7,y:-54}).wait(1).to({graphics:mask_2_graphics_28,x:-174.1,y:-54}).wait(1).to({graphics:mask_2_graphics_29,x:-171.4,y:-54}).wait(1).to({graphics:mask_2_graphics_30,x:-168.7,y:-54}).wait(1).to({graphics:mask_2_graphics_31,x:-166,y:-54}).wait(1).to({graphics:mask_2_graphics_32,x:-163.3,y:-54}).wait(1).to({graphics:mask_2_graphics_33,x:-160.7,y:-54}).wait(1).to({graphics:mask_2_graphics_34,x:-158,y:-54}).wait(1).to({graphics:null,x:0,y:0}).wait(291));

	// road1
	this.instance_22 = new lib.road1_1();
	this.instance_22.parent = this;
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(9).to({_off:false},0).to({_off:true},26).wait(291));

	// bgImg1
	this.instance_23 = new lib.bgImg1_1();
	this.instance_23.parent = this;

	this.instance_24 = new lib.bgImg4_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(-40,-40);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23}]}).to({state:[]},35).to({state:[{t:this.instance_24}]},63).to({state:[{t:this.instance_24}]},67).to({state:[{t:this.instance_24}]},9).to({state:[{t:this.instance_24}]},11).to({state:[]},60).to({state:[{t:this.instance_23}]},69).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(98).to({_off:false},0).wait(67).to({scaleX:0.91,scaleY:0.91,x:-22.3,y:-22},9,cjs.Ease.get(-1)).to({scaleX:0.8,scaleY:0.8,x:-0.6,y:0},11,cjs.Ease.get(1)).to({_off:true},60).wait(81));

	// bg
	this.instance_25 = new lib.bg();
	this.instance_25.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(326));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


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
p.nominalBounds = new cjs.Rectangle(149,299,302,602);
// library properties:
lib.properties = {
	id: '94D0701AC8114E8EB753F5406FCDED3E',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bgImg1.jpg", id:"bgImg1"},
		{src:"images/bgImg2.jpg", id:"bgImg2"},
		{src:"images/bgImg3.jpg", id:"bgImg3"},
		{src:"images/bgImg4.jpg", id:"bgImg4"},
		{src:"images/bgImg5.jpg", id:"bgImg5"},
		{src:"images/car.png", id:"car"},
		{src:"images/car2.png", id:"car2"},
		{src:"images/logoZnak.jpg", id:"logoZnak"},
		{src:"images/road1.png", id:"road1"},
		{src:"images/road2.png", id:"road2"},
		{src:"images/road3.png", id:"road3"},
		{src:"images/wheel.png", id:"wheel"}
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
an.compositions['94D0701AC8114E8EB753F5406FCDED3E'] = {
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