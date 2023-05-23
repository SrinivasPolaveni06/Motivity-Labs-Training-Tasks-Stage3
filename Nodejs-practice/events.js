//

//                                              Events in Node.js                                                           //

// -> Node.js is perfect for event-driven applications.

// -> Every action on a computer is an event. Like when a connection is made or a file is opened.

// -> Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:

const EventEmitter = require("events");
// var eventEmitter = new events.EventEmitter();      -> You can assign event handlers to your own events with the EventEmitter object
const eventEmitter = new EventEmitter();
eventEmitter.on("eventName", function (a, b) {

  // -> Assign the event handler function to an event:
  console.log("Event is Fired");
  console.log(a + b);
});
eventEmitter.emit("eventName", 3, 2); // -> To fire an event, use the emit() method.
