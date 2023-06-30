export default class State {
  constructor(initialState) {
    this.state = initialState;
    this.listeners = [];
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = newState;
    for (const listener of this.listeners) {
      listener(newState);
    }
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      // Unsubscribe function
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }
}
