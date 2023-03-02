(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.cap_1 = function() {
	this.initialize(img.cap_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,186);


(lib.cap_2 = function() {
	this.initialize(img.cap_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,186);


(lib.cap_3 = function() {
	this.initialize(img.cap_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,186);


(lib.holder = function() {
	this.initialize(img.holder);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,216,264);


(lib.holder_cap2 = function() {
	this.initialize(img.holder_cap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,194);


(lib.holder_cap3 = function() {
	this.initialize(img.holder_cap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,194);// helper functions:

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


(lib.urText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AruBeIAAhHIAGAAIAAAMQAJgNAMABQALgBAHAIQAJAHgBANQABAMgJAIQgHAIgLAAQgNAAgIgMIAAAcgAriAhQgHAHABAKQgBALAHAGQAGAGAJAAQAJAAAGgGQAGgHAAgKQAAgKgGgHQgHgGgIAAQgJAAgGAGgAyHBeIAAhHIAEAAIAAAMQAKgNANABQAKgBAIAIQAHAHAAANQAAAMgHAIQgIAIgKAAQgOAAgJgMIAAAcgAx8AhQgGAHgBAKQABALAGAGQAGAGAJAAQAJAAAGgGQAGgHAAgKQAAgKgHgHQgFgGgJAAQgJAAgGAGgAE7BcIAAgPIgxAAIgBAPIgDAAIAAgUIAGAAQAIgMAAgZIAAgMIAkAAIAAAxIAIAAIAAAUgAEZAmQAAAWgHAMIAhAAIAAgsIgaAAgAzcBcIAAgPIgwAAIgBAPIgFAAIAAgUIAHAAQAIgMAAgZIAAgMIAkAAIAAAxIAJAAIgBAUgAz+AmQAAAWgHAMIAgAAIAAgsIgZAAgAT6BGQgHgIAAgNQAAgRADgIQAEgLAMgDIAfgHIABAEIgdAIQgIACgFAFQgDAFgBAJQAIgNAPAAQALAAAHAIQAIAJAAAKQAAAMgIAIQgHAIgMAAQgMAAgIgIgAT/AjQgHAGABAJQAAAKAGAHQAGAGAJAAQAJAAAGgGQAGgHABgKQgBgJgGgHQgGgGgJAAQgJAAgGAHgASfBGQgHgJAAgLQAAgMAIgHQAIgJALABQAMgBAJAKIgEAEQgHgJgKAAQgJAAgGAHQgGAGAAAKQAAAKAGAHQAGAGAJAAQAKAAAIgJIAEAEQgJAKgNAAQgLAAgJgIgARZBGQgHgJAAgLQAAgLAIgIQAIgIALAAQAMgBAIAJQAIAHgBAMQABALgIAIQgIAJgMAAQgLAAgJgIgAReAiQgGAGAAAKQAAAKAGAHQAGAGAJAAQAKAAAFgGQAHgIAAgJQAAgKgHgGQgGgHgJAAQgJAAgGAHgALdBGQgHgJAAgLQAAgLAIgIQAIgIALAAQAMgBAIAJQAHAHAAAMQAAALgHAIQgIAJgMAAQgLAAgJgIgALiAiQgGAGAAAKQAAAKAGAHQAGAGAJAAQAJAAAHgGQAGgIAAgJQAAgKgGgGQgHgHgJAAQgJAAgGAHgAIgBGQgIgJAAgLQAAgLAIgIQAIgIALAAQAMgBAIAJQAHAHAAAMQAAALgHAIQgIAJgMAAQgMAAgHgIgAIkAiQgHAGABAKQgBAKAHAHQAGAGAJAAQAJAAAHgGQAGgIAAgJQAAgKgGgGQgHgHgJAAQgJAAgGAHgAl3BGQgIgIAAgMQAAgMAIgHQAGgJALABQALgBAHAJQAHAHgBAMIAAACIgsAAQABAJAGAHQAGAFAIAAQAKAAAJgIIADADQgJAKgNAAQgLAAgHgIgAlTAwQgBgJgEgGQgGgGgIAAQgIAAgGAGQgEAGgCAJIAnAAIAAAAgAnyBKQgGgFAAgIQAAgRAXAAQAMAAAGACIAAgCQAAgQgSAAQgHgBgJAFIgCgEQAJgFAKAAQALAAAGAGQAFAFAAAJIAAAiIgFAAIAAgJQgHAKgNAAQgJAAgGgEgAnyA9QAAAMAPAAQAIAAAGgFQAGgEAAgHIAAgGQgHgDgLABQgRAAAAAMgApnBGIADgEQAJAHAKAAQAGAAAEgDQAEgDAAgFQAAgKgOAAIgHAAIAAgFIAHAAQANAAAAgKQAAgKgMABQgLgBgGAGIgEgEQAJgGAMAAQAIgBAEAEQAFAFABAGQAAAIgJAEQAKAEAAAJQAAAGgGAFQgFAFgIAAQgMAAgLgIgAw9BGQgIgJAAgLQAAgLAIgIQAIgIALAAQAMgBAIAJQAHAHAAAMQAAALgHAIQgIAJgMAAQgLAAgIgIgAw5AiQgHAGABAKQgBAKAHAHQAGAGAJAAQAJAAAHgGQAGgIAAgJQAAgKgGgGQgHgHgJAAQgJAAgGAHgAzKBGQgHgJAAgLQAAgLAIgIQAIgIALAAQAMgBAIAJQAIAHgBAMQABALgIAIQgIAJgMAAQgLAAgJgIgAzFAiQgGAGgBAKQABAKAGAHQAGAGAJAAQAKAAAFgGQAHgIAAgJQAAgKgHgGQgGgHgJAAQgJAAgGAHgA1BBGIADgEQAJAHAKAAQAGAAAEgDQAEgDAAgFQAAgKgOAAIgHAAIAAgFIAHAAQANAAAAgKQAAgKgNABQgJgBgHAGIgEgEQAJgGALAAQAJgBAFAEQAEAFAAAGQABAIgJAEQAKAEAAAJQAAAGgGAFQgFAFgJAAQgLAAgLgIgAMMBNIABgFIAFABQAFAAADgHQADgKAAgeIAAgDIAlAAIAAA2IgFAAIAAgxIgaAAIAAACQAAAegFAKQgEAHgIAAgAFABNIABgFIAFABQAFAAADgHQADgKABgeIAAgDIAkAAIAAA2IgGAAIAAgxIgZAAIAAACQAAAegFAKQgEAHgIAAgAgTBNIABgFIAFABQAFAAADgHQAEgKgBgeIAAgDIAkAAIAAA2IgFAAIAAgxIgaAAIAAACQgBAegDAKQgDAHgJAAgAU6BNIAAgJIAIAAIAAAJgATYBNIAAg2IAGAAIAAA2gAQiBNIgTgYIgSAYIgHAAIAXgcIgWgaIAHAAIARAXIATgXIAGAAIgVAaIAWAcgAPfBNIAAg2IAEAAIAAA2gAPKBNIAAgZIgkAAIAAAZIgEAAIAAg2IAEAAIAAAYIAkAAIAAgYIAFAAIAAA2gAN9BNIAAgxIgUAAIAAgFIAtAAIAAAFIgUAAIAAAxgANSBNIAAg2IAGAAIAAA2gALGBNIAAgZIgkAAIAAAZIgEAAIAAg2IAEAAIAAAYIAkAAIAAgYIAFAAIAAA2gAJhBNIAAg2IAZAAQARAAAAAOQAAAIgJAEQAMADAAAKQAAAOgTABgAJnBIIAUAAQAOAAAAgLQAAgJgQgBIgSAAgAJnAwIASAAQANAAAAgLQAAgJgMAAIgTAAgAIGBNIAAgxIgiAAIAAAxIgEAAIAAg2IAsAAIAAA2gAGpBNIAAgUIgRAAIgRAUIgGAAIARgVQgPgDAAgNQAAgQAUgBIAXAAIAAA2gAGIAoQAAAMAPgBIASAAIAAgXIgSAAQgPAAAAAMgADTBNIAAguIgkAuIgGAAIAAg2IAGAAIAAAvIAkgvIAFAAIAAA2gACUBNIgUgaIgOANIAAANIgEAAIAAg2IAEAAIAAAjIAigjIAHAAIgYAYIAYAegAAxBNIAAg2IAGAAIAAAVIAPAAQAVAAAAAPQAAAJgFAEQgGAEgJABgAA3BIIAPAAQAPAAABgMQgBgLgPAAIgPAAgAgnBNIAAg2IAGAAIAAA2gAhMBNIAAgxIgUAAIAAgFIAtAAIAAAFIgUAAIAAAxgAiUBNIAAguIgkAuIgGAAIAAg2IAGAAIAAAvIAkgvIAFAAIAAA2gAjaBNIAAguIglAuIgEAAIAAg2IAEAAIAAAvIAlgvIAFAAIAAA2gAkXBNIAAgZIgkAAIAAAZIgEAAIAAg2IAEAAIAAAYIAkAAIAAgYIAFAAIAAA2gAmWBNIAAgYQgIAGgLAAQgRAAAAgQIAAgUIAFAAIAAAUQAAALAMAAQAMAAAHgFIAAgaIAGAAIAAA2gAoHBNIAAgZIgjAAIAAAZIgGAAIAAg2IAGAAIAAAYIAjAAIAAgYIAFAAIAAA2gAp+BNIAAguIglAuIgEAAIAAg2IAEAAIAAAvIAlgvIAFAAIAAA2gAsJBNIAAhEIguAAIAABEIgFAAIAAhJIA4AAIAABJgAtwBNIAAgJIAGAAIAAAJgAuIBNIAAgUIgSAAIgQAUIgFAAIAQgVQgPgDAAgNQAAgQAUgBIAXAAIAAA2gAupAoQAAAMAPgBIASAAIAAgXIgSAAQgPAAAAAMgAv8BNIAAg2IAZAAQARAAAAAOQAAAIgJAEQAMADAAAKQAAAOgTABgAv2BIIAUAAQAOAAAAgLQAAgJgQgBIgSAAgAv2AwIASAAQANAAAAgLQAAgJgMAAIgTAAgAvDAVQAGgDAAgEIAAgBIgDAAIAAgJIAHAAIAAAIQAAAIgJAEgAi1ADIAFgBQABAIAJAAQAIAAABgIIAFABQgDAMgLAAQgLAAgEgMgATXAKIAAgHIAHAAIAAAHgAPdAKIAAgHIAHAAIAAAHgANSAKIAAgHIAGAAIAAAHgAgoAKIAAgHIAHAAIAAAHgAIIgEIADgEQADACAGAAQAIAAAFgNIgag0IAGAAIAWAwIATgwIAGAAIgXA3QgHAPgLAAQgEAAgHgDgALBgCIAAhFIAEAAIAAAMQAKgOANAAQAKAAAIAIQAHAIABAMQgBAMgHAJQgIAHgKAAQgOAAgJgNIAAAcgALMg9QgHAHAAAJQAAAKAHAHQAHAGAIAAQAJABAGgHQAGgGAAgLQAAgJgHgHQgFgGgJAAQgIAAgHAGgAvsgCIAAhFIAEAAIAAAMQAKgOANAAQAKAAAIAIQAHAIABAMQgBAMgHAJQgIAHgKAAQgOAAgJgNIAAAcgAvhg9QgHAHAAAJQAAAKAHAHQAHAGAIAAQAJABAGgHQAGgGAAgLQAAgJgHgHQgFgGgJAAQgIAAgHAGgASSgDIAAgPIgxAAIgBAPIgDAAIAAgTIAGAAQAIgOAAgYIAAgLIAkAAIAAAxIAIAAIgBATgARwg5QAAAVgHAOIAhAAIAAgtIgaAAgAmNgZQgJAIgOAAQgQAAgKgLQgKgLAAgQQAAgPAKgLQAKgMARAAQAPAAALAMQAKALAAAPQAAAPgJALIAKAJIgEAEgAm6hOQgJAJAAAOQAAAOAJAKQAJAJAOAAQAKABAJgIIgPgLIAFgFIANANQAJgKgBgNQABgNgKgJQgIgKgOAAQgOAAgIAJgANIgZIACgEQAKAHAJAAQAGAAAEgDQAEgDABgFQAAgKgPAAIgIAAIAAgFIAIAAQANAAAAgKQAAgEgEgDQgDgDgGABQgKAAgHAFIgCgEQAIgGALAAQAJAAAFAEQAEAEAAAGQAAAJgIADQAKAEAAAKQAAAGgFAEQgGAFgJAAQgLAAgKgIgAJNgZQgIgIAAgMQAAgLAIgJQAIgHALgBQANABAIAJIgEAEQgIgIgJAAQgJAAgGAGQgHAHABAJQgBAKAHAGQAGAIAJgBQAKABAIgKIADADQgHALgOAAQgMAAgHgIgAG2gZQgHgIAAgMQAAgLAHgIQAJgJALAAQALABAKAJIgEAEQgHgIgKAAQgIAAgGAFQgHAGgBAIIAcAAIAAAFIgcAAQABAJAHAGQAGAHAIgBQAKABAIgKIAEADQgJALgNAAQgLAAgJgIgAF4gVQgGgFAAgHQAAgSAXAAQAKAAAIACIAAgCQAAgQgSAAQgHAAgJAEIgCgEQALgFAIAAQAMAAAEAGQAGAGAAAJIAAAhIgFAAIAAgJQgHAKgNAAQgJAAgGgEgAF4giQAAAMAPAAQAJAAAFgEQAGgFAAgHIAAgGQgLgCgHgBQgRAAAAANgAD6gYQgGgIgBgKIgOAAIAAAYIgFAAIAAg1IAFAAIAAAYIAOAAQABgLAGgHQAIgIAKAAQAMABAHAHQAIAJgBALQABAMgIAIQgHAIgMAAQgKAAgIgHgAD+g9QgFAHgBAJQABAKAFAGQAGAIAIgBQAKABAGgIQAFgFAAgLQAAgJgFgHQgGgGgKAAQgIAAgGAGgAhugYQgIgJAAgMQAAgLAHgJQAIgHAKgBQALABAHAHQAGAJABALIAAADIgsAAQAAAJAHAGQAFAFAIAAQAKAAAIgIIAEADQgJAKgNAAQgLAAgHgHgAhKgvQgBgJgEgFQgGgHgIAAQgIAAgFAGQgGAGAAAJIAmAAIAAAAgAkWgdIAEgEQALALAPAAQAIAAAFgEQAFgEAAgHQAAgGgEgDQgFgEgLgCQgZgFAAgQQAAgIAHgFQAHgGAJAAQAOAAALAJIgDAEQgJgIgNAAQgIAAgFAEQgEAEgBAGQABAGAEADQAEAEANACQAYAFgBAQQABAJgHAGQgHAFgKAAQgQAAgOgMgAlkgcQgKgLAAgQQAAgPAKgLQAKgMARAAQAPAAALAMQAKALAAAPQAAAQgKALQgLALgQAAQgQAAgKgLgAlghOQgJAJAAAOQAAAOAJAKQAJAJAOAAQANAAAJgJQAIgKAAgOQABgNgKgJQgIgKgOAAQgOAAgIAJgArwgVQgHgFAAgHQAAgSAYAAQAIAAAJACIAAgCQAAgQgRAAQgIAAgJAEIgCgEQALgFAIAAQALAAAGAGQAFAGAAAJIAAAhIgFAAIAAgJQgHAKgNAAQgJAAgFgEgArxgiQAAAMAPAAQAJAAAFgEQAGgFAAgHIAAgGQgLgCgHgBQgRAAAAANgAtcgZQgIgIAAgMQAAgLAIgJQAIgHALgBQANABAIAJIgDAEQgJgIgJAAQgJAAgGAGQgHAHABAJQgBAKAHAGQAGAIAJgBQAKABAIgKIADADQgHALgOAAQgLAAgIgIgAwvgZQgHgIAAgMQAAgLAIgIQAIgJAMAAQALABAIAHQAIAJAAALQAAALgIAJQgIAIgMAAQgMAAgIgIgAwqg9QgGAHgBAJQABAKAGAGQAGAIAKgBQAIABAGgIQAHgGAAgKQAAgJgHgHQgGgGgJAAQgJAAgGAGgASXgSIABgFIAFABQAGAAACgHQADgKABgdIAAgDIAkAAIAAA1IgGAAIAAgxIgZAAIAAACQAAAegFALQgEAGgIAAgACcgSIABgFIADABQAHAAACgHQAEgKAAgdIAAgDIAkAAIAAA1IgGAAIAAgxIgaAAIAAACQABAegFALQgDAGgJAAgAUAgSIAAgVIgRAAIgQAVIgHAAIARgWQgPgCAAgOQAAgPAUAAIAXAAIAAA1gATfg3QAAAMAPAAIASAAIAAgYIgSAAQgPAAAAAMgAQqgSIAAgvIgkAvIgGAAIAAg1IAGAAIAAAuIAkguIAFAAIAAA1gAPrgSIgUgaIgOANIAAANIgEAAIAAg1IAEAAIAAAiIAigiIAHAAIgYAXIAYAegAOogSIAAgvIglAvIgEAAIAAg1IAEAAIAAAuIAlguIAFAAIAAA1gAMwgSIAAgvIglAvIgEAAIAAg1IAEAAIAAAuIAlguIAFAAIAAA1gAKFgSIAAg1IAGAAIAAA1gAFcgSIAAgXQgIAFgLAAQgRAAAAgPIAAgUIAFAAIAAAUQAAALAMAAQALAAAIgHIAAgYIAGAAIAAA1gACPgSIgVgaIgMANIAAANIgGAAIAAg1IAGAAIAAAiIAggiIAHAAIgXAXIAYAegABMgSIAAgvIgkAvIgGAAIAAg1IAGAAIAAAuIAkguIAFAAIAAA1gAgYgSIAAg1IAYAAQAGAAAGAEQAEADAAAGQAAAJgJADQAMADAAALQAAAOgTAAgAgUgWIAUAAQAOgBAAgKQAAgKgPAAIgTAAgAgUgwIATAAQAMABAAgLQAAgJgMAAIgTAAgAiGgSIAAgZIgjAAIAAAZIgGAAIAAg1IAGAAIAAAXIAjAAIAAgXIAFAAIAAA1gAnigSIAAhJIAFAAIAABJgAobgSIAAgVIgRAAIgQAVIgHAAIARgWQgPgCAAgOQAAgPATAAIAYAAIAAA1gAo7g3QAAAMAOAAIASAAIAAgYIgSAAQgOAAAAAMgApSgSIAAgZIgkAAIAAAZIgEAAIAAg1IAEAAIAAAXIAkAAIAAgXIAFAAIAAA1gAqOgSIAAgZIgjAAIAAAZIgGAAIAAg1IAGAAIAAAXIAjAAIAAgXIAFAAIAAA1gAsXgSIAAgxIgUAAIAAgEIAtAAIAAAEIgUAAIAAAxgAt9gSIAAgvIglAvIgEAAIAAg1IAEAAIAAAuIAlguIAFAAIAAA1gAxHgSIgWgaIgMANIAAANIgGAAIAAg1IAGAAIAAAiIAhgiIAGAAIgXAXIAYAegAyLgSIAAgvIglAvIgEAAIAAg1IAEAAIAAAuIAlguIAFAAIAAA1gA0DgSIAAhJIAeAAQAKAAAHAFQAGAFABAIQAAANgNAEQAQAEAAAOQABAJgIAGQgHAFgMAAgAz+gXIAaAAQAKAAAFgEQAGgEAAgHQAAgOgWAAIgZAAgAz+g6IAYAAQATAAAAgPQAAgNgSAAIgZAAgAKEhVIAAgHIAHAAIAAAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("A1zigMArnAAAIAAFBMgrnAAAg");
	this.shape_1.setTransform(0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.urText, new cjs.Rectangle(-140.5,-16.8,281.2,34.1), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzFiIAAg2IjJAAIgEA2IgOAAIAAhGIAYAAQATgZAJgsQAKgsAAg3IAAgxICPAAIAADZIAgAAIgEBGgAp/CBQAAAvgJAqQgKArgPAXICOAAIAAjJIhsAAgADmEpIAGgOQAIAEAOAAQAzAAABivIAAgtICPAAIAADpIgSAAIAAjZIhtAAIAAAdQAABzgVAsQgPAgggAAQgNAAgPgGgAP/EsIAAgcIAWAAIAAAcgAO2EsIhThrIhSBrIgVAAIBdh3IhZhyIAUAAIBQBnIBPhnIAVAAIhaByIBdB3gAKwEsIAAhdIhQAAIhHBdIgWAAIBKhgQgegEgRgRQgTgTABgdQAAgdAWgTQAXgUAmAAIBiAAIAADpgAIvBiQgSAOAAAYQAAAZAUAQQASAOAeAAIBPAAIAAhsIhQAAQggAAgRAPgADAEsIgehBIiKAAIgcBBIgSAAIBsjrIAQAAIBtDrgACbDbIg9iHIg+CHIB7AAgAiIEsIAAjZIhRAAIAAgQIC0AAIAAAQIhSAAIAADZgAmtEsIAAjpICmAAIAAAQIiUAAIAABcICFAAIAAAQIiFAAIAABdICWAAIAAAQgAwUEsIAAjpIBgAAQAjAAAUAQQAVAQAAAaQAAAogoAPQA1AOAAArQAAAdgXARQgXARglAAgAwDEcIBVAAQAeAAASgMQARgNAAgXQAAgWgSgLQgSgMgjAAIhPAAgAwDCvIBOAAQAaAAARgNQARgNAAgXQAAgUgPgLQgQgMgcAAIhPAAgAkyiSQghgjAAgzQAAgyAhgjQAhgkAzAAQAcAAAXALQARAJAVATIgLALQgkgigrAAQgqAAgcAeQgcAfAAAsQAAAtAdAeQAcAeAqAAQAXAAAVgJQARgJATgSIAMALQgVAUgUAKQgXALgdAAQgyAAghgjgABxhzIgdhCIiJAAIgeBCIgSAAIBsjrIARAAIBsDrgABNjEIg+iHIg9CHIB7AAgAmIhzIgehCIiKAAIgdBCIgSAAIBsjrIARAAIBtDrgAmtjEIg9iHIg+CHIB7AAgAschzIAAjqIBVAAQAnAAAYATQAYAUAAAhQAAAjgcAVQgZATgmAAIg/AAIAABXgAsKjaIBAAAQAgAAAVgQQATgQAAgaQABgbgUgPQgTgPggAAIhCAAgAtphzIhfh2Ig7A6IAAA8IgRAAIAAjqIARAAIAACaICViaIAYAAIhmBnIBqCDgAEcjOIAAgRID8AAIAAARg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-104.5,-35.4,209,70.8), null);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah2B2IgmglIh8AAQgeAAgTgFQgZgGgOgOQgUgTAAglIAAhrQAAgHAEgEQAFgEAIAAICJAAQAeAAATAEQAZAGAPAOQAUAUAAAlIAABpIAfAfQAEAEAAAHQAAAGgFAFQgGAGgGAAIgBAAQgGAAgEgFgAliAAQAAAaANANIADABQANALAbAAICKAAIAAhdQAAgagNgMIgCgCQgNgKgcgBIiKAAgAE2BQIAAABQgngCgRgLQgOgIgCgRIAAgDQAAgHAEgDQAEgEAIAAQAGAAAEADQAFADABAFIACADQADAGAKADQAHACAQABIBKAAQAqAAALgGQAKgGAAgTIAAgBQAAgPgGgFQgJgHgcAAIhjAAQgjAAgOgNQgPgMAAgcIAAgMQAAgZATgMQAVgNA4AAIA2AAQAsAAATALQAPAJADARIAAADQAAAHgEAEQgFADgHAAQgHAAgEgDQgEgCgCgFIgBgDQgFgIgNgDQgJgCgYAAIg4AAQgiAAgLAFQgKAFAAAQIAAAIQAAANAGAFQAJAGAXAAIBVAAQAqAAARAJQAXANAAAkIAAABQAAAlgfANQgSAIgpAAgAnaBMQgEgEAAgIIAAipQAAgIAEgFQAFgEAIAAQAHAAAFAEQAEAFAAAIIAACpQAAAIgEAEQgFAFgHAAQgIAAgFgFgAAhBQQgxAAgYgOQgigSAAgwIAAgqQAAgwAigTQAYgNAxAAIAvAAQAxAAAZANQAiATAAAwIAAAqQAAAwgiASQgZAOgxAAgAgWhUQgSANAAAfIAAAnQAAAeASANQAOAKAfAAIBCAAQAgAAAPgKQASgNAAgeIAAgnQAAgfgSgNQgPgKggAAIhCAAQgfAAgOAKg");
	this.shape.setTransform(-0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-48.1,-12.3,95.9,24.6), null);


(lib.holder_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.holder();
	this.instance.parent = this;
	this.instance.setTransform(-108,-132);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.holder_mc, new cjs.Rectangle(-108,-132,216,264), null);


(lib.holder_cap3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.holder_cap3();
	this.instance.parent = this;
	this.instance.setTransform(-99,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.holder_cap3_1, new cjs.Rectangle(-99,-97,198,194), null);


(lib.holder_cap2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.holder_cap2();
	this.instance.parent = this;
	this.instance.setTransform(-99,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.holder_cap2_1, new cjs.Rectangle(-99,-97,198,194), null);


(lib.cap3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.cap_3();
	this.instance.parent = this;
	this.instance.setTransform(-72,-92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cap3, new cjs.Rectangle(-72,-92,144,186), null);


(lib.cap2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.cap_2();
	this.instance.parent = this;
	this.instance.setTransform(-72,-93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cap2, new cjs.Rectangle(-72,-93,144,186), null);


(lib.cap1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.cap_1();
	this.instance.parent = this;
	this.instance.setTransform(-72,-93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cap1, new cjs.Rectangle(-72,-93,144,186), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmjA1QgVgWAAgfQAAgeAVgWQAWgXAgAAQAgAAAVAXQAVAVAAAfQAAAggVAVQgVAXghgBQggABgVgXgAmXgqQgQASAAAYQAAAZARARQAQASAZAAQAZAAAQgSQAQgRAAgZQAAgYgRgSQgQgSgZAAQgYAAgRASgAGpBJIAAh5IhXB5IgQAAIAAiRIAQAAIAAB4IBXh4IAQAAIAACRgADhBJIAAiCIgxAAIAAgPIBzAAIAAAPIgxAAIAACCgACVBJIgRgnIhPAAIgRAnIgRAAIBCiSIAQAAIBCCSgAB+AUIghhKIgiBKIBDAAgAhdBJIAAiRIA3AAQAZAAANAMQAPANAAAWQAAAWgPAMQgRAMgYAAIgkAAIAAA0gAhNAGIAkAAQATAAALgIQAKgIAAgPQAAgPgKgJQgLgIgSAAIglAAgAj4BJIAAiRIBoAAIAAAPIhYAAIAAAsIArAAQAZABAPAKQAQAKAAAVQAAAVgPAMQgOALgZAAgAjoA6IAsAAQAmAAAAgdQAAgOgKgHQgKgGgTAAIgrAAg");
	this.shape.setTransform(-2.9,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.2)").s().p("ApwDmIAAnLIThAAIAAHLg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-62.5,-23,125,46), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C3AC8A","#F6E3B8"],[0,1],0,299,0,-298.9).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.holder_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_3
	this.instance = new lib.holder_cap3_1();
	this.instance.parent = this;
	this.instance.setTransform(-9,-34);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(75).to({_off:false},0).to({alpha:1},10).wait(25).to({alpha:0},10).wait(1));

	// Слой_2
	this.instance_1 = new lib.holder_cap2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9,-34);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(35).to({_off:false},0).to({alpha:1},10).wait(40).to({alpha:0},4).wait(32));

	// Слой_1
	this.instance_2 = new lib.holder_mc();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-132,216,264);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// holder
	this.instance = new lib.holder_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(42,-144);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-124,startPosition:20},20,cjs.Ease.quadInOut).to({y:-144,startPosition:40},20,cjs.Ease.quadInOut).to({y:-124,startPosition:60},20,cjs.Ease.quadInOut).to({y:-144,startPosition:80},20,cjs.Ease.quadInOut).to({y:-124,startPosition:100},20,cjs.Ease.quadInOut).to({y:-144,startPosition:120},20,cjs.Ease.quadInOut).wait(1));

	// btn
	this.instance_1 = new lib.btn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-59.9,192.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({regX:-0.1,regY:0.1,scaleX:0.96,scaleY:0.96,x:-60,y:192.8},2).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-59.9,y:192.7},2).wait(2).to({regX:-0.1,regY:0.1,scaleX:0.96,scaleY:0.96,x:-60,y:192.8},2).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-59.9,y:192.7},2).wait(30).to({regX:-0.1,regY:0.1,scaleX:0.96,scaleY:0.96,x:-60,y:192.8},2).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-59.9,y:192.7},2).wait(2).to({regX:-0.1,regY:0.1,scaleX:0.96,scaleY:0.96,x:-60,y:192.8},2).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-59.9,y:192.7},2).wait(30).to({regX:-0.1,regY:0.1,scaleX:0.96,scaleY:0.96,x:-60,y:192.8},2).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-59.9,y:192.7},2).wait(2).to({regX:-0.1,regY:0.1,scaleX:0.96,scaleY:0.96,x:-60,y:192.8},2).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-59.9,y:192.7},2).wait(16));

	// cap
	this.instance_2 = new lib.cap3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-152,-199.5,0.682,0.682,0,0,0,-0.4,-0.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(35).to({_off:false},0).to({alpha:1},10).wait(30).to({alpha:0},10).to({_off:true},1).wait(35));

	// cap
	this.instance_3 = new lib.cap1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-152,-199.5,0.682,0.682,0,0,0,-0.4,-0.4);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75).to({_off:false},0).wait(35).to({alpha:0},10).wait(1));

	// cap
	this.instance_4 = new lib.cap2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-152,-199.5,0.682,0.682,0,0,0,-0.4,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},45).wait(65).to({_off:false},0).wait(11));

	// cap
	this.instance_5 = new lib.cap3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-57,-42);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(75).to({_off:false},0).to({alpha:1},10).wait(25).to({alpha:0},10).wait(1));

	// cap
	this.instance_6 = new lib.cap2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-57,-42);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35).to({_off:false},0).to({alpha:1},10).to({_off:true},40).wait(36));

	// cap
	this.instance_7 = new lib.cap1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-57,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},45).wait(65).to({_off:false},0).wait(11));

	// logo
	this.instance_8 = new lib.logo();
	this.instance_8.parent = this;
	this.instance_8.setTransform(72.3,195.4,1,1,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(121));

	// urText
	this.instance_9 = new lib.urText();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,268.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(121));

	// t1
	this.instance_10 = new lib.t1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-16.3,106.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(121));

	// bg
	this.instance_11 = new lib.bg();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,300,1,1,0,0,0,0,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(121));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.8,-300,350.9,600);


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
p.nominalBounds = new cjs.Rectangle(99.2,299,351.9,602);
// library properties:
lib.properties = {
	id: 'E5F08688052A497EA765790B818200C2',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/cap_1.png", id:"cap_1"},
		{src:"images/cap_2.png", id:"cap_2"},
		{src:"images/cap_3.png", id:"cap_3"},
		{src:"images/holder.png", id:"holder"},
		{src:"images/holder_cap2.png", id:"holder_cap2"},
		{src:"images/holder_cap3.png", id:"holder_cap3"}
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
an.compositions['E5F08688052A497EA765790B818200C2'] = {
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