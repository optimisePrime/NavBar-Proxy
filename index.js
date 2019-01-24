const Express = require('express');
const Path = require('path');
const Port = 3000;

const app = Express();

app.use('/:productId', Express.static(Path.join(__dirname, 'public')));

app.listen(Port, () => { console.log('listening on port ' + Port)});
