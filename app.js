const EventsClass = require("events");
const events = new EventsClass();

events.on("logging", (arg) => {
  console.log(`mensaje bueno aqui: ${JSON.stringify(arg, null, 2)}`);
});

events.emit("logging", { id: 1, data: "esto recibe un cambio online" });
