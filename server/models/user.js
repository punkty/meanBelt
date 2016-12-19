let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var userSchema = mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
})

mongoose.model('User', userSchema);
