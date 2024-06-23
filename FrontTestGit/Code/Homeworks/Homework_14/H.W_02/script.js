const products = [
    { name: "Ноутбук 1", price: 4000, manufacturer: "Производитель 1", processor: "Intel Core i5", graphicsCard: "Nvidia GTX 1650" },
    { name: "Ноутбук 2", price: 6000, manufacturer: "Производитель 2", processor: "AMD Ryzen 7", graphicsCard: "AMD Radeon RX 5600M" },
    { name: "Ноутбук 3", price: 5000, manufacturer: "Производитель 3", processor: "Intel Core i7", graphicsCard: "Nvidia RTX 2060" },
    { name: "Ноутбук 4", price: 7000, manufacturer: "Производитель 4", processor: "AMD Ryzen 5", graphicsCard: "Nvidia GTX 1660 Ti" },
    { name: "Ноутбук 5", price: 8000, manufacturer: "Производитель 5", processor: "Intel Core i3", graphicsCard: "Intel UHD Graphics" },
    { name: "Ноутбук 6", price: 9000, manufacturer: "Производитель 6", processor: "AMD Ryzen 3", graphicsCard: "AMD Radeon RX Vega 8" }
];

function renderProducts() {
    const priceFilter = document.getElementById('priceFilter').value;
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    products.forEach(product => {
        if (product.price <= priceFilter || !priceFilter) {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>Цена: ${product.price}</p>
                <p>Производитель: ${product.manufacturer}</p>
                <p>Процессор: ${product.processor}</p>
                <p>Графическая карта: ${product.graphicsCard}</p>
            `;
            productsContainer.appendChild(productDiv);
        }
    });
}

document.getElementById('priceFilter').addEventListener('input', renderProducts);
renderProducts();
