//how to create objects

var obj1=new Object();
console.log(obj1)

var obj2={};//object literal
console.log(obj2);
console.log(typeof(obj2))

var obj3=Object.create(null);
console.log(obj3);

var obj3=Object.create(obj3);//prototype
console.log(obj3);

function Person(){

}

var obj4=new Person();
console.log(obj4);

//add property to object

var obj={
	id:1
};

obj["name"]="asha"; //to add property one way
console.log(obj);

obj.city="bangalore";
console.log(obj);

Object.defineProperty(obj,'state',{ 
	value:"KA"
})

console.log(obj)

delete obj.city;

console.log(obj)

//modifying Object

//1.preventExtention()

// *allow to modify existing property
//*it allow delete existing property
//*it won't allow to add new property

var person1 ={name:"john",age:'34'}
Object.preventExtensions(person1)
person1.city="bangalore";  
person1.name="uma"
delete person1.age;
console.log(person1)

//2.seal
// 1.it allows for only modifying
//2.wont allow to delete and insert values

var person2={name:"john",age:'34'}
Object.seal(person2)
person2.city="bangalore";  
person2.name="uma";
 delete person2.age;
console.log(person2)

//3.freeze
//* can't touch property

var person2={name:"john",age:'34'}
Object.freeze(person2)
person2.city="bangalore";  
person2.name="uma";
 delete person2.age;
console.log(person2)


//Add method to object

var person3={
	firstname:"asha",     //primitives inside object called property
	lastname: "kumar",
	fullname:function(){    //function inside object is called is method
		return this.firstname+this.lastname;
	}
}

console.log(person3.fullname());
console.log(person3.firstname);

//Get keys and value from an object

var customer={
	name:"asha",
	city:"mandya",
	role:"tech Boss",
	age:25
}

var keys=Object.keys(customer);
console.log(keys)

var values=Object.values(customer)
console.log(values)



