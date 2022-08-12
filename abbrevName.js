function abbrevName(name){
  var matches = name.match(/\b(\w)/g).join(".")
  return matches.toUpperCase();

}