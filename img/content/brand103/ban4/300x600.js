(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.art = function() {
	this.initialize(img.art);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,58);


(lib.bgImg = function() {
	this.initialize(img.bgImg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.box1 = function() {
	this.initialize(img.box1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,180);


(lib.box2 = function() {
	this.initialize(img.box2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,180);


(lib.box3 = function() {
	this.initialize(img.box3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,180);


(lib.boxes = function() {
	this.initialize(img.boxes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,314);


(lib.chip1 = function() {
	this.initialize(img.chip1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,84);


(lib.chip2 = function() {
	this.initialize(img.chip2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,60);


(lib.chip3 = function() {
	this.initialize(img.chip3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,100,48);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,114);


(lib.img2 = function() {
	this.initialize(img.img2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,300);


(lib.img3 = function() {
	this.initialize(img.img3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,74);


(lib.img4 = function() {
	this.initialize(img.img4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,34);


(lib.img5 = function() {
	this.initialize(img.img5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,52);


(lib.img6 = function() {
	this.initialize(img.img6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,420);


(lib.img7 = function() {
	this.initialize(img.img7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,64);


(lib.img8 = function() {
	this.initialize(img.img8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,58);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,124);


(lib.sh1 = function() {
	this.initialize(img.sh1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,54);// helper functions:

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


(lib.t2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAzfAPLIBCiQQBsBGB3AAQB0AAAAg6QAAghjGg1QjGgyAAiUQAAhjBOg+QBThCCUAAQCVAABnA+Ig+CQQhfg1hjAAQhvAAAAA9QAAAmDGAxQDGA2AACQQAABfhPA+QhSBCiVAAQixAAh0hPgEg7NAO3QhshnAAidQAAihBshjQBrhnClAAQC9AABsCEIh8BvQhGhOhfAAQhSAAg2A2Qg2A1AABbQAABXA2A5QA2A2BSAAQBfAABGhTIB8BwQhjCEjGAAQilAAhrhjgEAi/AQJIAAj3IkHm6IDOAAIClERIClkRIC9AAIkIG6IAAD3gAc4QJIg2iEIklAAIg1CEIjGAAIExqxIC+AAIE1KxgAYXL1ICxAAIhWjfgALOQJIAAqxIDGAAIAAIZIFJAAIAACYgAksQJIAAqxIFRAAQEEAAAACyQAABrhbAtQB8AqAAB7QAADCkUAAgAhqN9ICXAAQBXAAAAhGQAAhGhXAAIiXAAgAhqJtIB6AAQBTAAAAhGQAAhChTAAIh6AAgAqDQJIAAqxIDCAAIAAKxgAubQJIihkIIhWAAIAAEIIjCAAIAAqxIDCAAIAAENIBeAAIClkNIDPAAIjbFPIDbFigA5tQJIg1iEIklAAIg6CEIjGAAIExqxIDCAAIExKxgA+SL1IC2AAIhbjfgEgnLAQJIAAlrIixEpIhbAAIixklIAAFnIiyAAIAAqxIChAAID0GMIDrmMIChAAIAEKxgEAt9AGzIi6iYIC+AAICECYgEgrngDsQhwhnAAidQAAihBwhjQBrhnClAAQC+AABrCEIh8BvQhGhOhfAAQhSAAg6A2Qg2A5AABXQAABXA2A5QA6A2BSAAQBfAABGhTIB8BwQhjCEjGAAQilAAhrhjgAy8iaIAJicIAcAAQA2AAAZhHQAQg5AEiAIANkVIItAAIAAKxIjCAAIAAoYIjGAAIgEB0QgJDegpBfQgxB0h8AAgEApcgCaIAAmUIkdGUIi5AAIAAqxIDCAAIAAGVIEcmVIC6AAIAAKxgAYPiaIAAmUIkdGUIi5AAIAAqxIDBAAIAAGVIEdmVIC6AAIAAKxgAMciaIidkIIhWAAIAAEIIjGAAIAAqxIDGAAIAAENIBeAAIClkNIDLAAIjXFPIDbFigAlmiaIAAqxIDCAAIAADbIChAAQEHAAAADjQAADzkgAAgAikkmIB4AAQBuAAAAhjQAAhbhuAAIh4AAgA3UiaIAAqxIDCAAIAAKxgA/DiaIAAoYIjSAAIAAiZIJmAAIAACZIjSAAIAAIYgEAkGgQZICEAAQAABGBGAAQBKAAAAhGICEAAQAACljOAAQjKAAAAilg");
	this.shape.setTransform(0,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.4)").s().p("EAzfAPLIBCiQQBsBGB3AAQB0AAAAg6QAAghjGg1QjGgyAAiUQAAhjBOg+QBThCCUAAQCVAABnA+Ig+CQQhfg1hjAAQhvAAAAA9QAAAmDGAxQDGA2AACQQAABfhPA+QhSBCiVAAQixAAh0hPgEg7NAO3QhshnAAidQAAihBshjQBrhnClAAQC9AABsCEIh8BvQhGhOhfAAQhSAAg2A2Qg2A1AABbQAABXA2A5QA2A2BSAAQBfAABGhTIB8BwQhjCEjGAAQilAAhrhjgEAi/AQJIAAj3IkHm6IDOAAIClERIClkRIC9AAIkIG6IAAD3gAc4QJIg2iEIklAAIg1CEIjGAAIExqxIC+AAIE1KxgAYXL1ICxAAIhWjfgALOQJIAAqxIDGAAIAAIZIFJAAIAACYgAksQJIAAqxIFRAAQEEAAAACyQAABrhbAtQB8AqAAB7QAADCkUAAgAhqN9ICXAAQBXAAAAhGQAAhGhXAAIiXAAgAhqJtIB6AAQBTAAAAhGQAAhChTAAIh6AAgAqDQJIAAqxIDCAAIAAKxgAubQJIihkIIhWAAIAAEIIjCAAIAAqxIDCAAIAAENIBeAAIClkNIDPAAIjbFPIDbFigA5tQJIg1iEIklAAIg6CEIjGAAIExqxIDCAAIExKxgA+SL1IC2AAIhbjfgEgnLAQJIAAlrIixEpIhbAAIixklIAAFnIiyAAIAAqxIChAAID0GMIDrmMIChAAIAEKxgEAt9AGzIi6iYIC+AAICECYgEgrngDsQhwhnAAidQAAihBwhjQBrhnClAAQC+AABrCEIh8BvQhGhOhfAAQhSAAg6A2Qg2A5AABXQAABXA2A5QA6A2BSAAQBfAABGhTIB8BwQhjCEjGAAQilAAhrhjgAy8iaIAJicIAcAAQA2AAAZhHQAQg5AEiAIANkVIItAAIAAKxIjCAAIAAoYIjGAAIgEB0QgJDegpBfQgxB0h8AAgEApcgCaIAAmUIkdGUIi5AAIAAqxIDCAAIAAGVIEcmVIC6AAIAAKxgAYPiaIAAmUIkdGUIi5AAIAAqxIDBAAIAAGVIEdmVIC6AAIAAKxgAMciaIidkIIhWAAIAAEIIjGAAIAAqxIDGAAIAAENIBeAAIClkNIDLAAIjXFPIDbFigAlmiaIAAqxIDCAAIAADbIChAAQEHAAAADjQAADzkgAAgAikkmIB4AAQBuAAAAhjQAAhbhuAAIh4AAgA3UiaIAAqxIDCAAIAAKxgA/DiaIAAoYIjSAAIAAiZIJmAAIAACZIjSAAIAAIYgEAkGgQZICEAAQAABGBGAAQBKAAAAhGICEAAQAACljOAAQjKAAAAilg");
	this.shape_1.setTransform(-2.8,-2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D31B21").ss(83,1,1).p("AJ/miIhWAAIAAEIIjGAAIAAqxIDGAAIAAENIBeAAIClkNIDLAAIjXFPIDbFiIjfAAgAQ5tLIDBAAIAAGVIEdmVIC6AAIAAKxIjCAAIAAmUIkdGUIi5AAgEAkGgQZICEAAQAABGBGAAQBKAAAAhGICEAAQAACljOAAQjKAAAAilgEAiGgNLIDCAAIAAGVIEcmVIC6AAIAAKxIjCAAIAAmUIkdGUIi5AAgEAzfAPLIBCiQQBsBGB3AAQB0AAAAg6QAAghjGg1QjGgyAAiUQAAhjBOg+QBThCCUAAQCVAABnA+Ig+CQQhfg1hjAAQhvAAAAA9QAAAmDGAxQDGA2AACQQAABfhPA+QhSBCiVAAQixAAh0hPgEArDAEbIC+AAICECYIiIAAgEAmFAMSIAAD3IjGAAIAAj3IkHm6IDOAAIClERIClkRIC9AAgAcCOFIklAAIg1CEIjGAAIExqxIC+AAIE1KxIjOAAgAbIL1IhWjfIhbDfgALOFYIDGAAIAAIZIFJAAIAACYIoPAAgAFKNHQAADCkUAAIliAAIAAqxIFRAAQEEAAAACyQAABrhbAtQB8AqAAB7gACEM3QAAhGhXAAIiXAAIAACMICXAAQBXAAAAhGgAhqJtIB6AAQBTAAAAhGQAAhChTAAIh6AAgEgtXgHwQAAihBwhjQBrhnClAAQC+AABrCEIh8BvQhGhOhfAAQhSAAg6A2Qg2A5AABXQAABXA2A5QA6A2BSAAQBfAABGhTIB8BwQhjCEjGAAQilAAhrhjQhwhnAAidgA4vqyIjSAAIAAIYIjCAAIAAoYIjSAAIAAiZIJmAAgAn6tLIAAKxIjCAAIAAoYIjGAAIgEB0QgJDegpBfQgxB0h8AAIhXgNIAJicIAcAAQA2AAAZhHQAQg5AEiAIANkVgA3UtLIDCAAIAAKxIjCAAgABCmJQAAhbhuAAIh4AAIAAC+IB4AAQBuAAAAhjgAEEmNQAADzkgAAIlKAAIAAqxIDCAAIAADbIChAAQEHAAAADjgAqDFYIDCAAIAAKxIjCAAgAw8MBIhWAAIAAEIIjCAAIAAqxIDCAAIAAENIBeAAIClkNIDPAAIjbFPIDbFiIjbAAgA6iOFIklAAIg6CEIjGAAIExqxIDCAAIExKxIjKAAgA7cL1IhbjfIhbDfgEgnLAQJIAAlrIixEpIhbAAIixklIAAFnIiyAAIAAqxIChAAID0GMIDrmMIChAAIAEKxgEg85AKzQAAihBshjQBrhnClAAQC9AABsCEIh8BvQhGhOhfAAQhSAAg2A2Qg2A1AABbQAABXA2A5QA2A2BSAAQBfAABGhTIB8BwQhjCEjGAAQilAAhrhjQhshnAAidg");
	this.shape_2.setTransform(0,-5.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("EAzfAPLIBCiQQBsBGB3AAQB0AAAAg6QAAghjGg1QjGgyAAiUQAAhjBOg+QBThCCUAAQCVAABnA+Ig+CQQhfg1hjAAQhvAAAAA9QAAAmDGAxQDGA2AACQQAABfhPA+QhSBCiVAAQixAAh0hPgEg7NAO3QhshnAAidQAAihBshjQBrhnClAAQC9AABsCEIh8BvQhGhOhfAAQhSAAg2A2Qg2A1AABbQAABXA2A5QA2A2BSAAQBfAABGhTIB8BwQhjCEjGAAQilAAhrhjgEAi/AQJIAAj3IkHm6IDOAAIClERIClkRIC9AAIkIG6IAAD3gAc4QJIg2iEIklAAIg1CEIjGAAIExqxIC+AAIE1KxgAYXL1ICxAAIhWjfgALOQJIAAqxIDGAAIAAIZIFJAAIAACYgAksQJIAAqxIFRAAQEEAAAACyQAABrhbAtQB8AqAAB7QAADCkUAAgAhqN9ICXAAQBXAAAAhGQAAhGhXAAIiXAAgAhqJtIB6AAQBTAAAAhGQAAhChTAAIh6AAgAqDQJIAAqxIDCAAIAAKxgAubQJIihkIIhWAAIAAEIIjCAAIAAqxIDCAAIAAENIBeAAIClkNIDPAAIjbFPIDbFigA5tQJIg1iEIklAAIg6CEIjGAAIExqxIDCAAIExKxgA+SL1IC2AAIhbjfgEgnLAQJIAAlrIixEpIhbAAIixklIAAFnIiyAAIAAqxIChAAID0GMIDrmMIChAAIAEKxgEAt9AGzIi6iYIC+AAICECYgEgrngDsQhwhnAAidQAAihBwhjQBrhnClAAQC+AABrCEIh8BvQhGhOhfAAQhSAAg6A2Qg2A5AABXQAABXA2A5QA6A2BSAAQBfAABGhTIB8BwQhjCEjGAAQilAAhrhjgAy8iaIAJicIAcAAQA2AAAZhHQAQg5AEiAIANkVIItAAIAAKxIjCAAIAAoYIjGAAIgEB0QgJDegpBfQgxB0h8AAgEApcgCaIAAmUIkdGUIi5AAIAAqxIDCAAIAAGVIEcmVIC6AAIAAKxgAYPiaIAAmUIkdGUIi5AAIAAqxIDBAAIAAGVIEdmVIC6AAIAAKxgAMciaIidkIIhWAAIAAEIIjGAAIAAqxIDGAAIAAENIBeAAIClkNIDLAAIjXFPIDbFigAlmiaIAAqxIDCAAIAADbIChAAQEHAAAADjQAADzkgAAgAikkmIB4AAQBuAAAAhjQAAhbhuAAIh4AAgA3UiaIAAqxIDCAAIAAKxgA/DiaIAAoYIjSAAIAAiZIJmAAIAACZIjSAAIAAIYgEAkGgQZICEAAQAABGBGAAQBKAAAAhGICEAAQAACljOAAQjKAAAAilg");
	this.shape_3.setTransform(0,-5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Слой_10
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.2)").ss(83,1,1).p("AJ/miIhWAAIAAEIIjGAAIAAqxIDGAAIAAENIBeAAIClkNIDLAAIjXFPIDbFiIjfAAgAQ5tLIDBAAIAAGVIEdmVIC6AAIAAKxIjCAAIAAmUIkdGUIi5AAgEAkGgQZICEAAQAABGBGAAQBKAAAAhGICEAAQAACljOAAQjKAAAAilgEAiGgNLIDCAAIAAGVIEcmVIC6AAIAAKxIjCAAIAAmUIkdGUIi5AAgEAzfAPLIBCiQQBsBGB3AAQB0AAAAg6QAAghjGg1QjGgyAAiUQAAhjBOg+QBThCCUAAQCVAABnA+Ig+CQQhfg1hjAAQhvAAAAA9QAAAmDGAxQDGA2AACQQAABfhPA+QhSBCiVAAQixAAh0hPgEArDAEbIC+AAICECYIiIAAgEAmFAMSIAAD3IjGAAIAAj3IkHm6IDOAAIClERIClkRIC9AAgAcCOFIklAAIg1CEIjGAAIExqxIC+AAIE1KxIjOAAgALOFYIDGAAIAAIZIFJAAIAACYIoPAAgAbIL1IhWjfIhbDfgAFKNHQAADCkUAAIliAAIAAqxIFRAAQEEAAAACyQAABrhbAtQB8AqAAB7gEgtXgHwQAAihBwhjQBrhnClAAQC+AABrCEIh8BvQhGhOhfAAQhSAAg6A2Qg2A5AABXQAABXA2A5QA6A2BSAAQBfAABGhTIB8BwQhjCEjGAAQilAAhrhjQhwhnAAidgA4vqyIjSAAIAAIYIjCAAIAAoYIjSAAIAAiZIJmAAgAn6tLIAAKxIjCAAIAAoYIjGAAIgEB0QgJDegpBfQgxB0h8AAIhXgNIAJicIAcAAQA2AAAZhHQAQg5AEiAIANkVgA3UtLIDCAAIAAKxIjCAAgAEEmNQAADzkgAAIlKAAIAAqxIDCAAIAADbIChAAQEHAAAADjgABCmJQAAhbhuAAIh4AAIAAC+IB4AAQBuAAAAhjgAqDFYIDCAAIAAKxIjCAAgAhqJtIB6AAQBTAAAAhGQAAhChTAAIh6AAgACEM3QAAhGhXAAIiXAAIAACMICXAAQBXAAAAhGgAw8MBIhWAAIAAEIIjCAAIAAqxIDCAAIAAENIBeAAIClkNIDPAAIjbFPIDbFiIjbAAgA6iOFIklAAIg6CEIjGAAIExqxIDCAAIExKxIjKAAgA7cL1IhbjfIhbDfgEgnLAQJIAAlrIixEpIhbAAIixklIAAFnIiyAAIAAqxIChAAID0GMIDrmMIChAAIAEKxgEg85AKzQAAihBshjQBrhnClAAQC9AABsCEIh8BvQhGhOhfAAQhSAAg2A2Qg2A1AABbQAABXA2A5QA2A2BSAAQBfAABGhTIB8BwQhjCEjGAAQilAAhrhjQhshnAAidg");
	this.shape_4.setTransform(-5.6,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_2, new cjs.Rectangle(-436.8,-151.9,868.2,301.4), null);


(lib.t2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A9eNUQhrhjAAidQAAidBrhnQBvhnClAAQCpAABsBnQBrBnAACdQAACdhrBjQhwBnilAAQilAAhvhngA7OHEQg1A5AABXQAABXA1A5QA2A2BOAAQBPAAA1g2QA2g5AAhXQAAhXg2g5Qg1g2hPAAQhOAAg2A2gEAj8AOqIAAqwIFOAAQEIAAAACxQAABrhfAuQCAAlAACAQAABahGAyQhKA1iEAAgEAm+AMeICYAAQBXAAAAhGQAAhGhXAAIiYAAgEAm+AIOIB7AAQBTAAAAhGQAAhChTAAIh7AAgAelOqIAAqwIDCAAIAAKwgAW2OqIAAoYIjWAAIAAiYIJrAAIAACYIjTAAIAAIYgAPDOqIAAkMIkMAAIAAEMIjCAAIAAqwIDCAAIAAEDIEMAAIAAkDIDGAAIAAKwgAimOqIAAqwIIgAAIAACUIlfAAIAAB4IE1AAIAACQIk1AAIAACAIFrAAIAACUgAnwOqIAAlrIixEpIhXAAIixkkIAAFmIi2AAIAAqwIChAAIDzGMIDwmMIChAAIAAKwgEgjmAOqIgElrIixEpIhXAAIixkkIAAFmIi2AAIAAqwIChAAIDzGMIDwmMICgAAIAFKwgAdLj9IAtiQIBGAIQA6AAAhg1IkMnvIDOAAIChFOICplOIC+AAIkhIUQhfCxihAAQg5AAg+gZgEhH8gFLQhshnAAidQAAihBshjQBrhnCpAAQC+AABrCEIh8BvQhGhOhfAAQhSAAg6A2Qg2A5AABXQAABXA2A5QA6A2BSAAQBfAABGhSIB8BvQhjCEjGAAQipAAhrhjgEgt+gD5IAMicIAZAAQA6AAAUhGQARg2AIiEIAIkUIItAAIAAKwIjCAAIAAoYIjGAAIgEB0QgIDeglBfQgyB0h7AAgEBGGgD5IiMjKIiIDKIjjAAID3leIjnlXIDfAAIB8C+IB8i+IDeAAIjeFPIDzFmgEA5/gD5IAAmUIkdGUIi6AAIAAqwIDCAAIAAGUIEdmUIC5AAIAAKwgEAq5gD5IAAoYIjWAAIAAiYIJrAAIAACYIjTAAIAAIYgASWj5IAAqwIE9AAQCRAABSBCQBTBGAAB3QAAB4hTBCQhSBGiRAAIh3AAIAACxgAVcpHIBrAAQB8AAAAhjQAAhnh8AAIhrAAgAN5j5IidkIIhaAAIAAEIIjCAAIAAqwIDCAAIAAEMIBeAAIClkMIDPAAIjXFOIDbFigAiyj5IAAmUIkdGUIi1AAIAAqwIC9AAIAAGUIEhmUIC1AAIAAKwgAuhj5IihkIIhXAAIAAEIIjBAAIAAqwIDBAAIAAEMIBfAAIClkMIDPAAIjbFOIDbFigEggogD5IAAqwIDCAAIAADaIChAAQEMAAAADjQAAB4hPA+QhOA9iIAAgA9mmFIB7AAQBsAAAAhjQAAhbhsAAIh7AAgEgyXgD5IAAqwIDCAAIAAKwgEg2zgD5IidkIIhXAAIAAEIIjGAAIAAqwIDGAAIAAEMIBbAAICpkMIDKAAIjWFOIDbFig");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.4)").s().p("A9eNUQhrhjAAidQAAidBrhnQBvhnClAAQCpAABsBnQBrBnAACdQAACdhrBjQhwBnilAAQilAAhvhngA7OHEQg1A5AABXQAABXA1A5QA2A2BOAAQBPAAA1g2QA2g5AAhXQAAhXg2g5Qg1g2hPAAQhOAAg2A2gEAj8AOqIAAqwIFOAAQEIAAAACxQAABrhfAuQCAAlAACAQAABahGAyQhKA1iEAAgEAm+AMeICYAAQBXAAAAhGQAAhGhXAAIiYAAgEAm+AIOIB7AAQBTAAAAhGQAAhChTAAIh7AAgAelOqIAAqwIDCAAIAAKwgAW2OqIAAoYIjWAAIAAiYIJrAAIAACYIjTAAIAAIYgAPDOqIAAkMIkMAAIAAEMIjCAAIAAqwIDCAAIAAEDIEMAAIAAkDIDGAAIAAKwgAimOqIAAqwIIgAAIAACUIlfAAIAAB4IE1AAIAACQIk1AAIAACAIFrAAIAACUgAnwOqIAAlrIixEpIhXAAIixkkIAAFmIi2AAIAAqwIChAAIDzGMIDwmMIChAAIAAKwgEgjmAOqIgElrIixEpIhXAAIixkkIAAFmIi2AAIAAqwIChAAIDzGMIDwmMICgAAIAFKwgAdLj9IAtiQIBGAIQA6AAAhg1IkMnvIDOAAIChFOICplOIC+AAIkhIUQhfCxihAAQg5AAg+gZgEhH8gFLQhshnAAidQAAihBshjQBrhnCpAAQC+AABrCEIh8BvQhGhOhfAAQhSAAg6A2Qg2A5AABXQAABXA2A5QA6A2BSAAQBfAABGhSIB8BvQhjCEjGAAQipAAhrhjgEgt+gD5IAMicIAZAAQA6AAAUhGQARg2AIiEIAIkUIItAAIAAKwIjCAAIAAoYIjGAAIgEB0QgIDeglBfQgyB0h7AAgEBGGgD5IiMjKIiIDKIjjAAID3leIjnlXIDfAAIB8C+IB8i+IDeAAIjeFPIDzFmgEA5/gD5IAAmUIkdGUIi6AAIAAqwIDCAAIAAGUIEdmUIC5AAIAAKwgEAq5gD5IAAoYIjWAAIAAiYIJrAAIAACYIjTAAIAAIYgASWj5IAAqwIE9AAQCRAABSBCQBTBGAAB3QAAB4hTBCQhSBGiRAAIh3AAIAACxgAVcpHIBrAAQB8AAAAhjQAAhnh8AAIhrAAgAN5j5IidkIIhaAAIAAEIIjCAAIAAqwIDCAAIAAEMIBeAAIClkMIDPAAIjXFOIDbFigAiyj5IAAmUIkdGUIi1AAIAAqwIC9AAIAAGUIEhmUIC1AAIAAKwgAuhj5IihkIIhXAAIAAEIIjBAAIAAqwIDBAAIAAEMIBfAAIClkMIDPAAIjbFOIDbFigEggogD5IAAqwIDCAAIAADaIChAAQEMAAAADjQAAB4hPA+QhOA9iIAAgA9mmFIB7AAQBsAAAAhjQAAhbhsAAIh7AAgEgyXgD5IAAqwIDCAAIAAKwgEg2zgD5IidkIIhXAAIAAEIIjGAAIAAqwIDGAAIAAEMIBbAAICpkMIDKAAIjWFOIDbFig");
	this.shape_1.setTransform(-2.8,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D31B21").ss(83,1,1).p("ALcoBIhaAAIAAEIIjCAAIAAqwIDCAAIAAEMIBeAAIClkMIDPAAIjXFOIDbFiIjfAAgAqEupIC9AAIAAGUIEhmUIC1AAIAAKwIjBAAIAAmUIkdGUIi1AAgAZDqqQAAhnh8AAIhrAAIAADKIBrAAQB8AAAAhjgAcJqqQAAB4hTBCQhSBGiRAAIh3AAIAACxIjGAAIAAqwIE9AAQCRAABSBCQBTBGAAB3gEAnjgOpIkhIUQhfCxihAAQg5AAg+gZIAtiQIBGAIQA6AAAhg1IkMnvIDOAAIChFOICplOIC+AAIJrAAIAACYIjTAAIAAIYIjCAAIAAoYIjWAAgEAyogOpIDCAAIAAGUIEdmUIC5AAIAAKwIjBAAIAAmUIkdGUIi6AAgEBB+gOuIB8C+IB8i+IDeAAIjeFPIDzFmIjjAAIiMjKIiIDKIjjAAID3leIjnlXgEAm+AIOIB7AAQBTAAAAhGQAAhChTAAIh7AAgEAqtALYQAAhGhXAAIiYAAIAACMICYAAQBXAAAAhGgEAtzALpQAABahGAyQhKA1iEAAIljAAIAAqwIFOAAQEIAAAACxQAABrhfAuQCAAlAACAgAdLGSIjTAAIAAIYIjCAAIAAoYIjWAAIAAiYIJrAAgAelD6IDCAAIAAKwIjCAAgASJD6IAAKwIjGAAIAAkMIkMAAIAAEMIjCAAIAAqwIDCAAIAAEDIEMAAIAAkDgAGGMWIAACUIosAAIAAqwIIgAAIAACUIlfAAIAAB4IE1AAIAACQIk1AAIAACAgEhJogJPQAAihBshjQBrhnCpAAQC+AABrCEIh8BvQhGhOhfAAQhSAAg6A2Qg2A5AABXQAABXA2A5QA6A2BSAAQBfAABGhSIB8BvQhjCEjGAAQipAAhrhjQhshnAAidgEg5QgIBIhXAAIAAEIIjGAAIAAqwIDGAAIAAEMIBbAAICpkMIDKAAIjWFOIDbFiIjfAAgEgi9gOpIAAKwIjCAAIAAoYIjGAAIgEB0QgIDeglBfQgyB0h7AAIhbgNIAMicIAZAAQA6AAAUhGQARg2AIiEIAIkUgEgyXgOpIDCAAIAAKwIjCAAgA25nsQAAB4hPA+QhOA9iIAAIlKAAIAAqwIDCAAIAADaIChAAQEMAAAADjgA5/noQAAhbhsAAIh7AAIAAC+IB7AAQBsAAAAhjgAxCoBIhXAAIAAEIIjBAAIAAqwIDBAAIAAEMIBfAAIClkMIDPAAIjbFOIDbFiIjbAAgAnwOqIAAlrIixEpIhXAAIixkkIAAFmIi2AAIAAqwIChAAIDzGMIDwmMIChAAIAAKwgA/JJUQAAidBrhnQBvhnClAAQCpAABsBnQBrBnAACdQAACdhrBjQhwBnilAAQilAAhvhnQhrhjAAidgA2QJUQAAhXg2g5Qg1g2hPAAQhOAAg2A2Qg1A5AABXQAABXA1A5QA2A2BOAAQBPAAA1g2QA2g5AAhXgEgjmAOqIgElrIixEpIhXAAIixkkIAAFmIi2AAIAAqwIChAAIDzGMIDwmMICgAAIAFKwg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Слой_10
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D31B21").s().p("AhID+QhJgUgygzQgyg0gRhKQgQhKAXhEQAXhCA4gwQA4gvBGgNQBLgPBMAeQBNAeAtA/QAsBAADBSQACBSgpBBQgbAqgrAeQgqAdgxAOQghAIghAAQglAAgngLg");
	this.shape_3.setTransform(-161.6,60.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.2)").ss(83,1,1).p("ALcoBIhaAAIAAEIIjCAAIAAqwIDCAAIAAEMIBeAAIClkMIDPAAIjXFOIDbFiIjfAAgAZDqqQAAhnh8AAIhrAAIAADKIBrAAQB8AAAAhjgAcJqqQAAB4hTBCQhSBGiRAAIh3AAIAACxIjGAAIAAqwIE9AAQCRAABSBCQBTBGAAB3gEAnjgOpIkhIUQhfCxihAAQg5AAg+gZIAtiQIBGAIQA6AAAhg1IkMnvIDOAAIChFOICplOIC+AAIJrAAIAACYIjTAAIAAIYIjCAAIAAoYIjWAAgEAyogOpIDCAAIAAGUIEdmUIC5AAIAAKwIjBAAIAAmUIkdGUIi6AAgEBB+gOuIB8C+IB8i+IDeAAIjeFPIDzFmIjjAAIiMjKIiIDKIjjAAID3leIjnlXgEAtzALpQAABahGAyQhKA1iEAAIljAAIAAqwIFOAAQEIAAAACxQAABrhfAuQCAAlAACAgEAm+AIOIB7AAQBTAAAAhGQAAhChTAAIh7AAgEAqtALYQAAhGhXAAIiYAAIAACMICYAAQBXAAAAhGgAdLGSIjTAAIAAIYIjCAAIAAoYIjWAAIAAiYIJrAAgAelD6IDCAAIAAKwIjCAAgASJD6IAAKwIjGAAIAAkMIkMAAIAAEMIjCAAIAAqwIDCAAIAAEDIEMAAIAAkDgAGGMWIAACUIosAAIAAqwIIgAAIAACUIlfAAIAAB4IE1AAIAACQIk1AAIAACAgEhJogJPQAAihBshjQBrhnCpAAQC+AABrCEIh8BvQhGhOhfAAQhSAAg6A2Qg2A5AABXQAABXA2A5QA6A2BSAAQBfAABGhSIB8BvQhjCEjGAAQipAAhrhjQhshnAAidgEg5QgIBIhXAAIAAEIIjGAAIAAqwIDGAAIAAEMIBbAAICpkMIDKAAIjWFOIDbFiIjfAAgEgyXgOpIDCAAIAAKwIjCAAgEgi9gOpIAAKwIjCAAIAAoYIjGAAIgEB0QgIDeglBfQgyB0h7AAIhbgNIAMicIAZAAQA6AAAUhGQARg2AIiEIAIkUgA5/noQAAhbhsAAIh7AAIAAC+IB7AAQBsAAAAhjgA25nsQAAB4hPA+QhOA9iIAAIlKAAIAAqwIDCAAIAADaIChAAQEMAAAADjgAxCoBIhXAAIAAEIIjBAAIAAqwIDBAAIAAEMIBfAAIClkMIDPAAIjbFOIDbFiIjbAAgAqEupIC9AAIAAGUIEhmUIC1AAIAAKwIjBAAIAAmUIkdGUIi1AAgAnwOqIAAlrIixEpIhXAAIixkkIAAFmIi2AAIAAqwIChAAIDzGMIDwmMIChAAIAAKwgA2QJUQAAhXg2g5Qg1g2hPAAQhOAAg2A2Qg1A5AABXQAABXA1A5QA2A2BOAAQBPAAA1g2QA2g5AAhXgA/JJUQAAidBrhnQBvhnClAAQCpAABsBnQBrBnAACdQAACdhrBjQhwBnilAAQilAAhvhnQhrhjAAidgEgjmAOqIgElrIixEpIhXAAIixkkIAAFmIi2AAIAAqwIChAAIDzGMIDwmMICgAAIAFKwg");
	this.shape_4.setTransform(-8.4,8.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2_1, new cjs.Rectangle(-521.1,-137,1033.9,282.4), null);


(lib.sh1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.sh1();
	this.instance.parent = this;
	this.instance.setTransform(-38,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sh1_1, new cjs.Rectangle(-38,-27,76,54), null);


(lib.salt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img2();
	this.instance.parent = this;
	this.instance.setTransform(-63,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.salt, new cjs.Rectangle(-63,-150,126,300), null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-66,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(-66,-62,132,124), null);


(lib.img8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img8();
	this.instance.parent = this;
	this.instance.setTransform(-42,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img8_1, new cjs.Rectangle(-42,-29,84,58), null);


(lib.img7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img7();
	this.instance.parent = this;
	this.instance.setTransform(-46,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img7_1, new cjs.Rectangle(-46,-32,92,64), null);


(lib.img6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img6();
	this.instance.parent = this;
	this.instance.setTransform(-55,-210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img6_1, new cjs.Rectangle(-55,-210,110,420), null);


(lib.img5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img5();
	this.instance.parent = this;
	this.instance.setTransform(-18,-21,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img5_1, new cjs.Rectangle(-18,-21,36.8,41.6), null);


(lib.img4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img4();
	this.instance.parent = this;
	this.instance.setTransform(-24,-15,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img4_1, new cjs.Rectangle(-24,-15,48.6,30.6), null);


(lib.img3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img3();
	this.instance.parent = this;
	this.instance.setTransform(-32.6,-31.8,0.86,0.86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img3_1, new cjs.Rectangle(-32.6,-31.8,65.4,63.7), null);


(lib.img1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.img1();
	this.instance.parent = this;
	this.instance.setTransform(-57,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img1_1, new cjs.Rectangle(-57,-57,114,114), null);


(lib.cover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ApqNNIBal6IgevLIhumkINvgKIHCACIhQGpIANOJIBLH2I0MAjIAAAAIAFhag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cover, new cjs.Rectangle(-66.9,-93.5,133.8,187), null);


(lib.chip3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.chip3();
	this.instance.parent = this;
	this.instance.setTransform(-50,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.chip3_1, new cjs.Rectangle(-50,-24,100,48), null);


(lib.chip2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.chip2();
	this.instance.parent = this;
	this.instance.setTransform(-47,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.chip2_1, new cjs.Rectangle(-47,-30,94,60), null);


(lib.chip1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.chip1();
	this.instance.parent = this;
	this.instance.setTransform(-54,-42);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.chip1_1, new cjs.Rectangle(-54,-42,108,84), null);


(lib.boxes_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.boxes();
	this.instance.parent = this;
	this.instance.setTransform(-131,-157);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.boxes_1, new cjs.Rectangle(-131,-157,262,314), null);


(lib.box3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box3();
	this.instance.parent = this;
	this.instance.setTransform(-62,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box3_1, new cjs.Rectangle(-62,-90,124,180), null);


(lib.box2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box2();
	this.instance.parent = this;
	this.instance.setTransform(-62,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box2_1, new cjs.Rectangle(-62,-90,124,180), null);


(lib.box1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.box1();
	this.instance.parent = this;
	this.instance.setTransform(-62,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.box1_1, new cjs.Rectangle(-62,-90,124,180), null);


(lib.bgImg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.bgImg();
	this.instance.parent = this;
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bgImg_1, new cjs.Rectangle(-150,-300,300,600), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#971E23").s().p("ArtSwMAAAglfIXbAAMAAAAlfg");
	this.shape.setTransform(75,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CD322D").s().p("ArtcIMAAAg4PIXbAAMAAAA4Pg");
	this.shape_1.setTransform(75,-120);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2371B9").s().p("ArtSwMAAAglfIXbAAMAAAAlfg");
	this.shape_2.setTransform(-75,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3AA8E5").s().p("ArtcIMAAAg4PIXbAAMAAAA4Pg");
	this.shape_3.setTransform(-75,-120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-150,-300,300,600), null);


(lib.art_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_1
	this.instance = new lib.art();
	this.instance.parent = this;
	this.instance.setTransform(-27,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.art_1, new cjs.Rectangle(-27,-29,54,58), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой_6
	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(617.6,156.7,2.28,2.28,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AoOUmIkTANIgLjhIMwgmIAKDhIkSANIAhK9IkKANgACTQlIH8gYQCOgHBWA6QBYA6AFBsQAGCRiPBHQBZAXAvA0QA0A4AEBeQAGB2haBIQhZBHihAIIn6AYgAJ4YpIjIAJIAIC4IDQgKQA7gDAegbQAcgagCgrQgCgogfgWQgegWg2AAIgOAAgAJcTSIi9AIIAJCzIC5gJQA2gDAcgcQAagagCgqQgCglgagVQgagWguAAIgLABgASsP0IEHgNIAsOfIkHAMgAaqPcID+gMIAaIdIFQouID3gMIAsOfIj+AMIgaocIlQItIj3ALgEAu5AYqIEYgNIANEUIkYAOgEAu2ASKIAJgJQCegOBJgtQBDgqgDhKQgDg6gsgeQgrgfhLAEQhIADg/AhQg9Agg6A/IininQCgjCD/gMQC+gJB0BXQB5BbAICsQAHCahfBdQhQBNicAoIgOBqIixAIgASWKkIEUgNIALDqIkUANgAeWMzQhQhCgYh7ICZgjQAqBxBkgEQBkgFAfh1ICbAUQgMB+hJBIQhKBJh3AGIgSAAQhrAAhKg8gEAgUAFIQipgQicg/QiXg8iBhkQhsgShkghQiegzhhhaQgegcgUgcIgPgXIgahLIAAgCQhSkHAUlzQALjLA6iwQAziZBNhuQAbgmBQghQBNgfBlgRQC4jAD4hfQEAhiETAaQDhAWDIBmQDABjCSCiQCGAjBqBSQA1ApAbAjQBtCwAjEcQAiEXguE5IABgCIgGAoQgKAxhPArQhiA3ifAMQiyEHkeCLQjyB1kJAAQg6AAg7gFgEg0RgGjQhegfg0g/Qg4hFgFhoQgGiOBdhXQBghaCygJIHmgWIArOeIkGANIgOkqIiOAHIi2EzIkwAOgEgxCgMqQhIAEgmAgQgnAgACA5QADA3ArAdQApAcBJgEICygIIgLjpgEgmmgQYIEHgMIARF8IE6mMIEvgOIlDGNIGaIQIk3APIkIlWIhxCIIAKDfIkHAMgA2GxJID+gMIAaIdIFQouID3gMIArOfIj+AMIgZocIlQItIj3ALgAk8x9ID+gMIAZIdIFPouID3gMIAsOfIj+AMIgZobIlPIsIj4AMgAhQ0mQhQhCgYh7ICYgjQAqByBkgFQBkgEAfh2ICbAVQgNB9hJBJQhJBJh3AFIgSAAQhrAAhJg8g");
	this.shape.setTransform(398.2,243.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(56,56,56,0.4)").s().p("AoOUmIkTANIgLjhIMwgmIAKDhIkSANIAhK9IkKANgACTQlIH8gYQCOgHBWA6QBYA6AFBsQAGCRiPBHQBZAXAvA0QA0A4AEBeQAGB2haBIQhZBHihAIIn6AYgAJ4YpIjIAJIAIC4IDQgKQA7gDAegbQAcgagCgrQgCgogfgWQgegWg2AAIgOAAgAJcTSIi9AIIAJCzIC5gJQA2gDAcgcQAagagCgqQgCglgagVQgagWguAAIgLABgASsP0IEHgNIAsOfIkHAMgAaqPcID+gMIAaIdIFQouID3gMIAsOfIj+AMIgaocIlQItIj3ALgEAu5AYqIEYgNIANEUIkYAOgEAu2ASKIAJgJQCegOBJgtQBDgqgDhKQgDg6gsgeQgrgfhLAEQhIADg/AhQg9Agg6A/IininQCgjCD/gMQC+gJB0BXQB5BbAICsQAHCahfBdQhQBNicAoIgOBqIixAIgASWKkIEUgNIALDqIkUANgAeWMzQhQhCgYh7ICZgjQAqBxBkgEQBkgFAfh1ICbAUQgMB+hJBIQhKBJh3AGIgSAAQhrAAhKg8gEAgUAFIQipgQicg/QiXg8iBhkQhsgShkghQiegzhhhaQgegcgUgcIgPgXIgahLIAAgCQhSkHAUlzQALjLA6iwQAziZBNhuQAbgmBQghQBNgfBlgRQC4jAD4hfQEAhiETAaQDhAWDIBmQDABjCSCiQCGAjBqBSQA1ApAbAjQBtCwAjEcQAiEXguE5IABgCIgGAoQgKAxhPArQhiA3ifAMQiyEHkeCLQjyB1kIAAQg7AAg7gFgEg0RgGjQhegfg0g/Qg4hFgFhoQgGiOBdhXQBghaCygJIHmgWIArOeIkGANIgOkqIiOAHIi2EzIkwAOgEgxCgMqQhIAEgmAgQgnAgACA5QADA3ArAdQApAcBJgEICygIIgLjpgEgmmgQYIEHgMIARF8IE6mMIEvgOIlDGNIGaIQIk3APIkIlWIhxCIIAKDfIkHAMgA2GxJID+gMIAaIdIFQouID3gMIArOfIj+AMIgZocIlQItIj3ALgAk8x9ID+gMIAZIdIFPouID3gMIAsOfIj+AMIgZobIlPIsIj4AMgAhQ0mQhQhCgYh7ICYgjQAqByBkgFQBkgEAfh2ICbAVQgNB9hJBJQhJBJh3AFIgSAAQhrABhJg9g");
	this.shape_1.setTransform(393.2,248.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Слой_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D31B21").ss(83,1,1).p("EA2zgF/IABgCQgFAngBABQgKAxhPArQhiA3ifAMQiyEHkeCLQkoCPlIgfQipgQicg/QiXg8iBhkQhsgShkghQiegzhhhaQgegcgUgcIgPgXIgahLIAAgCQhSkHAUlzQALjLA6iwQAziZBNhuQAbgmBQghQBNgfBlgRQC4jAD4hfQEAhiETAaQDhAWDIBmQDABjCSCiQCGAjBqBSQA1ApAbAjQBtCwAjEcQAiEXguE5gEAvrAWgICxgIIAOhqQCcgoBQhNQBfhdgHiaQgIish5hbQh0hXi+AJQj/AMigDCICnCnQA6g/A9ggQA/ghBIgDQBLgEArAfQAsAeADA6QADBKhDAqQhJAtieAOIgJAJgEAvGAc/IEYgOIgNkUIkYANgEAoJAOzIj3AMIlQIuIgaodIj+AMIAsOeID3gLIFQotIAaIcID+gMgAB2zqQB3gFBJhJQBJhJANh9IibgVQgHAagoAQQglAPgyADQgzACgmgLQgogNgKgZIiYAjQAYB7BQBCQBPBCB3gGgAIhymIj3AMIlPIuIgZodIj+AMIArOfID4gMIFPosIAZIbID+gMgAAEQsIswAmIALDhIETgNIAhK+IEKgNIghq9IESgNgAGoWNIgJizIC9gIQA1gDAeAYQAaAVACAlQACAqgaAaQgcAcg2ADgACTQlIAsOfIH6gYQChgIBZhHQBahIgGh2QgEheg0g4Qgvg0hZgXQCPhHgGiRQgFhshYg6QhWg6iOAHgAShOOIEUgNIgLjqIkUANgATYeSIEHgMIgsufIkHANgEAhdANvQB3gGBKhJQBJhIAMh+IibgUQgfB1hkAFQhkAEgqhxIiZAjQAYB7BQBCQBQBBB3gFgAonxyIj3AMIlQIuIgaodIj+AMIAsOeID3gLIFQotIAZIcID+gMgEgl7gB5IEHgMIgKjfIBxiIIEIFWIE3gPImaoQIFDmNIkvAOIk6GMIgRl8IkHAMgEgqRgQMInmAWQiyAJhgBaQhdBXAGCOQAFBoA4BFQA0A/BeAfIjdFgIEwgOIC2kzICOgHIAOEqIEGgNgEgw1gJBQhJAEgpgcQgrgdgDg3QgCg5AnggQAmggBIgEIC0gIIALDpgAG4bqIgIi4IDIgJQBAgDAiAZQAfAWACAoQACArgcAaQgeAbg7ADg");
	this.shape_2.setTransform(398.2,243.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Слой_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D31B21").s().p("AiFBsQgUgFgQgRQgQgPgGgVQgFgVAGgWQAGgUAPgQQAMgMAUgKQAMgGAZgJQA3gUAcgIQAugNAngCQA+gCAiAcQAQAPAIAUQAJAWgEAVQgDAUgOASQgPARgVAGQgNAEgTAAIghgBQgrABgyAVIg5AXQgUAGgSAAQgKAAgKgCg");
	this.shape_3.setTransform(411.1,83.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Слой_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.2)").ss(83,1,1).p("EA2zgF/IABgCQgFAngBABQgKAxhPArQhiA3ifAMQiyEHkeCLQkoCPlIgfQipgQicg/QiXg8iBhkQhsgShkghQiegzhhhaQgegcgUgcIgPgXIgahLIAAgCQhSkHAUlzQALjLA6iwQAziZBNhuQAbgmBQghQBNgfBlgRQC4jAD4hfQEAhiETAaQDhAWDIBmQDABjCSCiQCGAjBqBSQA1ApAbAjQBtCwAjEcQAiEXguE5gEAvrAWgICxgIIAOhqQCcgoBQhNQBfhdgHiaQgIish5hbQh0hXi+AJQj/AMigDCICnCnQA6g/A9ggQA/ghBIgDQBLgEArAfQAsAeADA6QADBKhDAqQhJAtieAOIgJAJgEAvGAc/IEYgOIgNkUIkYANgEAoJAOzIj3AMIlQIuIgaodIj+AMIAsOeID3gLIFQotIAaIcID+gMgAB2zqQB3gFBJhJQBJhJANh9IibgVQgHAagoAQQglAPgyADQgzACgmgLQgogNgKgZIiYAjQAYB7BQBCQBPBCB3gGgAIhymIj3AMIlPIuIgZodIj+AMIArOfID4gMIFPosIAZIbID+gMgAAEQsIswAmIALDhIETgNIAhK+IEKgNIghq9IESgNgAGoWNIgJizIC9gIQA1gDAeAYQAaAVACAlQACAqgaAaQgcAcg2ADgACTQlIAsOfIH6gYQChgIBZhHQBahIgGh2QgEheg0g4Qgvg0hZgXQCPhHgGiRQgFhshYg6QhWg6iOAHgAShOOIEUgNIgLjqIkUANgATYeSIEHgMIgsufIkHANgEAhdANvQB3gGBKhJQBJhIAMh+IibgUQgfB1hkAFQhkAEgqhxIiZAjQAYB7BQBCQBQBBB3gFgAonxyIj3AMIlQIuIgaodIj+AMIAsOeID3gLIFQotIAZIcID+gMgEgl7gB5IEHgMIgKjfIBxiIIEIFWIE3gPImaoQIFDmNIkvAOIk6GMIgRl8IkHAMgEgw1gJBQhJAEgpgcQgrgdgDg3QgCg5AnggQAmggBIgEIC0gIIALDpgEgqRgQMInmAWQiyAJhgBaQhdBXAGCOQAFBoA4BFQA0A/BeAfIjdFgIEwgOIC2kzICOgHIAOEqIEGgNgAG4bqIgIi4IDIgJQBAgDAiAZQAfAWACAoQACArgcAaQgeAbg7ADg");
	this.shape_4.setTransform(393.2,248.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(-5,0,801.3,491.9), null);


(lib.out = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// salt
	this.instance = new lib.salt();
	this.instance.parent = this;
	this.instance.setTransform(0,-186,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,y:-216},89).wait(1));

	// Слой_6
	this.instance_1 = new lib.img8_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.3,-186.9,1,1,40,0,0,0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:0,regY:0,scaleX:0.83,scaleY:0.83,rotation:0,x:4.3,y:-236.9},89).wait(1));

	// img5
	this.instance_2 = new lib.img5_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6,-272.5,1,1,35.8,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0,scaleX:0.8,scaleY:0.8,rotation:6,y:-337.5},89).wait(1));

	// img4
	this.instance_3 = new lib.img4_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(17.5,-232.1,1,1,30,0,0,-0.6,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-0.2,regY:-0.2,scaleX:0.95,scaleY:0.95,rotation:83,x:17.6,y:-287},89).wait(1));

	// chip2
	this.instance_4 = new lib.chip2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1.1,-139.1,1,1,0,0,0,0.4,-0.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:0.3,regY:-0.5,scaleX:0.85,scaleY:0.85,rotation:-41,x:1,y:-194.1},89).wait(1));

	// chip3
	this.instance_5 = new lib.chip3_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(6.5,-104.1,1,1,50,0,0,0.1,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.86,scaleY:0.86,rotation:34,y:-144.7},89).wait(1));

	// Слой_3
	this.instance_6 = new lib.img7_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.9,-70,1,1,10,0,0,0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:0,scaleX:0.83,scaleY:0.83,rotation:0,x:4.3,y:-102},89).wait(1));

	// paper
	this.instance_7 = new lib.img1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:0.1,scaleX:0.9,scaleY:0.9,x:0.5,y:-6.5},89).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57,-305,114,377.1);


(lib.centr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// salt
	this.instance = new lib.salt();
	this.instance.parent = this;
	this.instance.setTransform(-10,-72.7,0.794,0.793,0,0,0,-0.3,-0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.4,scaleX:1,scaleY:1,x:-10.1},89).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvdZKMAAAgyTIe7AAMAAAAyTgAjTxQQAeBABADIQAxCWAgBxQASA8AsDkIAqDWQASAVAPAMQAgAXgNgtIhCkfQg9kGgihxQgkh5hXiwQgeg8gSgeQgHgNgBAAQgBAAAKAWg");
	mask.setTransform(8.5,-91.5);

	// img5
	this.instance_1 = new lib.img5_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.6,-127.9,0.86,0.86,30);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:0,x:-7.9,y:-156.9},89).wait(1));

	// img4
	this.instance_2 = new lib.img4_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(8.3,-1.1,0.86,0.86,15,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0,regY:0,rotation:0,x:15.8,y:-30.7},89).wait(1));

	// chip2
	this.instance_3 = new lib.chip2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-8.4,52.6,0.86,0.86,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:0,x:-1.4,y:30.6},89).wait(1));

	// chip3
	this.instance_4 = new lib.chip3_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(6.6,-52.4,0.86,0.86,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:0,x:1.2,y:-84.9},89).wait(1));

	// img3
	this.instance_5 = new lib.img3_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-16.2,88.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-11.3,y:73.8},89).wait(1));

	// img6
	this.instance_6 = new lib.img6_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-8.4,-21.5,0.86,0.86,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90));

	// sh1
	this.instance_7 = new lib.sh1_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-21.5,171);
	this.instance_7.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.8,-202,113.3,400.1);


(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bgImg
	this.instance = new lib.bgImg_1();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(209).to({_off:false},0).to({alpha:1},10).wait(1));

	// t1
	this.instance_1 = new lib.t1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.1,-168.7,0.02,0.02,-10,0,0,391.7,244.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(169).to({_off:false},0).to({regX:393.9,regY:246,scaleX:0.34,scaleY:0.34,rotation:9,x:1},10,cjs.Ease.get(1)).wait(41));

	// box
	this.instance_2 = new lib.box1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-390);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(149).to({_off:false},0).to({y:70},10,cjs.Ease.get(-1)).to({rotation:25,x:60,y:82},10,cjs.Ease.quadInOut).wait(51));

	// box
	this.instance_3 = new lib.box2_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,70);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(159).to({_off:false},0).wait(61));

	// box
	this.instance_4 = new lib.box3_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,70);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(159).to({_off:false},0).to({rotation:-25,x:-59,y:82},10,cjs.Ease.quadInOut).wait(51));

	// cover
	this.instance_5 = new lib.cover();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-1.3,70.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(159).to({_off:false},0).to({rotation:25,x:59.7,y:83.7},10,cjs.Ease.quadInOut).wait(51));

	// cover
	this.instance_6 = new lib.cover();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-1.3,70.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(159).to({_off:false},0).to({rotation:-25,x:-59.8,y:82.2},10,cjs.Ease.quadInOut).wait(51));

	// cover
	this.instance_7 = new lib.cover();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-1.3,-389.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(149).to({_off:false},0).to({y:70.7},10,cjs.Ease.get(-1)).wait(61));

	// bgImg
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;
	this.instance_8._off = true;

	this.instance_9 = new lib.bgImg_1();
	this.instance_9.parent = this;
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(59).to({_off:false},0).to({alpha:0},10).to({_off:true},70).wait(81));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(139).to({_off:false},0).to({alpha:1},10).wait(71));

	// t2
	this.instance_10 = new lib.t2_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0.1,227.5,0.02,0.02);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(104).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.3,scaleY:0.3},10,cjs.Ease.get(1)).to({_off:true},36).wait(70));

	// t2
	this.instance_11 = new lib.t2_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0.1,227.5,0.02,0.02);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(59).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.3,scaleY:0.3},10,cjs.Ease.get(1)).wait(25).to({regX:0,regY:0,scaleX:0.02,scaleY:0.02,alpha:0},10).to({_off:true},1).wait(115));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("EgLtAu4MAAAhdvIXbAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:75,y:0}).wait(91).to({graphics:null,x:0,y:0}).wait(70));

	// Слой_14
	this.instance_12 = new lib.centr("synched",0,false);
	this.instance_12.parent = this;
	this.instance_12.setTransform(82.5,-36.5,1.15,1.15);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(59).to({_off:false},0).to({scaleX:1,scaleY:1,x:79.5,y:-29.5,startPosition:89},90).to({_off:true},1).wait(70));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_59 = new cjs.Graphics().p("EgLtAu4MAAAhdvIXbAAMAAABdvg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_1_graphics_59,x:-75,y:0}).wait(91).to({graphics:null,x:0,y:0}).wait(70));

	// out
	this.instance_13 = new lib.out("synched",0,false);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-76,127);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(59).to({_off:false},0).to({_off:true},91).wait(70));

	// bg
	this.instance_14 = new lib.bg();
	this.instance_14.parent = this;
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(49).to({_off:false},0).to({alpha:1},10).to({_off:true},91).wait(70));

	// t1
	this.instance_15 = new lib.t1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(1.1,-218.7,0.02,0.02,-10,0,0,391.7,244.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:393.9,regY:246,scaleX:0.34,scaleY:0.34,rotation:9,x:1},10,cjs.Ease.get(1)).to({_off:true},50).wait(160));

	// chip1
	this.instance_16 = new lib.chip1_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(55.8,250,0.02,0.02,0,0,0,0,2.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(10).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},10,cjs.Ease.get(1)).to({_off:true},40).wait(160));

	// art
	this.instance_17 = new lib.art_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(74,220,0.02,0.02,0,0,0,2.5,2.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(18).to({_off:false},0).to({regX:2.6,regY:2.6,scaleX:1.2,scaleY:1.2,x:99,y:185.1},5,cjs.Ease.get(1)).to({regY:2.5,scaleX:1,scaleY:1,x:94.1,y:190},3).to({_off:true},34).wait(160));

	// boxes
	this.instance_18 = new lib.boxes_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-3.7,44,0.2,0.2,-70,0,0,-0.5,1.8);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,alpha:1},15,cjs.Ease.get(1)).to({_off:true},45).wait(160));

	// bgImg
	this.instance_19 = new lib.bgImg_1();
	this.instance_19.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(220));

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
	id: '7F77B9E854D54FCEAABC7B3750594D53',
	width: 300,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/art.png", id:"art"},
		{src:"images/bgImg.jpg", id:"bgImg"},
		{src:"images/box1.png", id:"box1"},
		{src:"images/box2.png", id:"box2"},
		{src:"images/box3.png", id:"box3"},
		{src:"images/boxes.png", id:"boxes"},
		{src:"images/chip1.png", id:"chip1"},
		{src:"images/chip2.png", id:"chip2"},
		{src:"images/chip3.png", id:"chip3"},
		{src:"images/img1.png", id:"img1"},
		{src:"images/img2.png", id:"img2"},
		{src:"images/img3.png", id:"img3"},
		{src:"images/img4.png", id:"img4"},
		{src:"images/img5.png", id:"img5"},
		{src:"images/img6.png", id:"img6"},
		{src:"images/img7.png", id:"img7"},
		{src:"images/img8.png", id:"img8"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/sh1.png", id:"sh1"}
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
an.compositions['7F77B9E854D54FCEAABC7B3750594D53'] = {
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