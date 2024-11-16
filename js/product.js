// $(document).ready(function(){
//     $('.container').slick({
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay:true,
//         autoplaySpeed:2000,
//         prevArrow:'.prev',
//         nextArrow:'.next',
//         responsive:[
//             {
//                 breakpoint:1050,
//                 settings:{
//                     slidesToShow:2,
//                     slidesToScroll:1,
//                     infinite:true,
//                     dots:false
//                 }
//             },
//             {
//                 breakpoint:800,
//                 settings:{
//                     slidesToShow:1,
//                     slidesToScroll:1,
//                     infinite:true,
//                     dots:false
//                 }
//             }
//         ]
//     });
// });

let toTop = document.querySelector(".to-top")
let menu = document.querySelector("#ggg")
let ul = document.querySelector(" nav .down-nav ul")
let color = document.querySelector(" nav .down-nav ul li")
let father = document.querySelector("section .father")
let cartIcone1 = document.querySelector('nav .top-nav .right > div:nth-last-of-type(1)')
let baba = document.querySelector('section  .father .cart .detailes button')
let closeIcone = document.querySelector('nav .top-nav .right > div:nth-last-of-type(1) .car i')
let done = document.querySelector('nav .top-nav .right > div:nth-last-of-type(1) .car .grandPapa')
let car = document.querySelector('nav .top-nav .right > div:nth-last-of-type(1) .car')
let CartBig = document.querySelector('nav .top-nav .right > div:nth-last-of-type(1) i')
let spam = document.querySelector('nav .top-nav .right > div:nth-last-of-type(1) span')
let toto = document.querySelector('.toto')



CartBig.addEventListener('click',function(){
    car.style.right="0"
    
    
})
closeIcone.addEventListener('click',function(){
    
    car.style.right="-100%"
})

window.onscroll = function(){
        if(window.scrollY > 800 ){
            toTop.style.display = 'flex'
        }else{
            toTop.style.display = 'none'

        }
    
}
toTop.onclick= function(){
    window.scrollTo({
        top: 0 ,
        behavior:"smooth"
    })
}

menu.addEventListener('click',function(){
    this.classList.toggle('activ')
    ul.classList.toggle('close')
} )

var products=[
    {
        id:1,
        img:"imags/coffee.jpg",
        Name:"product one",
        price:65,
    },
    {
        id:2,
        img:"imags/donut-transparent.png",
        Name:"product tow",
        price:59,
    },
    {
        id:3,
        img:"imags/donut.jpg",
        Name:"product three",
        price:88,
    },
    {
        id:4,
        img:"imags/food-table.jpg",
        Name:"product for",
        price:70,
    },
    {
        id:5,
        img:"imags/test1.jpeg",
        Name:"product five",
        price:29,
    },
    {
        id:6,
        img:"imags/icone.png",
        Name:"product six",
        price:60,
    },
    {
        id:7,
        img:"imags/rasberry.png",
        Name:"product seven",
        price:55,
    },
    {
        id:8,
        img:"imags/plate-1.png",
        Name:"product eight",
        price:35,
    },
    {
        id:9,
        img:"imags/plate-2.png",
        Name:"product nine",
        price:10,
    },
    {
        id:10,
        img:"imags/plate-3.png",
        Name:"product ten",
        price:20,
    },
    {
        id:11,
        img:"imags/yogurt.png",
        Name:"product eleven",
        price:20,
    },
    {
        id:12,
        img:"imags/test3.gif",
        Name:"product Twelve",
        price:20,
    },
]

function productviewer(){
    let insert=""
    for(var i=0 ;i<products.length;i++){
        insert +=`
        <div class="cart">
            <div class="im">
                <img src=${products[i].img} alt="">
            </div>
            <div class="detailes">
                <b>${products[i].Name}</b>
                <p>$${products[i].price}</p>
                <button onclick="AddToCart(${i})">Add To Cart</button>
                
            </div>
        </div>
        `
    }
    
    father.innerHTML=insert
}
productviewer()

let myArry =[]
if(localStorage.getItem('myArry') == null){
    myArry = []
}else{
    myArry = JSON.parse(localStorage.getItem('myArry'))
}




let quantities = new Array(myArry.length).fill(0); 

function AddToCart(index){

    myArry.push(products[index])  
    
    localStorage.setItem('myArry',JSON.stringify(myArry))
    quantities.push(1)
    viewFun( )
}

function viewFun( ) {
    let total =0
    
    let van =""
    myArry.map((value , index)=>{;
        total +=value.price *quantities[index];
        return(
            van +=`
                            <div id="papa">
                                        
                                <!-- <p>ur cart is empty</p> -->
                                <div id="photo">
                                    <img src="${value.img}" alt="">
                                </div>   
                                <div id="midd">
                                    <p>${value.Name}</p>
                                    <b>$${value.price}</b>
                                </div>           
                                <div id="finnaliy">
                                    <button onclick="inc(${index})">+</button>
                                    <b class="red" >${quantities[index]}</b>
                                    <button onclick="dec(${index})">-</button>
                                    <i onclick="deletee(${index})" id="zebala" class="fa-solid fa-trash"></i>
                                </div>
                            </div>                                       
            `
        )
    })

    if(myArry.length>0){
        done.innerHTML =van
        spam.innerHTML= myArry.length
        spam.style.borderColor= 'var(--main-color)'
        toto.innerHTML='$'+total
    
        

        
    }else{
        done.innerHTML='The Cart Is Empty'
        done.style.textAlign='center'
        spam.innerHTML= '0'
        spam.style.borderColor= 'red'
        
    }



}
function inc(index) {
    quantities[index]++;
    viewFun(); // Re-render the view
}

function dec(index) {
    if (quantities[index] > 0) {
        quantities[index]--;
    }
    viewFun(); // Re-render the view
}

viewFun( ) 








function deletee(index) {

    // Retrieve the array from local storage
    

    // Check if the index is valid
    if (index >= 0 && index < myArry.length) {
        // Remove the item from the array
        myArry.splice(index, 1);
        
        // Save the updated array back to local storage
        localStorage.setItem('myArry', JSON.stringify(myArry));
        quantities.splice(index, 1); //to remove the quantite of the removeing item
        // Call the view function to refresh the display
        viewFun();
    } else {
        console.error("Invalid index: " + index);
    }
}












































