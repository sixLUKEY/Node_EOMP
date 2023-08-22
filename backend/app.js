import express from "express";
import path from "path"
import { config } from "dotenv";
config();
import { errorHandling } from "./middleware/errorHandling.js"
// import cors
import cors from "cors";
 
import bodyParser from "body-parser";
 import session from "express-session"
// import routes
import Router from "./routes/routes.js";
  
// init express
const app = express();

  
// use express json
app.use(express.json());
  
// use cors
app.use(cors());

//Session 
app.use(session({
	secret: process.env.session_secret,
	resave: true,
	saveUninitialized: true
}));

app.use(express.static("./static"));
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
// use router
app.use(Router);
app.use(errorHandling);

app.get('/', (req, res)=>{
    res.status(200);
    res.sendFile(path.resolve("./static/html/index.html"));
});
app.listen(5000, () => console.log('Server running at http://localhost:5000'));