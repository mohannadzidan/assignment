

let mongoose = require('mongoose')


let userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    // {
    //     timestamps:true
    // }
})
let userModel = mongoose.model('user',userSchema)
module.exports = userModel