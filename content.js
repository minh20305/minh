window.addEventListener("load",function(){
    //nút nhấn trái phải
    let numberOfdiv=document.querySelectorAll(".magas");
    let contain = document.querySelector(".contain-magas");
    let idx=0;
    let rightbtn=document.querySelector(".fa-chevron-right");
    let leftbtn=document.querySelector(".fa-chevron-left");
    if (contain && rightbtn && leftbtn) {
        rightbtn.addEventListener("click",function(){
            idx++;
            if(idx>numberOfdiv.length-1){
                idx=0;
            }
            contain.style.right=idx*100+"%";
        });
        
        leftbtn.addEventListener("click",function(){
            idx--;
            if(idx<0){
                idx=numberOfdiv.length-1;
            }
                
            contain.style.right=idx*100+"%";
        });
    }
    //nút bấm tìm kiếm
    let btn = document.querySelector(".icon"); 
    let input = document.querySelector("input[type=search]");

    btn.addEventListener("click", function() {
       
        let search = input.value.trim().toLowerCase();
        if (search !== '') {
            // lưu giá trị
            localStorage.setItem("searchQuery", search);
            // chuyển sang search
            window.location.href = "search.htm";
        }
    });
    //nút ẩn hiện menu bar
    let bar=document.querySelector(".menu>li>a:first-child");
    let menubar=document.getElementById("bar");
    let x=document.querySelector(".btn-x");
    bar.addEventListener("click",function(){
        menubar.style.display = "block";
        document.body.style.overflow = 'hidden';
    });
    
    x.addEventListener("click",function(){
        menubar.style.display="none";
        document.body.style.overflow = "";
    })

    //chuyển tất cả liên kết về reading.htm
    let main = document.querySelector("main");
    let links = main.querySelectorAll("a");
    for(let link of links){
        if (link.getAttribute("href") === "#") {
            link.setAttribute("href", "reading.htm");
        }
    }
    

});
   