
var arr={name:3};
 function function1(a,b,c){
   return this.name+a+b+c;
 };
//console.log(function1.call(arr,1,2,3))

var arr1=[1,2,3];
//console.log(function1.apply(arr,arr1))
 
var bound=function1.bind(arr);
console.log(bound(1,2,3))
//------call apply bind

//-----call function
const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  console.log(person.fullName.call(person1,"vizag","india"))
  
//---output"John Doe,vizag,india"

//-----apply()

const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"Marry",
    lastName: "Doe"
  }
  var arr1=["Ottava", "Canada"];
  console.log(person.fullName.apply(person1, arr1))
  //---"Marry Doe,Ottava,Canada";

  //------bind() method
  const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  var bound=person.fullName.bind(member);
  console.log(bound());
  //------------"Hege Nilsen"



