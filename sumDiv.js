module.exports = {
  sumDiv: function (n){
    if(n <= 3) return 1;
    let result = 1;
    let num = 2;
    let s = parseInt(Math.sqrt(n));
    while(num <= s){
      if(n % num === 0){
        result += num + (n / num);
      };
      num++;
    };
    return result;
  }
}
