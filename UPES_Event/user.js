var mongoose = require('mongoose');
var User = require('../models/users');
module.exports.controller = function(app){
	app.get('/user/mypage',function(req,res){
		res.send("This is User page");
	});
	app.get('/user/dshboard',function(req,res){
		res.send("This is dashboard page");
	});
	app.get('/user/edit',function(req,res){
		res.send("This is editpage");
	});
	app.get('/user/add',function(req,res){
		res.render('users/add');			
	});
	app.post('/user/add',function(req,res){
		var obj={
			username: req.body.username,
			firstname: req.body.firstname,
			lastname: req.body.lastname,
		}
		mongoose.model("User").create(obj,function(err,users){
			if(err){
				res.send("Some error");
				}
			res.send("New User Created");
		});
	});
}