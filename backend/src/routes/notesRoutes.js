import express from "express";
import { createNote, deleteNote, getAllNotes, updateNote, getNoteById} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById); // Assuming you have a getNoteById function
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
