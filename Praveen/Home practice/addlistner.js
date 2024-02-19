






// function fume(){
//     let um=document.getElementById("usnme").value;
   
//     document.getElementById("result").innerText=um
//     }
// function fpswd(){
//     let pw=document.getElementById("pswd").value
//     document.getElementById("result1").innerText=pw
// }

var login=document.getElementById("loginform")
login.addEventListener('submit',function(e){
    e.preventDefault();
     
    let username = document.getElementById("usnme").value;
    //document.getElementById("result").innerText = username;

    let pswd=document.getElementById("pswd").value;
    // document.getElementById("result1").innerText=pswd;

    if(username=="pbhonagiri@gmail.com" && pswd==9848705345)
    {
        document.getElementById("result").innerText="Thanq for Login "+" "+ username
         
    }
    else{
        document.getElementById("result").innerText="You are failed"
    }

})
let btn=document.getElementById("btns")
btn.addEventListener('mouseover',function(){
    btn.style.backgroundColor="blue"
})
btn.addEventListener('mouseout',function(){
    btn.style.backgroundColor="red"
})

var label=document.querySelectorAll("label")

label.forEach(function(item){
    for(let i=0;i<=label.length;i++){
    document.getElementById("l1").innerText="praveen"
    }
})
console.log(label)