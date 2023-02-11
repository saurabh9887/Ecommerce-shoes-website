const wrapper = document.querySelector(".sliderWrapper");
const MenuItemsEl = document.querySelectorAll(".menuItems");

const product = [
    {
        id:1,
        title:"AIR FORCE",
        price:119,
        colors: [
            {
                code:"black",
                img: "./img/air.png",
            },
            {
                code:"darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id:2,
        title:"JORDEN",
        price:199,
        colors: [
            {
                code:"lightgray",
                img: "./img/jordan.png",
            },
            {
                code:"green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id:3,
        title:"BLAZER",
        price:149,
        colors: [
            {
                code:"lightgray",
                img: "./img/blazer.png",
            },
            {
                code:"green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id:4,
        title:"CRATER",
        price:125,
        colors: [
            {
                code:"black",
                img: "./img/crater.png",
            },
            {
                code:"lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id:5,
        title:"HIPPIE",
        price:187,
        colors: [
            {
                code:"gray",
                img: "./img/hippie.png",
            },
            {
                code:"black",
                img: "./img/hippie2.png",
            },
        ],
    },
]

let choosenProduct = product[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductprice = document.querySelector(".productPrice");
const currentProductcolors = document.querySelectorAll(".color");
const currentProductsizes= document.querySelector(".size");

MenuItemsEl.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //change in wrapper slide
        wrapper.style.transform = `translateX(${-100*index}vw)`;

        //change in choosen product
        choosenProduct = product[index];

        //change text of current product
        currentProductTitle.textContent = choosenProduct.title;

        //change price of current product
        currentProductprice.textContent = "$" + choosenProduct.price;

        //change img on click
        currentProductImg.src = choosenProduct.colors[0].img;

        //assigning colors of color chooser
        currentProductcolors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    })
})

currentProductcolors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductsizes.forEach((size,index)=>{
    size.style.backgroundColor = "black";
    size.style.color = "white";
})