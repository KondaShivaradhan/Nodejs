var mongoose = require('mongoose')
var BikeSchema = new mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    phone: {
        type:Number,
        required:true
    },
    loc: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    add:
    {
        type: String,
        required: true
    },
    bikenumber:
    {
        type:String,
        required:true
    },
    bikepic:
    {
        type:String,
        required:true
    }
});
var bike = mongoose.model('Bike', BikeSchema);
module.exports = bike;