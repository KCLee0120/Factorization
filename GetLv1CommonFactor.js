// Type1 : abx+ac, where x is an unknown, a is a random common factor, b and c are random positve constant
function setLv1Type1(n, ques_no){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  do{
    var a = getRndInteger(1, 10);
  }while(a==1);
  var b = [
    1, 1, 1, 2, 3, 4, 5
  ];
  var bValue = getRndInteger(0, 4);
  do{
    var c = getRndInteger(1, 10);
  }while(c==0 || gcd_two_numbers(b[bValue], c)!=1);

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a*b[bValue]) + unknowns[unknownNumber] + value2Constant(a*c) + "$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a) + "(" + value2FirstCoe(b[bValue]) + unknowns[unknownNumber] + value2Constant(c) + ")$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setType1(n - 1, ques_no + 1);
  }
}

// Type2 : abx+ac, where x is an unknown, a is a random common factor, b is a positive constant and c is a negative constant
function setLv1Type2(n, ques_no){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  do{
    var a = getRndInteger(1, 10);
  }while(a==1);
  var b = [
    1, 1, 1, 2, 3, 4, 5
  ];
  var bValue = getRndInteger(0, 4);
  do{
    var c = getRndInteger(-10, -1);
  }while(c==0 || gcd_two_numbers(b[bValue], c)!=1);

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a*b[bValue]) + unknowns[unknownNumber] + value2Constant(a*c) + "$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a) + "(" + value2FirstCoe(b[bValue]) + unknowns[unknownNumber] + value2Constant(c) + ")$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setType2(n - 1, ques_no + 1);
  }
}

//Type3 : abx^2+acx, where x is an unknown, a is a random common factor, b and c are random constant
function setLv1Type3(n, ques_no){
  var unknowns = [
    "a", "b", "c", "d", "f", "g", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 16);
  var a = getRndInteger(2, 10);
  var b = [
    1, 1, 1, 2, 3, 4, 5
  ];
  var bValue = getRndInteger(0, 4);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0 || gcd_two_numbers(b[bValue], c)!=1);

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a*b[bValue]) + unknowns[unknownNumber] + "^2"  + value2Coe(a*c) + unknowns[unknownNumber] + "$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a) + unknowns[unknownNumber] + "(" + value2FirstCoe(b[bValue]) +  unknowns[unknownNumber] + value2Constant(c)  + ")$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);
  if(n!=1){
    setType3(n - 1, ques_no + 1);
  }
}

//Type4 : abxy+acx, where x is an unknown, a is a random common factor, b and c are random constant
function setLv1Type4(n, ques_no){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(2, 10);
  var b = [
    1, 1, 1, 2, 3, 4, 5
  ];
  var bValue = getRndInteger(0, 4);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0 || gcd_two_numbers(b[bValue], c)!=1);

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a*b[bValue]) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(a*c) + unknowns[unknownNumber][0] + "$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "(" + value2FirstCoe(b[bValue]) +  unknowns[unknownNumber][1] + value2Constant(c)  + ")$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);
  if(n!=1){
    setType4(n - 1, ques_no + 1);
  }

}

//Type5 : abx+acx^2y+adxy, where x is an unknown, a is a random common factor, b and c are random constant
function setLv1Type5(n, ques_no){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(2, 10);
  var b = getRndInteger(1, 10);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0 || gcd_two_numbers(b, c)!=1);
  do{
    var d = getRndInteger(-10, 10);
  }while(d==0 || gcd_two_numbers(c, d)!=1 || gcd_two_numbers(b, d)!=1);

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a*b) + unknowns[unknownNumber][0] + value2Coe(a*c) + unknowns[unknownNumber][0] + "^2" + unknowns[unknownNumber][1] + value2Coe(a*d) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "(" + b + value2Coe(c) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(d) + unknowns[unknownNumber][1] + ")$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);
  if(n!=1){
    setType4(n - 1, ques_no + 1);
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
