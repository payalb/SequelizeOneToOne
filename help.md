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