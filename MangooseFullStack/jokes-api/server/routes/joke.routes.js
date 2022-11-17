const JokeController = require("../controllers/joke.controller");


module.exports = (app) =>{
    app.get("/api", JokeController.helloWorld);
    app.get("/api/jokes", JokeController.showAllJokes);
    app.post("/api/jokes/new", JokeController.createJokes);
    app.get("/api/jokes/:id", JokeController.findOneJoke );
    app.put("/api/jokes/update/:id", JokeController.updateJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
}


