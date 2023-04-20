
const mongoose=require("mongoose") ;

const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
   
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
  
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("Note", noteSchema);

module.exports= Note;
