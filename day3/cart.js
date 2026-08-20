const cartProducts = document.getElementById("cart-products");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function showProducts() {

    cartProducts.innerHTML = "";

    if (cart.length === 0) {
        cartProducts.innerHTML = "<h2>Your cart is empty</h2>";
        return;
    }

    cart.forEach((product) => {

        const div = document.createElement("div");
        div.className = "cart-card";

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.title;

        const title = document.createElement("h2");
        title.innerText = product.title;

        const price = document.createElement("p");
        price.innerText = "Price: $" + product.price;

        const quantity = document.createElement("p");
        quantity.innerText = "Quantity: " + product.quantity;

        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";

        removeBtn.addEventListener("click", () => {

            cart = cart.filter(
                (item) => item.id !== product.id
            );

            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );

            showProducts();
        });

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(quantity);
        div.appendChild(removeBtn);

        cartProducts.appendChild(div);
    });
}

showProducts();