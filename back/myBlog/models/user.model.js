const mongoose = require('mongoose');
let schema = new mongoose.Schema({
    username: {
        type:String,
        default:''
    },
    password: {
        type:String,
        default:''
    }
});
// console.log(schema);
module.exports = mongoose.model('User', schema);