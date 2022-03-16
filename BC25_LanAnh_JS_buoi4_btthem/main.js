/**
 * input: tên tọa độ 3 người
 * xử lý:
 * biến tọa độ là 
 * kinhdo
 * vido 
 * cho tọa độ của trường có kinh độ 1.000 vĩ độ: 1.00
 * (khoảng cách của từng sinh viên đến trường)^3 =(kinhdo - 1)^3 + (vido -1)^3
 * khoảng cách sinh viên xa nhất là số lớn nhất khi tính = (kinhdo - 1)^3 + (vido -1)^3
 * output: xuất ra sinh viên có chỉ số lớn nhât
 */


document.getElementById("read").onclick = function () {
    // sinh viên 1
    var ten1 = document.getElementById("ten1").value;
    var kinhdo1 = document.getElementById("kinhdo1").value*1;
    var vido1 = document.getElementById("vido1").value*1;

    // sinh viên 2
    var ten2 = document.getElementById("ten2").value;
    var kinhdo2 = document.getElementById("kinhdo2").value*1;
    var vido2 = document.getElementById("vido2").value*1;

    //sinh viên 3
    var ten3 = document.getElementById("ten3").value;
    var kinhdo3 = document.getElementById("kinhdo3").value*1;
    var vido3 = document.getElementById("vido3").value*1;
    
    // khoảng cách d của sinh viên  bình phương
    var d1 = (kinhdo1-1)*(kinhdo1-1) + (vido1-1)*(vido1-1);
    var d2 = (kinhdo2-1)*(kinhdo2-1) + (vido2-1)*(vido2-1);
    var d3 = (kinhdo3-1)*(kinhdo3-1) + (vido3-1)*(vido3-1);
    var kq1;
    if (d1 > d2 && d1 > d3){
        kq1 = ten1 ;
    } else if ( d2 > d1 && d2 > d3 ){
        kq1 =ten2 ;
    } else{
        kq1 = ten3;
    }
    document.getElementById("kq1").innerHTML =kq1;
}