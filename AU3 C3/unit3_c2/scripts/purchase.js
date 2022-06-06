



let data= JSON.parse(localStorage.getItem("purchase"))||[]

data.map(function(el){

    
    let name=document.createElement("p")
    let price=document.createElement("p")
    let image=document.createElement("img")
    name.innerText=el.name;
    price.innerText=el.price;
    image.src=el.image;

document.getElementById("purchased_vouchers").append(name,price,image)
})