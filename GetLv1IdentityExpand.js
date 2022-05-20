// Type1 : x^2-b^2
function setIdentityExpandLv1Type1(n, ques_no){

  var unknowns = [
    "a", "b", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);
  var a = 1;
  do{
    var b = getRndInteger(1, 12);
  }while(gcd_two_numbers(a, b)!=1);

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(b) + ")(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(-b) + ")$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a*a) + unknowns[unknownNumber] + "^2-" + b*b + "$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityExpandLv1Type1(n - 1, ques_no + 1);
  }
}

//Type2 : a^2-b^2x^2
function setIdentityExpandLv1Type2(n, ques_no){

  var unknowns = [
    "a", "b", "h", "m", "n", "p", "q", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 12);
  var a = getRndInteger(1, 6);
  do{
    var b = getRndInteger(1, 12);
  }while(gcd_two_numbers(a, b)!=1);

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + a + value2Coe(b) + unknowns[unknownNumber] + ")(" + a + value2Coe(-b) + unknowns[unknownNumber] + ")$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + a*a +  value2Coe(-b*b) + unknowns[unknownNumber] + "^2$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityExpandLv1Type2(n - 1, ques_no + 1);
  }
}

//Type 3 : x^2+2ax+a^2
function setIdentityExpandLv1Type3(n, ques_no){

  var unknowns = [
    "a", "b", "m", "p", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 9);
  var a = getRndInteger(1, 12);

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + unknowns[unknownNumber] + "+" + a + ")^2$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + unknowns[unknownNumber] + "^2" +  value2Coe(2*a) + unknowns[unknownNumber] + value2Constant(a*a) + "$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityExpandLv1Type3(n - 1, ques_no + 1);
  }
}

//Type 4 : x^2-2ax+a^2
function setIdentityExpandLv1Type4(n, ques_no){

  var unknowns = [
    "a", "b", "m", "p", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 9);
  var a = getRndInteger(1, 12);

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + unknowns[unknownNumber] + "-" + a + ")^2$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + unknowns[unknownNumber] + "^2" +  value2Coe(-2*a) + unknowns[unknownNumber] + value2Constant(a*a) + "$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityExpandLv1Type4(n - 1, ques_no + 1);
  }
}

//Type 5 : a^2x^2-2abx+b^2
function setIdentityExpandLv1Type5(n, ques_no){

  var unknowns = [
    "a", "b", "m", "p", "r", "s", "t", "x", "y", "z"
  ];
  var unknownNumber = getRndInteger(0, 9);
  var a = getRndInteger(1, 10);
  do{
    var b = getRndInteger(-10, 10);
  }while(b==0||gcd_two_numbers(a, b)!=1)

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + value2FirstCoe(a) + unknowns[unknownNumber] + value2Constant(b) + ")^2$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a*a) + unknowns[unknownNumber] + "^2" +  value2Coe(2*a*b) + unknowns[unknownNumber] + value2Constant(b*b) + "$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityExpandLv1Type5(n - 1, ques_no + 1);
  }
}
