
//this is product of three numbers
function product(a,b,c){

  var prod=a*b*c;
  console.log(prod)
  if(prod!=undefined)
  {
  if(prod<=0)
  {
    console.log("the sign is -")
  }
  else{
    console.log("the sign is +")
  }
}
}
product(3,-7,2)

// this piramid of stars
var row1 =5;
for(var k=1;k<=row1;k++ )
{
  var star='*'
  var space=' '
 
  console.log(space.repeat(row1-k)+star.repeat(k*2-1))
  
}

//this gcd of numbers
var result;

function gcd(num1,num2)

{
  if(num2===0)
  {
    console.log(num1)
  }
  else
  {
     console.log(result=num1%num2);
  }

}
gcd(2154,458);

// 3 and 5 multiple with 1000
function mul(a,b) {
  
  for(var i=0;i<=1000;i++)
  {
    if(i%a==0 && i%b==0)
    {
      console.log("this is divided by "+i)
    }
    else{
      console.log("this not divided by 3 and 5 "+i)
    }
  }
  
}
mul(3,5)


var str="hello world"
var strsplit=str.split(" ")
console.log(strsplit)
var result=[];
for(var i=strsplit.length-1;i>=0;i--)
{
  if(strsplit[i]!=null){
  result.push(strsplit[i])
  console.log(strsplit[i])

  }
  else
  {
    console.log("")
  }
}
console.log(result.join(" "))
