function processOrder(customerType, items, email) {
    let total = 0;

    for (const item of items) {
        total += item.price * item.qty;
    }

    if (customerType === "regular") {
        total = total;
    } else if (customerType === "member") {
        total *= 0.9;
    } else if (customerType === "vip") {
        total *= 0.8;
    }

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
