fetch('https://dummyjson.com/products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayCategories(data.products);
        displayProducts(data.products);
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
        document.getElementById('products-container').textContent = 'Ошибка загрузки продуктов';
    });



function displayCategories(products) {
    const categories = Array.from(new Set(products.map(product => product.category)));
    const container = document.getElementById('categories-container');
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        categoryDiv.textContent = category;
        categoryDiv.onclick = () => filterProducts(category, products);
        container.appendChild(categoryDiv);
    });
}

function displayProducts(products) {
    const container = document.getElementById('products-container');
    container.innerHTML = ''; // Очищаем контейнер перед добавлением новых продуктов

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}" style="width:100%; height:auto; border-radius: 8px;">
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p>Цена: $${product.price}</p>
        `;
        container.appendChild(productDiv);
    });
}

function filterProducts(category, allProducts) {
    const filteredProducts = allProducts.filter(product => product.category === category);
    displayProducts(filteredProducts);
}
