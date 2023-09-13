const mongoose = require("mongoose");

const url =
    "mongodb+srv://ankve21:veyHbCoTnHMqQn3d@cluster0.j7uidin.mongodb.net/stack-overflow-clone?retryWrites=true&w=majority";
    
  module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};