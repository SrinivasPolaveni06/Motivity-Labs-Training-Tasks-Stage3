const userSchema = require("../model/userModel");
const _ = require("lodash");

const getuserDetails = async function (req, res, next) {
  try {
    let response = await userSchema.find({});
    return res.send(response);
  } catch (err) {
    return res.send(err);
  }
};

const getuserDetail = function (req, res, next) {
  const id = _.get(req, "params.id", null);
  userSchema.findById(id).then(function (data) {
    //return res.send("iam a products list");

    return res.send(data);
  });
};

const createUser = function (req, res, next) {
  const user = new userSchema(req.body);

  user.save(function (err, data) {
    if (err) {
      return res.status(422).send(err);
    }
    return res.send(data);
  });
  //return res.send({sucess:true,body:req.body,product:product})
};

const updateUserDetails = function (req, res, next) {
  const id = _.get(req, "params.id", null);
  const body = _.get(req, "body", {});
  //   const authorization = req.headers.authorization;
  //   console.log(authorization);
  //   if (!authorization) {
  //     return res.status(401).send({
  //       success: false,
  //       message: "You are not authorized",
  //       message2: "for Testing",
  //     });
  //   }
  //   const token = authorization.split(" ");
  //   const decoded = jwt.verify(token[1], "helloworld");
  //   console.log(token[1]);
  //   if (decoded.role != "admin") {
  //     return res
  //       .status(401)
  //       .send({ success: false, message: "You are not authorized" });
  //   } else {
  userSchema
    .findByIdAndUpdate(id, body)
    .then(function (data) {
      //return res.send("iam a products list");

      return res.status(200).send(data);
    })
    .catch((err) => {
      return res.status(404).send(err);
    });
  //}
};

const deleteUserDetails = function (req, res, next) {
  const id = _.get(req, "params.id", null);
  //   const authorization = req.headers.authorization;
  //   console.log(authorization);
  //   if (!authorization) {
  //     return res.status(401).send({
  //       success: false,
  //       message: "You are not authorized",
  //       message2: "for Testing",
  //     });
  //   }
  //   const token = authorization.split(" ");
  //   const decoded = jwt.verify(token[1], "helloworld");
  //   console.log(token[1]);
  //   if (decoded.role != "admin") {
  //     return res
  //       .status(401)
  //       .send({ success: false, message: "You are not authorized" });
  //   } else {
  userSchema
    .findByIdAndDelete(id)
    .then(function (data) {
      //return res.send("iam a products list");

      return res.status(200).send(data);
    })
    .catch((err) => {
      return res.status(404).send(err);
    });
  //}
};

module.exports = {
  createUser,
  getuserDetails,
  deleteUserDetails,
  getuserDetail,
  updateUserDetails,
};
