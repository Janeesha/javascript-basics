var person1={name:"asha",age:25}
var person2={name:"janeesha",age:2}

function sayHello(message,wish){
	console.log(this)
	return message+" "+this.name+" "+this.age+wish //here this is a person1
}

var msg1=sayHello.bind(person1,"hello","be happy");
console.log(msg1())
// var msg1=sayHello.bind(person1); //we can
// console.log(msg1("hello"))


var msg2=sayHello.bind(person2,"hello","be happy");
console.log(msg2())

var msg3=sayHello.call(person2,"hello","be happy");
console.log(msg3) //no need() already call is called function


var msg4=sayHello.apply(person2,["hello","be happy"]);//parameter inside array
console.log(msg4) 

//but three are doing same job