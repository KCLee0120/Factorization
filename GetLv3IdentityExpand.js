//(ax^2+b)^2
function setIdentityExpandLv3Type1(n, ques_no){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  do{
    var a = getRndInteger(-5, 5);
  }while(a==0)
  do{
    var b = getRndInteger(-12, 12);
  }while(b==0)

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "^2" + value2Constant(b) + ")^2$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^4" + value2Coe(2*a*b) + unknowns[unknownNumber][0] + "^2" + value2Constant(b*b) + "$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityExpandLv3Type1(n - 1, ques_no + 1);
  }
}

//(x/a + b)^2
function setIdentityExpandLv3Type2(n, ques_no){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  do{
    var a = getRndInteger(-7, 7);
  }while(a==0||Math.abs(a)==1)
  do{
    var b = getRndInteger(-12, 12);
  }while(b==0)

  if(a>0)
    var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + "\\frac{ " + unknowns[unknownNumber][0] + "}{" + a + "}" + value2Constant(b) + ")^2$");
  else
    var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(-" + "\\frac{" + unknowns[unknownNumber][0] + "}{" + Math.abs(a) + "}" + value2Constant(b) + ")^2$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);
  var k = getRatio(2*b, a);

  if(Number.isInteger(2*b/a))
    var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + "\\frac{1}{" + a*a + "}" + unknowns[unknownNumber][0] + "^2" + value2Coe(2*b/a) + unknowns[unknownNumber][0] + value2Constant(b*b) + "$"  );
  else if(2*b/a>0)
    var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + "\\frac{1}{" + a*a + "}" + unknowns[unknownNumber][0] + "^2+" + "\\frac{" + k[0] + "}{" + k[1] + "}" + unknowns[unknownNumber][0] + value2Constant(b*b) + "$"  );
  else
    var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + "\\frac{1}{" + a*a + "}" + unknowns[unknownNumber][0] + "^2-" + "\\frac{" + k[0] + "}{" + k[1] + "}" + unknowns[unknownNumber][0] + value2Constant(b*b) + "$"  );


  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityExpandLv3Type2(n - 1, ques_no + 1);
  }

}

//(ax/b + c/d)^2
function setIdentityExpandLv3Type3(n, ques_no){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
    var a = getRndInteger(1, 8);
  do{
    var b = getRndInteger(2, 7);
  }while(gcd_two_numbers(a, b)!=1)
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0)
  do{
    var d = getRndInteger(2, 10);
  }while(gcd_two_numbers(c, d)!=1)

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + "\\frac{ " + value2FirstCoe(a) + unknowns[unknownNumber][0] + "}{" + b + "}" + getSign(c) + "\\frac{ " + Math.abs(c) + "}{" + d + "})^2$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);
  var k = getRatio(2*b, a);

    var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + "\\frac{ " + a*a + "}{" + b*b + "}" + unknowns[unknownNumber][0] + "^2" + getSign(2*a*c/b/d) + getFractionOrInteger(2*a*c, b*d) + unknowns[unknownNumber][0] + "+" +  "\\frac{" + c*c + "}{" + d*d + "}$" );


  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityExpandLv3Type3(n - 1, ques_no + 1);
  }

}

//e(ax/b + c/d)^2
function setIdentityExpandLv3Type4(n, ques_no){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
    var a = getRndInteger(1, 8);
  do{
    var b = getRndInteger(2, 7);
  }while(gcd_two_numbers(a, b)!=1)
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0)
  do{
    var d = getRndInteger(2, 10);
  }while(gcd_two_numbers(c, d)!=1)
  do{
    var e = getRndInteger(-5, 5)
  }while(e==0 || Math.abs(e)==1)

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(e) + "(" + "\\frac{ " + value2FirstCoe(a) + unknowns[unknownNumber][0] + "}{" + b + "}" + getSign(c) + "\\frac{ " + Math.abs(c) + unknowns[unknownNumber][1] +  "}{" + d + "})^2$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);
  var k = getRatio(2*b, a);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + getFirstSign(e) + getFractionOrInteger(a*a*e, b*b) + unknowns[unknownNumber][0] + "^2" + getSign(2*a*c*e/b/d) + getFractionOrInteger(2*a*c*e, b*d) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + getSign(e) + getFractionOrInteger(c*c*e, d*d) + unknowns[unknownNumber][1] + "^2$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityExpandLv3Type4(n - 1, ques_no + 1);
  }
}

//(e(ax/b + c/d))^2
function setIdentityExpandLv3Type5(n, ques_no){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
    var a = getRndInteger(1, 8);
  do{
    var b = getRndInteger(2, 7);
  }while(gcd_two_numbers(a, b)!=1)
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0)
  do{
    var d = getRndInteger(2, 10);
  }while(gcd_two_numbers(c, d)!=1)
  do{
    var e = getRndInteger(-5, 5)
  }while(e==0 || Math.abs(e)==1)

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$[" + value2FirstCoe(e) + "(" + "\\frac{ " + value2FirstCoe(a) + unknowns[unknownNumber][0] + "}{" + b + "}" + getSign(c) + "\\frac{ " + Math.abs(c) + unknowns[unknownNumber][1] +  "}{" + d + "})]^2$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);
  var k = getRatio(2*b, a);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" +  getFractionOrInteger(a*a*e*e, b*b) + unknowns[unknownNumber][0] + "^2" + getSign(2*a*c*e*e/b/d) + getFractionOrInteger(2*a*c*e*e, b*d) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "+" + getFractionOrInteger(c*c*e*e, d*d) + unknowns[unknownNumber][1] + "^2$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityExpandLv3Type5(n - 1, ques_no + 1);
  }
}

//a^2-(b^2x^2+2bcxy+c^2y^2)
function setIdentityExpandLv3Type6(n, ques_no){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(1, 12)
  var b = getRndInteger(1, 6)
  do{
    var c =  getRndInteger(-12, 12)
  }while(c==0||gcd_two_numbers(b, c)!=1)

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + a + value2Coe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + a + value2Coe(-b) + unknowns[unknownNumber][0] + value2Coe(-c) + unknowns[unknownNumber][1] + ")$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + a*a + value2FirstCoe(-b*b) + unknowns[unknownNumber][0] + "^2" + value2Coe(-2*c*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(-c*c) + unknowns[unknownNumber][1] + "^2$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityExpandLv3Type6(n - 1, ques_no + 1);
  }
}

function getRatio(num, den){
  var rat = new Array();
  var gcd = gcd_two_numbers(num, den);
  rat[0] = Math.abs(num/gcd);
  rat[1] = Math.abs(den/gcd);
  return rat;
}

function getSign(n){
  if(n>0)
    return "+";
  else if(n<0)
    return "-";
}

function getFirstSign(n){
  if(n>0)
    return "";
  else if(n<0)
    return "-";
}

function getFractionOrInteger(num, den){
  var r = getRatio(num, den);
  if(Number.isInteger(num/den)){
    return Math.abs(num/den);
  }
  else
    return "\\frac{ " + r[0] + "}{" + r[1] + "}";
}
