// 加载图片
let loadFile = (e, input) => {
    e = e || window.event;
    file = event.target.files[0];
    base64(file);
}
// 预览图片
let base64 = (file) => {
    var freader = new FileReader();
    freader.readAsDataURL(file);
    freader.onloadend = function () {
        var re = this.result;
        re =  re.replace(/^data:image\/(png|jpg|jpeg);base64,/,"");
        re =  re.replace(/^data:application\/octet-stream;base64,/, "");
        fileBase64 = re;
    }
}
// 上传文件
let updateFile = async (e) => {
    let filename;
    if(fileBase64 == undefined) 
        return alert("请先上传文件");
    console.log(file);
    let suff = file.name.match(/\.\w+$/)[0];
    let data1;
    if(suff === ".ttf") {
        filename = file.name.replace(/\.\w+$/, ".ttf");
        // 转换png
        data1 = await request.send("toPlt", {
            apikey: "6676226f814944d62b7086aca2bfb236",
            input: "base64",
            file: fileBase64,
            outputformat: "PNG",
            filename
        });
        fileBase64 = await reduce(data1);
    }
    filename = file.name.replace(/\.\w+$/, ".plt");
    let res = await request.send("toPlt", {
        apikey: "5fcd8f0138df442893248f784c504766",
        input: suff != ".ttf"? "base64": "url",
        file: fileBase64,
        outputformat: "PLT",
        filename
    });
    let url = await reduce(res);
    // 下载文件
    let a = document.createElement("a");
    a.setAttribute("href", url);
    document.body.appendChild(a);
    a.click();
    a.remove();
}
let reduce = async (res) => {
    return new Promise((resolve) => {
        let {data} = res.data;
        if(res.data.code == 200) {
            // console.log(data);
            let timer = setInterval(async function() {
                let res1 = await request.getStatus({
                    id: data.id
                });
                let data1 = res1.data.data;
                if(data1.step_percent == 100) {
                    clearInterval(timer);
                    resolve(data1.output.url);
                }
            }, 1000);
        }
    });
}