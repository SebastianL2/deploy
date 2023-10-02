const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://sebas16cely:VAKCx2vSyoUaJWcm@cluster0.q4vguuu.mongodb.net/kindergarden", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
.then((db) => console.log("Db is connected"))
.catch((err) => console.log(err));
