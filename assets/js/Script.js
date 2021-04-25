
document.addEventListener('DOMContentLoaded',function(){
        if(typeof(Storage) !== "undefined")
        {
            localStorage.setItem("luuPass",JSON.stringify({"username":"tuanpk1@gmail.com" , "password":"123456"}));
        }
    var Mangs = [];
    var luuPass = [];
    dangnhapTaiKhoan();
    var data = [
        {
            "id" : 1,
            "hinhanh" : "https://www.hatgiongf1.com/Uploads/10-loai-rau-cu-qua-giau-dinh-duong-ma-ban-nen-an-thuong-xuyen-142768.jpg",
            "name" : "Cà rốt",
            "price" : 20000,
            "description" : "Cà rốt là một loại cây có củ, thường có màu vàng cam, đỏ, vàng, trắng hay tía. Phần ăn được của cà rốt là củ, thực chất là rễ cái của nó, chứa nhiều tiền tố của vitamin A tốt cho mắt"
        },
        {
            "id" : 2,
            "hinhanh" : "https://fruitstt.vn/wp-content/uploads/2019/08/San-pham-dua-hau-fruits-tt.jpg",
            "name" : "Dưa hấu",
            "price" : 50000,
            "description" : "Dưa hấu là một loài thực vật thuộc họ Cucurbitaceae, một loài thực vật có hoa giống như cây nho có nguồn gốc từ Tây Phi. Nó được trồng để lấy quả. Dưa hấu là một loài dây leo xoắn và dài trong họ thực vật có hoa Cucurbitaceae. Có bằng chứng từ hạt giống dưa hấu trong các ngôi mộ Pharaoh ở Ai Cập cổ đại."
        },
        {
            "id" : 3,
            "hinhanh" : "https://cdn.tgdd.vn/2021/01/content/ketcau-800x450.jpg",
            "name" : "Thịt ba chỉ",
            "price" : 40000,
            "description" : "Thịt mông là phần thịt nằm ở mông của con lợn gồm cả mỡ và nạc lẫn nhau. Thịt mông thường được chế biến thành các món luộc"
        },
        {
            "id" : 4,
            "hinhanh" : "https://product.hstatic.net/1000191320/product/thit-bo-bap2.jpg",
            "name" : "Thịt bò",
            "price" : 80000,
            "description" : "Thịt bò là thịt của con bò. Đây là thực phẩm gia súc phổ biến trên thế giới, cùng với thịt lợn, được chế biến và sử dụng theo nhiều cách, trong nhiều nền văn hoá và tôn giáo khác nhau"
        },
        {
            "id" : 5,
            "hinhanh" : "https://thuonghieuvietnoitieng.com/image/cache/admin/4406f536613f4c9a35b6e6b18ed69547c8a93ea0/Masan/tuong-ot-445x445.jpg",
            "name" : "Tương ớt",
            "price" : 14000,
            "description" : "Tương ớt chinsu ngon lành"
        }
    ]
    hienthisanpham();
    muahang();
    dangky();
    function hienthisanpham(){
        for(let i = 0 ; i<data.length ; i++)
        {
            var thongtinChiTiet = `
            
                    <div class="count-box">
                        <div class="card text-white bg-light">
                            <img class="card-img-top"
                            src=${data[i].hinhanh}
                            alt="" width="100px">
                            <div class="card-body">
                                <h4 class="card-title name text-dark">${data[i].name}</h4>
                                <h5 class="card-title gia text-dark">${data[i].price}</h5>$
                                <strong class="text-dark">
                                    <button type="button" name="" id="" class="btn btn-warning w-100 annut" btn-lg btn-block">THÊM GIỎ
                                    HÀNG</button>
                                </strong>
                            </div>
                        </div>
                    </div>
        
            `;
            let themoi = document.createElement('div');
            themoi.setAttribute('class','col-md-3 d-md-flex align-items-md-stretch');
            themoi.innerHTML = thongtinChiTiet;
            let layClassCuaDanhsach = document.getElementById('listProduction');
            layClassCuaDanhsach.appendChild(themoi);
        }
        layPhanTu();
    }
    function layPhanTu() {
        var tatca = document.getElementsByClassName('count-box');
            for(let i = 0 ; i<tatca.length ; i++)
            {
                tatca[i].onclick = function () {
                   let image = document.getElementsByClassName('card-img-top')[i].getAttribute('src');
                   let name = document.getElementsByClassName('name')[i].textContent;
                   let gia = document.getElementsByClassName('gia')[i].textContent;
                   Mangs.push({
                       hinhanh : image,
                       ten : name,
                       gia : gia
                   });
                   giohang(Mangs);
                }
            }
            
    }
    function giohang(kiemtra){

            var x = kiemtra;
            console.log(x);
            var tien = [];
        
           
            for(let i = 0 ; i < x.length ; i++)
            {
                tien.push(Number(x[i].gia));
                var giatri = `
                <div class="row">
                    <div class="col-md-4 mt-3" id="hinanhSanpham">
                        <img src=${x[i].hinhanh} width="50px" height="50px"/>
                    </div>
                    <div class="col-md-4  mt-3" id="tensanpham">
                    ${x[i].ten}
                    </div>
                    <div class="col-md-4  mt-3" id="giasanpham">
                    ${x[i].gia}
                    </div>
                </div>`;
            }
            let sotientong = tien.reduce((acc, cur) => {
                return acc + cur;
            }, 0)
            let tongtien = document.getElementById('tongtien');
            tongtien.innerHTML = `Tổng tiền : ${sotientong}`;
          
            console.log(sotientong);




            let themoi = document.createElement('div');
            themoi.innerHTML = giatri;
            let layClassCuaDanhsach = document.getElementById('giohang');
            layClassCuaDanhsach.appendChild(themoi);    
    }








    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        'use strict'
    
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')
    
        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
    
            form.classList.add('was-validated')
            }, false)
        })
    })()

        
  
    function muahang() {
        let hoten = document.getElementById('hoten');
        let phone = document.getElementById('phone');
        let giaohang = document.getElementById('giaohang');
        let ghichu = document.getElementById('ghichu');
        let muahangngay = document.getElementsByClassName('muahangngay');
        let thongbaoMuahang = document.getElementById('thongbaoMuahang');
        muahangngay[0].onclick = function() {
            if(hoten.value && phone.value && giaohang.value && ghichu.value)
            {
                thongbaoMuahang.innerText = 'mua thành công tự động quay lại sau 5 giây';
                setTimeout(function(){location.reload('http://127.0.0.1:5500/')},7000);
            }
        }
    }


    function dangky() {
        let Email = document.getElementById('Email');
        let password = document.getElementById('password');
        let Repassword = document.getElementById('Repassword');
        let username = document.getElementById('username');
        let AnDangKy = document.getElementById('AnDangKy');
        let canhBaoTrangThai = document.getElementById('canhBaoTrangThai');
        AnDangKy.onclick = function() {
 
            if(Email.value && password.value && Repassword.value && username.value)
            {
               if(password.value != Repassword.value)
               {
                    canhBaoTrangThai.innerText = 'Không trùng mật khẩu yêu cầu nhập lại';
               }
               else
               {
                    canhBaoTrangThai.innerText = 'Đăng ký thành công';
                    luuPass.push({
                        username : Email.value,
                        password : password.value,

                    })
                    duaDiLenLocalStore(luuPass);
               }
            }
        }
    }

    function duaDiLenLocalStore(mangs) {
        localStorage.setItem('luuPass',JSON.stringify(mangs));
    }
    //  console.log(JSON.parse(localStorage.getItem('luuPass')).username);
    function dangnhapTaiKhoan() {
        let EmailUserBane = document.getElementById('EmailUserBane');
        let passwordLogin = document.getElementById('passwordLogin');
        let button = document.getElementById('AnDangNhap');
        button.onclick = function() {
            var ketuqa = [];
            var data = JSON.parse(localStorage.getItem('luuPass'));
            for(let i = 0 ; i<data.length ; i++)
            {
                if(data[i].username == EmailUserBane.value && data[i].password == passwordLogin.value)
                {
                    ketuqa.push(data)
                }
            }
            if(ketuqa.length > 0)
            {
                 alert('Đăng nhập thành công');
            }
            else
            {
                alert('Đăng nhập không thành công');
            }
        }
    }


}, false)