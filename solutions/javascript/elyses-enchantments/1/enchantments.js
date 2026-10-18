export function getItem(array1, position) {
  return array1[position];
}
export function setItem(array2, position, replacementCard){
 array2[position] = replacementCard;
  return array2;
}
export function insertItemAtTop(array3, newCard) {
  array3.push(newCard);
  return array3;
}
export function removeItem(array4, position){
  array4.splice(position, 1);
  return array4;
}
export function removeItemFromTop(array5){
  array5.pop();
  return array5;
}
export function insertItemAtBottom(array6, newCard){
  array6.unshift(newCard);
  return array6;
}
export function removeItemAtBottom(array7){
  array7.shift();
  return array7;
}
export function checkSizeOfStack(array8, stackSize){
  if (array8.length == stackSize) {
    return true
  } else {
    return false
  }
}