var columns = [[], [], [], [], [], [], []];
var tokens = 0;
var p1Turn = true;


var isWinningMove  = function () {
    return false
}

$(document).ready(function () {
    $(".column").click(function () {
        var colIndex = $(this).index();
        if (columns[colIndex].length < 6) {
            if (p1Turn === true) {
                columns[colIndex].push('red');
                // draw game piece into column
            } else {
                columns[colIndex].push('black');
                // draw game piece into column
            }
            if (!isWinningMove()) {
                p1Turn = !p1Turn;
            } else {
                alert("You win!");
            }
        } 
        console.log(columns);
    });
});
