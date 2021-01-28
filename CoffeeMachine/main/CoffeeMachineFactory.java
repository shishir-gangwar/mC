package CoffeeMachine.main;

public class CoffeeMachineFactory {
    public static CoffeeMachine getCoffeeMachine(){
        CoffeeMachine coffeeMachine = new CoffeeMachineImpl();
        return coffeeMachine;
    }
}
