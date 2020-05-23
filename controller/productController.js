const mongoose = require("mongoose");

const Product = require("../models/Schemas");

// function for adding the product
module.exports.addProduct = function (req, res) {
  console.log(req.body);

  Product.create(req.body, function (err, doc) {
    if (err) {
      console.error(err);
      return res.redirect("/");
    }
    return res.json({ doc });
  });
};

// function to  get all the products
module.exports.getProduct = function (req, res) {
  Product.find({}, function (err, docs) {
    if (err) {
      console.log(err);
      return res.redirect("/");
    }
    return res.json({
      data: {
        products: docs,
      },
    });
  });
};

// function to  get Single product with id
module.exports.getSingleProduct = function (req, res) {
  Product.findOne({ id: req.body.id }, function (err, docs) {
    if (err) {
      console.log(err);
      return res.redirect("/");
    }
    return res.json({
      data: {
        products: docs,
      },
    });
  });
};
