app.factory('answerFactory', function($http){
    factory = {};
    factory.addAnswer = function(answer,question_id,user, cb){
        var answer_pkg = {
            answer: answer,
            question_id: question_id,
            curUser: user
        }
        $http.post('/addAnswer', answer_pkg).then(function(){
            cb()
        })
        
    }
    factory.likeAnswer = function(answerId, cb){
        answerIdtoLike = {
            id: answerId
        }
        $http.post('/likeAnswer', answerIdtoLike).then(function(output){
            cb(output.data)
        })
    }
    return factory;
})
