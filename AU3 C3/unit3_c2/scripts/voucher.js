  
//  let useramount=JSON.parse(localStorage.getItem("user"))||0

//     useramount.reduce
           

//  https://masai-vouchers-api.herokuapp.com/api/vouchers

async function vouchers1(){
    
    try{
        
         const  res = await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`)
        let data= await res.json()
        console.log(data)
        appendvouchers(data)
    }
    catch(err){
        console.log(err)
    }
}
vouchers1()

let Data=JSON.parse(localStorage.getItem("purchase"))||[]
function appendvouchers(data){
    data.forEach(function(el){

  
    let vouchers_div=document.createElement("div")
    vouchers_div.className='voucher'

    let name=document.createElement("p")
    name.innerText=el.name;
    let price=document.createElement("p")
    price.innerText=el.price;
    let image=document.createElement("img")
    image.src=el.image;
    let btn=document.createElement("button")
    btn.className='buy_voucher'
    btn.innerText='Buy'
    btn.addEventListener("click",function(){
        addData()
    })
    
    
    

     vouchers_div.append(image,name,price)
     document.getElementById("voucher_list").append(vouchers_div)
    
    })
    function addData(el){
        Data.push(el)
        localStorage.setItem("purchase",JSON.stringify(Data))
    }
}