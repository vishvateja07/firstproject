document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      const name = button.getAttribute('data-name');
      const price = parseFloat(button.getAttribute('data-price'));
      const image = button.getAttribute('data-image');
  
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingItem = cart.find(item => item.name === name);
  
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ name, price, image, quantity: 1 });
      }
  
      localStorage.setItem('cart', JSON.stringify(cart));
      alert(`${name} has been added to your cart!`);
    });
  });
  