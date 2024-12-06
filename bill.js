window.onload = function() {
    const selectedItems = JSON.parse(localStorage.getItem("selectedItems"));
    if (selectedItems && selectedItems.length > 0) {
        let billDetails = '<ul>';
        let totalBill = 0;

        selectedItems.forEach(item => {
            billDetails += `<li>${item.name}: ${item.quantity} kg x ₹${item.pricePerKg} = ₹${item.total}</li>`;
            totalBill += item.total;
        });

        billDetails += `</ul><p><strong>Total Bill: ₹₹{totalBill}</strong></p>`;
        document.getElementById("bill-container").innerHTML = billDetails;
    } else {
        document.getElementById("bill-container").innerHTML = "<p>No items selected.</p>";
    }
}