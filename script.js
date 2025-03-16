function payWithFlutterwave() {
    // Get user input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const amount = document.getElementById("amount").value;

    // Validate inputs
    if (!name || !email || !amount) {
        alert("Please fill in all fields.");
        return;
    }

    // Initialize Flutterwave
    FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-20cf0b96e5dd0cc3d58e6b33b5f7abbe-X", // Replace with your Flutterwave public key
        tx_ref: "TX_REF_" + Date.now(), // Unique transaction reference
        amount: amount,
        currency: "NGN", // Currency (Naira)
        customer: {
            email: email,
            name: name,
        },
        callback: function (response) {
            // Handle payment response
            console.log("Payment response:", response);
            if (response.status === "successful") {
                //alert("Payment successful! Thank you for your purchase.");
                // Redirect or perform other actions here
                window.location.href = "payment-successful.html"; // Replace with your success page URL
            } else {
                alert("Payment failed. Please try again.");
            }
        },
        onclose: function () {
            // Handle modal closure
            console.log("Payment modal closed.");
        },
    });
}
