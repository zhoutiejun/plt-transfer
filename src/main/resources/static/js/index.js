image = document.getElementsByClassName("image")[0];
file = null;
loading = document.getElementsByClassName("wrap")[0];
let input = document.getElementsByTagName("input")[0];
input.onchange = (event) => loadFile(event, input);
document.getElementsByClassName("btn")[0].onclick = updateFile;