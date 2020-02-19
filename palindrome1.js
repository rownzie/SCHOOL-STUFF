function palindrome() {
  var str = document.getElementById("word").value;
  str = str.toLowerCase().replace(/ /g,'').replace(/\W/g,'');
  var palindrome = str.split('').reverse().join('');

  if (palindrome===str){
    document.getElementById("result").innerHTML = "The string is palindrome.";
  }
  else{
    document.getElementById("result").innerHTML = "The string is not a palindrome.";
  }
}
