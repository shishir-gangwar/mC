package CoffeeMachine.main;

public class CoffeeUser {
    public static void main(String[] args){
        CoffeeMachine coffeeMachine = CoffeeMachineFactory.getCoffeeMachine();
        coffeeMachine.initialise();
        try {
            coffeeMachine.makeCoffee(CoffeeType.DECAF);
        } catch (Exception e) {
            e.printStackTrace();
        }
        coffeeMachine.addIngredient(IngredientType.COFFEE,100);
        coffeeMachine.addIngredient(IngredientType.MILK,100);
        coffeeMachine.addIngredient(IngredientType.SUGAR,100);
        coffeeMachine.addIngredient(IngredientType.WATER,100);
        try {
            coffeeMachine.makeCoffee(CoffeeType.DECAF);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
