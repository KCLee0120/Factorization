function showQuestion(){
  document.getElementById("questions").innerHTML = "";
  document.getElementById("answers").innerHTML = "";
  var num = document.getElementById("levelSelect").value;
  if(num==1)
    showLevel1CommonFactorQuestion();
    else if (num==2)
      showLevel2CommonFactorQuestion();
      else if (num==3)
        showLevel3CommonFactorQuestion();
        else if (num==4)
          showLevel1IdentityQuestion();
          else if (num==5)
            showLevel2IdentityQuestion();
            else if (num==6)
              showLevel3IdentityQuestion();
              else if (num==7)
                showLevel1CrossProductQuestion();
                else if (num==8)
                  showLevel2CrossProductQuestion();
                  else if (num==9)
                    showLevel3CrossProductQuestion();
                    else if (num==10)
                      showLevel1IdentityExpandQuestion();
                        else if (num==11)
                        showLevel2IdentityExpandQuestion();
                          else if (num==12)
                            showLevel3IdentityExpandQuestion();

}

function showAnswers(){
  document.getElementById("answers").style.color = "black";
}

function showLevel1CommonFactorQuestion(){
  setLv1Type1(1, 1);
  setLv1Type2(1, 2);
  setLv1Type3(1, 3);
  setLv1Type3(1, 4);
  setLv1Type5(1, 5);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("questions")]);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("answers")]);
  document.getElementById("answers").style.color = "white";
}

function showLevel2CommonFactorQuestion(){
  setLv2Type1(1, 1);
  setLv2Type2(1, 2);
  setLv2Type3(1, 3);
  setLv2Type3(1, 4);
  setLv2Type5(1, 5);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("questions")]);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("answers")]);
  document.getElementById("answers").style.color = "white";
}

function showLevel3CommonFactorQuestion(){
  setLv3Type1(1, 1);
  setLv3Type2(1, 2);
  setLv3Type3(1, 3);
  setLv3Type4(1, 4);
  setLv3Type5(1, 5);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("questions")]);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("answers")]);
  document.getElementById("answers").style.color = "white";
}

function showLevel1IdentityQuestion(){
  setIdentityLv1Type1(1, 1);
  setIdentityLv1Type2(1, 2);
  setIdentityLv1Type3(1, 3);
  setIdentityLv1Type4(1, 4);
  setIdentityLv1Type5(1, 5);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("questions")]);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("answers")]);
  document.getElementById("answers").style.color = "white";
}

function showLevel2IdentityQuestion(){
  setIdentityLv2Type1(1, 1);
  setIdentityLv2Type2(1, 2);
  setIdentityLv2Type3(1, 3);
  setIdentityLv2Type4(1, 4);
  setIdentityLv2Type5(1, 5);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("questions")]);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("answers")]);
  document.getElementById("answers").style.color = "white";
}

function showLevel3IdentityQuestion(){
  setIdentityLv3Type1(1, 1);
  setIdentityLv3Type2(1, 2);
  setIdentityLv3Type3(1, 3);
  setIdentityLv3Type4(1, 4);
  setIdentityLv3Type5(1, 5);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("questions")]);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("answers")]);
  document.getElementById("answers").style.color = "white";
}

function showLevel1CrossProductQuestion(){
  setCrossProductLv1Type1(1, 1);
  setCrossProductLv1Type1(1, 2);
  setCrossProductLv1Type1(1, 3);
  setCrossProductLv1Type1(1, 4);
  setCrossProductLv1Type1(1, 5);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("questions")]);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("answers")]);
  document.getElementById("answers").style.color = "white";
}

function showLevel2CrossProductQuestion(){
  setCrossProductLv2Type1(1, 1);
  setCrossProductLv2Type1(1, 2);
  setCrossProductLv2Type1(1, 3);
  setCrossProductLv2Type1(1, 4);
  setCrossProductLv2Type1(1, 5);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("questions")]);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("answers")]);
  document.getElementById("answers").style.color = "white";
}

function showLevel3CrossProductQuestion(){
  setCrossProductLv3Type1(1, 1);
  setCrossProductLv3Type1(1, 2);
  setCrossProductLv3Type1(1, 3);
  setCrossProductLv3Type1(1, 4);
  setCrossProductLv3Type1(1, 5);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("questions")]);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("answers")]);
  document.getElementById("answers").style.color = "white";
}

function showLevel1IdentityExpandQuestion(){
  setIdentityExpandLv1Type1(1, 1);
  setIdentityExpandLv1Type2(1, 2);
  setIdentityExpandLv1Type3(1, 3);
  setIdentityExpandLv1Type4(1, 4);
  setIdentityExpandLv1Type5(1, 5);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("questions")]);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("answers")]);
  document.getElementById("answers").style.color = "white";
}

function showLevel2IdentityExpandQuestion(){
  setIdentityExpandLv2Type1(1, 1);
  setIdentityExpandLv2Type2(1, 2);
  setIdentityExpandLv2Type3(1, 3);
  setIdentityExpandLv2Type4(1, 4);
  setIdentityExpandLv2Type5(1, 5);
  setIdentityExpandLv2Type6(1, 6);
  setIdentityExpandLv2Type7(1, 7);
  setIdentityExpandLv2Type8(1, 8);
  setIdentityExpandLv2Type9(1, 9);

  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("questions")]);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("answers")]);
  document.getElementById("answers").style.color = "white";
}

function showLevel3IdentityExpandQuestion(){
  setIdentityExpandLv3Type1(1, 1);
  setIdentityExpandLv3Type2(1, 2);
  setIdentityExpandLv3Type3(1, 3);
  setIdentityExpandLv3Type4(1, 4);
  setIdentityExpandLv3Type5(1, 5);
  setIdentityExpandLv3Type6(1, 6);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("questions")]);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("answers")]);
  document.getElementById("answers").style.color = "white";
}
