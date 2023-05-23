const Schemas = require("../model/index");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const createUser = async function (req, res, next) {
  try {
    const data = await Schemas.User.findOne({ email: req.body.email });

    if (data) {
      return res.status(402).send("User Email Already Existed");
    } else {
      const { password } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);
      console.log(hashedPassword);
      const user = new Schemas.User({ ...req.body, password: hashedPassword });
      user
        .save()
        .then((data) => {
          return res.send(data);
        })
        .catch((err) => {
          return res.status(422).send(err);
        });
    }
  } catch (err) {
    //console.log("hellodfghjkl;");
    return res.status(400).send("Bad Request");
  }
  // const user = new Schemas.User(req.body);
  // user.save().then((err, data) => {
  //   if (err) {
  //     return res.status(422).send(err);
  //   }
  //   return res.send(data);
  // });
};

const getUsers = async function (req, res, next) {
  try {
    //const user = new userSchema(req.body);
    const data = await Schemas.User.find({});
    //user.save();
    return res.send(data);
  } catch (err) {
    return res.status(404).send("Not Found");
  }
};

const getUser = async function (req, res, next) {
  try {
    //const user = new userSchema(req.body);
    const id = req.params.id;
    const data = await Schemas.User.findById({ id });
    //user.save();
    return res.send(data);
  } catch (err) {
    return res.status(404).send("Not Found");
  }
};

const loginUser = async function (req, res, next) {
  // const data = Schemas.User.findOne({ email: req.body.email })
  //   .then((res) => {
  //     console.log(res, "hello res");
  //   })
  //   .catch((err) => {
  //     console.log(err, "hello err");
  //   });
  console.log(req.body);

  try {
    //const user = new userSchema(req.body);
    //const id = req.params.id;
    const data = await Schemas.User.findOne({ email: req.body.email });
    //user.save();
    //console.log(data);
    if (data) {
      // const verifyPassword = await bcrypt.compare(
      //   req.body.password,
      //   data.password
      // );
      if (data.password == req.body.password) {
        const UserId = data._id;
        console.log(UserId);
        const token = jwt.sign({ id: UserId }, "helloUser");
        return res.send({ token: token, data: data,message:"" ,status:200});
      }
      return res.status(401).send({message:"Password was not matched",status:401});
    }

    return res.status(401).send({message:"User Not Registered",status:401});
  } catch (err) {
    //console.log("hello world");
    return res.status(404).send(err);
  }
};

module.exports = { createUser, getUsers, getUser, loginUser };
