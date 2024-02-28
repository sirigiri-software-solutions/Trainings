// var a=3;
// var b=-7;
// var c=2;
// var d=a*b*c;

// function product(d){
//     if(d>0){
//         console.log("+");
//     }
//     else{
//         console.log("-")
//     }
// }
// product(d);

// var x,y,chr;
// function pattern(){
// for(x=1; x <=6; x++)
// {
//    for (y=1; y < x; y++)
//      {
//     chr=chr+("*");        
//       }
//  console.log(chr);
//  chr='';    
// }
// }
// pattern();
// var x,y,chr;
// for(var x=0;x<=3;x++){
//     for(var y=0;y<x;y++){
//         chr=chr+"*";
//     }
//     console.log(chr);
//     chr=' ';
// }
// console.log(chr);

// let n = 6;
// let string = "";

// for (let i = 1; i <= n; i++) {
//   // printing star
//   for (let j = 0; j < i; j++) {
//     if(i === n) {
//       string += "*";
//     }
//     else {
//       if (j == 0 || j == i - 1) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);
let n = 3;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += "  ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "* ";
  }
  string += "\n";
}
console.log(string);
// ----------------------------------------------

var a = 2154; //First number
var b = 458;  //Second number 
var gcd;
while (a!=b)
{
	if (a>b)
	{
		a = a -b;
	}
	else
	{
		b = b - a;
	}
}
gcd = a;
console.log(gcd);

// ------------------------------------------
var sum =0;
for(var i =1; i<=1000;i++)
{
    if(i%3==0 && i%5==0)
    {
        sum=sum+i;
        console.log(i);
    }
}
console.log(sum);
// ----------------
// // var a=10
// // var a

// console.log(a)

// var a=10

// function add(){
//   console.log(2+4)
// }
// add()

// function add(a,b){
// //   if(typeof(a)=="number" && typeof(b)=="number")
// //     {
// //       console.log(a+b);
// //     }
//   if(a!== null && b!==null){
//     console.log(a+b);
//   }
//   else{
//     console.log("please enter a valid number for b")
//   }
// }
//  add(1,"");
// console.log(0==false)
// // console.log(0==undefined)
// console.log(0==null)
// console.log(null==undefined)

// var arr=[10,20,30,40,50]
// for(var i=0;i<arr.length-1;i++){
//   console.log(arr[i]*2);
// }
// var str="hello"
// for(var i=str.length-1;i>=0;i--){
//   console.log(str[i]);
// }

var nums=[6,7,8,1,4,10,12,3]
// for(var i=0;i<nums.length-1;i++){
//   if(nums[i]>5){
//     console.log(nums[i]*2)
//   }
//   else{
//     console.log("not required")
//   }
// }
for(var i=0;i<nums.length-1;i++){
  var nums1=(nums[i]*2)
  if(nums1>12){
    console.log(nums[i])
  }
}


