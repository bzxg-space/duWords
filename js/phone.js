var i = 0;
var word = document.getElementById('word');
change();
//改变
function change() {
	while (true) {
		num = Math.floor(Math.random() * words.length);
		console.log(num);
		if (i != num) {
			i = num;
			break;
		}
	}
	word.innerHTML = words[i];
}
//复制
function copy() {
	var textArea = document.createElement("textarea");
	textArea.innerHTML = word.innerHTML;
	document.body.appendChild(textArea);
	textArea.select();
	document.execCommand('copy');
	toast('复制成功 : )');
	textArea.parentNode.removeChild(textArea);
	//document.body.removeChild(textArea);
}
