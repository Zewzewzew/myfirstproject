var n = 100;
var s = 0;
var k;

var txt = "1 <sup>2</sup> + 2<sup>2</sup> + ... + " txt += n + "<sup>2</sup> = ";

for (k = 1; k <= 100; k++) {
	s += k * k;
}§
document.write(txt + s)