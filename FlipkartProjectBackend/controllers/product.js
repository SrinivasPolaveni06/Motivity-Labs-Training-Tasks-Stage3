const productSchema = require("../model/projectSchemas");

const createProduct = async function (req, res, next) {
  try {
    const { body } = req;

    //const StrId = user_id.toString();
    console.log(body);
    const product = new productSchema({ ...body });
    product.save();
    return res.send(product);
  } catch (err) {
    return res.status(400).send("Bad Request");
  }
};

const getProducts = async function (req, res, next) {
  try {
    //const { body } = req;
    console.log(req.query);
    const { search, order_by, order, limit } = req.query;

    const priceSortValue = order_by !== "DESC" ? 1 : -1;
    const nameSortValue = order !== "DESC" ? 1 : -1;
    //const StrId = user_id.toString();
    console.log(order_by);
    console.log(order);
    // const product = new productSchema({ ...body });
    // product.save();
    // return res.send(product);
    if (req.query.search == "Mobile") {
      // const data1 = await productSchema.aggregate([
      //   {
      //     $search: {
      //       index: "req.query.search",
      //       text: {
      //         query: "Mobile",
      //         path: "title",
      //       },
      //     },
      //   },

      // ]);

      const data1 =
        order_by === "" && order === ""
          ? await productSchema.find({})
          : await productSchema
              .find({})
              .sort({ price: priceSortValue, title: nameSortValue });
      const filteredData = data1.filter(
        (eachData) =>
          eachData.title
            .toLowerCase()
            .indexOf(req.query.search.toLowerCase()) !== -1
      );
      console.log(filteredData, "asdfghj");
      if (limit !== undefined) {
        return res.send(filteredData.slice(0, limit));
      }
      return res.send(filteredData);
    } else {
      const data =
        order_by === "" && order === ""
          ? await productSchema.aggregate([
              { $match: { category: req.query.search } },
            ])
          : await productSchema.aggregate([
              { $match: { category: req.query.search } },
              { $sort: { price: priceSortValue, title: nameSortValue } },
            ]);

      //console.log(data, "asdfghjklsdfgh");

      const filteredData1 = data.filter(
        (eachData) => eachData.title.toLowerCase().indexOf("mobile") === -1
      );
      if (limit !== undefined) {
        return res.send(filteredData1.slice(0, limit));
      }
      return res.send(filteredData1);
    }
  } catch (err) {
    return res.status(400).send("Bad Request");
  }
};

module.exports = { createProduct, getProducts };
