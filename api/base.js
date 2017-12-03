var numbers = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var base = numbers.length;

/*
 * Input : long_url의 정수 id 값
 * Output : id 값을 base로 인코딩한 문자열 값
 */
function encode(id) {
  var encoded = '';
  while (id) {
    var remainder = id % base;
    id = Math.floor(id / base);
    encoded = numbers[remainder].toString() + encoded;
  }

  return encoded;
}

/*
 * Input : id 값을 base로 인코딩한 문자열 값
 * Output : long_url의 정수 id 값
 */
function decode(encoded_id) {
  var decoded = 0;
  while (encoded_id) {
    var index = numbers.indexOf(encoded_id[0]);
    var power = encoded_id.length - 1;
    decoded += index * (Math.pow(base, power));
    encoded_id = encoded_id.substring(1);
  }

  return decoded;
}

module.exports = { encode, decode }
