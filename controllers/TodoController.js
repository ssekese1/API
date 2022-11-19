
import Todo from "../models/TodoModel.js";

export const listTodos = async (req, res) => {
    try {
        const todos = await Todo.findAll();
        res.json(todos);
    } catch (error) {
        res.json({ message: error.message });
    }    
}

export const createTodo = async (req, res) => {
    try {
        await Todo.create(req.body);
        res.json({
            "message": "Todo Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    } 
}

export const markTodoCompleted = async (req, res) => {
    try {
        await Todo.update(req.body, {
            set: {
                isDone: true,
                },
            where: {
                id: req.params.id,
            }
        });
        res.json({"message": "Todo Updated"});
    } catch (error) {
        res.json({ message: error.message });
    } 
}

export const markTodoUncompleted = async (req, res) => {
    try {
        await Todo.update(req.body, {
            set: {
                isDone: false,
            },
            where: {
                id: req.params.id,
            }
        });
        res.json({
            "message": "Todo Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    } 
}

export const deleteTodo = async (req, res) => {
    try {
        await Todo.destroy({
            where: {
            id: req.params.id
            }
        });
        res.json({
            "message": "Todo Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    } 
}