const express = require('express');
const routes = require('./routes/routes');
const m = require('./controllers/morgan_config');
const port = 8000;
const app = express();
const router = express.Router();
routes(router);
//
app.use(m);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/', router);
app.use(express.static('HTML'));
app.set('view engine', 'pug');
//
app.listen(port, function(){
	console.log("Listening " + port);
});
