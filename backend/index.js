const express=require("express");
const dotenv =require( "dotenv");
const  userRoutes =require("./routes/userRoutes.js");
const  noteRoutes =require("./routes/noteRoutes.js");
const connectDB= require("./Config/db.js");
// const { errorHandler, notFound } =require("./middleware/errorMiddleware.js") ;
const cors= require("cors");
const bodyParser = require("body-parser");
const app=express();
dotenv.config();
app.use(cors())
connectDB();
app.use(express.json());
// app.use(notFound);
// app.use(errorHandler);

app.get("/",(req,res)=>{
    res.send("API");
})
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
app.use(bodyParser.json());
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});