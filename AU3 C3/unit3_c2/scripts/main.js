


let userdata=JSON.parse(localStorage.getItem("user"))||[]

document.getElementById("submit").addEventListener("click",myfunction)

function myfunction(){
event.preventDefault()

let a=document.querySelector("#name").value
let b=document.querySelector("#email").value
let c=document.querySelector("#address").value
let d=document.querySelector("#amount").value

  obj={
    name:a,
    email:b,
    adddress:c,
    amount:d,

}
userdata.push(obj)
localStorage.setItem("user",JSON.stringify(userdata))
document.querySelector("#name")=null
document.querySelector("#email")=null
document.querySelector("#address")=null
document.querySelector("#amount")=null
}