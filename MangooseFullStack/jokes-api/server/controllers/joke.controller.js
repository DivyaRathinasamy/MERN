const Joke = require("../models/joke.model");


module.exports.helloWorld = (req,res)=>{
    res.json({greeting:"Hello All!"});
}



module.exports.showAllJokes = (req,res) =>{
    Joke.find()
    .then(allBooks => {
        res.json({results: allBooks})
    })
    .catch(err => {
        res.json({message: 'Something went wrong!!', error: err })
    })

}

module.exports.createJokes = (req,res) =>{
    Joke.create(req.body)
    .then(newJoke =>{
        res.json({results: newJoke})
    })
    .catch(err => {
        res.json({message: 'Something went wrong!!', error: err })
    })
    

}

module.exports.findOneJoke = (req,res) =>{
    Joke.findOne({_id:req.params.id})
    .then(onejoke =>{
        res.json({results: onejoke})
    })
    .catch(err => {
        res.json({message: 'Something went wrong!!', error: err })
    })

}

module.exports.updateJoke = (req,res) =>{
    Joke.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new: true, runValidators:true}
        )
        .then(updatedJoke =>{
            res.json({results: updatedJoke })
        })
        .catch(err => {
            res.json({message: 'Something went wrong!!', error: err })
        })
}

module.exports.deleteJoke =(req,res) =>{
    Joke.deleteOne({_id:req.params.id})
    .then(deletedJoke =>{
        res.json({results: deletedJoke})
    })
    .catch(err => {
        res.json({message: 'Something went wrong!!', error: err })
    })
}