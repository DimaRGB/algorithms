var s = 5;
var matrix = [];
for( var i = 0; i < s; i++ )
    matrix.push([])

var x0 = 0
, y0 = 0
, x1 = s - 1
, y1 = s - 1
, xk = 1
, yk = 0

var k = 0;
var text = 'RGB';
var x = x0, y = y0;
var timer = s * s;

while( timer-- ) {
    matrix[y][x] = text[k];
    if( k == text.length - 1 )
        k = 0;
    else
        k++;
    
    if( xk > 0 && x == x1 ) {
        xk = 0;
        yk = 1;
        y0++;
    } else if( yk > 0 && y == y1 ) {
        xk = -1;
        yk = 0;
        x1--;
    } else if( xk < 0 && x == x0 ) {
        xk = 0;
        yk = -1;
        y1--;        
    } else if( yk < 0 && y == y0 ) {
        xk = 1;
        yk = 0;
        x0++;
    }
    x += xk;
    y += yk;
}

for( var i = 0; i < s; i++ )
    console.log(matrix[i].join(' '));
