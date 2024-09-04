$(document).ready(function(){
    $(".tab-content > div:not(:first-child)").hide();
    $(".menu > li > a:not(:first)").click(function(){
        event.preventDefault();
        $(".menu > li").removeClass("active");
        $(this).parent().addClass("active");

        let h = $(this).attr("href");
        $(".tab-content > div").hide();
        $(h).show();
    });

    // xu li login/signup
    let user = $("#user");
    let username = localStorage.getItem("username");
    let modal = $("#login-modal");
    let loginModalBtn = $("#login-modal-btn");
    if (username) {
        // Nếu người dùng đã đăng nhập
        user.html(`
            <li style="color: aqua "><span>Hello, ${username}</span></li>
            <li><a href="#" class="logout-btn">Logout</a></li>
        `);
        //mở link
        $("main a").off("click");
        
        // Xử lý sự kiện đăng xuất
        $(".logout-btn").click(function () {
            localStorage.removeItem("username");
            window.location.reload(); // Tải lại trang để cập nhật trạng thái
        });

    } else {
        // Nếu người dùng chưa đăng nhập
        user.html(`
            <li><a href="/signin_up.htm?tab=login">Đăng nhập</a></li>
            <li><a href="/signin_up.htm?tab=signup">Đăng kí</a></li>
        `);
        loginModalBtn.click(function () {
            window.location.href = "/signin_up.htm?tab=login"; // Chuyển hướng đến trang đăng nhập
        });


        $("main a").click(function (event) {
            event.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
            modal.show(); // Hiển thị modal yêu cầu đăng nhập
        });
        // Đóng modal khi nhấp ra ngoài vùng modal
        $(window).click(function (event) {
            if ($(event.target).is(modal)) {
                modal.hide();
            }
        });
         
        

    }

   
    
    
});
window.addEventListener("load",function(){
   
        let goToTopButton = document.querySelector('.go-to-top');

        // Hiện/ẩn nút khi cuộn
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) { // Hiện nút khi cuộn xuống 300px
                goToTopButton.style.display = 'block';
            } else {
                goToTopButton.style.display = 'none';
            }
        });

        // Cuộn về đầu trang khi nhấn nút
        goToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
});
