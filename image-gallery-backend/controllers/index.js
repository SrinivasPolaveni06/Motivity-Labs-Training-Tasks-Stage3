const ImagesSchema = require("../modal/index");

const createProduct = async function (req, res, next) {
  //   try {
  //     const { body } = req;

  //     //const StrId = user_id.toString();
  //     console.log(body);
  //     const product = new ImagesSchema({ ...body });
  //     product.save();
  //     return res.send(product);
  //   } catch (err) {
  //     return res.status(400).send({ err: "Bad Request" });
  //   }

  if (req.file) {
    const file = req.file.filename.toString();
    let variable = new ImagesSchema({ pic: file });
    variable
      .save()
      .then((response) => {
        res.json({ response: "uploaded success" });
      })
      .catch((err) => {
        res.json({ response: "uploaded failure" });
      });
  } else {
    res.json({ response: "not supported" });
  }
};

const getProducts = async function (req, res, next) {
  try {
    //const { body } = req;

    //const StrId = user_id.toString();
    //console.log(body);
    const Images = await ImagesSchema.find({});
    //product.save();
    return res.send(Images);
  } catch (err) {
    return res.status(400).send({ err: "Bad Request" });
  }
};

module.exports = { createProduct, getProducts };
