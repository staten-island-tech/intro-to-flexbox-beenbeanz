const container = document.querySelector('.container');
const btns = document.querySelectorAll(".buyButton");
const products = [
    {name: 'chocolate', price: 3.99, img: "chocolate_pocky.png"},
    {name: 'strawberry', price: 3.99, img: "strawberry_pocky.png"},
    {name: 'almond crush', price: 4.50, img: "almondcrush.png"},
    {name: 'banana', price: 4.50, img: "banana.png"},
    {name: 'matcha', price: 4.99, img: "matcha.png"},
    {name: 'blueberry', price: 5.50, img: "blueberry.png"},
    {name: 'peach', price: 5.50, img: "peach.png"},
    {name: 'mint', price: 5.50, img: "mint.png"},
    {name: 'cookies and cream', price: 4.99, img: "cookiesncream_pocky.png"},
    {name: 'coconut', price: 5.50, img: "coconut.png"},
    {name: 'cranberry', price: 6.50, img: "cranberry.png"},
    {name: 'cheesecake', price: 6.50, img: "cheesecake.png"},
    {name: 'nutty almond', price: 5.49, img: "nuttyAlmond.jpg"},
    {name: 'crunch strawberry', price: 5.49, img: "crunchyStrawberry.png"},
    {name: 'festive delight', price: 6.99, img: "festiveDelight.jpg"},
    {name: 'mango', price: 6.00, img: "mango.jpg"},
    {name: 'melon', price: 6.00, img: "melon.jpg"},
    {name: 'orange', price: 5.49, img: "orange.jpg"},
    {name: 'salted vanilla', price: 5.49, img: "saltedVanilla.jpg"},
    {name: 'strawberry peach yogurt', price: 5.49, img: "strawberryPeachYogurt.jpg"},
];

products.forEach(product => {
    const html = `
        <div class="card">
            <h2 class="productName">${product.name}</h2>
            <img src=${product.img} alt="pocky" class="pic">
            <p class="price">$${product.price}</p>
            <button class="buyButton">Buy now</button>
        </div>
    `;
    container.innerHTML += html;
});