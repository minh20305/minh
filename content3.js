window.addEventListener("load",function(){
    let input = document.querySelector("input[type=search]");
    let searchQuery = localStorage.getItem("searchQuery");

    if (searchQuery) {
        // Gán giá trị tìm kiếm vào ô tìm kiếm
        input.value = searchQuery;
        
        // Thực hiện tìm kiếm ngay lập tức
        showAns(searchQuery.trim().toLowerCase());
    }

    // Xử lý sự kiện nhập liệu để thực hiện tìm kiếm tiếp theo
    input.addEventListener('input', function() {
        let search = input.value.trim().toLowerCase();
        showAns(search);
    });

    function showAns(search) {
        let res = document.querySelector("#res");
        let magays = document.querySelectorAll('.maga-y');
        let kq=false;
        for (let magay of magays) {
            let conts = magay.querySelectorAll('.cont');
            let found = false;
            for (let cont of conts) {
                let h3s = cont.querySelectorAll('h3');
                for (let h3 of h3s) {
                    let h3Text = h3.textContent.trim().toLowerCase();
                    if (h3Text.includes(search)) {
                        found = true;
                        break; // Thoát vòng lặp nếu đã tìm thấy
                    }
                }
                if (found) break; // Thoát vòng lặp nếu đã tìm thấy
            }

            if (found) {
                magay.style.display = ""; // Hiển thị phần tử nếu tìm thấy
                kq=true;
            } else {
                magay.style.display = "none"; // Ẩn phần tử nếu không tìm thấy
                
            }
        }
        res.style.display=kq?"":"block";
    }

    
    
});
 