function matHang(hinh, ten, gia, loai) {
    this.hinh = hinh;
    this.ten = ten;
    this.gia = gia;
    this.loai = loai;
    this.soLuong = 1;
    this.tongGia = this.gia * this.soLuong;
}
var tongTien = 0;
var gioHang = new Array();
// Thêm mặt hàng
function them(hinh, ten, gia, loai) {
    var test = true;
    var i;
    // Kiểm tra thử mặt hàng đã có trong giỏ hàng chưa
    for (i = 0; i < gioHang.length; i++) {
        if (loai == gioHang[i].loai) test = false;
    }
    // Thêm mặt hàng
    if (test == true) {
        gioHang.push(new matHang(hinh, ten, gia, loai));
    } else {
        tang(loai);
    }
    hienThi();
}
// Xóa mặt hàng
function xoa(loai) {
    for (i = 0; i < gioHang.length; i++) {
        if (loai == gioHang[i].loai) {
            gioHang.splice(i, 1);
        }
    }
    hienThi();
    if (gioHang.length == 0) {
        document.getElementById('gio').innerHTML = '<div id="khong"><p class="khong">Không có sản phẩm nào trong giỏ hàng 🛒</p></div>';
        document.getElementById('tongTien2').innerHTML = '';
        document.getElementById('tongTien3').innerHTML = '';
        document.getElementById('soTienGiam').innerHTML = '';
        document.getElementById('thanhToan').style.display = "none";
        document.getElementById('tongTien').innerHTML = '';
    }
}
// Tăng số lượng mặt hàng
function tang(loai) {
    for (i = 0; i < gioHang.length; i++) {
        if (loai == gioHang[i].loai) {
            gioHang[i].soLuong++;
            gioHang[i].tongGia = (gioHang[i].gia) * gioHang[i].soLuong;
            console.log(gioHang[i].soLuong);
        }
    }
    hienThi();
}
// Giảm số lượng mặt hàng
function giam(loai) {
    for (i = 0; i < gioHang.length; i++) {
        if (loai == gioHang[i].loai) {
            if (gioHang[i].soLuong > 1) {
                gioHang[i].soLuong--;
                gioHang[i].tongGia = parseInt(gioHang[i].gia) * gioHang[i].soLuong;
                console.log(gioHang[i].soLuong);
            }
        }
    }
    hienThi();
}
// Định dạng tiền tệ
function currencyFormat(num) {
    return num.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}
//Tải lại trang
function hienThi() {
    document.getElementById('gio').innerHTML = '';
    document.getElementById('tongTien').innerHTML = '';
    document.getElementById('thanhToan').style.display = "block";
    document.getElementById('tongTien').style.display = "block";
    var giaDaFormat;
    // Hiện các mặt hàng trong giỏ hàng
    for (i = 0; i < gioHang.length; i++) {
        giaDaFormat = currencyFormat(gioHang[i].gia); // Định dạng tiền tệ
        document.getElementById('gio').innerHTML
            += '<div id="hangHoa"> <div id="hinhAnhSP"> <img src="' + gioHang[i].hinh + '"></div>'
            + '<div id="inf">'
            + '<p class = "nameSP">' + gioHang[i].ten + '</p>'
            + '<p class = "price">' + giaDaFormat + '</p>'
            + '<div class="tangGiam">'
            + '<div id="giam" onclick="giam(\'' + gioHang[i].loai + '\')"><img src="images/icon-minus.png"></div>'
            + '<input type="text" id="soluong" value="' + gioHang[i].soLuong + '">'
            + '<div id="tang" onclick="tang(\'' + gioHang[i].loai + '\')"><img src="images/icon-plus.png"></div>'
            + '</div>'
            + '</div>'
            + '<div id="nutxoa"><img src="images/icon-rubbish.png" class="remove" onclick="xoa(\'' + gioHang[i].loai + '\')"></div>'
            + '</div>';
    }
    // Xuất tổng tiền
    for (i = 0; i < gioHang.length; i++) {
        tongTien += Number(gioHang[i].tongGia);
    }
    tongTien = currencyFormat(tongTien);
    document.getElementById('tongTien').innerHTML = 'Tổng tiền: ' + tongTien;
    document.getElementById('tongTien2').innerHTML = tongTien;
    document.getElementById('soTienGiam').innerHTML = '- 0 VND';
    document.getElementById('tongTien3').innerHTML = tongTien;
    tongTien = 0;
}
// Kiểm tra form
function xuLy($scope) {
    $scope.datHang = function () {
        var hoTen = document.getElementById('tenKH').value.trim();
        var SDT = document.getElementById('soDT').value.trim();
        var gioiTinh = document.getElementsByName('GT');
        var nhanHang = document.getElementsByName('NH');
        var gender = "";
        var nhan = "";
        var i, temp = 0, test = 0;
        if (hoTen == "") {
            alert("Vui lòng nhập họ và tên của bạn!");
            return;
        }
        if (isNaN(hoTen) == false) {
            alert("Họ và tên phải là tập hợp các chữ cái!");
            document.getElementById('tenKH').value = "";
            return;
        }
        if (hoTen != "" && isNaN(hoTen) == true) {
            test = 1;
        }
        if (SDT == "") {
            alert("Vui lòng nhập số điện thoại của bạn!");
            return;
        }
        if (SDT.length < 10 || SDT.length > 10 || isNaN(SDT) == true) {
            alert("Số điện thoại phải chứa 10 chữ số!");
            document.getElementById('soDT').value = "";
            return;
        }
        if (SDT.length == 10) {
            temp = 1;
        }
        for (i = 0; i < gioiTinh.length; i++) {
            if (gioiTinh[i].checked) {
                gender = gioiTinh[i].value;
                break;
            }
        }
        for (i = 0; i < nhanHang.length; i++) {
            if (nhanHang[i].checked) {
                nhan = nhanHang[i].value;
                break;
            }
        }
        if (test == 1 && temp == 1) {
            var kq = "                                    ĐẶT HÀNG THÀNH CÔNG!"
                + "\n\n                               + Họ và tên:  " + hoTen
                + "\n                               + Số điện thoại:  " + SDT
                + "\n                               + Giới tính:  " + gender
                + "\n                               + Nơi nhận hàng:  " + nhan
                + "\n_____________________________________________________________________________"
                + "\n\n Chúng tôi sẽ liện hệ với bạn để xác nhận đơn đặt hàng này!"
            alert(kq);
        }
    }
}
