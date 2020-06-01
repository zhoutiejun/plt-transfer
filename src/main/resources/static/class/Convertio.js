class Request extends Api{
    // 转换plt
    toPlt(data) {
        if(typeof data == "object")
            data = JSON.stringify(data);
        return this.post(Conversion, data);
    }
    // 获取转换好的数据
    getStatus(data) {
        let data1 = data;
        if(typeof data1 == "object")
            data1 = JSON.stringify(data1);
        return this.get(downloadFile + "/" + data.id + "/status");
    }
}