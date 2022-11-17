const mongoose = require('mongoose');

// const db_name = "product_db"


mongoose.connect('mongodb+srv://root:root@clusteroctober.lnp78aj.mongodb.net/product_db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));