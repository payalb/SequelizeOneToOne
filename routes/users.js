const express= require("express")
const app = express();
const router = express.Router();
const UserRepository = require("../database/UserRepository")
const db = require("../models")

router.route("/").post(async (req,resp)=>{
    var u = req.body ;
    UserRepository.save(u).then((data)=> 
       resp.send(data)
    ).catch((err)=> console.log(err))
})



module.exports= router