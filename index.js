//const http = require ('http'); //this packagae helps us do all the internet stuff  // http is an object that points to the constructor of  http package
//const hostname = "localhost"; //127.0.0.1 to loop back and simualte what happens on the internet

const express = require ('express'); //express uses node
const port = 8000;
const app = express();
const router = express.Router();
const routes = require ('./routes/routes');
routes(router);

app.use(express.json()); //use the json technology to read the infos
app.use(express.urlencoded({extended:false})); //to see the values when returned



/*app.get('/', function(request, response){
    response.send("Hello from Palmdale !!- express") // send to construct the string and send it
});
*/
//arrow function instead of function


app.use ('/', router)
app.listen(port, ()=> console.log("Listening " + port)); //lambda expression or arrow funtion instead of function instead of putting a funtion with no parameters

/*const server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Hello from Palmdale");
    response.end();
}); //server to serve files from 


server.listen(port, hostname);
*/
// node modules file is created after installing the express package
