//hàm tính tông tiền khi gõ số lượng vào 

function tinhTienDong(row, gia) {
    // lay may cai o input theo so dong truyen vao
    var sLuong = document.getElementById('qty' + row).value;
    var tTien = document.getElementById('item' + row);
    
    // go r xoa het thi o ke ben cung thoi khoi hien gi
    if (sLuong == "") {
        tTien.value = "";
        return; 
    }

    
    // ktra xem nhap bay ba ko
    if (isNaN(sLuong) || sLuong < 0) {
        alert("Bạn vui lòng nhập số lượng!");
        document.getElementById('qty' + row).value = ""; 
        tTien.value = "";
        return;
    }

    // nhap dung thi tinh tien binh thuong
    var tinh = parseFloat(sLuong) * gia;
    tTien.value = tinh.toFixed(2); // lam tron lay 2 so thap phan
}


// bam nut Sum thi cong het lai
function tinhTongCuc() {
    var dong1 = document.getElementById('item1').value;
    var dong2 = document.getElementById('item2').value;
    var dong3 = document.getElementById('item3').value;

    // de phong may o chua nhap gi thi cho no bang 0 luon
    if (dong1 == "") dong1 = 0;
    if (dong2 == "") dong2 = 0;
    if (dong3 == "") dong3 = 0;


// tổng lại hết 
    var tong = parseFloat(dong1) + parseFloat(dong2) + parseFloat(dong3);
    document.getElementById('txtTotal').value = tong.toFixed(2);
}