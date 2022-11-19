import express from "express";
 
import { 
    createTodo,
    listTodos,
    markTodoUncompleted,
    markTodoCompleted,
    deleteTodo,
} from "../controllers/TodoController.js";
 
const router = express.Router();
router.post('/', createTodo);
router.get('/', listTodos);
router.patch('/:id', markTodoUncompleted);
router.patch('/:id', markTodoCompleted);
router.delete('/:id', deleteTodo);

export default router;