// Type1 : x^2-b^2y^2
function setIdentityLv2Type1(n, ques_no){

  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = 1;
  do{
    var b = getRndInteger(1, 12);
  }while(gcd_two_numbers(a, b)!=1);

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(-b*b) + unknowns[unknownNumber][1] + "^2$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Constant(-b) + unknowns[unknownNumber][1] + ")$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityLv2Type1(n - 1, ques_no + 1);
  }
}

//Type2 : a^2x^2-b^2y^2
function setIdentityLv2Type2(n, ques_no){

  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(1, 6);
  do{
    var b = getRndInteger(1, 12);
  }while(gcd_two_numbers(a, b)!=1);

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(-b*b) + unknowns[unknownNumber][1] + "^2$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(-b) + unknowns[unknownNumber][1] + ")$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityLv2Type2(n - 1, ques_no + 1);
  }
}

//Type 3 : x^2+2axy+a^2y^2
function setIdentityLv2Type3(n, ques_no){

  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(1, 12);

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + unknowns[unknownNumber][0] + "^2" +  value2Coe(2*a) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(a*a) + unknowns[unknownNumber][1] + "^2$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + unknowns[unknownNumber][0] + value2Coe(a) + unknowns[unknownNumber][1] + ")^2$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityLv2Type3(n - 1, ques_no + 1);
  }
}

//Type 4 : x^2-2axy+a^2y^2
function setIdentityLv2Type4(n, ques_no){

  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(1, 12);

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + unknowns[unknownNumber][0] + "^2" +  value2Coe(-2*a) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(a*a) + unknowns[unknownNumber][1] + "^2$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + unknowns[unknownNumber][0] + value2Coe(-a) + unknowns[unknownNumber][1] + ")^2$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityLv2Type4(n - 1, ques_no + 1);
  }
}

//Type 5 : a^2x^2-2abxy+b^2y^2
function setIdentityLv2Type5(n, ques_no){

  var unknowns = [
    ["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]
  ];
  var unknownNumber = getRndInteger(0, 3);
  var a = getRndInteger(1, 10);
  do{
    var b = getRndInteger(-10, 10);
  }while(b==0||gcd_two_numbers(a, b)!=1)

  var question = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" +  value2Coe(2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(b*b) + unknowns[unknownNumber][1] + "^2$");
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(question);
  document.getElementById("questions").appendChild(x);

  var answer = document.createTextNode(ques_no + ". " + "\xa0\xa0\xa0" + "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")^2$" );
  var x = document.createElement("div");
  x.setAttribute("style", "margin-top:30px");
  x.appendChild(answer);
  document.getElementById("answers").appendChild(x);

  if(n!=1){
    setIdentityLv2Type4(n - 1, ques_no + 1);
  }
}
