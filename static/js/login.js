var URL = "http://localhost:5000/";

function login() {
	var userName = _$('user').value;
	var passwd = _$('passwd').value;
	if (userName && passwd) {
		var user = { 'name' : userName, 'passwd' : passwd };
		console.log(JSON.stringify(user));
		Ajax.post(URL + "login", JSON.stringify(user), function(responseText) {
			window.location.href = "index.html";
		}, function() {
			alert("用户名，密码错误！");
			_$('passwd').value = "";
		});
	}
}
