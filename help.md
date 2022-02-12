/*function User(firstname, lastname, email,password){
    this.firstname= firstname
    this.lastname= lastname
    this.email= email
    this.password= password
    this.age= 0
    this.location = ""
}*/
var u = new User("a", "b", "c", "d");

/*app.route("/users" ).get((req, resp)=> {
    resp.send("get called")
}).post((req, resp)=> {
    resp.send("post called")
}) ;  

*/


create a new Tutorial: create(object)
find a Tutorial by id: findByPk(id)
get all Tutorials: findAll()
update a Tutorial by id: update(data, where: { id: id })
remove a Tutorial: destroy(where: { id: id })
remove all Tutorials: destroy(where: {})
find all Tutorials by title: findAll({ where: { title: ... } })

class Square{

    constructor(width){
        this.width = width
        this.height= width
    }

    //getter : get followed by property
    get area(){
        return this.width * this.height
    }
    
    //setter: 
    set area(area){
        this.width = Math.sqrt(area);
        this.height = this.width
    }
}

var sq= new Square(20);
console.log(sq.area);
sq.area= 40;

User.hasOne(Passport)
//User can exist without Passport so fkey column on Passport table

User.hasOne(Passport, {foreignkey: "uid"})