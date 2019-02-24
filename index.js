// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = Array();
  for (let i = 0; i < musicians.length; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return array;
}

function johnLennonFacts(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = `${array[i]}!!!`;
  }
  return array;
}
