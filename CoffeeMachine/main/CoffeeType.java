package CoffeeMachine.main;

public enum CoffeeType {
    LATTE("latte"), ESPRESSO("espresso"), DECAF("decaf");

    String type;
    CoffeeType(String type) {
        this.type = type;
    }
}
