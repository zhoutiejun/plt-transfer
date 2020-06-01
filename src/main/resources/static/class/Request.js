class Request extends Api{
    // 转换plt
    toPlt(data) {
        return this.post(Conversion, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }
    // 获取转换好的数据
    getStatus(data) {
        let data1 = data;
        if(typeof data1 == "object")
            data1 = JSON.stringify(data1);
        return this.get(Conversion + "/" + data.id + "/status");
    }
    // 上传文件
    upLoad(data) {
        
    }
    // 登入
    login(data) {
        return this.post(login, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }
    // 注册
    register(data) {
        return this.post(register, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }
    // 发送
    send(callback, data, isFrom) {
        if(typeof data == "object" && !isFrom)
            data = JSON.stringify(data);
        return this[callback](data);
    }
}