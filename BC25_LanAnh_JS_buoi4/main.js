/**
 * -input: tạo 3 biến a b c lấy dữ liệu từ người dùng
 * -xử lý: 
 * tạo 3 biến
 * lớn 1
 * lớn 2
 * lớn 3
 * -output: số lớn 1, số lớn 2, số nhỏ
 */
document.getElementById("get").onclick = function () {
    var a = document.getElementById("so1").value * 1;
    var b = document.getElementById("so2").value * 1;
    var c = document.getElementById("so3").value * 1;
    var lon1;
    var lon2;
    var lon3;
    if (a > b) {
        if (b > c) {
            lon1 = a;
            lon2 = b;
            lon3 = c;
        } else {
            if (a > c) {
                lon1 = a;
                lon2 = c;
                lon3 = b;
            } else {
                lon1 = c;
                lon2 = a;
                lon3 = b;
            }
        }

    } else if (a < b) {
        if (a > c) {
            lon1 = b;
            lon2 = a;
            lon3 = c;
        } else {
            if (c > b) {
                lon1 = c;
                lon2 = b;
                lon3 = a;
            } else {
                lon1 = b;
                lon2 = c;
                lon3 = a;
            }
        }

    }
    var ketqua = "Thứ tự sắp xếp là: " + lon1 + ">" + lon2 + ">" + lon3
    document.getElementById("kq1").innerHTML = ketqua;
}

//
document.getElementById("btn").onclick = function () {
    var pick = document.getElementById("pick").value;
    var thongbao;
    switch (pick) {
        case "M":
            thongbao = " Chào Mẹ";
            break;
        case "B":
            thongbao = " Chào Ba";
            break;
        case "A":
            thongbao = " Chào Anh Zai";
            break;
        case "E":
            thongbao = " Chào Em gái";
            break;
        default:
            thongbao = "Không bé ơi";
    }
    document.getElementById("tbao").innerHTML = thongbao;
}

// Bài 4
/**
 * input: nhập 3 cạnh của 1 tam giác a b c
 * xử lý: 
 * - nếu a = b = c => tam giác đều
 * - Nếu a = b || a = c || c = b {
 *      nếu a*a + b*b = c*c  || a*a + c*c = b*b || b*b + c*c  = a*a => tam giác vuông cân
 *      Còn lại => tam giác cân
 * }
 * - Nếu  nếu a*a + b*b = c*c  || a*a + c*c = b*b || b*b + c*c  = a*a => tam giác vuông
 * - còn lại tam giác bt
 * output: xuất ra kết quả 
 * 
 */
document.getElementById("xem").onclick = function(){
    var c1 = document.getElementById("canh1").value*1;
    var c2 = document.getElementById("canh2").value*1;
    var c3 = document.getElementById("canh3").value*1;
    var kq3;
    if (c1 == c2 && c2 == c3){
        kq3 = "đây là tam giác đều";
    } else if ( c1 == c2 || c2 == c3  || c1 == c3){
        if (c1*c1 + c2*c2 == c3*c3 || c2*c2 + c3*c3 == c1*c1 || c1*c1 + c3*c3 == c2*c2){
            kq3 = "Đây là tam giác vuông cân";
        } else {
            kq3 = "Đây là tam giác cân";
        }
    } else if(c1*c1 + c2*c2 == c3*c3 || c2*c2 + c3*c3 == c1*c1 || c1*c1 + c3*c3 == c2*c2){
        kq3 = "Đây là tam giác vuông";
    } else {
        kq3 = "Đây là tam giác thường";
    }
    document.getElementById("kq3").innerHTML = kq3;
}
