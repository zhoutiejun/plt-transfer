image = document.getElementsByClassName("image")[0];
file = null;
loading = document.getElementsByClassName("wrap")[0];
image.onclick = function() {
    // 上传文件到file
    let input = document.createElement("input");
    input.setAttribute("type", "file");
    input.onchange = (event) => loadFile(event, input);
    input.style.display = "none";
    input.click();
    document.body.append(input);
}
document.getElementsByClassName("btn")[0].onclick = updateFile;