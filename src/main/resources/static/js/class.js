// className添加class
function addClass(el, className) {
    let name = el.className;
    if(name != "")
        name = name.split(" ");
    else
        name = [];
    className = className.split(",");
    for(let i = 0; className[i]; i++) {
        if(name.indexOf(className[i]) == -1) {
            name.push(className[i]);
        }
    }
    el.className = name.join(" ");
}
// 删除单个class
function reClass(el, className) {
    let name = el.className;
    name = name.split(" ");
    let arr = [];
    for(let i = 0; name[i]; i++) {
        if(name[i] != className)
            arr.push(name[i]);
        }
    el.className = arr.join(" ");
}
// 删除多个class
function AllReClass(el, className) {
    for(let i = 0;el[i]; i++) {
        reClass(el[i], className);
    }
}