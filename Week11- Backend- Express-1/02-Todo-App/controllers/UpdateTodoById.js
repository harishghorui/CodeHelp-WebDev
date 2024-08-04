const Todo = require('../models/Todo');

exports.UpdateTodoById = async (req, res) => {
    try {
        const {id} = req.params;
        const {title, description} = req.body;

        const updateTodoById = await Todo.findByIdAndUpdate(
            {_id: id},
            {title, description, updatedAt:Date.now()}
        )

        res.status(200).json({
            success:true,
            data:updateTodoById,
            message:"Todo by Id Updated"
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