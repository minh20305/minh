$(document).ready(function () {
    // Ẩn tất cả các form khi bắt đầu
    $(".tab-content form").hide();

    // Hàm để hiển thị tab dựa trên ID
    function showTab(tabId) {
        $("ul.tab a").removeClass("active");
        $(`a[href='${tabId}']`).addClass("active");
        $(".tab-content form").hide();
        $(tabId).show();
    }

    // Kiểm tra tham số URL
    var urlParams = new URLSearchParams(window.location.search);
    var tab = urlParams.get('tab');

    if (tab === 'login') {
        showTab("#tab1");
    } else if (tab === 'signup') {
        showTab("#tab2");
    } else {
        // Mặc định hiển thị tab đầu tiên nếu không có tham số hợp lệ
        showTab("#tab1");
    }

    // Xử lý sự kiện khi nhấp vào tab
    $("ul.tab a").click(function (event) {
        event.preventDefault();
        var tabId = $(this).attr("href");
        showTab(tabId);
        window.location.hash = tabId;
    });

    // Chuyển đổi hiển thị mật khẩu
    let passwordFields = document.querySelectorAll('.tab-content input[type="password"]');
    let passwordBtns = document.querySelectorAll(".show-password-btn");

    for (let i = 0; i < passwordBtns.length; i++) {
        let btn = passwordBtns[i];
        let passwordField = passwordFields[i];

        btn.addEventListener("click", function () {
            if (passwordField.type === "password") {
                passwordField.type = "text";
                btn.querySelector("i").classList.remove("fa-eye");
                btn.querySelector("i").classList.add("fa-eye-slash");
            } else {
                passwordField.type = "password";
                btn.querySelector("i").classList.remove("fa-eye-slash");
                btn.querySelector("i").classList.add("fa-eye");
            }
        });
        
        // // Chức năng đăng ký
       
        $("#signup-button").click(function () {
            let username = $("#username2").val();
            let password = $("#password2").val();
            let repassword = $("input[placeholder='Confirm password']").val();
            let errorMessage = $("#error-message2");
            let users = JSON.parse(localStorage.getItem("user")) || [];

            if (!username || !password || !repassword) {
                errorMessage.text("Cần điền đầy đủ thông tin").show();
            } else if (password === repassword) {
                // Kiểm tra username đã tồn tại
                let userExists = users.some(user => user.user === username);
                if (userExists) {
                    errorMessage.text("Tên đăng nhập đã tồn tại!").show();
                    return;
                }

                let user = { user: username, pass: password };
                users.push(user);
                // Lưu dữ liệu vào localStorage
                localStorage.setItem("user", JSON.stringify(users));
                window.location.href = "tapchi.htm"; // Điều hướng sau khi đăng ký thành công
            } else {
                errorMessage.text("Mật khẩu và xác nhận mật khẩu không khớp. Vui lòng nhập lại.").show();
            }
        });

        // Chức năng đăng nhập
        $("#login-button").click(function () {
            let username = $("#username").val();
            let password = $("#password1").val();
            let errorMessage = $("#error-message");
            let users = JSON.parse(localStorage.getItem("user")) || [];
            
            // Tìm kiếm người dùng khớp với username và password
            let findUser = users.find(user => user.user === username && user.pass === password);

            if (!username || !password) {
                errorMessage.text("Cần điền đầy đủ thông tin").show();
            } else if (findUser) {
                localStorage.setItem("username", findUser.user); // Lưu tên người dùng vào localStorage
                window.location.href = "tapchi.htm"; // Điều hướng sau khi đăng nhập thành công
            } else {
                errorMessage.text("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.").show();
            }
        });

        // Chức năng thoát
        $(".close-button").click(function () {
            window.location.href = "tapchi.htm";
        });
    }
});