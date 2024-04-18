// Массив чисел
const numbers = [1, 2, 6, 8, 3, 10, 4, 7];

// Функция для фильтрации чисел больше 5
function filterNumbers(arr) {
  return arr.filter(num => num > 5);
}

// Отображение чисел больше 5
function displayNumbers() {
  const filteredNumbers = filterNumbers(numbers);
  const numbersList = document.getElementById('numbersList');
  filteredNumbers.forEach(num => {
    const li = document.createElement('li');
    li.textContent = num;
    numbersList.appendChild(li);
  });
}

// Массив продуктов
const products = [
  { name: 'Ноутбук', price: 6000, manufacturer: 'ABC Electronics' },
  { name: 'Смартфон', price: 800, manufacturer: 'XYZ Tech' },
  { name: 'Камера', price: 4500, manufacturer: 'Camera Inc' },
  { name: 'Планшет', price: 3000, manufacturer: 'Gadget Co' },
  { name: 'Телевизор', price: 7000, manufacturer: 'Screen Masters' }
];

// Функция для фильтрации продуктов с ценой выше 5000
function filterProducts(arr) {
  return arr.filter(product => product.price > 5000);
}

// Отображение продуктов с ценой выше 5000
function displayProducts() {
  const filteredProducts = filterProducts(products);
  const productsList = document.getElementById('productsList');
  filteredProducts.forEach(product => {
    const li = document.createElement('li');
    li.textContent = `${product.name} - ${product.price} - ${product.manufacturer}`;
    productsList.appendChild(li);
  });
}

// Отображение отфильтрованных чисел и продуктов при загрузке страницы
window.onload = function() {
  displayNumbers();
  displayProducts();
};
