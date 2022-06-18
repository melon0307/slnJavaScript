document.write(`<table class="tb1"><tr>`);
for (var i = 1; i < 10; i++) {
    document.write(`<td class="td1">`);
    for (var j = 1; j < 10; j++) {
        document.write(`${i}*${j}=${i * j}<br>`);
    }
    document.write("</td>");
}
document.write("</tr></table>");