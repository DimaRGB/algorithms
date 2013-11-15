function wordCount(text, word) {
  if( !word )
    return -1;
  var count = 0, length = word.length, index = -length;
  while (
    ~(index = text.indexOf(word, index + length)) &&
    ++count
  );
  return count;
}

function getPrimes(n) {
  var primes = [], p = 1;
  while( ++p <= n ) {
    var sqrtP = Math.sqrt(p) ^ 0;
    for( var j = 2; j <= sqrtP; j++ )
      if( !(p % j) ) break;
    !~(sqrtP - j) && primes.push(p);
  }
  return primes;
}

