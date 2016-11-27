import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello2.onCreated(function hello2OnCreated() {
  // counter starts at 0
  this.counter2 = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello2.helpers({
  counter2() {
    return Template.instance().counter2.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.hello2.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter2.set(instance.counter2.get() + 1);
  },
});
