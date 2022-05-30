const mongoose = require('mongoose')

//creation connection to database olympics
mongoose.connect("mongodb://localhost:27017/olympics", {
    useNewUrlParser: true
}).then(() => {
    console.log("connection successful")
}).catch((e) => {
    console.log("No connection")
})