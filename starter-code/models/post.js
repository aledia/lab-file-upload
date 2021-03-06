const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    content: String,
    creatorId: Schema.Types.ObjectId,
    picPath: String,
    picName: String,
});

const User = mongoose.model('User', UserSchema);

module.exports = User;