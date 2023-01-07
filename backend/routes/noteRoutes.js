const express= require('express');
const router=express.Router();
const {getNotes,createNote,getNoteById,updateNote,deleteNote}=require("../controllers/noteControllers.js");
const { protect } = require('../middleware/authMiddleware.js');

router.route("/").get(protect,getNotes);
router.route("/create").post(protect, createNote);
router.route("/:id").get(protect,getNoteById).put(updateNote).delete(deleteNote);
module.exports= router;