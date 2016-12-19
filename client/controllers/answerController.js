app.controller('answerController', function($scope, answerFactory,$location){
    $scope.addAnswer = function(){
        $scope.errors = [];
        if(!$scope.answer){
            $scope.errors.push('Answer cannot be blank')
        }else if($scope.answer.content.length < 5) {
            $scope.errors.push('Answer must be at least 5 characters')
        } else {
            answerFactory.addAnswer($scope.answer,$scope.question._id,$scope.curUser, function(){
                $location.url('/dash')
            })
        }
    }
})

