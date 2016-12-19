let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var questionSchema = mongoose.Schema({
    title: {type: String, required: true, minlength: 10},
    desc: {type: String, required: false},
    _answers:[{type: Schema.Types.ObjectId, ref:'Answer'}]
})

mongoose.model('Question', questionSchema);
