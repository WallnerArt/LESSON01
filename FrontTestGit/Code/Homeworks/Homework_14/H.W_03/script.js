const products = [
    { name: "HP", price: 4000, processor: "Intel i5", graphicsCard: "Nvidia GTX 1650", image: "./img/images1.jpg" },
    { name: "Lenovo", price: 5000, processor: "AMD Ryzen 7", graphicsCard: "AMD Radeon RX 5600M", image: "./img/images2.jpg" },
    { name: "SAMSUNG", price: 6000, processor: "Intel i7", graphicsCard: "Nvidia RTX 3060", image: "./img/images3.jpg" },
    { name: "ACER", price: 7000, processor: "AMD Ryzen 5", graphicsCard: "AMD Radeon RX 5500M", image: "./img/images4.jpg" },
    { name: "ASUS", price: 8000, processor: "Intel i5", graphicsCard: "Nvidia GTX 1660 Ti", image: "./img/images5.jpg" },
    { name: "MacBook", price: 9000, processor: "Intel i9", graphicsCard: "Nvidia RTX 3080", image: "./img/images6.jpg" }
  ];
  function renderProducts(productsArray) {
    const productsDiv = document.getElementById("products");
    productsDiv.innerHTML = '';
    productsArray.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
  
      const image = document.createElement('img');
      image.src = product.image;
      image.alt = product.name;
      productDiv.appendChild(image);
  
      const productInfoDiv = document.createElement('div');
      productInfoDiv.classList.add('product-info');
  
      const name = document.createElement('p');
      name.textContent = `Модель: ${product.name}`;
      productInfoDiv.appendChild(name);
  
      const price = document.createElement('p');
      price.textContent = `Цена: $${product.price}`;
      productInfoDiv.appendChild(price);
  
      const processor = document.createElement('p');
      processor.textContent = `Процессор: ${product.processor}`;
      productInfoDiv.appendChild(processor);
  
      const graphicsCard = document.createElement('p');
      graphicsCard.textContent = `Графическая карта: ${product.graphicsCard}`;
      productInfoDiv.appendChild(graphicsCard);
  
      productDiv.appendChild(productInfoDiv);
  
      productsDiv.appendChild(productDiv);
    });
  }
  
  function filterProducts() {
    const maxPrice = parseFloat(document.getElementById("priceFilter").value);
    const filteredProducts = products.filter(product => product.price <= maxPrice);
    renderProducts(filteredProducts);
  }
  
  window.onload = function () {
    renderProducts(products);
  };