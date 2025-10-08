const container = document.querySelector('.container');
const btns = document.querySelectorAll(".buyButton");
const filterBtns = document.querySelectorAll(".filterBtns");
btns.forEach(btn => btn.addEventListener("click", addToCart));
const cart = [];
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
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="buyButton">Add to cart</button>
        </div>
    `;
    container.innerHTML += html;
});

function filter3(){
    container.innerHTML = '';
    products.filter(pocky => pocky.price >= 3 && pocky.price < 4).forEach(pocky => {
        const html = `
            <div class="card">
                <h2 class="productName">${pocky.name}</h2>
                <img src=${pocky.img} alt="pocky" class="pic">
                <p class="price">$${pocky.price.toFixed(2)}</p>
                <button class="buyButton">Add to cart</button>
            </div>
        `;
        container.innerHTML += html;
    });
}

function filter4(){
    container.innerHTML = '';
    products.filter(pocky => pocky.price >= 4 && pocky.price < 5).forEach(pocky => {
        const html = `
            <div class="card">
                <h2 class="productName">${pocky.name}</h2>
                <img src=${pocky.img} alt="pocky" class="pic">
                <p class="price">$${pocky.price.toFixed(2)}</p>
                <button class="buyButton">Add to cart</button>
            </div>
        `;
        container.innerHTML += html;
    });
}

function filter5(){
    container.innerHTML = '';
    products.filter(pocky => pocky.price >= 5 && pocky.price < 6).forEach(pocky => {
        const html = `
            <div class="card">
                <h2 class="productName">${pocky.name}</h2>
                <img src=${pocky.img} alt="pocky" class="pic">
                <p class="price">$${pocky.price.toFixed(2)}</p>
                <button class="buyButton">Add to cart</button>
            </div>
        `;
        container.innerHTML += html;
    });
}

function filter6(){
    container.innerHTML = '';
    products.filter(pocky => pocky.price >= 6 && pocky.price < 7).forEach(pocky => {
        const html = `
            <div class="card">
                <h2 class="productName">${pocky.name}</h2>
                <img src=${pocky.img} alt="pocky" class="pic">
                <p class="price">$${pocky.price.toFixed(2)}</p>
                <button class="buyButton">Add to cart</button>
            </div>
        `;
        container.innerHTML += html;
    });
}

function addToCart(){
    
}