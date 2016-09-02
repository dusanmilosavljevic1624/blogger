var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
  username: String,
  password: String,
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
