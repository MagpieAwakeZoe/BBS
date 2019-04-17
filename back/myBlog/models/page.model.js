const mongoose = require('mongoose');
let schema = new mongoose.Schema({
    user_id: {
        type:Schema.Types.ObjectId,
        ref:'User'      //user的model名
    },
    title: {
        type:String,
        default:''
    },
    content: {
        type:String,
        default:''
    }
});
module.exports = mongoose.model('Page', schema);
