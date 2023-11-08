public interface Mediator {
    void registerComponent(Component component);

    void send(String message, Component sender);
}
