  // Function to update cart totals
  function updateCart() {
    const quantity = document.querySelectorAll(".quantity");
    let total = 0;
    
    // Calculate item totals
    quantity.forEach((input, index) => {
      const unitPrice = parseFloat(input.getAttribute('data-price'));
      const itemTotal = unitPrice * input.value;
      total += itemTotal;
      
      // Update item total on the page
      document.getElementById("itemTotal" + index).innerText = "₹" + itemTotal.toFixed(2);
    });
    
    // Update Order Summary
    const shippingFee = 5;
    const tax = total * 0.1;
    const grandTotal = total + shippingFee + tax;
    document.getElementById("subtotal").innerText = "₹" + total.toFixed(2);
    document.getElementById("shipping").innerText = "₹" + shippingFee.toFixed(2);
    document.getElementById("tax").innerText = "₹" + tax.toFixed(2);
    document.getElementById("grandTotal").innerText = "₹" + grandTotal.toFixed(2);
  }

  // Remove an item from the cart
  function removeItem(index) {
    const row = document.getElementById("cartRow" + index);
    row.remove();
    updateCart(); // Recalculate the total after removing the item
  }