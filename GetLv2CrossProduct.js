//(ax+b)(x+c)
function setCrossProductLv2Type1(n, ques_no){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  do{
    var a = getRndInteger(2, 5);
  }while(a==4);

  do{
    var b = getRndInteger(-12, 12);
  }while(b==0 || gcd_two_numbers(a, b)!=1);

  do{
    var c = getRndInteger(-12, 12);
  }while(Math.abs(c)==Math.abs(b) || Math.abs(b*c)>60 || c==0 || Math.abs(a*c)>20);

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a) + unknowns[unknownNumber] + "^2" + value2Coe(a*c+b) + unknowns[unknownNumber] + value2Constant(b*c) + "$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(b) + ")(" + unknowns[unknownNumber] + value2Constant(c) + ")$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setType1(n - 1, ques_no + 1);
  }
}

// returns H.C.F. of x and y
function gcd_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number'))
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

// returns a random integer between min and max (both included)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function value2FirstCoe(n){
  if(n<0)
    if(n!=-1)
      return n;
    else
      return "-";
  else if(n>0)
    if(n!=1)
      return n;
    else
      return "";
}

function value2Constant(n){
  if(n>0)
    return "+" + n;
  else if(n<0)
    return "-" + Math.abs(n);
  else
    return "";
}

function value2Coe(n){
  if(n<0)
    if(n!=-1)
      return n;
    else
      return "-";
  else if(n>0)
    if(n!=1)
      return "+" + n;
    else
      return "+";
}
