// (function(){
//  	console.log('hello')
//  })()


//creating functions

//1.regular function

sayHello();// we can
//sayAgain() ; //we cant
//console.log(sayAgain)  //not defined 
//console.log(sayagain())  //not a funtion is not defined

function sayHello(){
   console.log("hello world")
}

var message=sayHello();
console.log(message)

// 2.anonymous function

var sayAgain=function(){
	return "hell again"
}

console.log(sayAgain())


//constructor function

function Person(){
	this.firstname="sundar";
	this.lastname="pichai";
	this.fullname=function(){
		return this.firstname+this.lastname;
	}
}

var newPerson=new Person();

console.log(newPerson.fullname()) //static



function Person1(fname,lname){ //dynamic
	this.firstname=fname;
	this.lastname=lname;
}

Person1.prototype.fullname=function(){  //instead of creating multiple object 
	                                          //hre creating only one object to make global
		return this.firstname+this.lastname;
	}

var newPerson1=new Person1("asha","kumar");
var newPerson2=new Person1("janeesha","gowda");
var newPerson3=new Person1("ada","rsha");
var newPerson4=new Person1("asha","kumar");


console.log(newPerson1.fullname())
console.log(newPerson2.fullname())
console.log(newPerson3.fullname())
console.log(newPerson4.fullname())

//self invoking function

// (function(){
 //	console.log('hello')
//})()



