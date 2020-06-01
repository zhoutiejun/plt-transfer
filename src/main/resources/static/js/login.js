let request = new Request();
// 切换li逻辑
let type = 0;
li = document.getElementsByTagName("li");
let btn = document.getElementsByClassName("btn")[0];
for(let i = 0; li[i]; i++) {
    li[i].onclick = function() {
        type = li[i].getAttribute("index");
        btn.innerText = type == 0? "登入": "注册";
        AllReClass(li, "active");
        addClass(li[i], "active");
    }
}
// 登入 || 注册
btn.onclick = function() {
    api = "login";
    if(type == 1)
        api = "register";
    let username = document.getElementsByClassName("username")[0].value;
    let password = document.getElementsByClassName("password")[0].value;
    let data = new FormData();
    console.log(data);
    data.append("username", username);
    data.append("password", password);
    request.send(api, data, true).then(res => {
        if(type == 1) {
            // 注册
            if(res.data == 200) {
                alert("注册成功");
                history.go(0);
            }else {
                alert("注册失败");
            }
        }else {
            // 登入
            if(res.data == 200) {
                window.location.href = "/page/index";
            }else {
                alert("用户名或密码错误");
            }
        }
    });
}