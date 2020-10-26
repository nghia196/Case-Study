var images = [];

for (var i = 0; i < 8; i++) {
    var rand = Math.floor(Math.random() *9 )+1;
    var img = '<img src="images/" ' + rand + '.jpg>';
    images.push(img);
    images.push(img);
}

var output = "<ol>";
for (var i = 0; i < 16; i++) {
    output += "<li>";
    output += "<img src = '" + images[i] + "'/>";
    output += "</li>";
}
