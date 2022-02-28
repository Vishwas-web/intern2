document.getElementById("form1").onsubmit=function() {
    variable = parseInt(document.querySelector('input[name = "variable"]:checked').value);
    sub = parseInt(document.querySelector('input[name = "sub"]:checked').value);
    con = parseInt(document.querySelector('input[name = "con"]:checked').value);
    ifstate = parseInt(document.querySelector('input[name = "ifstate"]:checked').value);
    whstate = parseInt(document.querySelector('input[name = "whstate"]:checked').value);
    lhstate = parseInt(document.querySelector('input[name = "lhstate"]:checked').value);
    vhstate = parseInt(document.querySelector('input[name = "vhstate"]:checked').value);
    ahstate = parseInt(document.querySelector('input[name = "ahstate"]:checked').value);
    nhstate = parseInt(document.querySelector('input[name = "nhstate"]:checked').value);
    thstate = parseInt(document.querySelector('input[name = "thstate"]:checked').value);


    result = variable + sub + con + ifstate + whstate + lhstate + vhstate + ahstate + nhstate + thstate;

 document.getElementById("grade").innerHTML = result;
 return false;
} 



