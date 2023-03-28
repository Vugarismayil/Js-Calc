function toplama() {
    var x = Number(document.getElementById('x').value)
    var y = Number(document.getElementById('y').value)
    var cem = x+y;
    console.log(cem);
    
}

function cixma() {
    var deyer1 = Number(document.getElementById('x').value)
    var deyer2 = Number(document.getElementById('y').value)
    var cavab = deyer1-deyer2
    console.log(cavab);
}

function bolme() {
    var reqem1 = Number(document.getElementById('x').value)
    var reqem2 = Number(document.getElementById('y').value)
    var reqem = reqem1/reqem2
    console.log(reqem);
}

function vurma() {
    var qiymet1 = Number(document.getElementById('x').value)
    var qiymet2 = Number(document.getElementById('y').value)
   var qiymet = qiymet1*qiymet2
    console.log(qiymet);
}
