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

function primesEratosthenes(n) {
  var arr = [], p = 2, i, ret = [];
  while( p * p <= n ) {
    for( i = 2 * p; i <= n; i += p )
      arr[i] = true;
    for( i = p + 1; i <= n; i++ )
      if( !arr[i] )
        break;
    p = i;
  }
  for( i = 2; i <= n; i++ )
   if( !arr[i] )
     ret.push(i);
  return ret;
}
