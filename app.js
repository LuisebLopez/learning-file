const EventsClass = require("events");
const events = new EventsClass();

events.on("logging", (arg) => {
  console.log(`mensaje aqui: ${JSON.stringify(arg, null, 2)}`);
});

events.emit("logging", { id: 1, data: "ahora si, un mensaje bueno" });
