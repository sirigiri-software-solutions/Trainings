
let x=2;
const y="3";
const arry=["sachin","sewagh","yuvaraj"]
document.write(  x===y? "this praveen" +'<br>' : "this shirisha" +'<br>')
// const msg=prompt("this praveen");
// alert("praveen")
// confirm(msg)
// let con=parseInt(y)
// let con1=String(x)
// document.write(typeof(con))
// document.write(typeof(con1))




function fun(a,b){


    arry.pop("kaif");
    document.write(arry+'<br>')
    arry.push("ganguly")
    document.write(arry+'<br>')
    arry.shift()
    document.write(arry+'<br>')
    arry.forEach(function(item,index){
        document.write(index+1 +" " + item +"<br>")

    })

    if(x<y)
    {
        document.write("praveen" + a+b +'<br>')
    }
    else{
        document.write("shirisha" +'<br>')
    }
}


switch(true){
    
    case x>y:
           result ="X is greater" +'<br>'
           break;
    case x<y:
          result ="y is great" +'<br>'
          break
    case x==y:
          result = "x and y are equal" +'<br>'

        break;
    case x===y:
         result ="x and y are not equal" +'<br>'
         break;

}
document.write(result +'<br>')
fun(x,y);
document.getElementById("praveen").innerText="praveen"
const psel=document.querySelectorAll("p")
for(let s=0;s<psel.length;s++)
{
    psel[s].innerHTML="<h1>praveen</h1>"
}