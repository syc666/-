//�ϴ�����
const uploadAttach = function(url) {
	let arr = url.split('\\')
	let path = attachment + '\/' + arr[arr.length - 1]
	let result = fs.readFileSync(url);
	fs.writeFileSync(path, result)
}
 
//ͬ�����ļ�
const readdirSync = function(filePath, fun) {
	var readDir = fs.readdirSync(filePath);
	return readDir
}
 
//ɾ���ļ�
const deleteFile = function(filePath) {
	fs.unlink(filePath, function(error) {
		if (error) {
			console.log(error);
			alert('�ļ�ɾ��ʧ��')
			return false;
		}
		// alert('ɾ���ļ��ɹ�');
	})
}
 
//���ļ�����װnode-cmdģ��
const openFile = function(filePath) {
	nodeCmd.get(
		filePath,
		function(err, data, stderr) {
			console.log(err);
		}
	);
	// nodeCmd.run(filePath);
}
 
//�½��ļ���
const mkdirApi = function(path) {
	fs.mkdirSync(path, '0777', function(err) {
		if (err) {
			alert(err)
		}
	})
}
