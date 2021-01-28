package CoffeeMachine.main;

public class CoffeeMachineImpl implements CoffeeMachine {
    private int water;
    private int milk;
    private int sugar;
    private int coffee;

    @Override
    public void makeCoffee(CoffeeType coffeeType) throws Exception {
        switch (coffeeType.type){
            case "decaf":
                Coffee coffee = new Decaf();

                try {
                    coffee.getCoffee(this);
                } catch (Exception e) {
                    System.out.println(e.getMessage());
                    throw e;
                }
                break;
        }
    }

    public void setWater(int water) {
        this.water = water;
    }

    public void setMilk(int milk) {
        this.milk = milk;
    }

    public void setSugar(int sugar) {
        this.sugar = sugar;
    }

    public void setCoffee(int coffee) {
        this.coffee = coffee;
    }

    public int getWater() {
        return water;
    }

    public int getMilk() {
        return milk;
    }

    public int getSugar() {
        return sugar;
    }

    public int getCoffee() {
        return coffee;
    }

    @Override
    public void addIngredient(IngredientType ingredientType, int units) {
        switch (ingredientType.type){
            case "sugar" : this.sugar = units; break;
            case "milk" : this.milk = units; break;
            case "coffee": this.coffee = units; break;
            case "water": this.water = units; break;
        }
    }

    @Override
    public int getIngredient(IngredientType ingredientType) {
        switch (ingredientType.type){
            case "sugar" : return this.sugar;
            case "milk" : return this.milk;
            case "coffee": return this.coffee;
            case "water": return this.water;
        }
        return 0;
    }
    @Override
    public void initialise() {
        this.water = this.milk = this.sugar = this.coffee = 0;
    }
}
