const express=require("express");
const dotenv =require( "dotenv");
const  userRoutes =require("./routes/userRoutes.js");
const  noteRoutes =require("./routes/noteRoutes.js");
const connectDB= require("./Config/db.js");
const cors= require("cors");
const bodyParser = require("body-parser");
const app=express();
const path = require("path");

dotenv.config({path:'.env'});
app.use(cors())
// app.use(cors({
//   origin: "https://slug-panel.onrender.com",
//   headers: ["Content-Type"],
//   credentials: true,
// }))
// app.options('*', cors())
connectDB();
app.use(express.json());app.use(bodyParser.json());
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
const __name = path.resolve();
app.use(express.static(path.join(__name, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__name, "/frontend/build/index.html"))
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});