// Function to handle payment method selection
function selectPaymentMethod(method) {
    if (method === 'cod') {
        // Hide the QR code and show the COD message
        document.getElementById('qr-code').style.display = 'none';
        document.getElementById('cod-message').style.display = 'block';
    } else if (method === 'online') {
        // Show the QR code for online payment
        generateQRCode();
        document.getElementById('qr-code').style.display = 'block';
        document.getElementById('cod-message').style.display = 'none';
    }
}

// Function to generate a QR code for online payment
function generateQRCode() {
    const paymentURL = "https://example-payment-gateway.com/pay?amount=100";  // Mock URL for demonstration
    QRCode.toCanvas(document.getElementById('qrcode'), paymentURL, function (error) {
        if (error) console.error(error);
        console.log("QR Code generated!");
    });
}