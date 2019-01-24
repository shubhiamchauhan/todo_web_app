const http = require('http');
const app = require('./src/app.js');

const PORT = process.env.PORT || 8002;

let server = http.createServer(app);
server.listen(PORT, () => console.log('listening on ', PORT));