var mongoose = require('mongoose');
var User = mongoose.model('User')

module.exports = (function(){
    return {
        login: function(req, res){
            User.findOne({name: req.body.name}, function(err,data){
                if(!data){
                    var newUser = new User(req.body)
                    newUser.save(function(err, user){
                        if(user){
                            req.session.user = user;
                            req.session.save()
                            res.json({status: true})
                        } else {
                            res.json(err);
                        }
                    })
                } else {
                    req.session.user = data;
                    req.session.save()
                    res.json({status: true})
                }
            })
        },
        curUser: function(req, res){
            if(!req.session.user || req.session == null){
                res.send(null);
            } else {
                res.send(req.session.user);
            }
            
        },
        logout: function(req, res){
            req.session.destroy()
            res.redirect('/')
        }
    }
})()
