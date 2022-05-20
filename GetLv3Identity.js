//-a^2x^2+b^2y^2
function setIdentityLv3Type1(n, ques_no){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(1, 12)
  do{
    var b = getRndInteger(1, 12)
  }while(gcd_two_numbers(a, b)!=1)

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(-a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(b*b) + unknowns[unknownNumber][1] + "^2$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + value2FirstCoe(b) + unknowns[unknownNumber][1] + value2Coe(a) + unknowns[unknownNumber][0] + ")(" + value2FirstCoe(b) + unknowns[unknownNumber][1] + value2Coe(-a) + unknowns[unknownNumber][0] + ")$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityLv3Type1(n - 1, ques_no + 1);
  }
}

//-a^2x^2-2abxy-b^2y^2
function setIdentityLv3Type2(n, ques_no){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(1, 12)
  do{
    var b = getRndInteger(-12, 12)
  }while(b==0||gcd_two_numbers(a, b)!=1)

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(-a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(-2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(-b*b) + unknowns[unknownNumber][1] + "^2$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$-(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")^2$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityLv3Type2(n - 1, ques_no + 1);
  }
}

//-2abxy-b^2y^2-a^2x^2
function setIdentityLv3Type3(n, ques_no){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(1, 12)
  do{
    var b = getRndInteger(-12, 12)
  }while(b==0||gcd_two_numbers(a, b)!=1)

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(-2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(-b*b) + unknowns[unknownNumber][1] + "^2" + value2Coe(-a*a) + unknowns[unknownNumber][0] + "^2$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$-(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")^2$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityLv3Type3(n - 1, ques_no + 1);
  }
}

//(ax+by)^2-(cx+dy)^2
function setIdentityLv3Type4(n, ques_no){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(1, 6)
  do{
    var b = getRndInteger(-6, 6)
  }while(b==0||gcd_two_numbers(a, b)!=1)
  do{
    var c = getRndInteger(1, 6)
  }while(c==a||Math.abs(a)==Math.abs(c))
  do{
    var d = getRndInteger(-6, 6)
  }while(d==0||gcd_two_numbers(c, d)!=1||Math.abs(d)==Math.abs(b))

  var firstGCD = gcd_two_numbers(a+c, b+d);
  var secondGCD = gcd_two_numbers(a-c, b-d);

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")^2-(" + value2FirstCoe(c) + unknowns[unknownNumber][0] + value2Coe(d) + unknowns[unknownNumber][1] + ")^2$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  if(firstGCD==1 && secondGCD==1 && (a-c>0||b-d>0))
    var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + value2FirstCoe(a+c) + unknowns[unknownNumber][0] + value2Coe(b+d) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a-c) + unknowns[unknownNumber][0] + value2Coe(b-d) + unknowns[unknownNumber][1] + ")$" );
  else if (firstGCD==1 && secondGCD==1)
    var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$-(" + value2FirstCoe(a+c) + unknowns[unknownNumber][0] + value2Coe(b+d) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(-a+c) + unknowns[unknownNumber][0] + value2Coe(-b+d) + unknowns[unknownNumber][1] + ")$" );
  else if ((firstGCD!=1 || secondGCD!=1) && (a-c>0||b-d>0))
    var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + firstGCD*secondGCD + "(" + value2FirstCoe((a+c)/firstGCD) + unknowns[unknownNumber][0] + value2Coe((b+d)/firstGCD) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe((a-c)/secondGCD) + unknowns[unknownNumber][0] + value2Coe((b-d)/secondGCD) + unknowns[unknownNumber][1] + ")$" );
  else
  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + firstGCD*secondGCD*-1 + "(" + value2FirstCoe((a+c)/firstGCD) + unknowns[unknownNumber][0] + value2Coe((b+d)/firstGCD) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe((-a+c)/secondGCD) + unknowns[unknownNumber][0] + value2Coe((-b+d)/secondGCD) + unknowns[unknownNumber][1] + ")$" );

  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityLv3Type3(n - 1, ques_no + 1);
  }
}

//a^2-(b^2x^2+2bcxy+c^2y^2)
function setIdentityLv3Type5(n, ques_no){
  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(1, 12)
  var b = getRndInteger(1, 6)
  do{
    var c =  getRndInteger(-12, 12)
  }while(c==0||gcd_two_numbers(b, c)!=1)

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + a*a + value2FirstCoe(-b*b) + unknowns[unknownNumber][0] + "^2" + value2Coe(-2*c*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(-c*c) + unknowns[unknownNumber][1] + "^2$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + a + value2Coe(b) + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")(" + a + value2Coe(-b) + unknowns[unknownNumber][0] + value2Coe(-c) + unknowns[unknownNumber][1] + ")$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityLv3Type5(n - 1, ques_no + 1);
  }
}
