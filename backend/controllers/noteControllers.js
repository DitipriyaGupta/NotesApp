const Note=require("../models/noteModel.js") ;
const asyncHandler=require("express-async-handler")
const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find({ user: req.user._id});
    res.json(notes);
  });
  const getNoteById = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);
  
    if (note) {
      res.json(note);
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  
    // res.json(note);
  });
  const createNote = asyncHandler(async (req, res) => {
    const { title, content } = req.body;
  
    if (!title || !content ) {
      res.status(400);
      throw new Error("Please Fill all the feilds");
      return;
    } else {
      const note = new Note({ user: req.user._id, title, content });
  
      const createdNote = await note.save();
  
      res.status(201).json(createdNote);
    }
  });
  
  // const getNoteById = asyncHandler(async (req, res) => {
  //   const note = await Note.findById(req.params.id);
  
  //   if (note) {
  //     res.json(note);
  //   } else {
  //     res.status(404).json({ message: "Note not found" });
  //   }
  
  
    // if (note.user.toString() !== req.user.id) {
    //   res.status(401);
    //   throw new Error("User not authorized");
    // }
  //   res.status(200).json(note);
  // });

  const updateNote = asyncHandler(async (req, res) => {
    const { title, content } = req.body;
    const { id } = req.params;
    const note = await Note.findById(req.params.id);
  
    // if (note.user.toString() !== req.user._id.toString()) {
    //   res.status(401);
    //   throw new Error("You can't perform this action");
    // }
  
    if (note) {
      note.title = title;
      note.content = content;
      // note.user=id;
     
  
      const updatedNote = await note.save();
      res.json(updatedNote);
    } else {
      res.status(404);
      throw new Error("Note not found");
    }
  });
  const deleteNote = asyncHandler(async (req, res) => {
    const note = await Note.findById(req.params.id);
  
    // if (note.user.toString() !== req.user._id.toString()) {
    //   res.status(401);
    //   throw new Error("You can't perform this action");
    // }
  
    if (note) {
      await note.remove();
      res.json({ message: "Note Removed" });
    } else {
      res.status(404);
      throw new Error("Note not Found");
    }
  });
  module.exports={getNotes,createNote,getNoteById,updateNote,deleteNote}