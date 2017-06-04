function sayHello(message){
	return function(fname,lname){
            return message +" "+fname+lname
	}
}


var sendWish=sayHello("hello");
console.log(sendWish)
console.log(sendWish("asha","kumar"))