//abx^py^q+acx^py^(q+2)+adx^(p+1)y^q
function setLv3Type1(n, ques_no){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  do{
    var a = getRndInteger(-12, 12);
  }while(a==0||Math.abs(a)==1)
  var b = getRndInteger(1, 5);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0||gcd_two_numbers(b, c)!=1)
  do{
    var d = getRndInteger(-12, 12);
  }while(d==0||gcd_two_numbers(b, d)!=1||gcd_two_numbers(c, d)!=1)
  var p = getRndInteger(2, 4);
  var q = getRndInteger(2, 4);

  var amount_A = getRndInteger(0, 3);
  var amount_B = getRndInteger(1, 3);
  var amount_C = getRndInteger(1, 3);
  var amount_D = getRndInteger(0, 3);

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a*b) + unknowns[unknownNumber][0] + "^" + p + unknowns[unknownNumber][1] + "^" + q + value2Coe(a*c) + unknowns[unknownNumber][0] + "^" + (p+amount_A) + unknowns[unknownNumber][1] + "^" + (q+amount_B) + value2Coe(a*d) + unknowns[unknownNumber][0] + "^" + (p+amount_C) + unknowns[unknownNumber][1] + "^" + (q+amount_D) + "$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "^" + p + unknowns[unknownNumber][1] + "^" + q + "(" + b + value2Coe(c) + value2Power(unknowns[unknownNumber][0], amount_A) + value2Power(unknowns[unknownNumber][1], amount_B) + value2Coe(d) + value2Power(unknowns[unknownNumber][0], amount_C) + value2Power(unknowns[unknownNumber][1], amount_D) + ")$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);
  if(n!=1){
    setLv3Type1(n - 1, ques_no + 1);
  }



}

//ax(bx+cy)+dy(bx+cy)
function setLv3Type2(n, ques_no){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(1, 8);
  var b = getRndInteger(1, 5);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0||gcd_two_numbers(b, c)!=1)
  do{
    var d = getRndInteger(-12, 12);
  }while(d==0||gcd_two_numbers(a, d)!=1)

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")" + value2Coe(d) + unknowns[unknownNumber][1] + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(d) + unknowns[unknownNumber][1] + ")$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);
  if(n!=1){
    setLv3Type2(n - 1, ques_no + 1);
  }
}

//a(bx+cy)^2+d(bx+cy)
function setLv3Type3(n, ques_no){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(1, 8);
  var b = getRndInteger(1, 5);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0||gcd_two_numbers(b, c)!=1)
  do{
    var d = getRndInteger(-12, 12);
  }while(d==0||gcd_two_numbers(a, d)!=1)

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a) + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")^2" + value2Coe(d) + "(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + value2FirstCoe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a*b) + unknowns[unknownNumber][0] + value2Coe(a*c) + unknowns[unknownNumber][1] + value2Constant(d) + ")$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);
  if(n!=1){
    setLv3Type3(n - 1, ques_no + 1);
  }
}

//abx+acxy+bd+cdy
function setLv3Type4(n, ques_no){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(1, 8);
  var b = getRndInteger(1, 5);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0||gcd_two_numbers(b, c)!=1)
  do{
    var d = getRndInteger(-12, 12);
  }while(d==0||gcd_two_numbers(a, d)!=1)

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a*b) + unknowns[unknownNumber][0] + value2Coe(a*c) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Constant(b*d) + value2Coe(c*d) + unknowns[unknownNumber][1] + "$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + b + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Constant(d) + ")$"  );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);
  if(n!=1){
    setLv3Type4(n - 1, ques_no + 1);
  }

}

//abxy+acxz+dby+dcz
function setLv3Type5(n, ques_no){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var a = getRndInteger(1, 8);
  var b = getRndInteger(1, 5);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0||gcd_two_numbers(b, c)!=1)
  do{
    var d = getRndInteger(-12, 12);
  }while(d==0||gcd_two_numbers(a, d)!=1)

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(a*c) + unknowns[unknownNumber][0] + unknowns[unknownNumber][2] + value2Coe(b*d) + unknowns[unknownNumber][1] + value2Coe(c*d) + unknowns[unknownNumber][2] + "$"  );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + value2FirstCoe(b) + unknowns[unknownNumber][1] + value2Coe(c) + unknowns[unknownNumber][2] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Constant(d) + ")$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);
  if(n!=1){
    setLv3Type5(n - 1, ques_no + 1);
  }
}

function value2Power(un, n){
  if(n>1)
    return un + "^" + n;
  else if (n==1)
    return un;
  else
    return "";
}
