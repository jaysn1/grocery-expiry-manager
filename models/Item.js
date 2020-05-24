const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema

const ItemSchema = new Schema(
    {
        name:{
            type: String,
            required: true
        },
        entry_date:{
            type:Date,
            default: Date.now
        }, //start
        expiry_date:{
            type:Date,
            required: true
        } //end
    }
);

module.exports = Item = mongoose.model('item', ItemSchema);