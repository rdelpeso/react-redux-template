class Counter {
  store = {
    counter: 0
  }

  count() {
    return this.store.counter;
  }

  addOne() {
    this.store.counter += 1;
    return this.store.counter;
  }
}

const store = new Counter();
export default store;
