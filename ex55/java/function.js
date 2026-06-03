function giaiPhuongTrinh() {
    // lay may cai input vao day
    var a = parseFloat(document.getElementById('HesoA').value);
    var b = parseFloat(document.getElementById('HesoB').value);
    var c = parseFloat(document.getElementById('HeSoC').value);
    var kq = document.getElementById('txtResult');

    // xet TH a = 0 truoc (pt bac 1)
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                kq.value = "Vo so nghiem";
            } else {
                kq.value = "Vo nghiem";
            }
        } else {
            kq.value = "x=" + (-c / b);
        }
    } 
    // a khac 0 thi xet pt bac 2
    else {
        var delta = (b * b) - (4 * a * c); // tinh delta ne
        
        if (delta < 0) {
            kq.value = "PT vo nghiem";
        } else if (delta == 0) {
            var x = -b / (2 * a);
            kq.value = "x1=x2=" + x;
        } else {
            // dung hàm ,math.sqrt 
            var x1 = (-b - Math.sqrt(delta)) / (2 * a);
            var x2 = (-b + Math.sqrt(delta)) / (2 * a);

            // noi chuoi cho giong kq mau (x1=-4 ; x2=1)
            kq.value = "x1=" + x1 + " ; x2=" + x2;
        }
    }
}

// nut clear bam vo xoa hết 


function xoaTrang() {
    document.getElementById('HesoA').value = "";

    document.getElementById('HesoB').value = "";

    document.getElementById('HeSoC').value = "";

    document.getElementById('txtResult').value = "";
}