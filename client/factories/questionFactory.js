app.factory('questionFactory', function($http, $location){
    factory = {};
    factory.addQuestion = function(question){
        $http.post('/addQuestion', question).then(function(output){
            if(output){
                $location.url('/dash')
            }
        })
        
    }
    factory.allQuestions = function(cb){
        $http.get('/allQuestions').then(function(output){
            cb(output.data)
        })
    }
    factory.getQuestion = function(id,cb){
        $http.get('/getQuestion/' + id).then(function(output){
            cb(output.data)
        })
    }
    factory.updateQuestion = function(id,cb){
        $http.get('/updateQuestion', id).then(function(output){
            cb(output.data)
        })
    }
    return factory;
})
