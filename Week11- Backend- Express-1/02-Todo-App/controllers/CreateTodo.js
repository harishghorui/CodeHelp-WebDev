// create's a todo object whenever routed to this controller
// ------------------------------->>>>


const Todo = require("../models/Todo");

exports.CreateTodo = async (req, res) => {
    try {
        // extract title and desc from request body
        const {title, description} = req.body;

        // create a new Todo Obj and insert in DB
        const response = await Todo.create({title, description});

        // send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfully'
            }
        );
    }
    catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:err.message
            }
        )
    }
}