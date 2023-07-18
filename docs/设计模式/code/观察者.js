class Subject {
  constructor() {
    this.observers = [];
  }
  // add
  add(observer) {
    this.observers.push(observer);
  }
  // delete
  remove(observer) {
    let index = this.observers.findIndex((ele) => ele === observer);
    index > -1 && this.observers.splice(index, 1);
  }
  // notify通知
  notify() {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
}
class Observer {
  constructor(name) {
    this.name = name;
  }
  // update
  update() {
    // ...observer需要更新的操作
  }
}
let subject = new Subject();
let obser1 = new Observer("Observer1");
let obser2 = new Observer("Observer2");
subject.add(obser1);
subject.add(obser2);
subject.notify();
