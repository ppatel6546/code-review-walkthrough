const { processOrder } = require("./orders");

test("regular customer pays full price plus tax", () => {
    const items = [{ price: 10, qty: 2 }];

    const total = processOrder(
        "regular", items, "test@example.com"
    );

    expect(total).toBeCloseTo(21.65);
});

test("member customer gets 10% discount", () => {
    const items = [{ price: 10, qty: 2 }];

    const total = processOrder(
        "member", items, "test@example.com"
    );

    expect(total).toBeCloseTo(19.485);
});

test("staff customer gets 30% discount", () => {
    const items = [{ price: 100, qty: 1 }];

    const total = processOrder(
        "staff", items, "staff@example.com"
    );

    expect(total).toBeCloseTo(75.775);
});

