var mongoose = require('mongoose');
var Question = mongoose.model('Question')

module.exports = (function(){
    return {
        addQuestion: function(req, res){
            var newQuestion = new Question(req.body);
            newQuestion.save()
            res.send('question submit!')
        },
        allQuestions: function(req, res){
            Question.find({},function(err, questions){
                res.json(questions)
            })
        },
        getQuestion: function(req, res){
            Question.findOne({_id:req.params.id})
            .populate('_answers')
            .exec(function(err, question){
                res.json(question)
            })
        }
    }
})()

