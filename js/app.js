document.addEventListener('DOMContentLoaded', async function() {
  try {
    // Fetch product data from the server
    const response = await fetch('products.php');
    const products = await response.json();

    const productsContainer = document.getElementById('products');

    // Loop through each product and create the product listing
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.className = 'product';

      const imageElement = document.createElement('img');
      imageElement.src = product.image;
      productElement.appendChild(imageElement);

      const productInfoElement = document.createElement('div');
      productInfoElement.className = 'product-info';

      const nameElement = document.createElement('h3');
      nameElement.textContent = product.title;
      productInfoElement.appendChild(nameElement);

      const priceElement = document.createElement('p');
      priceElement.textContent = '$' + product.price;
      productInfoElement.appendChild(priceElement);

      const addButton = document.createElement('button');
      addButton.textContent = 'Add to Cart';
      addButton.addEventListener('click', function() {
        addToCart(product);
      });
      productInfoElement.appendChild(addButton);

      productElement.appendChild(productInfoElement);

      productsContainer.appendChild(productElement);
    });
  } catch (error) {
    console.error(error);
  }
});

  function addToCart(product) {
    const cart = document.getElementById('cart');
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    
    const imageElement = document.createElement('img');
    imageElement.src = product.image;
    cartItem.appendChild(imageElement);
    
    const cartItemInfo = document.createElement('div');
    cartItemInfo.className = 'cart-item-info';
    
    const nameElement = document.createElement('p');
    nameElement.textContent = product.title;
    cartItemInfo.appendChild(nameElement);
    
    const priceElement = document.createElement('p');
    priceElement.textContent = '$' + product.price;
    cartItemInfo.appendChild(priceElement);
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function() {
      cartItem.remove();
    });
    cartItemInfo.appendChild(removeButton);
    
    cartItem.appendChild(cartItemInfo);
    
    cart.appendChild(cartItem);
  }
  