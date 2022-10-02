const App = require("./myApp.js");
const Client = require("./Client.js");
const { client_id, guild_id, token, channel_id } = require('./config.json');

const client = new Client();
const app = new App(client);

app.start_listen();

app.get_request();

client.login(token);



