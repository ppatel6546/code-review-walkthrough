
import java.util.List;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class OrdersTest {

    @Test
    void regularCustomerPaysNoDiscount() {
        List<Item> items = List.of(new Item(10.0, 2));

        double total = Orders.processOrder(
            "regular", items, "a@b.com"
        );

        assertEquals(21.65, total, 0.001);
    }

    @Test
    void memberGetsTenPercentOff() {
        List<Item> items = List.of(new Item(10.0, 2));

        double total = Orders.processOrder(
            "member", items, "a@b.com"
        );

        assertEquals(19.485, total, 0.001);
    }
}
