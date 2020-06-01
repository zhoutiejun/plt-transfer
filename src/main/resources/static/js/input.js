// 加载图片
let loadFile = (e, input) => {
    e = e || window.event;
    file = event.target.files[0];
    input.remove();
    base64(file);
}
// 预览图片
let base64 = (file) => {
    var freader = new FileReader();
    freader.readAsDataURL(file);
    freader.onloadend = function () {
        var re = this.result;
        let img = imageList || new Image();
        img.src = re;
        img.onload = function(el) {
            if(!imageList)
                image.appendChild(img);
            imageList = img;
            re =  re.replace(/^data:image\/(png|jpg|jpeg);base64,/,"");
            fileBase64 = re;
            console.log(re);
        }
    }
}
// 上传文件
let updateFile = async (e) => {
    let filename = file.name.replace(/\.\w+$/, ".plt");
    if(fileBase64 == undefined) 
        return alert("请先上传文件");
    console.log(fileBase64);
    loading.style.display = "block";
    let res = await request.send("toPlt", {
        apikey: "0fc127a53ae4c14d4209f7837ea26efb",
        input: "base64",
        file: fileBase64,
        outputformat: "PLT",
        filename
    });
    if(res.data.code == 200) {
        let {data} = res.data;
        let timer = setInterval(async function() {
            let res1 = await request.getStatus({
                id: data.id
            });
            let data1 = res1.data.data;
            if(data1.step_percent == 100) {
                clearInterval(timer);
                let url = data1.output.url;
                let a = document.createElement("a");
                a.setAttribute("href", url);
                loading.style.display = "none";
                a.click();
            }
        }, 1000);
    }
}