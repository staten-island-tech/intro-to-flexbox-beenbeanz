const container = document.querySelector('.container');
const filterBtns = document.querySelectorAll(".filterBtns");
const cartBtn = document.querySelector('.cartBtn');
cartBtn.addEventListener('click', showCart);
const cart = [];
const productsTotal = document.querySelector('.total');
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

//initial rendering of products
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
//initial cart func 
function addToCart(){
    const cartBtns = document.querySelectorAll(".buyButton");
    cartBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const productToAdd = products[index];
            cart.push(productToAdd);
        });
    });
}
addToCart();

function renderFilter(array){
    container.innerHTML = '';
    
    array.forEach(pocky => {
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
    
    const cartBtns = document.querySelectorAll(".buyButton");
    cartBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const productToAdd = array[index];
            cart.push(productToAdd);
        });
    });
    productsTotal.style.display = 'none';
}

function filterAll(){
    renderFilter(products);
}

function filter3(){
    renderFilter(products.filter(pocky => pocky.price >= 3 && pocky.price < 4));
}

function filter4(){
    renderFilter(products.filter(pocky => pocky.price >= 4 && pocky.price < 5));
}

function filter5(){
   renderFilter(products.filter(pocky => pocky.price >= 5 && pocky.price < 6));
}

function filter6(){
    renderFilter(products.filter(pocky => pocky.price >= 6 && pocky.price < 7));
}

function showCart(){
    container.innerHTML = '';
    let total = 0;

    cart.forEach(pocky => {
        const html = `
            <div class="card">
                <h2 class="productName">${pocky.name}</h2>
                <img src=${pocky.img} alt="pocky" class="pic">
                <p class="price">$${pocky.price.toFixed(2)}</p>
                <button class="deleteButton">Remove from cart</button>
            </div>
        `;
        container.innerHTML += html;
        total += pocky.price;
    });

    productsTotal.style.display = 'inline-block';
    productsTotal.innerHTML = `Your total is $${total.toFixed(2)}`;
}

//remove from cart 
container.addEventListener('click', e => {
    if(e.target.classList.contains('deleteButton')){
        const selectedCard = e.target.closest('.card');
        const index = Array.from(cart).indexOf(selectedCard);
        cart.splice(index, 1);
        
        productsTotal.style.display = 'none';
        container.innerHTML = '';
        let total = 0;
        cart.forEach(pocky => {
            const html = `
                <div class="card">
                    <h2 class="productName">${pocky.name}</h2>
                    <img src=${pocky.img} alt="pocky" class="pic">
                    <p class="price">$${pocky.price.toFixed(2)}</p>
                    <button class="deleteButton">Remove from cart</button>
                </div>
            `;
            total += pocky.price;
            container.innerHTML += html;
        });
        productsTotal.style.display = 'inline-block';
        productsTotal.innerHTML = `Your total is $${total.toFixed(2)}`;
    }
});
