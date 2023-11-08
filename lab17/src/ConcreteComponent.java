public class ConcreteComponent implements Component{
    private Mediator mediator;

    public ConcreteComponent(Mediator mediator){
        this.mediator = mediator;
    }
    @Override
    public void send(String message) {
        System.out.println("Sending message: " + message);
        mediator.send(message, this);
    }

    @Override
    public void receive(String message) {
        System.out.println("Received message: " + message);
    }
}
