//(ax+b)(cx+d)
function setCrossProductLv3Type1(n, ques_no){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  do{
    var a = getRndInteger(1, 8);
    var c = getRndInteger(1, 5);
  }while(a*c==1 || a*c > 12);

  do{
    var b = getRndInteger(-12, 12);
    var d = getRndInteger(-12, 12);
  }while(b*d==0 || Math.abs(b*d)>40 || Math.abs(a*d+b*c)>30 || gcd_two_numbers(a, b)!=1 || gcd_two_numbers(c, d)!=1);

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a*c) + unknowns[unknownNumber] + "^2" + value2Coe(a*d+b*c) + unknowns[unknownNumber] + value2Constant(b*d) + "$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(b) + ")(" + value2FirstCoe(c) + unknowns[unknownNumber] + value2Constant(d) + ")$");
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
