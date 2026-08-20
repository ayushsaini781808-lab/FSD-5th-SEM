const products = document.getElementById('products');

const getproductdata = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    const productsdata = data.products;

    productsdata.forEach((product) => {

        const div = document.createElement('div');
        div.className = 'product-card';

        const img = document.createElement('img');
        img.src = product.thumbnail;
        img.alt = product.title;

        const title = document.createElement('h3');
        title.innerText = product.title;
        const price = document.createElement('p');
        price.innerText = `$${product.price.toFixed(2)}`;
        const incrementBtn = document.createElement('button');
        incrementBtn.innerText = '+';
        const decrementBtn = document.createElement('button');
        decrementBtn.innerText = '-';
        const quantity = document.createElement('span');
        quantity.innerText = '1';

        let count = 1;
        incrementBtn.addEventListener('click', () => {
            count += 1;
            quantity.innerText = String(count);
        });

        decrementBtn.addEventListener('click', () => {
            if (count > 1) {
                count -= 1;
                quantity.innerText = String(count);
            }
        });

        div.appendChild(img);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(decrementBtn);
        div.appendChild(quantity);
        div.appendChild(incrementBtn);

        products.appendChild(div);
        });
    };

getproductdata();