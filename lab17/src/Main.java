public class Main {
    public static void main(String[] args) {
        ConcreteMediator mediator = new ConcreteMediator();

        Component component1 = new ConcreteComponent(mediator);
        Component component2 = new ConcreteComponent(mediator);
        Component component3 = new ConcreteComponent(mediator);

        mediator.registerComponent(component1);
        mediator.registerComponent(component2);
        mediator.registerComponent(component3);

        component1.send("Hello");
        component2.send("Hi");
    }
}