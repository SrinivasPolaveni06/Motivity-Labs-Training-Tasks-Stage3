const Schemas = require("../../model/index");

const createTodo = async function (req, res, next) {
  try {
    const { body, user_id } = req;

    const StrId = user_id.toString();
    console.log(body);
    const user = new Schemas.Todo({ ...body, user_id: StrId });
    user.save();
    return res.send(user);
  } catch (err) {
    return res.status(400).send("Bad Request");
  }
};

const getTodosList = async function (req, res, next) {
  try {
    //const user = new userSchema(req.body);
    const { user_id } = req;

    const StrId = user_id.toString();
    const data = await Schemas.Todo.find({ user_id: StrId });
    //user.save();
    return res.send(data);
  } catch (err) {
    return res.status(404).send("Not Found");
  }
};

const getTodo = async function (req, res, next) {
  try {
    //const user = new userSchema(req.body);
    const id = req.params.id;
    const data = await Schemas.Todo.findById(id);
    //user.save();
    return res.send(data);
  } catch (err) {
    return res.status(404).send("Not Found");
  }
};

module.exports = { createTodo, getTodosList, getTodo };
