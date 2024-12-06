const selectedItems = [];

function addItem(itemName, quantityId, pricePerKg) {
    const quantity = parseInt(document.getElementById(quantityId).value);
    if (quantity === 0) return; // Skip if quantity is 0

    // Add selected item to the list
    const item = {
        name: itemName,
        quantity: quantity,
        pricePerKg: pricePerKg,
        total: quantity * pricePerKg
    };

    selectedItems.push(item);
    alert(`${quantity} kg of ${itemName} added to the sell list.`);
}

function generateBill() {
    if (selectedItems.length === 0) {
        alert("No items selected to sell.");
        return;
    }

    // Save selected items to localStorage
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));

    // Redirect to the bill page
    window.location.href = "bill1.html";
}