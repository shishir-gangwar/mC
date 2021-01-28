package CoffeeMachine.main;

public interface CoffeeMachine {
    void makeCoffee(CoffeeType coffeeType) throws Exception;
    void addIngredient(IngredientType ingredientType, int units);
    int getIngredient(IngredientType ingredientType);
    void initialise();
}
