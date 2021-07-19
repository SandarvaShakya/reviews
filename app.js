const clients = [
  {
    image: "./images/Kang Hanna - 1.jpg",
    name: "Yeon Hwa",
    post: "Queen",
    review: `Helvetica artisan kinfolk thundercats lumbersexual blue bottle. 
            Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.
            photo booth jean shorts artisan narwhal.`,
  },
  {
    image: "./images/Kang.Han-na.jpg",
    name: "Kang Hanna",
    post: "Managing Director",
    review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium quos quas unde voluptatum, accusantium vero sunt itaque
            inventore necessitatibus assumenda, sequi autem! Earum cumque
            assumenda ab temporibus quam ipsam magnam?`,
  },
  {
    image: "./images/hanna.jpg",
    name: "Kang Hanna",
    post: "Actor",
    review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Laudantium quos quas unde voluptatum, accusantium vero sunt itaque
            inventore necessitatibus assumenda, sequi autem! Earum cumque
            assumenda ab temporibus quam ipsam magnam?`,
  },
  {
    image: "./images/kang hanna.jpg",
    name: "Kang Hanna",
    post: "DJ",
    review: `Sriracha literally flexitarian irony, vape marfa unicorn. 
            Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb 
            marfa hell of pabst raclette post-ironic jianbing swag.`,
  },
];

// SELECTING ELEMENTS

const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const randomBtn = document.querySelector(".btn");
const image = document.getElementById("image");
const clientName = document.getElementById("name");
const post = document.getElementById("post");
const review = document.querySelector(".review");

let currentReview = 0;

function replaceContent() {
  image.children[0].src = clients[currentReview].image;
  clientName.textContent = clients[currentReview].name;
  post.textContent = clients[currentReview].post;
  review.children[0].textContent = clients[currentReview].review;
}

window.addEventListener("DOMContentLoaded", function () {
  replaceContent();
});

function leftScroll() {
  leftBtn.addEventListener("click", function () {
    currentReview--;
    if (currentReview < 0) {
      currentReview = clients.length - 1;
    }
    replaceContent();
  });
}

function rightScroll() {
  rightBtn.addEventListener("click", function () {
    currentReview++;
    if (currentReview >= 4) {
      currentReview = 0;
    }
    replaceContent();
  });
}

function randomScroll() {
  randomBtn.addEventListener("click", function () {
    currentReview = Math.floor(Math.random() * clients.length);
    replaceContent();
  });
}

leftScroll();
rightScroll();
randomScroll();
