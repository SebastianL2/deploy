const express = require("express");
const cors = require("cors")
const morgan = require("morgan");

app = express();

app.set("PORT", process.env.PORT || 4000);
app.use(morgan("dev"));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/user", require("./routes/user"));
//app.use("/api/post", require("./routes/post"));
//app.use("/api/gallery", require("./routes/gallery"));
//app.use("/api/image", require("./routes/images"));

module.exports = app;