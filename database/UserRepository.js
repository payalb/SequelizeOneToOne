const db = require("../models")

class UserRepository{

    static save(u){
        var user = db.User.build(u);
        return user.save().then((data)=>  data);
    }
}

module.exports = UserRepository;