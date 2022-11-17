const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required:[true,"Setup is required"],
        minlength: [10, "Setup Must Be Atleast 10 Characters Long!"]
    },
    punchline: {
        type: String,
        required: [true, "PunchLine Must Be Present!"],
        minlength: [3, "PunchLine Must Be Atleast 3 Characters Long!"]
    }
}, {timestamps:true});






const Joke = mongoose.model("Joke", JokeSchema)
 

module.exports = Joke;
