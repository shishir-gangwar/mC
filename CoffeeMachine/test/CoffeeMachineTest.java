package CoffeeMachine.test;

import CoffeeMachine.main.*;
import org.junit.*;

public class CoffeeMachineTest {

    private static CoffeeMachine coffeeMachine;

    @BeforeClass
    public static void setup(){
        coffeeMachine = CoffeeMachineFactory.getCoffeeMachine();
    }

    @AfterClass
    public static void teardown(){
        coffeeMachine = null;
    }

    @Test
    public void testtest(){
        Assert.assertEquals(coffeeMachine.getIngredient(IngredientType.COFFEE),0);
    }

    @Test(expected = Exception.class)
    public void testDecaf() throws Exception {
        coffeeMachine.makeCoffee(CoffeeType.DECAF);
    }
}
