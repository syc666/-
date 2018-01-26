var fs = require('fs'),
	path = require('path'),
	express = require('express'),
	bodyParser = require('body-parser');
	

var app = express();

var COMMENTS_FILE = path.join(__dirname,'../comments.json');

app.set('port',(process.env.PORT || 3000));

 app.use('/',express.static(path.join(__dirname,'../views/sycWebsite')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// // 设置模板目录
// app.set('views', path.join(__dirname, 'views'));
// // 设置模板引擎为 html
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');


app.use('/buyu',express.static(path.join(__dirname,'../views/buyu')));

app.get('/api/comments',function(req,res){

	fs.readFile(COMMENTS_FILE,function(err,data){
		if(err){
			console.log(err);
			process.exit(1);
		}
		res.json(JSON.parse(data));
	});
});

app.post('/api/comments',function(req,res){
	fs.readFile(COMMENTS_FILE,function(err,data){
		if(err){
			console.error(err);
			process.exit(1);
		}

		var comments = JSON.parse(data);
		var newComments = {
			id:Date.now(),
			author:req.body.author,
			text:req.body.text
		};

		comments.push(newComments);

		fs.writeFile(COMMENTS_FILE,JSON.stringify(comments,null,4),function(err){
			if(err){
				console.error(err);
				process.exit(1);
			}
			res.json(comments);
		})
	})
});

// 路由
// routes(app);
app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
