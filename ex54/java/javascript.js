// ham lay 3 gtri a b c cho le do phai viet lai nhieu lan
function layGiaTri() {
    var a = parseFloat(document.getElementById('txtA').value);

    var b = parseFloat(document.getElementById('txtB').value);
    var c = parseFloat(document.getElementById('txtC').value);
    return {a: a, b: b, c: c};
}



// MAX but
function timMax() {
    var gt = layGiaTri();
//
    var max = Math.max(gt.a, gt.b, gt.c);
    document.getElementById('txtKq').value = max;
}


// MIN button
function timMin() {

    var gt = layGiaTri();
    var min = Math.min(gt.a, gt.b, gt.c);

    document.getElementById('txtKq').value = min;
}

// tinh sin cua a
function tinhSin() {
    var a = parseFloat(document.getElementById('txtA').value);
    document.getElementById('txtKq').value = Math.sin(a);
}

function tinhCos() {
    var a = parseFloat(document.getElementById('txtA').value);
    document.getElementById('txtKq').value = Math.cos(a);
}

// a luy thua b 

function tinhMu() {
    var a = parseFloat(document.getElementById('txtA').value);
    var b = parseFloat(document.getElementById('txtB').value);
    document.getElementById('txtKq').value = Math.pow(a, b);
}