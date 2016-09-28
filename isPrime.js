//source : http://en.literateprograms.org/Miller-Rabin_primality_test_(Python)

module.exports = {
  isPrime: function(n){
    if(n <= 1) return false;
    if(n <= 3) return true;
    if(n%2 === 0 || n%3 === 0) return false;
    let r = parseInt(Math.sqrt((n)));
    let f = 5;
    while(f <= r){
      if(n%f === 0 || n%(f+2) === 0) return false;
      f += 6;
    }
    return true;
  }
}
