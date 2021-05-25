const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Products = new Schema({
    category: {type: String},
    imgsrc: {type: String},
    products: {type: Array}
});

module.exports = mongoose.model('Products', Products)