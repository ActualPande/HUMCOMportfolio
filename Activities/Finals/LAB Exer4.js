var row = prompt("ENTER NUMBER OF ROWS");
var col = prompt("ENTER NUMBER OF COLUMNS");
var i;
var j;

document.write("<table border =1")
    for(i = 1; i <= row; i++){
        document.write("<tr>")
        for(j = 1; j <= col; j++){
            document.write("<td style='padding: 20px; text-align: center;'>" + i * j + "</td>")
        }
        document.write("</td>")
    }
document.write("</table>")