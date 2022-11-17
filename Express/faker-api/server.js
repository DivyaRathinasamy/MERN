const express = require("express");
const {faker} = require("@faker-js/faker");
const app = express();
const port = 8000;


class User{
    constructor(){
        this._id=faker.database.mongodbObjectId();
        this.firstname=faker.name.firstName();
        this.lastname=faker.name.lastName();
        this.email=faker.internet.email();
        this.phoneNumber=faker.phone.number();
        this.password=faker.internet.password();
    }
}

class Company{
    constructor(){
        this._id=faker.database.mongodbObjectId();
        this.name= faker.company.bs();
        this.street=faker.address.streetAddress();
        this.city=faker.address.cityName();
        this.state=faker.address.state();
        this.zipcode=faker.address.zipCode();
        this.country=faker.address.country();
    }
}

app.get("/api/users/new", (req,res)=>{
    let newUser = new User();
    res.json({
        results: newUser
    })
})

app.get("/api/companies/new", (req,res)=>{
    let newCompany =new Company();
    res.json({
        results: newCompany
    })
})

app.get("/api/user/company",(req,res)=>{
    let newUser =new User();
    let newCompany = new Company();
    res.json({
       
        results:newUser,newCompany
    })

})








app.listen( port, () => console.log(`Listening on port: ${port}`) );