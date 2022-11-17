const Author =require("../models/author.model");




// All Authors====================================
module.exports.findAllAuthors = (req,res) =>{
    Author.find()
    .then(allAuthors =>{
        res.json({results: allAuthors})
    })
    .catch(err=>{
        res.json(err)
    })
}
// ================================================

// Create Author==================================
module.exports.createAuthor = (req,res) =>{
    Author.create(req.body)
    .then(newAuthor =>{
        res.json({results: newAuthor })
    })
    .catch(err=>{
        res.json(err)
    })
    
    
}
// ================================================

// One Author=====================================
module.exports.findOneAuthor = (req,res) =>{
    Author.findOne({_id:req.params.id})
    .then(oneAuthor =>{
        res.json({results: oneAuthor})
    })
    .catch(err=>{
        res.json(err)
    })
}
// =================================================

// Update Author===================================
module.exports.updateAuthor = (req,res) =>{
    Author.findOneAndUpdate(
    {_id:req.params.id},
    req.body,
    {new: true, runValidators:true}
    )
    .then(updatedAuthor =>{
        res.json({results: updatedAuthor})
    })
    .catch(err => response.status(400).json(err))
    
}
// =================================================

// Delete Author==================================
module.exports.deleteAuthor = (req,res) =>{
    Author.deleteOne({_id:req.params.id})
    .then(deletedAuthor =>{
        res.json({results: deletedAuthor})
    })
    .catch(err=>{
        res.json(err)
    })
}
// =================================================