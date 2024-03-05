// window.alert("Hello World");
document.write("oh, and if i don't see ya");
const actor = {};
actor.firstName = "Jim";
actor.lastName = "Carrey";
actor.getFullName = function() { return this.firstName + " " + this.lastName };

console.log(actor.getFullName());
