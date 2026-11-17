const STAFF_DISCOUNT_RATE = 0.30;

const DISCOUNT_RATES = {
    regular: 0,
    member: 0.10,
    vip: 0.20,
    staff: STAFF_DISCOUNT_RATE
};

function sendReceipt(email, total) {
    try {
        console.log("Email receipt to:", email);
        console.log("Your total is", total);
    } catch (error) {
        console.error("Failed to send receipt:", error);
    }
}

function processOrder(customerType, items, email) {
    let total = 0;

    for (const item of items) {
        total += item.price * item.qty;
    }

    const discount = DISCOUNT_RATES[customerType] ?? 0;
    total = total * (1 - discount);

    total += total * 0.0825;

    sendReceipt(email, total);

    console.log("Receipt:", total);
    return total;
}

module.exports = { processOrder };
