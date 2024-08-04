const Todo = require('../models/Todo')

exports.GetTodos = async (req, res) => {
    try {
        const todos = await Todo.find({})

        res.status(200).json({
            success:true,
            data:todos,
            message:"Fetched all Todos Successfully"
        })
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            success:false,
            error:error.message,
            message:"Server Error"
        })
    }
}


exports.GetTodosById = async (req, res) => {
    try {
        const {id} = req.params;

        const getTodoById = await Todo.findById({_id: id})

        res.status(200).json({
            success:true,
            data:getTodoById,
            message:"Got Todo by ID"
        })
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            success:false,
            error:error.message,
            message:"Server Error"
        })
    }
}