export function frontDoorResponse(string) {
    return string.charAt(0);
}

export function frontDoorPassword(string) {
 return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function backDoorResponse(string) {
  // .trim() removes any accidental spaces at the end of the line
  const cleanedString = string.trim(); 
  return cleanedString.charAt(cleanedString.length - 1);
}

export function backDoorPassword(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() + ", please"
}