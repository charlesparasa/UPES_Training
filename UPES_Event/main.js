module.exports.controller = function(app){
	app.get('/user/home',function(req,res){
		res.send("This is Main page");
	});
}