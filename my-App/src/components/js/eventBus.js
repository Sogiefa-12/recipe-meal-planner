
const eventBus = {
    listeners: {},
  
    subscribe(topic, callback) {
      if (!this.listeners[topic]) {
        this.listeners[topic] = [];
      }
      this.listeners[topic].push(callback);
    },
  
    publish(topic, data) {
      if (this.listeners[topic]) {
        this.listeners[topic].forEach((callback) => callback(data));
      }
    },
  };
  
  export default eventBus;