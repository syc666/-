//上传附件
const uploadAttach = function(url) {
	let arr = url.split('\\')
	let path = attachment + '\/' + arr[arr.length - 1]
	let result = fs.readFileSync(url);
	fs.writeFileSync(path, result)
}
 
//同步读文件
const readdirSync = function(filePath, fun) {
	var readDir = fs.readdirSync(filePath);
	return readDir
}
 
//删除文件
const deleteFile = function(filePath) {
	fs.unlink(filePath, function(error) {
		if (error) {
			console.log(error);
			alert('文件删除失败')
			return false;
		}
		// alert('删除文件成功');
	})
}
 
//打开文件，安装node-cmd模块
const openFile = function(filePath) {
	nodeCmd.get(
		filePath,
		function(err, data, stderr) {
			console.log(err);
		}
	);
	// nodeCmd.run(filePath);
}
 
//新建文件夹
const mkdirApi = function(path) {
	fs.mkdirSync(path, '0777', function(err) {
		if (err) {
			alert(err)
		}
	})
}
