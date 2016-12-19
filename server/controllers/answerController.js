var mongoose = require('mongoose');
var Answer = mongoose.model('Answer')
var Question = mongoose.model('Question')
var User = mongoose.model('User')

module.exports = (function(){
    return {
        addAnswer: function(req, res){
                var newAnswer = new Answer(req.body.answer);
                newAnswer.likes = 0;
                newAnswer._user = req.body.curUser.name;
                newAnswer.save()
                Question.findOne({_id:req.body.question_id}, function(err, question){
                    question._answers.push(newAnswer)
                    question.save()
                    res.json('answer submit!')
                })

        },
        likeAnswer: function(req, res){
            Answer.findOne({_id:req.body.id}, function(err, answer){
                answer.likes += 1;
                answer.save()
                res.json('answer liked!')
            })
        }
    }
})()

