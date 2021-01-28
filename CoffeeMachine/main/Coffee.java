package CoffeeMachine.main;

public abstract class Coffee {

    CoffeeType coffeeType;


    Coffee(CoffeeType coffeeType){
        this.coffeeType = coffeeType;
    }


    abstract boolean checkForIngredients(CoffeeMachineImpl coffeeMachine);

    abstract void getCoffee(CoffeeMachineImpl coffeeMachine) throws Exception;
}
