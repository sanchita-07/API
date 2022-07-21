const Userdb = require('./model');

//create and save new user
exports.create = (req,res) => {

const {name, email, password} = req.body;

//validate request
if(!req.body){
   return res.status(400).send({message: "Field Required!"});
}

//new user
const user = new Userdb({name,email,password})

//save user in the database
user.save(user)
.then(data =>{
    res.json({message : "Registered Successfully!"});
})

.catch(err =>{
    res.status(400).send({message: err.message});
})
}

//retrive user
exports.read = (req,res) => {

    if(req.query.id){
        const id = req.query.id;
        Userdb.findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({message: `User with id ${id} not found`})
            }
            else
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({message: `Error user with id ${id}`})
        })
    }
    Userdb.find()
    .then(user =>{
        res.send(user)
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Error occurred while retriving user information"
        })
    })

}

//update a new identified user by user id
exports.update = (req,res) => {
if(!req.body){
    return res.status(400).send({message: "Data to Update can not be empty"})
}
const id = req.params.id;
Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify: false})
.then(data =>{
    if(!data){
        res.status(404).send({message: `Cannot Update user with ${id}, maybe user not found!`})}
        else{
            res.send(data)
        }
    }) 
.catch(err =>{
    res.status(500).send({message: "Error Update user information"})
})
}

//delete a user with specified user id in the request
exports.delete = (req,res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
    .then(data =>{
        if(!data){
            res.status(404).send({message:`Cannot Delete User with id ${id}, Data is incomplete.`})
        }
        else{
            res.send({
                message:"User was deleted successfully!"
            })
        }
    })
.catch(err =>{
    res.status(500).send({
        message: `Could not delete User with id= ${id}`
    })
})
}