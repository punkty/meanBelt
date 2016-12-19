var session = require('./../controllers/sessionController.js');
var question = require('./../controllers/questionController.js');
var answer = require('./../controllers/answerController.js');

module.exports = function(app){
    app.post('/login', function(req, res){
        session.login(req, res)
    })
    app.get('/curUser', function(req, res){
        session.curUser(req, res);
    })
    //create new question
    app.post('/addQuestion', function(req, res){
        question.addQuestion(req, res);
    })
    // show all questions
    app.get('/allQuestions', function(req, res){
        question.allQuestions(req, res);
    })
    //get question to send to answer page
    app.get('/getQuestion/:id', function(req, res){
        question.getQuestion(req, res);
    })
    //add a new answer to db
    app.post('/addAnswer', function(req, res){
        answer.addAnswer(req,res)
    })
    //like answer
    app.post('/likeAnswer', function(req, res){
        answer.likeAnswer(req, res)
    })
    app.get('/updateQuestion', function(req, res){
        question.updateQuestion(req, res);
    })
    app.get('/logout', function(req, res){
        session.logout(req, res);
    })
}
