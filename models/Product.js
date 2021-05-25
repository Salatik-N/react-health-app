const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Products = new Schema({
    category: {type: String},
    imgsrc: {type: String},
    products: {
        id: {type: Number},
        name: {type: String},
        kcal: {type: Number},
        protins: {type: Number},
        fats: {type: Number},
        carbohydrates: {type: Number}
    }
});

module.exports = mongoose.model('Products', Products)