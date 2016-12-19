app.controller('questionController', function($scope, questionFactory,answerFactory,$routeParams, $route){

    $scope.addQuestion = function(){
        $scope.errors = [];
        if(!$scope.newQuestion || $scope.newQuestion.title.length < 10){
            $scope.errors.push('Question must be at least 10 characters')
        } else {
            questionFactory.addQuestion($scope.newQuestion);
        }
    }
    questionFactory.allQuestions(function(questions){
        $scope.allQuestions = questions;
    })

    questionFactory.getQuestion($routeParams.id,function(question){
        $scope.question = question;
    })
    $scope.likeAnswer = function(answerId){
        answerFactory.likeAnswer(answerId, function(){
            $route.reload()
        })
    }
})
