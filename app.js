const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Hotel Booking",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/hotel_room_booking1.jpg",
      },
      {
        code: "darkblue",
        img: "./img/Hotel-Booking-2.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Contact Us",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/ssl_security1.jpg",
      },
      {
        code: "green",
        img: "./img/https_browser_security.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Booking system",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/Hotel-Management-System.jpg",
      },
      {
        code: "green",
        img: "./img/hotel_reservation_system.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "About Us",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/Hotel_online_booking22.jpg",
      },
      {
        code: "lightgray",
        img: "./img/hotel_management_booking.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "contact us",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/contact_us.png",
      },
      {
        code: "black",
        img: "./img/contact_us2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    
    choosenProduct = products[index];

    
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

   
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});



