const express= require("express")
const app = express();
const router = express.Router();
const userroutes = require("./routes/users")
const db = require("./models")
require("dotenv").config();
const PORT = process.env.port || 4000;

app.use(express.json());

db.sequelize.sync({force: true});

app.use("/users", userroutes);

app.listen(PORT, ()=> {
    console.log(`server running at ${PORT}`)
});