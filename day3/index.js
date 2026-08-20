const products = document.getElementById("products");
const cart = document.getElementById("cart");
const total = document.getElementById("total");
const cartCount = document.getElementById("cartCount");

let cartItems = [];

const getProductsData = async () => {

    const res = await fetch("https://dummyjson.com/products");

    const data = await res.json();

    const productsData = data.products;

    productsData.map((product) => {

        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = product.thumbnail;

        const title = document.createElement("h2");
        title.innerText = product.title;

        const price = document.createElement("h3");
        price.innerText = "$" + product.price;

        const button = document.createElement("button");
        button.innerText = "Add to Cart";

        button.addEventListener("click", () => {
            addToCart(product);
        });

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(button);

        products.appendChild(div);
    });
};


const addToCart = (product) => {

    const existingProduct = cartItems.find(
        (item) => item.id === product.id
    );

    if (existingProduct) {
        existingProduct.quantity++;
    } 
    else {
        cartItems.push({
            ...product,
            quantity: 1
        });
    }

    displayCart();
};


const displayCart = () => {

    cart.innerHTML = "";

    let totalPrice = 0;
    let totalItems = 0;

    cartItems.map((product) => {

        const div = document.createElement("div");

        const title = document.createElement("h3");
        title.innerText = product.title;

        const price = document.createElement("p");
        price.innerText =
            "Price: $" + product.price;

        const quantity = document.createElement("p");
        quantity.innerText =
            "Quantity: " + product.quantity;

        const increaseBtn = document.createElement("button");
        increaseBtn.innerText = "+";

        increaseBtn.addEventListener("click", () => {
            product.quantity++;
            displayCart();
        });


        const decreaseBtn = document.createElement("button");
        decreaseBtn.innerText = "-";

        decreaseBtn.addEventListener("click", () => {

            if (product.quantity > 1) {
                product.quantity--;
            } 
            else {
                cartItems = cartItems.filter(
                    (item) => item.id !== product.id
                );
            }

            displayCart();
        });


        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";

        removeBtn.addEventListener("click", () => {

            cartItems = cartItems.filter(
                (item) => item.id !== product.id
            );

            displayCart();
        });


        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(quantity);
        div.appendChild(increaseBtn);
        div.appendChild(decreaseBtn);
        div.appendChild(removeBtn);

        cart.appendChild(div);

        totalPrice += product.price * product.quantity;
        totalItems += product.quantity;
    });

    total.innerText = totalPrice.toFixed(2);

    cartCount.innerText = totalItems;
};


getProductsData();