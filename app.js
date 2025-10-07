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
    {name: 'cheescake', price: 6.50, img: "cheesecake.png"},
    {name: 'chocolate', price: 3.99, img: "chocolate_pocky.png"},
    {name: 'chocolate', price: 3.99, img: "chocolate_pocky.png"},
    {name: 'chocolate', price: 3.99, img: "chocolate_pocky.png"},
    {name: 'chocolate', price: 3.99, img: "chocolate_pocky.png"},
    {name: 'chocolate', price: 3.99, img: "chocolate_pocky.png"},
    {name: 'chocolate', price: 3.99, img: "chocolate_pocky.png"},
    {name: 'chocolate', price: 3.99, img: "chocolate_pocky.png"},
    {name: 'chocolate', price: 3.99, img: "chocolate_pocky.png"},
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
})