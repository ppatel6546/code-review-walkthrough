const DISCOUNT_RATES = {
    regular: 0,
    member: 0.10,
    vip: 0.20,
    staff: 0.30
};

function processOrder(customerType, items, email) {
    let total = 0;

    for (const item of items) {
        total += item.price * item.qty;
    }

    const discount = DISCOUNT_RATES[customerType] ?? 0;
    total = total * (1 - discount);

    total += total * 0.0825;

    try {
        console.log("Email receipt to:", email);
        console.log("Your total is", total);
    } catch (error) {
    }

    console.log("Receipt:", total);
    return total;
}

module.exports = { processOrder };
