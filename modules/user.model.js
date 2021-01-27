const { Schema } = require("mongoose")

const UserSchema = new Schema({
    name: String,
    email: String,
    number: Number,
    message: String
})

module.exports = UserSchema