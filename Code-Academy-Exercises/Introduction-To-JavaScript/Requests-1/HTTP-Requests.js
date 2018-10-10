console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');


// javascript uses an event loop as an asynchronous language to dictate the timeline in which code is executed.
// this provides control over how and what is loaded onto a browser page, and when.
