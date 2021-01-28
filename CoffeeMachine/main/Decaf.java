package CoffeeMachine.main;

public class Decaf extends Coffee {

    int water = 5;
    int sugar = 10;
    int milk = 13;
    int coffee = 20;

    Decaf() {
        super(CoffeeType.DECAF);
    }

    @Override
    boolean checkForIngredients(CoffeeMachineImpl coffeeMachine) {
        return (coffeeMachine.getWater() >= water) && (coffeeMachine.getSugar() >= sugar) && (coffeeMachine.getMilk() >= milk) && (coffeeMachine.getCoffee() >= coffee);
    }

    @Override
    void getCoffee(CoffeeMachineImpl coffeeMachine) throws Exception {
        if(checkForIngredients(coffeeMachine)) {
            coffeeMachine.setMilk(coffeeMachine.getMilk() - milk);
            coffeeMachine.setCoffee(coffeeMachine.getCoffee() - coffee);
            coffeeMachine.setSugar(coffeeMachine.getSugar() - sugar);
            coffeeMachine.setWater(coffeeMachine.getWater() - water);
            System.out.println("DECAF SERVED HOT just for you!");
        }
        else{
            throw new Exception("decaf not available");
        }
    }
}
