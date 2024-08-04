const Todo = require('../models/Todo');

exports.DeleteTodoById = async (req, res) => {
    try {
        const id = req.params.id;

        const deleteTodo = await Todo.findByIdAndDelete({_id: id})

        res.status(200).json({
            success:true,
            message:"Deleted Todo"
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