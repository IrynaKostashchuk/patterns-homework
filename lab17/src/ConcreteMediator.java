import java.util.ArrayList;
import java.util.List;

public class ConcreteMediator implements Mediator{
    private List<Component> components = new ArrayList<>();
    @Override
    public void registerComponent(Component component) {
        components.add(component);

    }

    @Override
    public void send(String message, Component sender) {
        for (Component component: components) {
            if (component != sender) {
                component.receive(message);
            }
        }
    }
}
