// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = Array();
  for (let i = 0; i < musicians.length; i++) {
    array[i] = `"${musicians[i]} plays ${instruments[i]}"`; 
  }
  return array;
}