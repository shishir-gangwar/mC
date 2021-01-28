package CoffeeMachine.main;

public enum IngredientType {
    SUGAR("sugar"), WATER("water"), MILK("milk"), COFFEE("coffee");
    String type;

    IngredientType(String type){
        this.type = type;
    }
}
