var getTie = function(a) {
    var i, j;
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            if (a[j][i] === ' ') {
                return 0;
            }
        }
    }
    return 1;
};

var getWin = function(a, x, y, sz) {
    var s = sz / 2;
    
    strokeWeight(2);
    var a00 = a[0][0];
    if (a00 !== ' ') {
        if (a00 === a[0][1] && a00 === a[0][2]) {
          line(x, y + s, x + s * 6, y + s);
            return a00;
        }
        if (a00 === a[1][0] && a00 === a[2][0]) {
            line(x + s, y, x + s, y + s * 6);
            return a00;
        }
        if (a00 === a[1][1] && a00 === a[2][2]) {
            line(x, y, x + s * 6, y + s * 6);
            return a00;
        }
    }
    var a22 = a[2][2];
    if (a22 !== ' ') {
        if (a22 === a[0][2] && a22 === a[1][2]) {
            line(x + s * 5, y, x + s * 5, y + s * 6);
            return a22;
        }
        if (a22 === a[2][1] && a22 === a[2][0]) {
            line(x, y + s * 5, x + s * 6, y + s * 5);
            return a22;
        }
    }
    var a11 = a[1][1];
    if (a11 !== ' ') {
        if (a11 === a[0][1] && a11 === a[2][1]) {
            line(x + s * 3, y, x + s * 3, y + s * 6);
            return a11;
        }
        if (a11 === a[1][0] && a11 === a[1][2]) {
             line(x, y + s * 3, x + s * 6, y + s * 3);
            return a11;
        }
        if (a11 === a[2][0] && a11 === a[0][2]) {
            line(x + s * 6, y, x, y + s * 6);
            return a11;
        }
    }
    return ' ';
};

var getR = function(p, d, sz) {
    if (p < d + sz) {
        return 0;
    } else if (d + sz <= p && p < d + 2 * sz) {
        return 1;
    } else {
        return 2;
    }
};

var getCoord = function(x, y, sz) {
    return { x: getR(mouseX, x, sz), y : getR(mouseY, y, sz) };
};

var makeArray = function () {
    return [ [ ' ', ' ', ' ' ], [ ' ', ' ', ' ' ], [ ' ', ' ', ' ' ] ];
};


var drawBoard = function (a, x, y, sz, turn) {
    var i, j;
    background(255, 255, 255);
    stroke(1, 1, 1);
    strokeWeight(4);
    textSize(sz / 2);
    for (i = 0; i < 2; i++) {
        j = i * sz;
        line(x, y + sz + j, x + sz * 3, y + sz  + j);
        line(x + sz + j, y, x + sz + j, y + sz * 3);
    }
    var off = sz / 3;
    fill(0, 255, 9);
    for (i = 0; i < 3; i++) {
	var xi = i * sz + off;
        for (j = 0; j < 3; j++) {
            var yj = j * sz + off;
            text(a[j][i], x + xi, y + yj, 40, 40);
           
        }
    } 
    var w = getWin(a, x, y, sz);
    if (w !== ' ') {
        fill(255, 0, 0);
        text('Player ' + w + ' won!', sz, sz / 2, sz * 4, sz / 2);
    } else if (getTie(a) !== 0) {
        fill(0, 0, 255);
        text('It is a tie!', sz, sz / 2, sz * 4, sz / 2);
    } else {
        fill(89, 0, 255);
        text("It is " + turn + "'s turn!", sz, sz * 4.5, sz * 4, 100);
    }
};

var a = makeArray();
var turn = 'o';
var sz = 75;
var x = sz;
var y = sz;

var draw = function() {
    if (mouseIsPressed) {
         var c = getCoord(x, y, sz);
         if (a[c.y][c.x] === ' ') {
            a[c.y][c.x] = turn;
            if (turn === 'x') { turn = 'o'; } else { turn = 'x'; }    
        }
    }
    drawBoard(a, x, y, sz, turn);
     
};
