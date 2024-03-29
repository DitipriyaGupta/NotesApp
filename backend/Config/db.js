const mongoose=require("mongoose");
const connectDB = async () => {
    try {
      mongoose.set('strictQuery', true);
      const conn = await mongoose.connect(process.env.MONGO_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
       
        
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
    console.error(error);
      process.exit();
    }
  };
  
  module.exports = connectDB