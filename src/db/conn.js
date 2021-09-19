const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mens100", {
    useNewUrlParser: true
}).then(() => {
    console.log("Connection Successful");
}).catch((err) => {
    console.log("not connected");
})
