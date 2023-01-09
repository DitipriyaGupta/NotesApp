const express= require('express');
const router=express.Router();
const {getNotes,getNoteById,createNote,updateNote,deleteNote}=require("../controllers/noteControllers.js");
const { protect } = require('../middleware/authMiddleware.js');

router.route("/").get(protect,getNotes);
router.route("/create").post(protect, createNote);
router.route("/:id").put(updateNote).get(protect,getNoteById).delete(deleteNote);
module.exports= router;