var i;
var word = document.getElementsByTagName("p")[0];
refreshOpen();

//刷新
function refreshOpen() {
	while (true) {
		num = Math.ceil(Math.random() * words.length);
		if (num >= 0 && num < words.length && i != num) {
			i = num - 1;
			break;
		}
	}
	newOpen();
}
//设置
function newOpen() {
	i++;
	if (i == words.length) {
		i = 0;
	}
	word.innerHTML = words[i];
	console.log(i);
}
